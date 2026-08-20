'use client'
import { ArrowRight, BrainCircuit, CloudCog, Globe, PanelsTopLeft, PlugZap, ShoppingCart, Workflow } from 'lucide-react'
import Link from 'next/link'
import { ServiceCard } from './service-card'
import { useTranslations } from 'next-intl'

export function ServicesContainer() {
  const t = useTranslations('services')

  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-codelabz-dark overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(224,2,77,0.18) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between sm:items-center lg:items-end mb-16 gap-6">
          <div>
            <span className="text-codelabz-accent font-bold uppercase sm:text-start lg:text-start tracking-widest text-sm block mb-3">
              {t('tag')}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">{t('title')}</h2>
          </div>
          <Link href="/servicos">
            <button
              className="px-6 py-3 text-sm rounded-full border border-white/20 text-white hover:bg-white/10 hover:-translate-y-0.5 cursor-pointer transition-all font-bold flex items-center gap-2 whitespace-nowrap"
            >
              {t('seeAll')} <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <ServiceCard
            index="01"
            title={t('card1Title')}
            desc={t('card1Desc')}
            icon={<Globe size={26} />}
            learnMoreLabel={t('learnMore')}
            featured
          />
          <ServiceCard
            index="02"
            title={t('card2Title')}
            desc={t('card2Desc')}
            icon={<BrainCircuit size={26} />}
            learnMoreLabel={t('learnMore')}
          />
          <ServiceCard
            index="03"
            title={t('card3Title')}
            desc={t('card3Desc')}
            icon={<ShoppingCart size={26} />}
            learnMoreLabel={t('learnMore')}
            compact
          />
          <ServiceCard
            index="04"
            title={t('card4Title')}
            desc={t('card4Desc')}
            icon={<PlugZap size={26} />}
            learnMoreLabel={t('learnMore')}
            compact
          />
          <ServiceCard
            index="05"
            title={t('card5Title')}
            desc={t('card5Desc')}
            icon={<CloudCog size={26} />}
            learnMoreLabel={t('learnMore')}
            compact
          />
          <ServiceCard
            index="06"
            title={t('card6Title')}
            desc={t('card6Desc')}
            icon={<Workflow size={24} />}
            learnMoreLabel={t('learnMore')}
            wide
          />
          <ServiceCard
            index="07"
            title={t('card7Title')}
            desc={t('card7Desc')}
            icon={<PanelsTopLeft size={24} />}
            learnMoreLabel={t('learnMore')}
            wide
          />
        </div>
      </div>
    </section>
  )
}
