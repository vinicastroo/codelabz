import { LogoWhite } from '@/assets/LogoWhite'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className="bg-sapphire-950 py-20">
        <div className="m-auto flex max-w-[1300px] flex-col gap-8 px-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16 ">
          <div className="flex w-full items-center justify-center self-center">
            <Link href="/">
              <LogoWhite />
            </Link>
          </div>

          <div className="m-auto flex w-4/6 flex-col items-start justify-start gap-3 text-white  lg:m-0 lg:w-full  ">
            <span className="mb-2 border-b  border-white text-lg font-bold">
              Menus
            </span>

            <a
              href="#processos"
              className="block text-start transition hover:text-ruby-500"
            >
              Nossos processos
            </a>

            <a
              href="#servicos"
              className="block text-start transition hover:text-ruby-500"
            >
              Nossos serviços
            </a>

            <a
              href="#cases"
              className="block text-start transition hover:text-ruby-500"
            >
              Nossos cases
            </a>
          </div>

          <div className="m-auto flex w-4/6 flex-col items-start justify-start gap-3 text-white lg:m-0  lg:w-full ">
            <span className="mb-2 border-b  border-white text-lg font-bold">
              Redes sociais
            </span>
            <a
              href=""
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Facebook className="h-5 w-5  " />
              Facebook
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Instagram className="h-5 w-5 " />
              Instagram
            </a>
          </div>

          <div className="m-auto flex w-4/6 flex-col items-start justify-start gap-3 text-white lg:m-0 lg:w-full ">
            <span className="mb-2 border-b border-white text-lg font-bold">
              Fale com a gente
            </span>
            <a
              href=""
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Mail className="h-5 w-5" />
              contato@codelabz.com
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-white transition hover:text-ruby-500"
            >
              <Phone className="h-5 w-5" />
              (47) 996164275
            </a>
          </div>
        </div>
      </footer>

      <div className="bg-ruby-500 p-4 text-white">
        <div className="m-auto flex max-w-[1300px] items-center justify-center ">
          <span className="text-sm ">
            © {new Date().getFullYear()} - Code Labz. Todos os direitos
            reservados
          </span>
          {/* <span className="text-sm ">Rio do Sul - SC</span> */}
        </div>
      </div>
    </>
  )
}
