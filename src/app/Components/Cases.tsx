import { LogoAuros, LogoFidliz, LogoUnidavi } from '@/assets/logo'

export function Cases() {
  return (
    <section
      id="#cases"
      className="m-auto flex max-w-[1300px] flex-col space-y-8 px-4 py-16 lg:space-y-16 lg:px-0 lg:py-32"
    >
      <div className="flex flex-col ">
        <span className="text-lg text-sapphire-950">Nossos cases</span>
        <strong className="text-4xl text-sapphire-950">
          Veja nossos sucessos
        </strong>
      </div>

      <div className="flex flex-col space-y-6 divide-y lg:space-y-12">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-start ">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-8 lg:w-auto lg:p-4">
            <LogoAuros />
          </div>

          <div className="flex flex-col items-start gap-2">
            <span className="font-mono text-xl font-bold text-sapphire-950 ">
              Auros corretora imobiliaria
            </span>
            <p className="text-start">
              Foi desenvolvida uma solução que atendesse as necessidades do
              setor imobiliário, com um sistema de gestão de imóveis, e um site.
              O sistema de gestão de imoveis foi desenvolvido com o intuito de
              facilitar o gerenciamento do site. E o site foi desenvolvido com
              as mais novas tecnologias, para que o site seja rápido e
              responsivo.
            </p>

            <a
              href="https://www.aurosimobiliaria.com.br/"
              target="_blank"
              className="text-sm font-bold text-sapphire-950 hover:underline"
            >
              Acesse aqui
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 pt-6 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-8 lg:w-auto lg:p-4">
            <LogoFidliz />
          </div>

          <div className="flex flex-col  items-start gap-2">
            <span className="text-start font-mono text-xl font-bold text-sapphire-950 ">
              Fidliz
            </span>
            <p className="text-start">
              Consiste em um plataforma de fidelização de clientes, onde o foco
              é abandonar com o uso de cartoes fisícos de fidelização, assim
              evitando o problema de ir ao um estabelicento e ter esquecido o
              cartão para pontuar. Sendo uma solução 100% digital.
            </p>

            <a
              href="https://www.fidliz.com.br/"
              target="_blank"
              className="text-start text-sm font-bold text-sapphire-950 hover:underline"
            >
              Acesse aqui
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 pt-6 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-8 lg:w-auto lg:p-4">
            <LogoUnidavi />
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <span className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
              Unidavi - Minha Reserva <small>(Sistema Interno)</small>
            </span>
            <p className="text-start">
              Consiste em um sistema de gerenciamento de reservas de salas de
              aula, onde o foco é facilitar a reserva de salas de aula, e evitar
              conflitos de horários. Possibilitando que os professores realizem
              os agendamentos de uma sala com todos os recursos.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-center">
        <a
          href=""
          className="rounded-full border-2 border-sapphire-950 p-2 px-4 text-base font-semibold text-sapphire-950 transition hover:bg-sapphire-950 hover:text-white"
        >
          Ver mais
        </a>
      </div> */}
    </section>
  )
}