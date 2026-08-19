'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Receipt } from 'lucide-react'

const NAV = [
  { href: '/admin', label: 'Resumo', icon: LayoutDashboard },
  { href: '/admin/clientes', label: 'Clientes', icon: Users },
  { href: '/admin/cobrancas', label: 'Cobranças', icon: Receipt },
]

export function NavLinks({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const pathname = usePathname()

  return (
    <>
      {NAV.map((item) => {
        const active = item.href === '/admin' ? pathname === item.href : pathname.startsWith(item.href)

        if (variant === 'mobile') {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                active ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <item.icon size={16} />
              {item.label}
            </Link>
          )
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 text-sm font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              active
                ? 'bg-codelabz-accent/15 text-white ring-1 ring-codelabz-accent/40'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <item.icon size={15} className={active ? 'text-codelabz-accent' : ''} />
            {item.label}
          </Link>
        )
      })}
    </>
  )
}
