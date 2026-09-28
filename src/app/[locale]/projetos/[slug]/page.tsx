import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, buildAlternates, buildOpenGraph } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'
import { getProjectBySlug, projects } from '@/data/projects'
import { ProjectCard } from '../../../Components/project-card'
import { Cta } from '../../../Components/Cta'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const project = getProjectBySlug(slug, locale)

  if (!project) {
    return {}
  }

  const t = await getTranslations({ locale, namespace: 'projects' })
  const description = t(project.descriptionKey as any)
  const title = locale === 'pt' ? `${project.title} — Projeto | Codelabz` : `${project.title} — Project | Codelabz`

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/projetos/${project.slug}`),
    openGraph: buildOpenGraph({
      locale,
      path: `/projetos/${project.slug}`,
      title,
      description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    }),
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function ProjetoDetalhePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const project = getProjectBySlug(slug, locale)

  if (!project) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'projects' })
  const p = await getTranslations({ locale, namespace: 'projectsPage' })
  const bc = await getTranslations({ locale, namespace: 'menu' })
  const description = t(project.descriptionKey as any)
  const details = project.details?.[locale]
  const homeLabel = locale === 'pt' ? 'Início' : 'Home'
  const aboutLabel = locale === 'pt' ? 'Sobre o projeto' : 'About the project'
  const categoryLabel = locale === 'pt' ? 'Categorias' : 'Categories'
  const linkLabel = locale === 'pt' ? 'Projeto online' : 'Live project'
  const moreProjectsLabel = locale === 'pt' ? 'Outros projetos' : 'More projects'
  const seeAllLabel = locale === 'pt' ? 'Ver todos os projetos' : 'View all projects'
  const contextLabel = locale === 'pt' ? 'Contexto' : 'Context'
  const solutionLabel = locale === 'pt' ? 'O que construímos' : 'What we built'
  const highlightsLabel = locale === 'pt' ? 'Principais entregas' : 'Key deliverables'

  const currentIndex = projects.findIndex((item) => item.id === project.id)
  const otherProjects = Array.from({ length: 2 }, (_, index) => projects[(currentIndex + index + 1) % projects.length])
    .filter((item) => item.id !== project.id)
    .map((item) => getProjectBySlug(item.slug, locale)!)

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: homeLabel, path: '/' },
          { name: bc('projects'), path: '/projetos' },
          { name: project.title, path: `/projetos/${project.slug}` },
        ])}
      />

      <header className="relative overflow-hidden bg-codelabz-dark pb-40 pt-32 lg:pb-52 lg:pt-40">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-codelabz-accent/10 blur-[110px]" />

        <div className="container relative mx-auto px-6">
          <Link href="/projetos" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white">
            <ArrowLeft size={16} />
            {bc('projects')}
          </Link>

          <nav className="mb-9 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Link href="/" className="transition-colors hover:text-white">{homeLabel}</Link>
            <span>/</span>
            <Link href="/projetos" className="transition-colors hover:text-white">{bc('projects')}</Link>
            <span>/</span>
            <span className="text-slate-300">{project.title}</span>
          </nav>

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="max-w-[12ch] font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-codelabz-accent px-7 py-4 font-bold text-white shadow-xl shadow-codelabz-accent/20 transition-all hover:-translate-y-1 hover:bg-rose-600"
              >
                {p('viewProject')}
                <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="bg-codelabz-light">
        <div className="container relative z-10 mx-auto -mt-24 px-6 lg:-mt-32">
          <figure className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(2,29,63,0.2)] lg:rounded-[2rem]">
            <div className="flex h-12 items-center gap-2 border-b border-slate-200 bg-white px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 truncate rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-medium text-slate-400 sm:text-xs">
                {project.link ? new URL(project.link).hostname.replace(/^www\./, '') : project.title}
              </span>
            </div>
            <div className="relative aspect-[16/9] w-full bg-codelabz-surface">
              <Image
                src={project.image}
                alt={locale === 'pt' ? `Tela inicial do projeto ${project.title}` : `Homepage of the ${project.title} project`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          </figure>
        </div>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div>
              <span className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
                <span className="h-px w-8 bg-codelabz-accent" />
                {aboutLabel}
              </span>

              <dl className="mt-8 space-y-6 border-t border-slate-200 pt-6">
                <div>
                  <dt className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{categoryLabel}</dt>
                  <dd className="font-semibold leading-6 text-codelabz-dark">{project.tags.join(' · ')}</dd>
                </div>
                {project.link && (
                  <div>
                    <dt className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{linkLabel}</dt>
                    <dd>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-codelabz-accent hover:underline">
                        {new URL(project.link).hostname.replace(/^www\./, '')}
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div>
              <p className="max-w-3xl font-display text-3xl font-semibold leading-[1.3] tracking-[-0.03em] text-codelabz-dark sm:text-4xl">
                {description}
              </p>

              {details && (
                <div className="mt-12 border-t border-slate-200 pt-10">
                  <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-codelabz-accent">{contextLabel}</h3>
                      <p className="text-base leading-7 text-slate-600">{details.context}</p>
                    </div>
                    <div>
                      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-codelabz-accent">{solutionLabel}</h3>
                      <p className="text-base leading-7 text-slate-600">{details.solution}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-codelabz-accent">{highlightsLabel}</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {details.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-codelabz-dark shadow-sm">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-codelabz-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-slate-200 py-16 lg:py-20">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 8% 10%, rgba(224,2,77,0.09), transparent 28%), radial-gradient(circle at 92% 90%, rgba(2,29,63,0.09), transparent 30%), linear-gradient(135deg, #fff 0%, #f5f3f7 100%)',
            }}
          />
          <div className="container relative mx-auto max-w-6xl px-6">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <span className="mb-3 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
                  <span className="h-px w-8 bg-codelabz-accent" />
                  {bc('projects')}
                </span>
                <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-codelabz-dark sm:text-4xl">
                  {moreProjectsLabel}
                </h2>
              </div>
              <Link href="/projetos" className="hidden items-center gap-2 rounded-full border border-codelabz-dark/15 px-6 py-3 text-sm font-bold text-codelabz-dark transition-all hover:border-codelabz-accent hover:bg-codelabz-accent hover:text-white sm:flex">
                {seeAllLabel}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid items-stretch gap-6 sm:grid-cols-2">
              {otherProjects.map((other) => (
                <ProjectCard
                  key={other.id}
                  slug={other.slug}
                  title={other.title}
                  description={t((other.shortDescriptionKey ?? other.descriptionKey) as any)}
                  image={other.image}
                  link={other.link}
                  tags={other.tags}
                  detailsLabel={p('detailsLabel')}
                  viewProjectLabel={p('viewProject')}
                  headingLevel="h3"
                  className="border border-slate-200 bg-white shadow-[0_18px_50px_rgba(2,29,63,0.1)]"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Cta />
    </>
  )
}
