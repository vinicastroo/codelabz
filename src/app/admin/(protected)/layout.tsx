import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getAdminSession } from '@/lib/admin-auth'
import { LogoutButton } from './logout-button'
import { NavLinks } from './nav-links'

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession()

  if (!session) {
    redirect('/admin/login')
  }

  const initials = session.email.slice(0, 2).toUpperCase()

  return (
    <div className="min-h-screen bg-slate-50">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'linear-gradient(to bottom, black, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 60%)',
          opacity: 0.6,
        }}
      />

      <header className="relative bg-codelabz-dark text-white">
        <div className="absolute inset-0 bg-gradient-linear opacity-[0.07] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="flex items-center shrink-0">
              <Image src="/logo-code.svg" alt="Codelabz" width={140} height={25} priority />
              <span className="ml-3 pl-3 border-l border-white/15 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Painel
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-1">
              <NavLinks />
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 pr-1">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-codelabz-accent/15 text-[11px] font-bold text-codelabz-accent ring-1 ring-codelabz-accent/30">
                {initials}
              </span>
              <span className="text-sm text-slate-300 max-w-[180px] truncate">{session.email}</span>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      <nav className="relative sm:hidden bg-codelabz-surface text-white flex items-center gap-6 px-6 py-3 overflow-x-auto">
        <NavLinks variant="mobile" />
      </nav>

      <main className="relative max-w-6xl mx-auto px-6 py-10">{children}</main>
    </div>
  )
}
