import Link from 'next/link'
import { Users, ArrowUpRight } from 'lucide-react'
import { prisma } from '@/lib/prisma'
import { NewClientModal } from './new-client-modal'

export const dynamic = 'force-dynamic'

function initialsOf(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default async function ClientesPage() {
  const clients = await prisma.billingClient.findMany({
    include: { subscriptions: { where: { status: 'ACTIVE' } } },
    orderBy: { name: 'asc' },
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-codelabz-dark">Clientes</h1>
          <p className="text-sm text-slate-500 mt-0.5">{clients.length} cliente(s) cadastrado(s)</p>
        </div>
        <NewClientModal />
      </div>

      {clients.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-10 text-center">
          <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Users size={20} />
          </span>
          <p className="text-sm font-semibold text-slate-600">Nenhum cliente cadastrado ainda</p>
          <p className="text-xs text-slate-400 mt-1">Clique em &quot;Novo cliente&quot; para começar.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Cliente</th>
                <th className="text-left px-4 py-3 font-semibold">Contato</th>
                <th className="text-left px-4 py-3 font-semibold">Assinaturas</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-t border-slate-100 hover:bg-slate-50/80 transition-colors group">
                  <td className="px-4 py-3">
                    <Link href={`/admin/clientes/${client.id}`} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-codelabz-dark/5 text-codelabz-dark text-xs font-bold">
                        {initialsOf(client.name)}
                      </span>
                      <span className="font-semibold text-codelabz-dark group-hover:text-codelabz-accent transition-colors">
                        {client.name}
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{client.email || client.phone || '—'}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        client.subscriptions.length > 0 ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {client.subscriptions.length} ativa(s)
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/clientes/${client.id}`}
                      className="inline-flex text-slate-300 group-hover:text-codelabz-accent transition-colors"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
