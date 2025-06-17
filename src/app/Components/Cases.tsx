import Image from 'next/image'

const casesData = [
  {
    title: 'Rafa Helena Arquitetura',
    description:
      'Desenvolvemos o site da arquiteta Rafaela Helena com foco em transmitir sofisticação, personalidade e criatividade. A plataforma valoriza o portfólio, apresenta os serviços com elegância e oferece uma experiência fluida, conectando clientes à essência da marca.',
    image: '/banner-rafa.png',
    link: 'http://rafahelena.com.br/',
  },
  {
    title: 'SDL Consultoria',
    description:
      'Criamos um site institucional moderno e funcional para a SDL Consultoria, destacando seus serviços de assessoria em segurança do trabalho, meio ambiente e treinamentos. A plataforma reforça a credibilidade da empresa com uma navegação clara, conteúdo organizado e design responsivo.',
    image: '/banner-sdl.png',
    link: 'https://sdlconsultoria.ind.br/',
  },
  {
    title: 'Lovegoods',
    description:
      'Construímos a loja virtual da Lovegoods, especializada em presentes criativos e colecionáveis. O site destaca os produtos com um layout dinâmico, foco na experiência do usuário e integração completa com soluções de pagamento e logística.',
    image: '/banner-lovegoods.png',
    link: 'https://lovegoods.com.br/',
  },
  {
    title: 'Cloock',
    description:
      'Desenvolvemos um sistema completo para empresas que trabalham com agendamentos online. A plataforma permite o controle de horários, serviços, bloqueios e reservas de forma intuitiva, garantindo mais organização e eficiência no dia a dia.',
    image: '/banner-cloock.png',
    link: 'https://www.cloock.com.br/',
  },
  {
    title: 'Guilherme Schulze',
    description:
      'Criamos um site personalizado para destacar o trabalho do fotógrafo e videomaker Guilherme Schulze. A plataforma apresenta seus projetos, portfólio e serviços com uma experiência visual moderna e atrativa.',
    image: '/banner-guilherme.png',
    link: 'https://www.guilhermeschulze.com.br/',
  },
  {
    title: 'Auros corretora imobiliaria',
    description:
      'Entregamos uma solução digital sob medida para o setor imobiliário, com um sistema interno para gerenciamento de imóveis e um site moderno, responsivo e otimizado para buscas, facilitando a administração e aumentando a presença online da marca.',
    image: '/banner-auros.png',
    link: 'https://www.aurosimobiliaria.com.br/',
  },
  {
    title: 'Fidliz',
    description:
      'Criamos uma plataforma digital de fidelização que substitui os cartões físicos por um sistema moderno e acessível. Agora, os clientes acumulam pontos diretamente pelo celular, sem depender de nada além do próprio dispositivo.',
    image: '/banner-fidliz.png',
    link: 'https://www.fidliz.com.br/',
  },
  {
    title: 'Unidavi - Minha Reserva',
    description:
      'Desenvolvemos um sistema interno para reserva de salas de aula, facilitando o agendamento por parte dos professores, com controle de horários e equipamentos disponíveis — tudo para evitar conflitos e tornar a rotina mais eficiente.',
    image: '/banner-minha-reserva.png',
  },
  {
    title: 'Unidavi - Minha Prova',
    description:
      'Criamos um sistema de aplicação de provas personalizadas, com foco em agilidade e automação. O sistema permite montar avaliações com praticidade e calcula as notas em tempo real ao final da prova.',
    image: '/banner-minha-prova.png',
  },
]

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

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {casesData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 lg:items-start"
            >
              <Image
                src={item.image}
                width={408}
                height={408}
                alt={item.title}
                quality={100}
              />

              <div className="flex flex-col items-start gap-2">
                <h3 className="font-mono text-xl font-bold text-sapphire-950 text-start">
                  {item.title}
                </h3>
                <p className="text-sm text-start">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="text-sm font-bold text-sapphire-950 hover:underline"
                  >
                    Acesse aqui
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
