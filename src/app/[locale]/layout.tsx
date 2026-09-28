import type { Metadata } from 'next'
import { Geist, Bricolage_Grotesque } from 'next/font/google'
import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing, type Locale } from '@/i18n/routing'
import { Menu } from '@/components/Menu'
import { Footer } from '../Components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, buildAlternates, buildOpenGraph, localBusinessJsonLd, organizationJsonLd } from '@/lib/seo'

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
})
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/'),
    keywords:
      locale === 'pt'
        ? [
            'desenvolvimento de sites',
            'sistemas internos',
            'e-commerce',
            'desenvolvimento web em Balneário Camboriú',
            'integração de APIs',
            'Codelabz',
          ]
        : [
            'website development',
            'internal systems',
            'e-commerce development',
            'web development in Balneário Camboriú',
            'API integration',
            'Codelabz',
          ],
    openGraph: buildOpenGraph({
      locale,
      path: '/',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        { url: 'https://www.codelabz.com.br/logo.png', width: 800, height: 600 },
        { url: 'https://www.codelabz.com.br/logo.png', width: 1800, height: 1600 },
      ],
    }),
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://www.codelabz.com.br/logo.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'pt' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale === 'pt' ? 'pt-br' : 'en'}
      className="antialiased selection:bg-codelabz-accent selection:text-white"
    >
      <body className={`${geist.className} ${bricolage.variable}`}>
        <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen">
            <Menu />
            <main className="max-w-screen">{children}</main>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <SpeedInsights />
            <Analytics />
          </div>
          <GoogleTagManager gtmId="GTM-W4MB4WBZ" />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
