import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Suspense } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Head from 'next/head'
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
      <Head>
        <meta
          name="facebook-domain-verification"
          content="6kezk737zh1ph4vvms50b6iv1cjro4"
        />
      </Head>
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
          <GoogleAnalytics gaId="G-ZMSWXB8HFV" />
        </Suspense>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2243382096030650');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{
              display: 'none',
            }}
            src="https://www.facebook.com/tr?id=2243382096030650&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  )
}
