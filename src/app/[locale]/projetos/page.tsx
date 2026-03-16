'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function ProjectCard({ title, description, image, link, tags, viewProjectLabel }: {
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
  viewProjectLabel: string
}) {
  return (
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
              <span key={idx} className="text-xs px-3 py-1 bg-codelabz-accent text-white rounded-full font-semibold">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-display font-bold text-[#032550] mb-3 transition-colors">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-codelabz-accent hover:underline font-medium text-sm transition-colors group/link pt-5"
          >
            {viewProjectLabel}
            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  )
}

export default function ProjetosPage() {
  const t = useTranslations('projectsPage')
  const p = useTranslations('projects')

  const casesData = [
    {
      title: "Rafa Helena Arquitetura",
      description: p('rafahelena'),
      image: "/banner-rafa.png",
      link: "http://rafahelena.com.br/",
      tags: ["Site Institucional", "Design"],
    },
    {
      title: "SDL Consultoria",
      description: p('sdl'),
      image: "/banner-sdl.png",
      link: "https://sdlconsultoria.ind.br/",
      tags: ["Corporativo", "Consultoria"],
    },
    {
      title: "Lovegoods",
      description: p('lovegoods'),
      image: "/banner-lovegoods.png",
      link: "https://lovegoods.com.br/",
      tags: ["E-commerce", "Vendas"],
    },
    {
      title: "Cloock",
      description: p('cloock'),
      image: "/banner-cloock.png",
      link: "https://www.cloock.com.br/",
      tags: ["SaaS", "Sistema Web"],
    },
    {
      title: "Guilherme Schulze",
      description: p('guilherme'),
      image: "/banner-guilherme.png",
      link: "https://www.guilhermeschulze.com.br/",
      tags: ["Portfólio", "Mídia"],
    },
    {
      title: "Auros Corretora",
      description: p('auros'),
      image: "/banner-auros.png",
      link: "https://www.aurosimobiliaria.com.br/",
      tags: ["Imobiliária", "Sistema Interno"],
    },
    {
      title: "Fidliz",
      description: p('fidliz'),
      image: "/banner-fidliz.png",
      link: "https://fideliz-web.vercel.app/",
      tags: ["App Web", "Fidelização"],
    },
    {
      title: "Unidavi - Minha Reserva",
      description: p('minhareserva'),
      image: "/banner-minha-reserva.png",
      tags: ["Educacional", "Sistema"],
    },
    {
      title: "Unidavi - Minha Prova",
      description: p('minhaprova'),
      image: "/banner-minha-prova.png",
      tags: ["Educacional", "Sistema"],
    },
    {
      title: "APJESC - Site Institucional e Sistema Interno",
      description: p('apjesc'),
      image: "/banner-apjesc.png",
      tags: ["Institucional", "Sistema"],
    },
    {
      title: "Magaventures - Sistema Interno de Gestão",
      description: p('magaventures'),
      image: "/banner-magaventures.png",
      tags: ["Sistema", "Dashboard", "Startups"],
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-codelabz-dark py-20 border-b border-white/5 pt-32">
        <div className="container mx-auto px-6 text-center">
          <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t('tag')}</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">{t('title')}</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casesData.map((project, idx) => (
            <ProjectCard key={idx} {...project} viewProjectLabel={t('viewProject')} />
          ))}
        </div>
      </div>
      <div className="py-12 text-center bg-codelabz-light">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-codelabz-dark mb-6">{t('ctaTitle')}</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">{t('ctaSubtitle')}</p>
          <Link
            href="/contato"
            className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer hover:scale-105 rounded-full font-bold transition-all uppercase tracking-wide text-sm"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
