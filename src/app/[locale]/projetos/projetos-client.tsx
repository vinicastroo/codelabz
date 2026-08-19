'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectCard } from '../../Components/project-card'
import { projects } from '@/data/projects'

export default function ProjetosPageClient() {
  const t = useTranslations('projectsPage')
  const p = useTranslations('projects')

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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={p(project.descriptionKey as any)}
              image={project.image}
              link={project.link}
              tags={project.tags}
              viewProjectLabel={t('viewProject')}
              headingLevel="h2"
            />
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
