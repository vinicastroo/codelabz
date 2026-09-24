import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Check } from 'lucide-react'
import NextLink from 'next/link'
import { Link } from '@/i18n/navigation'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, buildAlternates, buildOpenGraph } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'
import { getProjectById, projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = (await params) as { locale: Locale; id: string }
  const project = getProjectById(Number(id))

  if (!project) {
    return {}
  }

  const cs = await getTranslations({ locale, namespace: 'caseStudies' })
  const p = await getTranslations({ locale, namespace: 'projectsPage' })
  const description = cs(`${project.descriptionKey}.metaDescription` as any)
  const title = `${project.seoTitle ?? project.title} — ${p('caseSuffix')} | Codelabz`

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/projetos/${project.id}`),
    openGraph: buildOpenGraph({
      locale,
      path: `/projetos/${project.id}`,
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
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = (await params) as { locale: Locale; id: string }
  const project = getProjectById(Number(id))

  if (!project) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'projects' })
  const cs = await getTranslations({ locale, namespace: 'caseStudies' })
  const p = await getTranslations({ locale, namespace: 'projectsPage' })
  const bc = await getTranslations({ locale, namespace: 'menu' })
  const description = t(project.descriptionKey as any)
  const caseKey = project.descriptionKey
  const deliverables = cs.raw(`${caseKey}.deliverables`) as string[]

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 pt-32">
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
          { name: bc('projects'), path: '/projetos' },
          { name: project.title, path: `/projetos/${project.id}` },
        ])}
      />
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={project.image}
            alt={`Print da tela inicial do projeto ${project.title}, desenvolvido pela Codelabz`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-codelabz-dark">{project.title}</h1>
          <h2 className="text-sm font-bold uppercase tracking-wider text-codelabz-accent mb-2">
            {p('aboutTitle')}
          </h2>
          <p className="text-gray-700 mb-8">{description}</p>

          <h2 className="text-xl font-bold text-codelabz-dark mb-2">{p('challengeTitle')}</h2>
          <p className="text-gray-700 mb-8">{cs(`${caseKey}.challenge` as any)}</p>

          <h2 className="text-xl font-bold text-codelabz-dark mb-2">{p('solutionTitle')}</h2>
          <p className="text-gray-700 mb-8">{cs(`${caseKey}.solution` as any)}</p>

          <h2 className="text-xl font-bold text-codelabz-dark mb-3">{p('deliverablesTitle')}</h2>
          <ul className="mb-8 space-y-2">
            {deliverables.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <Check size={18} className="mt-0.5 shrink-0 text-codelabz-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          {project.relatedPostSlug && (
            <p className="mb-8">
              <NextLink
                href={`/blog/${project.relatedPostSlug}`}
                className="font-semibold text-codelabz-accent hover:underline"
              >
                {p('readCase')} →
              </NextLink>
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-codelabz-accent text-white px-4 py-2 rounded hover:opacity-90 transition"
              >
                {p('viewProject')}
              </a>
            )}
            <Link
              href="/projetos"
              className="bg-codelabz-dark text-white px-4 py-2 rounded hover:opacity-90 transition"
            >
              ← {bc('projects')}
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-10 rounded-xl bg-codelabz-dark p-8 text-center text-white">
        <h2 className="mb-2 text-2xl font-bold">{p('similarTitle')}</h2>
        <p className="mb-6 text-slate-300">{p('similarText')}</p>
        <Link
          href="/contato"
          className="inline-block rounded-full bg-codelabz-accent px-6 py-3 font-bold text-white transition hover:bg-rose-600"
        >
          {p('ctaButton')}
        </Link>
      </section>
    </div>
  )
}
