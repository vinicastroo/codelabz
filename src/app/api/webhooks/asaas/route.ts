import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

const PAID_EVENTS = new Set(['PAYMENT_RECEIVED', 'PAYMENT_CONFIRMED'])

type AsaasWebhookPayload = {
  event: string
  payment?: { id: string }
}

export async function POST(req: Request) {
  const expectedToken = process.env.ASAAS_WEBHOOK_TOKEN
  if (expectedToken && req.headers.get('asaas-access-token') !== expectedToken) {
    return Response.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const body = (await req.json().catch(() => null)) as AsaasWebhookPayload | null
  const paymentId = body?.payment?.id

  if (!body?.event || !paymentId) {
    return Response.json({ ok: true })
  }

  if (PAID_EVENTS.has(body.event)) {
    await prisma.charge.updateMany({
      where: { asaasChargeId: paymentId, status: 'PENDING' },
      data: { status: 'PAID', paidAt: new Date() },
    })
  }

  return Response.json({ ok: true })
}
