import { Button } from '@/components/Button'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export function Cta() {
  return (
    <section
      id="cta"
      className="m-auto flex max-w-[1300px] flex-col mb-20 bg-zinc-100 p-10 rounded-md"
    >
      <div className="flex items-center justify-center flex-col gap-2 w-full m-auto">
        <h2 className="text-center text-sapphire-950 font-bold text-lg lg:text-4xl">
          Pronto para transformar sua ideia em realidade?
        </h2>
        <p className="text-center max-w-2xl">
          Basta uma escolha para transformar sua visão em realidade. Fale
          conosco e descubra como podemos criar soluções digitais personalizadas
          para você.
        </p>

        <Link href="https://api.whatsapp.com/send?phone=5547996164275&text=Olá, gostaria de mais informações">
          <Button
            className="flex items-center mt-4"
            variant="fill"
            aria-labelledby="Começar um projeto"
            title="Começar um projeto"
          >
            <Rocket className="h-5 w-5 mr-2" />
            Quero começar agora
          </Button>
        </Link>
      </div>
    </section>
  )
}
