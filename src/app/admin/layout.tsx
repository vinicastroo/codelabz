import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Painel Codelabz',
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={`${poppins.className} bg-slate-100 text-codelabz-dark`}>{children}</body>
    </html>
  )
}
