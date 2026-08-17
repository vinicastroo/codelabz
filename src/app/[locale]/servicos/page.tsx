import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ServicosPageClient from './servicos-client'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, buildAlternates, buildOpenGraph, servicesJsonLd } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: 'servicosMeta' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/servicos'),
    openGraph: buildOpenGraph({
      locale,
      path: '/servicos',
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

export default async function ServicosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: 'servicesPage' })
  const bc = await getTranslations({ locale, namespace: 'menu' })

  const services = [
    { name: t('service1Title'), description: t('service1Desc'), slug: 'criacao-de-sites' },
    { name: t('service2Title'), description: t('service2Desc'), slug: 'desenvolvimento-de-sistemas' },
    { name: t('service3Title'), description: t('service3Desc'), slug: 'desenvolvimento-de-api' },
    { name: t('service4Title'), description: t('service4Desc'), slug: 'deploy-de-aplicacoes' },
    { name: t('service5Title'), description: t('service5Desc'), slug: 'integracao-de-sistemas' },
    { name: t('service6Title'), description: t('service6Desc'), slug: 'automacao' },
  ]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: bc('services'), path: '/servicos' },
          ]),
          ...servicesJsonLd(locale, services),
        ]}
      />
      <ServicosPageClient />
    </>
  )
}
