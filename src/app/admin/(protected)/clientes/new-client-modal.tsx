'use client'

import { useState } from 'react'
import { UserPlus } from 'lucide-react'
import { Modal } from '@/components/ui/modal'
import { createClientAction } from '../actions'

export function NewClientModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors"
      >
        <UserPlus size={16} /> Novo cliente
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Novo cliente" icon={<UserPlus size={14} />}>
        <form action={createClientAction} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Nome *</label>
            <input
              name="name"
              required
              autoFocus
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Telefone / WhatsApp</label>
            <input
              name="phone"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">CPF/CNPJ</label>
            <input
              name="document"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Observações</label>
            <textarea
              name="notes"
              rows={2}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors"
          >
            Salvar cliente
          </button>
        </form>
      </Modal>
    </>
  )
}
