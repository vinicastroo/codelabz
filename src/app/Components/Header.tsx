'use client'
import { Menu } from '@/components/Menu'
import { IlustrationHome } from '@/assets/ilustrations'

import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'
import { ChevronDown, Rocket } from 'lucide-react'
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google'
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
            Nada de plataformas engessadas. Criamos soluções sob medida com
            design moderno, performance e resultado real.
          </p>

          {/* <motion.div
            animate={{ rotate: [0, 0, 0, 1, 0, -1, 0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          > */}
          <Button
            variant="fill"
            className="px-4 py-2 mt-2 text-base flex items-center font-bold shadow-sm lg:text-lg lg:py-3 lg:px-6"
            onClick={(e) => {
              e.preventDefault()
              sendGAEvent('event', 'ads_conversion_Fale_conosco_1')
              sendGTMEvent('event', 'ads_conversion_Fale_conosco_1')
              router.push(
                'https://api.whatsapp.com/send?phone=5547996164275&text=Olá, gostaria de mais informações',
              )
            }}
            aria-labelledby="Começar um projeto"
            title="Começar um projeto"
          >
            <Rocket className="h-5 w-5 mr-2" />
            Solicitar orçamento
          </Button>
          {/* </motion.div> */}
        </div>

        <div className="lg:flex-1">
          <IlustrationHome />
        </div>
      </div>

      <div>
        <ChevronDown className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-6 w-6 text-sapphire-950 animate-bounce" />
      </div>
    </header>
  )
}
