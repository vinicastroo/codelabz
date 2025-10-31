import { LogoWhite } from '@/assets/LogoWhite'
import { AtSign, Facebook, Instagram, Phone, Rocket } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className="bg-sapphire-950 py-20">
        <div className="m-auto flex max-w-[1300px] flex-col gap-8 px-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16 ">
          <div className="flex w-full items-center justify-center self-center">
            <Link href="/" title="Início">
              <LogoWhite />
            </Link>
          </div>

          <div className="m-auto flex w-4/6 flex-col items-start justify-start gap-3 text-white  lg:m-0 lg:w-full  ">
            <span className="mb-2 border-b  border-white text-lg font-bold">
              Menus
            </span>

            <Link
              href="/#processos"
              title="Nossos processos"
              className="block text-start transition hover:text-ruby-500"
            >
              Nossos processos
            </Link>

            <Link
              href="/#servicos"
              title="Nossos serviços"
              className="block text-start transition hover:text-ruby-500"
            >
              Nossos serviços
            </Link>

            <Link
              href="/#cases"
              title="Nossos cases"
              className="block text-start transition hover:text-ruby-500"
            >
              Nossos cases
            </Link>
          </div>

          <div className="m-auto flex w-4/6 flex-col items-start justify-start gap-3 text-white lg:m-0  lg:w-full ">
            <span className="mb-2 border-b  border-white text-lg font-bold">
              Redes sociais
            </span>
            <Link
              href="https://www.facebook.com/profile.php?id=61557445902721"
              title="Facebook Codelabz"
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/code.labz/"
              title="Instagram Codelabz"
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Instagram className="h-5 w-5 " />
              Instagram
            </Link>
          </div>

          <div className="m-auto flex w-4/6 flex-col items-start justify-start gap-3 text-white lg:m-0 lg:w-full ">
            <span className="mb-2 border-b border-white text-lg font-bold">
              Fale com a gente
            </span>
            <Link
              href="https://api.whatsapp.com/send?phone=5547996164275&text=Ol%C3%A1,%20vim%20pelo%20site,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
              title=" Iniciar um projeto"
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Rocket className="h-5 w-5" />
              Iniciar um projeto
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=5547996164275"
              title="Entrar em contato whatsapp"
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Phone className="h-5 w-5" />
              (47) 996164275
            </Link>
            <Link
              href="mailto:contato@codelabz.com.br"
              title="Entrar em contato por email"
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <AtSign className="h-5 w-5" />
              contato@codelabz.com.br
            </Link>
          </div>
        </div>
      </footer>

      <div className="bg-ruby-500 p-4 text-white">
        <div className="m-auto flex max-w-[1300px] items-center justify-between ">
          <span className="text-sm ">
            © {new Date().getFullYear()} - Code Labz. Todos os direitos
            reservados
          </span>
          <span className="text-sm ">Balneário Camboriú - SC</span>
        </div>
      </div>
    </>
  )
}
