import Image from 'next/image'

export function Cases() {
  return (
    <div className="bg-slate-50">
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

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="flex flex-col items-start gap-4  ">
            <Image
              src="/banner-cloock.png"
              width={408}
              height={408}
              alt=""
              quality={100}
            />

            <div className="flex flex-col items-start gap-2">
              <h3 className="font-mono text-xl font-bold text-sapphire-950 ">
                Cloock
              </h3>
              <p className="text-sm text-start">
                Desenvolvemos um sistema completo para empresas que trabalham
                com agendamentos online. A plataforma permite o controle de
                horários, serviços, bloqueios e reservas de forma intuitiva,
                garantindo mais organização e eficiência no dia a dia.
              </p>

              <a
                href="https://www.cloock.com.br/"
                target="_blank"
                title="Cloock"
                className="text-sm font-bold text-sapphire-950 hover:underline"
              >
                Acesse aqui
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4  ">
            <Image
              src="/banner-guilherme.png"
              width={408}
              height={408}
              alt=""
              quality={100}
            />

            <div className="flex flex-col items-start gap-2">
              <h3 className="font-mono text-xl font-bold text-sapphire-950 ">
                Guilherme Schulze
              </h3>
              <p className="text-sm text-start">
                Criamos um site personalizado para destacar o trabalho do
                fotógrafo e videomaker Guilherme Schulze. A plataforma apresenta
                seus projetos, portfólio e serviços com uma experiência visual
                moderna e atrativa.
              </p>

              <a
                href="https://www.guilhermeschulze.com.br/"
                target="_blank"
                title="Guilherme Schulze"
                className="text-sm font-bold text-sapphire-950 hover:underline"
              >
                Acesse aqui
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-start ">
            <Image
              src="/banner-auros.png"
              width={408}
              height={408}
              alt=""
              quality={100}
            />

            <div className="flex flex-col items-start gap-2">
              <h3 className="font-mono text-xl font-bold text-sapphire-950 text-start ">
                Auros corretora imobiliaria
              </h3>
              <p className="text-sm text-start">
                Entregamos uma solução digital sob medida para o setor
                imobiliário, com um sistema interno para gerenciamento de
                imóveis e um site moderno, responsivo e otimizado para buscas,
                facilitando a administração e aumentando a presença online da
                marca.
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

          <div className="flex flex-col items-start gap-4 lg:items-start ">
            <Image
              src="/banner-fidliz.png"
              width={408}
              height={408}
              alt=""
              quality={100}
            />

            <div className="flex flex-col items-start gap-2">
              <h3 className="text-start font-mono text-xl font-bold text-sapphire-950 ">
                Fidliz
              </h3>
              <p className="text-sm text-start">
                Criamos uma plataforma digital de fidelização que substitui os
                cartões físicos por um sistema moderno e acessível. Agora, os
                clientes acumulam pontos diretamente pelo celular, sem depender
                de nada além do próprio dispositivo.
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

          <div className="flex flex-col items-start gap-4 lg:items-start ">
            <Image
              src="/banner-minha-reserva.png"
              width={408}
              height={408}
              alt=""
              quality={100}
            />

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h3 className="font-mono  text-xl text-start font-bold text-sapphire-950 ">
                Unidavi - Minha Reserva <small>(Sistema Interno)</small>
              </h3>
              <p className="text-sm text-start">
                Desenvolvemos um sistema interno para reserva de salas de aula,
                facilitando o agendamento por parte dos professores, com
                controle de horários e equipamentos disponíveis — tudo para
                evitar conflitos e tornar a rotina mais eficiente.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-start ">
            <Image
              src="/banner-minha-prova.png"
              width={408}
              height={408}
              alt=""
              quality={100}
            />

            <div className="flex flex-col items-center gap-2 lg:items-start">
              <h3 className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
                Unidavi - Minha Prova <small>(Sistema Interno)</small>
              </h3>
              <p className="text-sm text-start">
                Criamos um sistema de aplicação de provas personalizadas, com
                foco em agilidade e automação. O sistema permite montar
                avaliações com praticidade e calcula as notas em tempo real ao
                final da prova.
              </p>
            </div>
          </div>

          {/* <div className="flex flex-col items-start gap-4 lg:items-start ">
          <Image
            src="/banner-magaventures.png"
            width={408}
            height={408}
            alt=""
            quality={100}
          />

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
              Magazord - Magaventures <small>(Sistema Interno)</small>
            </h3>
            <p className="text-sm text-start">
              Consiste em um sistema de gerenciador de startups, que tem como
              objetivo facilitar o gerenciamento, visualização de indicadores e
              o desempenho de cada startup investida.
            </p>
          </div>
        </div> */}

          {/* <div className="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:items-start lg:pt-12">
          <div className="flex w-full items-center justify-center rounded-md bg-sapphire-950 p-12 lg:w-auto lg:p-4">
            <LogoAlienForce />
          </div>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            <h3 className="text-start font-mono  text-xl font-bold text-sapphire-950 ">
              Alien Force
            </h3>
            <p className="text-sm text-start">
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
    </div>
  )
}
