'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { Cta } from '../../Components/Cta'

const technologies = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Stripe', 'AWS', 'Docker', 'Strapi']

export default function ServicosPageClient() {
  const t = useTranslations('servicesPage')

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      features: [t('service1f1'), t('service1f2'), t('service1f3'), t('service1f4'), t('service1f5')],
      image: '/illustration-seo.svg',
      alt: t('service1Alt'),
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      features: [t('service2f1'), t('service2f2'), t('service2f3'), t('service2f4')],
      image: '/illustration-dashboard.svg',
      alt: t('service2Alt'),
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      features: [t('service3f1'), t('service3f2'), t('service3f3'), t('service3f4')],
      image: '/illustration-api.svg',
      alt: t('service3Alt'),
    },
    {
      title: t('service4Title'),
      description: t('service4Desc'),
      features: [t('service4f1'), t('service4f2'), t('service4f3'), t('service4f4')],
      image: '/illustration-deploy.svg',
      alt: t('service4Alt'),
    },
    {
      title: t('service5Title'),
      description: t('service5Desc'),
      features: [t('service5f1'), t('service5f2'), t('service5f3'), t('service5f4')],
      image: '/illustration-integration.svg',
      alt: t('service5Alt'),
    },
    {
      title: t('service6Title'),
      description: t('service6Desc'),
      features: [t('service6f1'), t('service6f2'), t('service6f3'), t('service6f4')],
      image: '/illustration-automation.svg',
      alt: t('service6Alt'),
    },
  ]

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <header className="relative overflow-hidden bg-codelabz-dark pb-24 pt-36 lg:pb-32 lg:pt-44">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -right-36 -top-28 h-[480px] w-[480px] rounded-full bg-codelabz-accent/10 blur-[120px]" />

        <div className="container relative mx-auto px-6">
          <span className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
            <span className="h-px w-8 bg-codelabz-accent" />
            {t('tag')}
          </span>
          <h1 className="max-w-[12ch] font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
            {t('title')} <span className="text-codelabz-accent">{t('titleAccent')}</span> {t('titleEnd')}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300/75 sm:text-lg">
            {t('subtitle')}
          </p>
        </div>
      </header>

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto max-w-6xl px-6">
          {services.map((service, index) => {
            const reversed = index % 2 === 1

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className="grid gap-8 border-b border-slate-200 py-14 first:pt-0 last:border-0 last:pb-0 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-20"
              >
                <div className="lg:col-span-1 lg:self-start">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-codelabz-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={`relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-codelabz-light p-8 ${reversed ? 'lg:order-3' : 'lg:order-2'} lg:col-span-4`}>
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-codelabz-accent/10 blur-3xl" />
                  <Image src={service.image} alt={service.alt} width={230} height={230} className="relative h-48 w-48 object-contain lg:h-56 lg:w-56" />
                </div>

                <div className={`${reversed ? 'lg:order-2' : 'lg:order-3'} lg:col-span-7`}>
                  <h2 className="max-w-[18ch] font-display text-3xl font-bold leading-tight tracking-[-0.04em] text-codelabz-dark sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-codelabz-dark">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-codelabz-accent/10 text-codelabz-accent">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-codelabz-dark py-16 lg:py-20">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-codelabz-accent/10 blur-[100px]" />
        <div className="container relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-16">
            <div className="lg:col-span-2">
              <span className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
                <span className="h-px w-8 bg-codelabz-accent" />
                Stack
              </span>
              <h2 className="font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{t('techStack')}</h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">{t('techStackDesc')}</p>
            </div>

            <div className="grid gap-x-12 sm:grid-cols-2 lg:col-span-3">
              {[technologies.slice(0, 6), technologies.slice(6)].map((column, columnIndex) => (
                <div key={columnIndex} className="border-t border-white/15">
                  {column.map((technology, index) => {
                    const number = columnIndex === 0 ? index + 1 : index + 7

                    return (
                      <div key={technology} className="group flex items-center justify-between border-b border-white/10 py-4">
                        <span className="font-display text-lg font-bold text-slate-200 transition-colors group-hover:text-white">
                          {technology}
                        </span>
                        <span className="font-display text-[10px] font-bold tracking-[0.18em] text-codelabz-accent/70">
                          {String(number).padStart(2, '0')}
                        </span>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </motion.main>
  )
}
