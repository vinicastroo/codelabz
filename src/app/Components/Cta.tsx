import { Button } from '@/components/Button'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export function Cta() {
  return (
    <div className="bg-slate-50 py-20 h-full w-full">
      <section
        id="cta"
        className="m-auto flex max-w-[1300px] flex-col  bg-white border p-10 rounded-md"
      >
        <div className="flex items-center justify-center flex-col gap-2 w-full m-auto">
          <h2 className="text-center text-sapphire-950 font-bold text-lg lg:text-4xl">
            Pronto para tirar seu projeto do papel?
          </h2>
          <p className="text-center max-w-2xl">
            Dê o primeiro passo rumo a uma solução digital feita sob medida.
            Entre em contato e veja como podemos transformar sua ideia em um
            projeto real, eficiente e com resultado.
          </p>

          <Link href="https://api.whatsapp.com/send?phone=5547996164275&text=Olá, gostaria de mais informações">
            <Button
              className="flex items-center mt-4"
              variant="fill"
              aria-labelledby="Começar um projeto"
              title="Começar um projeto"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Iniciar meu projeto agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
