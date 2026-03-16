'use client'
import Link from 'next/link'
import { ProjectCard } from './project-card'
import { useTranslations } from 'next-intl'

export function Cases() {
  const t = useTranslations('cases')
  const p = useTranslations('projects')

  const casesData = [
    {
      title: "Rafa Helena Arquitetura",
      description: p('rafahelenaShort'),
      image: "/banner-rafa.png",
      link: "http://rafahelena.com.br/",
      tags: ["Site Institucional", "Design"],
    },
    {
      title: "Lovegoods",
      description: p('lovegoodsShort'),
      image: "/banner-lovegoods.png",
      link: "https://lovegoods.com.br/",
      tags: ["E-commerce", "Vendas"],
    },
    {
      title: "Cloock",
      description: p('cloockShort'),
      image: "/banner-cloock.png",
      link: "https://www.cloock.com.br/",
      tags: ["SaaS", "Sistema Web"],
    },
    {
      title: "Auros Corretora Imob",
      description: p('aurosShort'),
      image: "/banner-auros.png",
      link: "https://www.aurosimobiliaria.com.br/",
      tags: ["Imobiliária", "Sistema Interno"],
    },
  ]

  return (
    <section className="relative pt-16 pb-16 lg:pt-16 lg:pb-16 bg-codelabz-dark backdrop-blur-md shadow-lg">
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
          {t('title')} <span className="text-codelabz-accent">{t('titleAccent')}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-center justify-center">
          {casesData.map((project, idx) => (
            <ProjectCard key={idx} {...project} viewProjectLabel={t('viewProject')} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/projetos">
            <button
              className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer hover:scale-105 rounded-full font-bold transition-all uppercase tracking-wide text-sm"
            >
              {t('seeAll')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
