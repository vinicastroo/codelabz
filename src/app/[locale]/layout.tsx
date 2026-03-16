import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Menu } from '@/components/Menu'
import { Footer } from '../Components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '800'] })

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
    keywords:
      locale === 'pt'
        ? [
            'criação de sites profissionais',
            'desenvolvimento de sistemas personalizados',
            'agência digital em Santa Catarina',
            'sites responsivos em Balneário Camboriú',
            'consultoria em tecnologia',
            'sistemas sob medida',
            'soluções digitais para empresas',
            'landing pages otimizadas',
            'integração de APIs',
            'Codelabz tecnologia',
          ]
        : [
            'professional website creation',
            'custom system development',
            'digital agency',
            'responsive websites',
            'technology consulting',
            'custom systems',
            'digital solutions for businesses',
            'optimized landing pages',
            'API integration',
            'Codelabz technology',
          ],
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: 'https://www.codelabz.com.br/',
      siteName: 'Codelabz',
      images: [
        { url: 'https://www.codelabz.com.br/logo.png', width: 800, height: 600 },
        { url: 'https://www.codelabz.com.br/logo.png', width: 1800, height: 1600 },
      ],
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
    },
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
      <body className={poppins.className}>
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
