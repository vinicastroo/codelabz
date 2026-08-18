import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, Receipt } from 'lucide-react'
import { getAdminSession } from '@/lib/admin-auth'
import { LogoutButton } from './logout-button'

const NAV = [
  { href: '/admin', label: 'Resumo', icon: LayoutDashboard },
  { href: '/admin/clientes', label: 'Clientes', icon: Users },
  { href: '/admin/cobrancas', label: 'Cobranças', icon: Receipt },
]

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession()

  if (!session) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen">
      <header className="bg-codelabz-dark text-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-bold tracking-tight">Codelabz · Painel</span>
            <nav className="hidden sm:flex items-center gap-6">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-slate-200">
            <span className="hidden sm:inline text-sm text-slate-400 mr-4">{session.email}</span>
          </div>
        </div>
      </header>
      <nav className="sm:hidden bg-codelabz-surface text-white flex items-center gap-6 px-6 py-3">
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-slate-200">
            <item.icon size={16} />
            {item.label}
          </Link>
        ))}
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
      <footer className="max-w-6xl mx-auto px-6 pb-10">
        <LogoutButton />
      </footer>
    </div>
  )
}
