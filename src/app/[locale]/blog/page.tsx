import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import BlogPageClient from './blog-client'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, buildAlternates, buildOpenGraph } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: 'blogMeta' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/blog'),
    openGraph: buildOpenGraph({
      locale,
      path: '/blog',
      title: t('ogTitle'),
      description: t('ogDescription'),
    }),
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale }
  const bc = await getTranslations({ locale, namespace: 'menu' })

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
          { name: bc('blog'), path: '/blog' },
        ])}
      />
      <BlogPageClient locale={locale} />
    </>
  )
}
