'use client'
import { Menu } from '@/components/Menu'
import { motion } from 'framer-motion'
import { IlustrationHome } from '@/assets/ilustrations'

import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'
import { Rocket } from 'lucide-react'
export function Header() {
  const router = useRouter()
  return (
    <header className="lg:0 m-auto flex h-screen max-w-[1300px] flex-col lg:px-0">
      <Menu />
      <div className="flex flex-1 px-4 flex-col-reverse justify-end lg:gap-8 lg:grid lg:grid-cols-app lg:items-center lg:px-4">
        <div className="flex flex-col items-start gap-2 lg:gap-4">
          <h1 className="text-2xl font-extrabold text-sapphire-950 lg:text-6xl">
            Transformando <strong className="text-ruby-600">ideias</strong> em
            realidade
          </h1>
          <p className="text-base  lg:text-lg">
            Vamos além da criação de sites, entregando soluções digitais que
            geram resultados concretos, do aumento de leads ao crescimento das
            vendas
          </p>

          <motion.div
            animate={{ rotate: [0, 0, 0, 1, 0, -1, 0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Button
              variant="fill"
              className="px-4 py-2 mt-2 text-base flex items-center font-bold shadow-sm lg:text-xl lg:py-4 lg:px-8"
              onClick={(e) => {
                e.preventDefault()
                router.push(
                  'https://api.whatsapp.com/send?phone=5547996164275&text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
                )
              }}
              aria-labelledby="Começar um projeto"
              title="Começar um projeto"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Começar um projeto
            </Button>
          </motion.div>
        </div>

        <div className="lg:flex-1">
          <IlustrationHome />
        </div>
      </div>
    </header>
  )
}
