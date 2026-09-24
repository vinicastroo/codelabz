import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ContatoPageClient from './contato-client'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd, buildAlternates, buildOpenGraph, faqJsonLd, type FaqItem } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale }
  const t = await getTranslations({ locale, namespace: 'contatoMeta' })

  return {
    title: t('title'),
    description: t('description'),
    alternates: buildAlternates(locale, '/contato'),
    openGraph: buildOpenGraph({
      locale,
      path: '/contato',
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

export default async function ContatoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale }
  const bc = await getTranslations({ locale, namespace: 'menu' })
  const t = await getTranslations({ locale, namespace: 'contactPage' })
  const faq = t.raw('faq') as FaqItem[]

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: bc('contact'), path: '/contato' },
          ]),
          faqJsonLd(faq),
        ]}
      />
      <ContatoPageClient />
      <section className="pb-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-codelabz-dark">{t('faqTitle')}</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none font-bold text-codelabz-dark marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
