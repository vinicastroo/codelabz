'use client'
import { Menu } from '@/components/Menu'
import { motion } from 'framer-motion'
import { IlustrationHome } from '@/assets/ilustrations'

import { Button } from '@/components/Button'

export function Header() {
  return (
    <head className="lg:0 m-auto flex h-screen max-w-[1300px] flex-col px-4 lg:px-0">
      <Menu />
      <div className="flex flex-1 flex-col-reverse items-center justify-center gap-8 lg:grid lg:grid-cols-app">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-black text-sapphire-950 lg:text-6xl">
            Transformando <strong className="text-ruby-600">ideias</strong> em
            realidade
          </h1>
          <p className="text-lg">
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
              className="px-8 py-4 text-lg font-bold  shadow-sm lg:text-xl "
            >
              Começar um projeto
            </Button>
          </motion.div>
        </div>

        <div className="p-8 lg:flex-1">
          <IlustrationHome />
        </div>
      </div>
    </head>
  )
}
