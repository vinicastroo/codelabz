import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Code labz',
  description:
    'Transforme suas ideias em realidade com nossas soluções digitais abrangentes. Vamos além da criação de sites, oferecendo estratégias digitais que impulsionam o sucesso online do seu negócio. Descubra como podemos posicionar sua marca de forma eficaz no mundo digital e gerar resultados reais para o seu negócio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen">
          {/* <Menu /> */}
          <main className="max-w-screen">{children}</main>
        </div>
      </body>
    </html>
  )
}
