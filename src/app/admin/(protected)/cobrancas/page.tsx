import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { formatCents } from '@/lib/money'
import { startOfToday } from '@/lib/billing'
import { markChargePaidAction, cancelChargeAction } from '../actions'

export const dynamic = 'force-dynamic'

const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'overdue', label: 'Atrasadas' },
  { value: 'paid', label: 'Pagas' },
]

export default async function CobrancasPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>
}) {
  const { status = 'all' } = await searchParams
  const today = startOfToday()

  const charges = await prisma.charge.findMany({
    include: { subscription: { include: { client: true } } },
    orderBy: { dueDate: 'desc' },
    take: 200,
  })

  const filtered = charges.filter((c) => {
    if (status === 'pending') return c.status === 'PENDING' && c.dueDate >= today
    if (status === 'overdue') return c.status === 'PENDING' && c.dueDate < today
    if (status === 'paid') return c.status === 'PAID'
    return true
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-codelabz-dark mb-6">Cobranças</h1>

      <div className="flex gap-2 mb-6">
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/admin/cobrancas?status=${f.value}`}
            className={`text-sm font-semibold px-3 py-1.5 rounded-full transition-colors ${
              status === f.value ? 'bg-codelabz-dark text-white' : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-500">Nenhuma cobrança encontrada para esse filtro.</p>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Cliente</th>
                <th className="text-left px-4 py-3 font-semibold">Descrição</th>
                <th className="text-left px-4 py-3 font-semibold">Vencimento</th>
                <th className="text-left px-4 py-3 font-semibold">Status</th>
                <th className="text-right px-4 py-3 font-semibold">Valor</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((charge) => {
                const overdue = charge.status === 'PENDING' && charge.dueDate < today
                return (
                  <tr key={charge.id} className="border-t border-slate-100">
                    <td className="px-4 py-3">
                      <Link href={`/admin/clientes/${charge.subscription.client.id}`} className="font-semibold text-codelabz-dark hover:text-codelabz-accent">
                        {charge.subscription.client.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{charge.subscription.description}</td>
                    <td className="px-4 py-3 text-slate-600">{charge.dueDate.toLocaleDateString('pt-BR')}</td>
                    <td className="px-4 py-3">
                      {charge.status === 'PAID' && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700">Pago</span>}
                      {charge.status === 'CANCELLED' && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400">Cancelado</span>}
                      {charge.status === 'PENDING' && overdue && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Atrasado</span>}
                      {charge.status === 'PENDING' && !overdue && <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">Pendente</span>}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-codelabz-dark">{formatCents(charge.amountCents)}</td>
                    <td className="px-4 py-3 text-right">
                      {charge.status === 'PENDING' && (
                        <div className="flex gap-3 justify-end">
                          <form action={markChargePaidAction}>
                            <input type="hidden" name="chargeId" value={charge.id} />
                            <button type="submit" className="text-xs font-semibold text-green-700 hover:underline">
                              Marcar pago
                            </button>
                          </form>
                          <form action={cancelChargeAction}>
                            <input type="hidden" name="chargeId" value={charge.id} />
                            <button type="submit" className="text-xs font-semibold text-slate-400 hover:underline">
                              Cancelar
                            </button>
                          </form>
                        </div>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
