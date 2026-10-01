'use client'
import Link from 'next/link'
import { ProjectCard } from './project-card'
import { useLocale, useTranslations } from 'next-intl'
import { localizeProject, projects } from '@/data/projects'

export function Cases() {
  const t = useTranslations('cases')
  const p = useTranslations('projects')
  const locale = useLocale()

  const featuredSlugs = ['tb-motors', 'auros-corretora', 'patrono-jr', 'rafa-helena-arquitetura']
  const casesData = featuredSlugs.map((slug) => {
    const project = localizeProject(projects.find((item) => item.slug === slug)!, locale)

    return {
      ...project,
      description: p((project.shortDescriptionKey ?? project.descriptionKey) as any),
    }
  })

  return (
    <section className="relative py-24 lg:py-32 bg-codelabz-dark overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      <div className="container mx-auto px-6 z-index-10 relative">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end lg:mb-14">
          <div>
            <span className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
              <span className="h-px w-8 bg-codelabz-accent" />
              {t('tag')}
            </span>
            <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">
              {t('title')} <span className="text-codelabz-accent">{t('titleAccent')}</span>
            </h2>
          </div>

          <Link href="/projetos" className="hidden items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all hover:border-codelabz-accent hover:bg-codelabz-accent sm:inline-flex">
            {t('seeAll')}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(2,280px)] lg:gap-6">
          {casesData.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              {...project}
              variant="showcase"
              featured={idx === 0}
              className={idx === 0
                ? 'md:col-span-2 lg:col-span-6 lg:row-span-2 lg:min-h-0'
                : idx === 3
                  ? 'lg:col-span-6 lg:min-h-0'
                  : 'lg:col-span-3 lg:min-h-0'}
              viewProjectLabel={t('viewProject')}
            />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/projetos" className="inline-flex rounded-full bg-codelabz-accent px-8 py-4 text-sm font-bold text-white shadow-xl shadow-codelabz-accent/20">
              {t('seeAll')}
          </Link>
        </div>
      </div>
    </section>
  )
}
