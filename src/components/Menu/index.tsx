'use client'
import { LucideMenu, LucideX } from 'lucide-react'
import { Button } from '../Button'
import { Logo } from './logo'
import { useState } from 'react'
import Link from 'next/link'

export function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="m-auto flex w-full items-center justify-between gap-4 p-4 lg:px-4">
      <Link href="/" className="hover:opacity-80">
        <Logo />
      </Link>

      <div className="flex items-center lg:gap-4">
        <Link href="/#cases">
          <Button
            variant="outline"
            className="hidden text-sm font-semibold text-sapphire-950 lg:block"
          >
            Cases
          </Button>
        </Link>

        <Link href="/contato">
          <Button variant="primary" className="hidden lg:block">
            Iniciar um projeto
          </Button>
        </Link>

        <Button
          variant="ghost"
          className="flex items-center justify-center  lg:sr-only"
          onClick={() => setOpen(true)}
        >
          <LucideMenu className="h-6 w-6" />
        </Button>
      </div>

      {open && (
        <div className="fixed flex gap-4 flex-col bottom-0 left-0 right-0 top-0 z-30 h-screen w-full bg-white px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80">
              <Logo />
            </Link>

            <Button
              variant="ghost"
              className="flex items-center justify-center  lg:sr-only"
              onClick={() => setOpen(false)}
            >
              <LucideX className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-start justify-start space-y-4 divide-y">
            <a
              href="#processos"
              className="w-full pt-4"
              onClick={() => setOpen(false)}
            >
              Nossos processos
            </a>

            <a
              href="#servicos"
              className="w-full pt-4"
              onClick={() => setOpen(false)}
            >
              Nossos serviços
            </a>

            <a
              href="#cases"
              className="w-full pt-4"
              onClick={() => setOpen(false)}
            >
              Nossos cases
            </a>

            <a href="" className="w-full pt-4 text-ruby-700 font-bold">
              Iniciar um projeto
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
