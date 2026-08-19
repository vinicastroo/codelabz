import Link from 'next/link'
import { AlertTriangle, CalendarClock, RefreshCw, Wallet } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { formatCents } from '@/lib/money'
import { startOfToday } from '@/lib/billing'
import { markChargePaidAction, generateChargesAction } from './actions'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const today = startOfToday()

  const pendingCharges = await prisma.charge.findMany({
    where: { status: 'PENDING' },
    include: { subscription: { include: { client: true } } },
    orderBy: { dueDate: 'asc' },
  })

  const overdue = pendingCharges.filter((c) => c.dueDate < today)
  const upcoming = pendingCharges.filter((c) => c.dueDate >= today)

  const overdueTotal = overdue.reduce((sum, c) => sum + c.amountCents, 0)
  const pendingTotal = pendingCharges.reduce((sum, c) => sum + c.amountCents, 0)

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-codelabz-dark">Resumo</h1>
        <form action={generateChargesAction}>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-codelabz-dark text-white text-sm font-semibold rounded-lg hover:bg-codelabz-surface transition-colors"
          >
            <RefreshCw size={15} /> Gerar cobranças do mês
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-1">Em aberto</p>
            <p className="text-2xl font-bold text-codelabz-dark">{formatCents(pendingTotal)}</p>
            <p className="text-xs text-slate-400 mt-1">{pendingCharges.length} cobrança(s)</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <Wallet size={17} />
          </span>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-red-500 font-semibold mb-1">Atrasado</p>
            <p className="text-2xl font-bold text-red-600">{formatCents(overdueTotal)}</p>
            <p className="text-xs text-slate-400 mt-1">{overdue.length} cobrança(s)</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
            <AlertTriangle size={17} />
          </span>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-1">Próximos 14 dias</p>
            <p className="text-2xl font-bold text-codelabz-dark">
              {formatCents(
                upcoming
                  .filter((c) => c.dueDate <= new Date(today.getTime() + 14 * 86400000))
                  .reduce((sum, c) => sum + c.amountCents, 0),
              )}
            </p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sapphire-50 text-sapphire-600">
            <CalendarClock size={17} />
          </span>
        </div>
      </div>

      {overdue.length > 0 && (
        <section className="mb-10">
          <h2 className="flex items-center gap-2 text-lg font-bold text-red-600 mb-3">
            <AlertTriangle size={18} /> Atrasadas
          </h2>
          <ChargeTable charges={overdue} today={today} />
        </section>
      )}

      <section>
        <h2 className="flex items-center gap-2 text-lg font-bold text-codelabz-dark mb-3">
          <CalendarClock size={18} /> Próximas
        </h2>
        {upcoming.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhuma cobrança pendente por enquanto.</p>
        ) : (
          <ChargeTable charges={upcoming} today={today} />
        )}
      </section>
    </div>
  )
}

function ChargeTable({
  charges,
  today,
}: {
  charges: Array<{
    id: string
    dueDate: Date
    amountCents: number
    subscription: { description: string; client: { id: string; name: string } }
  }>
  today: Date
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
          <tr>
            <th className="text-left px-4 py-3 font-semibold">Cliente</th>
            <th className="text-left px-4 py-3 font-semibold">Descrição</th>
            <th className="text-left px-4 py-3 font-semibold">Vencimento</th>
            <th className="text-right px-4 py-3 font-semibold">Valor</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {charges.map((charge) => {
            const days = Math.round((charge.dueDate.getTime() - today.getTime()) / 86400000)
            return (
              <tr key={charge.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <Link href={`/admin/clientes/${charge.subscription.client.id}`} className="font-semibold text-codelabz-dark hover:text-codelabz-accent">
                    {charge.subscription.client.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-slate-600">{charge.subscription.description}</td>
                <td className="px-4 py-3 text-slate-600">
                  {charge.dueDate.toLocaleDateString('pt-BR')}
                  {days < 0 && <span className="ml-2 text-xs font-semibold text-red-600">{Math.abs(days)}d atrasado</span>}
                  {days === 0 && <span className="ml-2 text-xs font-semibold text-amber-600">vence hoje</span>}
                </td>
                <td className="px-4 py-3 text-right font-semibold text-codelabz-dark">{formatCents(charge.amountCents)}</td>
                <td className="px-4 py-3 text-right">
                  <form action={markChargePaidAction}>
                    <input type="hidden" name="chargeId" value={charge.id} />
                    <button
                      type="submit"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    >
                      Marcar pago
                    </button>
                  </form>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
