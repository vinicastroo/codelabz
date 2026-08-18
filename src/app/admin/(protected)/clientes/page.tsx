import Link from 'next/link'
import { Plus } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { createClientAction } from '../actions'

export const dynamic = 'force-dynamic'

export default async function ClientesPage() {
  const clients = await prisma.billingClient.findMany({
    include: { subscriptions: { where: { status: 'ACTIVE' } } },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold text-codelabz-dark mb-6">Clientes</h1>

        {clients.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum cliente cadastrado ainda. Use o formulário ao lado para começar.</p>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Nome</th>
                  <th className="text-left px-4 py-3 font-semibold">Contato</th>
                  <th className="text-left px-4 py-3 font-semibold">Assinaturas ativas</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-t border-slate-100">
                    <td className="px-4 py-3">
                      <Link href={`/admin/clientes/${client.id}`} className="font-semibold text-codelabz-dark hover:text-codelabz-accent">
                        {client.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{client.email || client.phone || '—'}</td>
                    <td className="px-4 py-3 text-slate-600">{client.subscriptions.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        <h2 className="flex items-center gap-2 text-sm font-bold text-codelabz-dark uppercase tracking-wide mb-4">
          <Plus size={16} /> Novo cliente
        </h2>
        <form action={createClientAction} className="bg-white rounded-xl border border-slate-200 p-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Nome *</label>
            <input name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Email</label>
            <input name="email" type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Telefone / WhatsApp</label>
            <input name="phone" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">CPF/CNPJ</label>
            <input name="document" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-codelabz-dark mb-1">Observações</label>
            <textarea name="notes" rows={2} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-codelabz-accent resize-none" />
          </div>
          <button type="submit" className="w-full py-2.5 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors">
            Salvar cliente
          </button>
        </form>
      </div>
    </div>
  )
}
