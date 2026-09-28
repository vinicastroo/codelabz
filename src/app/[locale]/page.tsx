import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header } from '../Components/Header'
import { TrustedBy } from '../Components/TrustedBy'
import { ProcessContainer } from '../Components/ProcessContainer'
import { ServicesContainer } from '../Components/ServicesContainer'
import { Cases } from '../Components/Cases'
import { Reason } from '../Components/Reason'
import { Cta } from '../Components/Cta'
import { Carousel } from '../Components/carrousel-testimonials'
import { buildAlternates, buildOpenGraph } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

export const revalidate = 3600

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: 'homeMeta' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/'),
    openGraph: buildOpenGraph({
      locale,
      path: '/',
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

export default function Home() {
  return (
    <>
      <Header />
      <TrustedBy />
      <Reason />
      <ServicesContainer />
      <Cases />
      <ProcessContainer />
      <Carousel />
      <Cta />
    </>
  )
}
