import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { formatCents } from '@/lib/money'
import {
  createSubscriptionAction,
  markChargePaidAction,
  cancelChargeAction,
  updateSubscriptionStatusAction,
} from '../../actions'

export const dynamic = 'force-dynamic'

const STATUS_LABEL: Record<string, string> = {
  ACTIVE: 'Ativa',
  PAUSED: 'Pausada',
  CANCELLED: 'Cancelada',
}

export default async function ClienteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const client = await prisma.billingClient.findUnique({
    where: { id },
    include: {
      subscriptions: {
        include: { charges: { orderBy: { dueDate: 'desc' }, take: 12 } },
        orderBy: { createdAt: 'asc' },
      },
    },
  })

  if (!client) notFound()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-codelabz-dark">{client.name}</h1>
        <p className="text-sm text-slate-500 mt-1">
          {[client.email, client.phone, client.document].filter(Boolean).join(' · ') || 'Sem dados de contato'}
        </p>
        {client.notes && <p className="text-sm text-slate-400 mt-1">{client.notes}</p>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-lg font-bold text-codelabz-dark">Assinaturas</h2>

          {client.subscriptions.length === 0 && (
            <p className="text-sm text-slate-500">Nenhuma assinatura cadastrada ainda.</p>
          )}

          {client.subscriptions.map((sub) => (
            <div key={sub.id} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <p className="font-semibold text-codelabz-dark">{sub.description}</p>
                  <p className="text-sm text-slate-500">
                    {formatCents(sub.amountCents)} · todo dia {sub.billingDay} ·{' '}
                    <span
                      className={
                        sub.status === 'ACTIVE'
                          ? 'text-green-600 font-semibold'
                          : sub.status === 'PAUSED'
                            ? 'text-amber-600 font-semibold'
                            : 'text-slate-400 font-semibold'
                      }
                    >
                      {STATUS_LABEL[sub.status]}
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  {sub.status !== 'PAUSED' && (
                    <form action={updateSubscriptionStatusAction}>
                      <input type="hidden" name="subscriptionId" value={sub.id} />
                      <input type="hidden" name="clientId" value={client.id} />
                      <input type="hidden" name="status" value="PAUSED" />
                      <button type="submit" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 hover:bg-amber-100">
                        Pausar
                      </button>
                    </form>
                  )}
                  {sub.status !== 'ACTIVE' && (
                    <form action={updateSubscriptionStatusAction}>
                      <input type="hidden" name="subscriptionId" value={sub.id} />
                      <input type="hidden" name="clientId" value={client.id} />
                      <input type="hidden" name="status" value="ACTIVE" />
                      <button type="submit" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-green-700 hover:bg-green-100">
                        Reativar
                      </button>
                    </form>
                  )}
                  {sub.status !== 'CANCELLED' && (
                    <form action={updateSubscriptionStatusAction}>
                      <input type="hidden" name="subscriptionId" value={sub.id} />
                      <input type="hidden" name="clientId" value={client.id} />
                      <input type="hidden" name="status" value="CANCELLED" />
                      <button type="submit" className="text-xs font-semibold px-3 py-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100">
                        Cancelar
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {sub.charges.length === 0 ? (
                <p className="text-xs text-slate-400">Nenhuma cobrança gerada ainda para essa assinatura.</p>
              ) : (
                <table className="w-full text-sm">
                  <thead className="text-slate-400 text-xs uppercase">
                    <tr>
                      <th className="text-left py-1.5 font-semibold">Vencimento</th>
                      <th className="text-left py-1.5 font-semibold">Status</th>
                      <th className="text-right py-1.5 font-semibold">Valor</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sub.charges.map((charge) => (
                      <tr key={charge.id} className="border-t border-slate-50">
                        <td className="py-2 text-slate-600">{charge.dueDate.toLocaleDateString('pt-BR')}</td>
                        <td className="py-2">
                          <ChargeStatusBadge status={charge.status} dueDate={charge.dueDate} />
                        </td>
                        <td className="py-2 text-right font-semibold text-codelabz-dark">{formatCents(charge.amountCents)}</td>
                        <td className="py-2 text-right">
                          {charge.status === 'PENDING' && (
                            <div className="flex gap-2 justify-end">
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
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-bold text-codelabz-dark uppercase tracking-wide mb-4">Nova assinatura</h2>
          <form action={createSubscriptionAction} className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
            <input type="hidden" name="clientId" value={client.id} />
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Descrição *</label>
              <input
                name="description"
                required
                placeholder="Mensalidade site institucional"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Valor mensal (R$) *</label>
              <input
                name="amount"
                required
                inputMode="decimal"
                placeholder="150,00"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Dia de vencimento</label>
              <input
                name="billingDay"
                type="number"
                min={1}
                max={28}
                defaultValue={5}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent"
              />
            </div>
            <button type="submit" className="w-full py-2.5 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors">
              Adicionar assinatura
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function ChargeStatusBadge({ status, dueDate }: { status: string; dueDate: Date }) {
  if (status === 'PAID') {
    return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-50 text-green-700">Pago</span>
  }
  if (status === 'CANCELLED') {
    return <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-400">Cancelado</span>
  }
  const overdue = dueDate < new Date(new Date().setHours(0, 0, 0, 0))
  return overdue ? (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Atrasado</span>
  ) : (
    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">Pendente</span>
  )
}
