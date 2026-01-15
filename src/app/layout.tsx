import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager, } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Head from 'next/head'
import { Menu } from '@/components/Menu'
import { Footer } from './Components/Footer'
const roboto = Poppins({ subsets: ['latin'], weight: ['400', '700', '800'] })

export const metadata: Metadata = {
  title: 'Codelabz - Criação de sites e Desenvolvimento de sistemas',
  description:
    'Transforme suas ideias em realidade com soluções digitais completas. Sites, sistemas, APIs, consultorias e estratégias para impulsionar sua marca online.',
  keywords: [
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
  ],
  openGraph: {
    title: 'Codelabz - Criação de sites e Desenvolvimento de sistemas',
    description:
      'Transforme suas ideias em realidade com nossas soluções digitais. Vamos além da criação de sites, oferecendo estratégias digitais que geram resultados reais.',
    url: 'https://www.codelabz.com.br/',
    siteName: 'Codelabz',
    images: [
      {
        url: 'https://www.codelabz.com.br/logo.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://www.codelabz.com.br/logo.png',
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codelabz - Criação de sites e sistemas sob medida',
    description:
      'Soluções digitais sob medida em Balneário Camboriú: criação de sites, sistemas, APIs e estratégias para empresas que querem crescer no digital.',
    images: ['https://www.codelabz.com.br/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased selection:bg-codelabz-accent selection:text-white">
      <body className={roboto.className}>
        <div className="min-h-screen ">
          <Menu />
          <main className="max-w-screen ">{children}</main>
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
      </body>
    </html>
  )
}
