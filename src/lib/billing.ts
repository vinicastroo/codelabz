import { prisma } from '@/lib/prisma'
import { createAsaasCharge, createAsaasCustomer } from '@/lib/asaas'
import { sendChargeLinkEmail } from '@/lib/email'

function dueDateForMonth(billingDay: number, reference = new Date()) {
  const year = reference.getFullYear()
  const month = reference.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const day = Math.min(billingDay, daysInMonth)
  return new Date(year, month, day)
}

/**
 * Cria a cobrança do mês corrente para cada assinatura ativa que ainda não tem uma.
 * Idempotente: a constraint única (subscriptionId, dueDate) evita duplicar.
 */
export async function generateMonthlyCharges(reference = new Date()) {
  const activeSubscriptions = await prisma.subscription.findMany({
    where: { status: 'ACTIVE' },
  })

  let created = 0

  for (const subscription of activeSubscriptions) {
    const dueDate = dueDateForMonth(subscription.billingDay, reference)

    if (dueDate < subscription.startDate) continue

    const existing = await prisma.charge.findUnique({
      where: {
        subscriptionId_dueDate: {
          subscriptionId: subscription.id,
          dueDate,
        },
      },
    })

    if (existing) continue

    const charge = await prisma.charge.create({
      data: {
        subscriptionId: subscription.id,
        dueDate,
        amountCents: subscription.amountCents,
        status: 'PENDING',
      },
    })
    created++

    await syncChargeToAsaas(charge.id).catch((err) => {
      console.error(`Falha ao sincronizar cobrança ${charge.id} com o Asaas:`, err)
    })
  }

  return created
}

/**
 * Garante que o BillingClient tem um cliente correspondente no Asaas,
 * criando-o na primeira sincronização.
 */
export async function ensureAsaasCustomerId(clientId: string) {
  const client = await prisma.billingClient.findUniqueOrThrow({ where: { id: clientId } })

  if (client.asaasCustomerId) return client.asaasCustomerId

  const customer = await createAsaasCustomer({
    name: client.name,
    email: client.email,
    phone: client.phone,
    document: client.document,
    externalReference: client.id,
  })

  await prisma.billingClient.update({
    where: { id: client.id },
    data: { asaasCustomerId: customer.id },
  })

  return customer.id
}

/**
 * Cria a cobrança correspondente no Asaas (Pix/boleto/cartão) e salva o
 * link de pagamento. Idempotente: não faz nada se a cobrança já tiver
 * sido enviada ao Asaas antes.
 */
export async function syncChargeToAsaas(chargeId: string) {
  const charge = await prisma.charge.findUniqueOrThrow({
    where: { id: chargeId },
    include: { subscription: { include: { client: true } } },
  })

  if (charge.asaasChargeId) return charge

  const customerId = await ensureAsaasCustomerId(charge.subscription.clientId)

  const asaasCharge = await createAsaasCharge({
    customerId,
    amountCents: charge.amountCents,
    dueDate: charge.dueDate,
    description: charge.subscription.description,
    externalReference: charge.id,
  })

  const updated = await prisma.charge.update({
    where: { id: charge.id },
    data: {
      asaasChargeId: asaasCharge.id,
      paymentLink: asaasCharge.invoiceUrl,
    },
  })

  const clientEmail = charge.subscription.client.email
  if (clientEmail) {
    await sendChargeLinkEmail({
      to: clientEmail,
      clientName: charge.subscription.client.name,
      description: charge.subscription.description,
      amountCents: charge.amountCents,
      dueDate: charge.dueDate,
      paymentLink: asaasCharge.invoiceUrl,
    }).catch((err) => {
      console.error(`Falha ao enviar e-mail de cobrança para ${clientEmail}:`, err)
    })
  }

  return updated
}

export function isOverdue(charge: { status: string; dueDate: Date }) {
  return charge.status === 'PENDING' && charge.dueDate < startOfToday()
}

export function startOfToday() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}
