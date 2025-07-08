import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Head from 'next/head'
const roboto = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codelabz - Criação de sites e Desenvolvimento de sistemas',
  description:
    'Transforme suas ideias em realidade com soluções digitais completas. Sites, sistemas, APIs, consultorias e estratégias para impulsionar sua marca online.',
  keywords: [
    'criação de sites profissionais',
    'desenvolvimento de sistemas personalizados',
    'agência digital em Santa Catarina',
    'sites responsivos em Rio do Sul',
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
      'Soluções digitais sob medida em Rio do Sul: criação de sites, sistemas, APIs e estratégias para empresas que querem crescer no digital.',
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
    <html lang="pt-br" className="antialiased">
      <Head>
        <meta
          name="facebook-domain-verification"
          content="6kezk737zh1ph4vvms50b6iv1cjro4"
        />

        {/* <meta
          name="adopt-website-id"
          content="10ffa802-5b28-4ed5-b6f0-652a2bb04ca8"
        /> */}
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

        <GoogleTagManager gtmId="GTM-W4MB4WBZ" />

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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16576045048"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16576045048');
          `}
        </Script>
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "r89mbd4nbc");
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
