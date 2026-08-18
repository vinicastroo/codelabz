import { isAuthorizedCronRequest } from '@/lib/cron-auth'
import { prisma } from '@/lib/prisma'
import { formatCents } from '@/lib/money'
import { startOfToday } from '@/lib/billing'
import { sendEmail } from '@/lib/email'

export const dynamic = 'force-dynamic'

const REMINDER_COOLDOWN_HOURS = 20
const DAYS_AHEAD = 3

export async function GET(req: Request) {
  if (!isAuthorizedCronRequest(req)) {
    return Response.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const notifyEmail = process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL
  if (!notifyEmail) {
    return Response.json({ error: 'ADMIN_NOTIFICATION_EMAIL não configurado' }, { status: 500 })
  }

  const today = startOfToday()
  const horizon = new Date(today.getTime() + DAYS_AHEAD * 86400000)
  const cooldownCutoff = new Date(Date.now() - REMINDER_COOLDOWN_HOURS * 3600000)

  const charges = await prisma.charge.findMany({
    where: {
      status: 'PENDING',
      dueDate: { lte: horizon },
      OR: [{ reminderSentAt: null }, { reminderSentAt: { lt: cooldownCutoff } }],
    },
    include: { subscription: { include: { client: true } } },
    orderBy: { dueDate: 'asc' },
  })

  if (charges.length === 0) {
    return Response.json({ ok: true, sent: false, count: 0 })
  }

  const overdue = charges.filter((c) => c.dueDate < today)
  const dueSoon = charges.filter((c) => c.dueDate >= today)

  const row = (c: (typeof charges)[number]) =>
    `<tr>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;">${c.subscription.client.name}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;">${c.subscription.description}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;">${c.dueDate.toLocaleDateString('pt-BR')}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:right;">${formatCents(c.amountCents)}</td>
    </tr>`

  const html = `
    <div style="font-family:Arial,sans-serif;color:#021d3f;">
      <h2>Cobranças que precisam da sua atenção</h2>
      ${
        overdue.length > 0
          ? `<h3 style="color:#e0024d;">Atrasadas (${overdue.length})</h3>
             <table style="border-collapse:collapse;width:100%;">${overdue.map(row).join('')}</table>`
          : ''
      }
      ${
        dueSoon.length > 0
          ? `<h3>Vencendo nos próximos ${DAYS_AHEAD} dias (${dueSoon.length})</h3>
             <table style="border-collapse:collapse;width:100%;">${dueSoon.map(row).join('')}</table>`
          : ''
      }
      <p style="margin-top:20px;">
        <a href="https://www.codelabz.com.br/admin" style="color:#e0024d;">Abrir o painel de cobranças</a>
      </p>
    </div>
  `

  await sendEmail({
    to: notifyEmail,
    subject:
      overdue.length > 0
        ? `${overdue.length} cobrança(s) atrasada(s) — Codelabz`
        : `${dueSoon.length} cobrança(s) vencendo em breve — Codelabz`,
    html,
  })

  await prisma.charge.updateMany({
    where: { id: { in: charges.map((c) => c.id) } },
    data: { reminderSentAt: new Date() },
  })

  return Response.json({ ok: true, sent: true, count: charges.length })
}
