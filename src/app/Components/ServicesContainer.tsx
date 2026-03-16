'use client'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ServiceCard } from './service-card'
import { useTranslations } from 'next-intl'

export function ServicesContainer() {
  const t = useTranslations('services')

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-codelabz-dark backdrop-blur-md shadow-lg">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between sm:items-center lg:items-start mb-16 gap-6">
          <div>
            <span className="text-codelabz-accent font-bold uppercase sm:text-start lg:text-start tracking-widest text-sm block mb-2">
              {t('tag')}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">{t('title')}</h2>
          </div>
          <Link href="/servicos">
            <button
              className="px-2 py-1.5 lg:px-6 lg:py-3 sm:text-sm rounded-full border border-white text-white hover:scale-105 cursor-pointer transition-all font-medium flex items-center gap-2"
            >
              {t('seeAll')} <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            id="sites"
            title={t('card1Title')}
            desc={t('card1Desc')}
            icon={<Image src="/illustration-seo.svg" alt="Ilustração de sites responsivos" width={200} height={200} />}
          />
          <ServiceCard
            id="systems"
            title={t('card2Title')}
            desc={t('card2Desc')}
            icon={<Image src="/illustration-api.svg" alt="Ilustração de sites responsivos" width={200} height={200} />}
          />
          <ServiceCard
            id="ecommerce"
            title={t('card3Title')}
            desc={t('card3Desc')}
            icon={<Image src="/illustration-ecommerce.svg" alt="Ilustração de sites responsivos" width={200} height={200} />}
          />
        </div>
      </div>
    </section>
  )
}
