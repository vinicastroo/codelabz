'use client'
import { Menu } from '@/components/Menu'
import { motion } from 'framer-motion'
import { IlustrationHome } from '@/assets/ilustrations'

import { Button } from '@/components/Button'

export function Header() {
  return (
    <header className="lg:0 m-auto flex min-h-screen max-w-[1300px] flex-col lg:px-0">
      <Menu />
      <div className="flex flex-1 p-4 flex-col-reverse items-center justify-center gap-1 lg:gap-8 lg:grid lg:grid-cols-app">
        <div className="flex flex-col items-start gap-2 lg:gap-4">
          <h1 className="text-2xl font-black text-sapphire-950 lg:text-6xl">
            Transformando <strong className="text-ruby-600">ideias</strong> em
            realidade
          </h1>
          <p className="text-base lg:text-lg">
            Vamos além da criação de sites, entregando soluções digitais que
            geram resultados concretos, do aumento de leads ao crescimento das
            vendas
          </p>

          <motion.div
            animate={{ rotate: [0, 0, 0, 3, 0, -3, 0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Button
              variant="fill"
              className="px-4 py-2 mt-2 text-base font-bold shadow-sm lg:text-xl lg:py-4 lg:px-8"
            >
              Começar um projeto
            </Button>
          </motion.div>
        </div>

        <div className="lg:flex-1 p-8">
          <IlustrationHome />
        </div>
      </div>
    </header>
  )
}
