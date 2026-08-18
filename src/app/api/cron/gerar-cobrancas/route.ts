import { isAuthorizedCronRequest } from '@/lib/cron-auth'
import { generateMonthlyCharges } from '@/lib/billing'

export const dynamic = 'force-dynamic'

export async function GET(req: Request) {
  if (!isAuthorizedCronRequest(req)) {
    return Response.json({ error: 'Não autorizado' }, { status: 401 })
  }

  const created = await generateMonthlyCharges()

  return Response.json({ ok: true, created })
}
