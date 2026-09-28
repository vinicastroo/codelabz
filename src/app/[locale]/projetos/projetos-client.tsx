'use client'

import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { ProjectCard } from '../../Components/project-card'
import { Cta } from '../../Components/Cta'
import { localizeProject, projects } from '@/data/projects'

export default function ProjetosPageClient() {
  const t = useTranslations('projectsPage')
  const p = useTranslations('projects')
  const locale = useLocale()
  const orderedProjects = [
    projects.find((project) => project.slug === 'tb-motors')!,
    ...projects.filter((project) => project.slug !== 'tb-motors'),
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="relative overflow-hidden bg-codelabz-dark pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-codelabz-accent/10 blur-[120px]" />

        <div className="container relative mx-auto px-6">
          <span className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
            <span className="h-px w-8 bg-codelabz-accent" />
            {t('tag')}
          </span>

          <div>
            <h1 className="max-w-[10ch] font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
              {t('title')}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/75 sm:text-lg">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </header>

      <main className="bg-codelabz-dark pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[360px] lg:gap-6">
            {orderedProjects.map((source) => {
              const project = localizeProject(source, locale)

              return (
                <ProjectCard
                  key={project.id}
                  slug={project.slug}
                  title={project.title}
                  description={p((project.shortDescriptionKey ?? project.descriptionKey) as any)}
                  image={project.image}
                  link={project.link}
                  tags={project.tags}
                  viewProjectLabel={t('viewProject')}
                  headingLevel="h2"
                  variant="showcase"
                  showDescription
                  className="lg:min-h-0"
                />
              )
            })}
          </div>
        </div>
      </main>

      <Cta />
    </motion.div>
  )
}
