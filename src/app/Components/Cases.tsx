import {
  LogoAlienForce,
  LogoAuros,
  LogoFidliz,
  LogoGuilherme,
  LogoUnidavi,
} from '@/assets/logo'

export function Cases() {
  return (
    <section
      id="cases"
      className="m-auto flex max-w-[1300px] flex-col space-y-8 px-4 py-12 lg:space-y-16 lg:py-32"
    >
      <div className="flex flex-col">
        <h2 className="text-lg text-sapphire-950">Nossos cases</h2>
        <strong className="text-4xl text-sapphire-950">
          Veja nossos sucessos
        </strong>
      </div>

      <div className="flex flex-col space-y-8 divide-y lg:space-y-12">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-start ">
          <div className="flex items-center justify-center rounded-md w-full bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoGuilherme />
          </div>

          <div className="flex flex-col items-start gap-2">
            <h3 className="font-mono text-xl font-bold text-sapphire-950 ">
              Guilherme Schulze
            </h3>
            <p className="text-sm lg:text-base text-start">
              Foi desenvolvida uma solução que atendesse as necessidades do
              fotógrafo / videomaker, um site que seria possivel visualizar seus
              projetos, serviços e seu portifolio.
            </p>

            <a
              href="https://www.guilhermeschulze.com.br/"
              target="_blank"
              title="Auros Corretora Imobiliaria"
              className="text-sm font-bold text-sapphire-950 hover:underline"
            >
              Acesse aqui
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoAuros />
          </div>

          <div className="flex flex-col items-start gap-2">
            <h3 className="font-mono text-xl font-bold text-sapphire-950 ">
              Auros corretora imobiliaria
            </h3>
            <p className="text-sm lg:text-base text-start">
              Foi desenvolvida uma solução que atendesse as necessidades do
              setor imobiliário, utilizando um sistema interno de gestão de
              imóveis, e um site. Este sistema foi desenvolvido com o intuito de
              facilitar o gerenciamento do site. E o site foi desenvolvido com
              as mais novas tecnologias, para que o site seja rápido e
              responsivo.
            </p>

            <a
              href="https://www.aurosimobiliaria.com.br/"
              target="_blank"
              title="Auros Corretora Imobiliaria"
              className="text-sm font-bold text-sapphire-950 hover:underline"
            >
              Acesse aqui
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoFidliz />
          </div>

          <div className="flex flex-col  items-start gap-2">
            <h3 className="text-start font-mono text-xl font-bold text-sapphire-950 ">
              Fidliz
            </h3>
            <p className="text-sm lg:text-base text-start">
              Consiste em um plataforma de fidelização de clientes, onde o foco
              é abandonar com o uso de cartões físicos de fidelização, assim
              evitando o problema de ir ao um estabelecimento e ter esquecido o
              cartão para pontuar. Sendo uma solução 100% digital.
            </p>

            <a
              href="https://www.fidliz.com.br/"
              target="_blank"
              title="Fidliz - Plataforma de fidelização de clientes"
              className="text-start text-sm font-bold text-sapphire-950 hover:underline"
            >
              Acesse aqui
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoUnidavi />
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
              Unidavi - Minha Reserva <small>(Sistema Interno)</small>
            </h3>
            <p className="text-sm lg:text-base text-start">
              Consiste em um sistema de gerenciamento de reservas de salas de
              aula, onde o foco é facilitar a reserva de salas de aula, e evitar
              conflitos de horários. Possibilitando que os professores realizem
              os agendamentos de uma sala com todos os equipamentos necessários.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoUnidavi />
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
              Unidavi - Minha Prova <small>(Sistema Interno)</small>
            </h3>
            <p className="text-sm lg:text-base text-start">
              Consiste em um sistema de provas, onde o foco é facilitar a
              criação de provas e gerar provas personalizadas, gerando a nota em
              tempo real após a finalização da prova.
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoAlienForce />
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
              Alien Force
            </h3>
            <p className="text-sm lg:text-base text-start">
              Consiste em um site para uma marca de roupas minimalistas, com a
              ideia de ser um site simples e objetivo, com o foco em mostrar os
              produtos de forma clara e objetiva.
            </p>
            <a
              href="https://alienforce.lojavirtualnuvem.com.br/"
              target="_blank"
              title="Alien Force - Marca de roupa minimalista"
              className="text-start text-sm font-bold text-sapphire-950 hover:underline"
            >
              Acesse aqui
            </a>
          </div>
        </div> */}
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
