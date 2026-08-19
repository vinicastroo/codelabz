'use client'

import { useMemo, useState } from 'react'
import { Plus, Receipt } from 'lucide-react'
import { Modal } from '@/components/ui/modal'
import { createChargeAction } from '../actions'

type ClientOption = {
  id: string
  name: string
  subscriptions: { id: string; description: string; amountCents: number }[]
}

export function NewChargeModal({ clients }: { clients: ClientOption[] }) {
  const [open, setOpen] = useState(false)
  const [clientId, setClientId] = useState('')

  const subscriptions = useMemo(() => clients.find((c) => c.id === clientId)?.subscriptions ?? [], [clients, clientId])

  function close() {
    setOpen(false)
    setClientId('')
  }

  async function handleSubmit(formData: FormData) {
    await createChargeAction(formData)
    close()
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors"
      >
        <Plus size={16} /> Nova cobrança
      </button>

      <Modal open={open} onClose={close} title="Nova cobrança" icon={<Receipt size={14} />}>
        {clients.length === 0 ? (
          <p className="text-sm text-slate-500">
            Cadastre um cliente com uma assinatura ativa antes de criar uma cobrança avulsa.
          </p>
        ) : (
          <form action={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Cliente *</label>
              <select
                required
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
              >
                <option value="" disabled>
                  Selecione...
                </option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Assinatura *</label>
              <select
                key={clientId}
                name="subscriptionId"
                required
                disabled={!clientId}
                defaultValue=""
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow disabled:opacity-50"
              >
                <option value="" disabled>
                  {clientId ? 'Selecione...' : 'Escolha um cliente primeiro'}
                </option>
                {subscriptions.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.description}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Vencimento *</label>
              <input
                type="date"
                name="dueDate"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-codelabz-dark mb-1">Valor (R$)</label>
              <input
                name="amount"
                inputMode="decimal"
                placeholder="Deixe em branco para usar o valor da assinatura"
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors"
            >
              Criar cobrança
            </button>
          </form>
        )}
      </Modal>
    </>
  )
}
