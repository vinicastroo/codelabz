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
      <Link
        href="/"
        className="hover:opacity-80"
        aria-label="Início"
        title="Início"
      >
        <Logo />
      </Link>

      <div className="flex items-center lg:gap-4">
        <Link href="/#cases" title="Nossos Cases">
          <Button
            variant="outline"
            className="hidden text-sm font-semibold text-sapphire-950 lg:block"
            aria-labelledby="Nossos Cases"
            title="Nossos Cases"
          >
            Nossos Cases
          </Button>
        </Link>

        <Link href="/contato" title="Iniciar um projeto">
          <Button
            variant="fill"
            className="hidden lg:block bg-sapphire-950  hover:bg-sapphire-950 hover:opacity-80"
            aria-labelledby="Iniciar um projeto"
            title="Iniciar um projeto"
          >
            Iniciar um projeto
          </Button>
        </Link>

        <Button
          variant="ghost"
          className="flex items-center justify-center  lg:sr-only"
          onClick={() => setOpen(true)}
          aria-labelledby="Abrir menu"
          title="Abrir menu"
        >
          <LucideMenu className="h-6 w-6" />
        </Button>
      </div>

      {open && (
        <div className="fixed flex gap-4 flex-col bottom-0 left-0 right-0 top-0 z-30 h-screen w-full bg-white px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="hover:opacity-80" title="Início">
              <Logo />
            </Link>

            <Button
              variant="ghost"
              className="flex items-center justify-center  lg:sr-only"
              onClick={() => setOpen(false)}
              aria-labelledby="Fechar menu"
              title="Fechar menu"
            >
              <LucideX className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-1 flex-col items-start justify-start space-y-4 divide-y">
            <Link
              href="/#processos"
              className="w-full pt-4"
              onClick={() => setOpen(false)}
              aria-labelledby="Nossos processos"
              title="Nossos processos"
            >
              Nossos processos
            </Link>

            <Link
              href="/#servicos"
              className="w-full pt-4"
              onClick={() => setOpen(false)}
              aria-labelledby="Nossos serviços"
              title="Nossos serviços"
            >
              Nossos serviços
            </Link>

            <Link
              href="/#cases"
              className="w-full pt-4"
              onClick={() => setOpen(false)}
              aria-labelledby="Nossos cases"
              title="Nossos cases"
            >
              Nossos cases
            </Link>

            <Link
              href="/contato"
              className="w-full pt-4 text-ruby-700 font-bold"
              aria-labelledby="Iniciar um projeto"
              title="Iniciar um projeto"
            >
              Iniciar um projeto
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
