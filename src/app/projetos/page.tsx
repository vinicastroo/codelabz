'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const ProjectCard: React.FC<{
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
}> = ({ title, description, image, link, tags }) => (
  <div className="cursor-pointer backdrop-blur-xl rounded-md shadow overflow-hidden transition-all duration-300 group h-full flex flex-col">
    <div className="relative h-80 overflow-hidden bg-transparent shrink-0">
      <Image
        fill
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#032550] via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-6 border border-slate-200 bg-white flex flex-col flex-1">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 bg-codelabz-accent text-white rounded-full font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-display font-bold text-[#032550] mb-3 transition-colors">
          {title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-codelabz-accent hover:underline font-medium text-sm transition-colors group/link pt-5"
        >
          Ver projeto
          <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  </div>
)

const casesData = [
  {
    title: "Rafa Helena Arquitetura",
    description:
      "Desenvolvemos o site da arquiteta Rafaela Helena com foco em transmitir sofisticação, personalidade e criatividade. A plataforma valoriza o portfólio, apresenta os serviços com elegância e oferece uma experiência fluida.",
    image: "/banner-rafa.png",
    link: "http://rafahelena.com.br/",
    tags: ["Site Institucional", "Design"],
  },
  {
    title: "SDL Consultoria",
    description:
      "Criamos um site institucional moderno e funcional para a SDL Consultoria, destacando seus serviços de assessoria em segurança do trabalho, meio ambiente e treinamentos.",
    image: "/banner-sdl.png",
    link: "https://sdlconsultoria.ind.br/",
    tags: ["Corporativo", "Consultoria"],
  },
  {
    title: "Lovegoods",
    description:
      "Construímos a loja virtual da Lovegoods, especializada em presentes criativos e colecionáveis. O site destaca os produtos com um layout dinâmico e foco na experiência do usuário.",
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
    title: "Auros Corretora",
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
    link: "https://fideliz-web.vercel.app/",
    tags: ["App Web", "Fidelização"],
  },
  {
    title: "Unidavi - Minha Reserva",
    description:
      "Desenvolvemos um sistema interno para reserva de salas de aula, facilitando o agendamento por parte dos professores, com controle de horários e equipamentos disponíveis.",
    image: "/banner-minha-reserva.png",
    tags: ["Educacional", "Sistema"],
  },
  {
    title: "Unidavi - Minha Prova",
    description:
      "Criamos um sistema de aplicação de provas personalizadas, com foco em agilidade e automação. O sistema permite montar avaliações com praticidade e calcula notas em tempo real.",
    image: "/banner-minha-prova.png",
    tags: ["Educacional", "Sistema"],
  },
  {
    title: "APJESC - Site Institucional e Sistema Interno",
    description:
      "Desenvolvemos o site institucional da APJESC junto a um sistema interno para gestão de cursos, associados e conteúdos administrativos, trazendo mais organização, autonomia e eficiência para a entidade.",
    image: "/banner-apjesc.png",
    tags: ["Institucional", "Sistema"],
  },
  {
    title: "Magaventures - Sistema Interno de Gestão",
    description:
      "Desenvolvemos um sistema interno para acompanhamento do desempenho das startups do ecossistema Magaventures, com dashboards estratégicos, controle de faturamento, métricas de crescimento e visão centralizada para tomada de decisão.",
    image: "/banner-magaventures.png",
    tags: ["Sistema", "Dashboard", "Startups"],
  }
]


export default function ProjetosPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-codelabz-dark py-20 border-b border-white/5 pt-32">
        <div className="container mx-auto px-6 text-center">
          <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm mb-4 block">Portfólio</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Nossos Cases</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conheça algumas das histórias de sucesso que ajudamos a construir.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casesData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
      <div className="py-12 text-center bg-codelabz-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-codelabz-dark mb-6">Tem uma ideia incrível?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Nós temos a tecnologia e a expertise para torná-la real. Vamos conversar?
          </p>
          <button
            className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer  hover:scale-105 rounded-full font-bold transition-all uppercase tracking-wide text-sm"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </motion.div>
  )
}