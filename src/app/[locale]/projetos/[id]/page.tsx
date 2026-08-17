import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
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

  const t = await getTranslations({ locale, namespace: 'projects' })
  const description = t(project.descriptionKey as any)
  const title =
    locale === 'pt'
      ? `${project.title} — Case de Sucesso | Codelabz`
      : `${project.title} — Case Study | Codelabz`

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
  const p = await getTranslations({ locale, namespace: 'projectsPage' })
  const bc = await getTranslations({ locale, namespace: 'menu' })
  const description = t(project.descriptionKey as any)

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
            {locale === 'pt' ? 'Sobre o projeto' : 'About the project'}
          </h2>
          <p className="text-gray-700 mb-6">{description}</p>
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
    </div>
  )
}
