import { prisma } from '@/lib/prisma'

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

    await prisma.charge.create({
      data: {
        subscriptionId: subscription.id,
        dueDate,
        amountCents: subscription.amountCents,
        status: 'PENDING',
      },
    })
    created++
  }

  return created
}

export function isOverdue(charge: { status: string; dueDate: Date }) {
  return charge.status === 'PENDING' && charge.dueDate < startOfToday()
}

export function startOfToday() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}
