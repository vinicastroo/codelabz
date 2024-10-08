import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Suspense } from 'react'
import { FacebookPixelEvents } from './Components/FacebookPixelEvents'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
const roboto = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Codelabz - Criação de sites e Desenvolvimento de sistemas',
  keywords: [
    'Criação de sites',
    'Desenvolvimento de sistemas',
    'Rio do sul',
    'Santa Catarina',
    'Codelabz',
    'Criação de sites em Rio do Sul',
    'Sistemas em Rio do Sul',
    'Desenvolvimento de API',
    'Deploy de aplicações',
    'Integração de Sistemas',
    'Consultorias em TI',
  ],
  description:
    'Transforme suas ideias em realidade com nossas soluções digitais abrangentes. Vamos além da criação de sites, oferecendo estratégias digitais que impulsionam o sucesso online do seu negócio. Descubra como podemos posicionar sua marca de forma eficaz no mundo digital e gerar resultados reais para o seu negócio.',
  openGraph: {
    title: 'Codelabz - Criação de sites e Desenvolvimento de sistemas',
    description:
      'Transforme suas ideias em realidade com nossas soluções digitais abrangentes. Vamos além da criação de sites ou desenvolvimento de sistemas, oferecendo estratégias digitais que impulsionam o sucesso online do seu negócio. Descubra como podemos posicionar sua marca de forma eficaz no mundo digital e gerar resultados reais para o seu negócio.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={roboto.className}>
        <div className="min-h-screen">
          {/* <Menu /> */}
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

        <Suspense fallback={null}>
          <FacebookPixelEvents />

          <GoogleAnalytics gaId="G-ZMSWXB8HFV" />
        </Suspense>
      </body>
    </html>
  )
}
