import Link from 'next/link'
import { ProjectCard } from './project-card'
const casesData = [
  {
    title: "Rafa Helena Arquitetura",
    description:
      "Site pensado para valorizar o portfólio e transmitir sofisticação. Navegação fluida, visual limpo e foco em apresentação de projetos.",
    image: "/banner-rafa.png",
    link: "http://rafahelena.com.br/",
    tags: ["Site Institucional", "Design"],
  },
  {
    title: "SDL Consultoria",
    description:
      "Site institucional moderno para apresentar serviços e facilitar o contato. Estrutura clara, conteúdo bem organizado e navegação objetiva.",
    image: "/banner-sdl.png",
    link: "https://sdlconsultoria.ind.br/",
    tags: ["Corporativo", "Consultoria"],
  },
  {
    title: "Lovegoods",
    description:
      "E-commerce com foco em experiência do usuário e conversão. Layout dinâmico para destacar produtos e facilitar a compra.",
    image: "/banner-lovegoods.png",
    link: "https://lovegoods.com.br/",
    tags: ["E-commerce", "Vendas"],
  },
  {
    title: "Cloock",
    description:
      "Desenvolvemos um sistema completo para empresas que trabalham com agendamentos online. A plataforma permite o controle de horários, serviços, bloqueios e reservas de forma intuitiva.",
    image: "/banner-cloock.png",
    link: "https://www.cloock.com.br/",
    tags: ["SaaS", "Sistema Web"],
  },
  {
    title: "Guilherme Schulze",
    description:
      "Criamos um site personalizado para destacar o trabalho do fotógrafo e videomaker Guilherme Schulze. A plataforma apresenta seus projetos e portfólio com uma experiência visual moderna.",
    image: "/banner-guilherme.png",
    link: "https://www.guilhermeschulze.com.br/",
    tags: ["Portfólio", "Mídia"],
  },
  {
    title: "Auros Corretora Imob",
    description:
      "Entregamos uma solução digital sob medida para o setor imobiliário, com um sistema interno para gerenciamento de imóveis e um site moderno, responsivo e otimizado para buscas.",
    image: "/banner-auros.png",
    link: "https://www.aurosimobiliaria.com.br/",
    tags: ["Imobiliária", "Sistema Interno"],
  },
  {
    title: "Fidliz",
    description:
      "Criamos uma plataforma digital de fidelização que substitui os cartões físicos. Agora, os clientes acumulam pontos diretamente pelo celular, sem depender de nada além do próprio dispositivo.",
    image: "/banner-fidliz.png",
    link: "https://www.fidliz.com.br/",
    tags: ["App Web", "Fidelização"],
  },
  {
    title: "Unidavi - Minha Reserva",
    description:
      "Desenvolvemos um sistema interno para reserva de salas de aula, facilitando o agendamento por parte dos professores, com controle de horários e equipamentos disponíveis.",
    image: "/banner-minha-reserva.png",
    tags: ["Educacional", "Gestão"],
  },
  {
    title: "Unidavi - Minha Prova",
    description:
      "Criamos um sistema de aplicação de provas personalizadas, com foco em agilidade e automação. O sistema permite montar avaliações com praticidade e calcula notas em tempo real.",
    image: "/banner-minha-prova.png",
    tags: ["Educacional", "Automação"],
  },
]


export function Cases() {
  return (
    <section className="relative pt-16 pb-16 lg:pt-16 lg:pb-16 bg-codelabz-dark backdrop-blur-md shadow-lg">
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div> */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      <div className="container mx-auto px-6 z-index-10 relative">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-white">
          Projetos em <span className="text-codelabz-accent">Destaque</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-center justify-center">
          {[
            casesData.find((c) => c.title.includes("Rafa Helena")),
            casesData.find((c) => c.title.includes("Lovegoods")),
            casesData.find((c) => c.title.includes("Cloock")),
            casesData.find((c) => c.title.includes("Auros")),
          ]
            .filter(Boolean)
            .map((project, idx) => (
              <ProjectCard key={idx} {...project!} />
            ))}
        </div>
        <div className="text-center">
          <Link href="/projects">
            <button
              className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer  hover:scale-105 rounded-full font-bold transition-all uppercase tracking-wide text-sm"
            >
              Ver todos os projetos
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
