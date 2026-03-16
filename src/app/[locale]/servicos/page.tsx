'use client'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TechBadge: React.FC<{ name: string }> = ({ name }) => (
  <div className="px-5 py-3 bg-white border border-slate-200 rounded-lg text-codelabz-dark font-semibold text-sm hover:bg-codelabz-accent hover:text-white hover:border-codelabz-accent transition-all cursor-default">
    {name}
  </div>
)

export default function ServicosPage() {
  const t = useTranslations('servicesPage')

  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      features: [t('service1f1'), t('service1f2'), t('service1f3'), t('service1f4'), t('service1f5')],
      icon: <Image src="/illustration-seo.svg" alt="Website illustration" width={200} height={200} />,
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      features: [t('service2f1'), t('service2f2'), t('service2f3'), t('service2f4')],
      icon: <Image src="/illustration-dashboard.svg" alt="System illustration" width={200} height={200} />,
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      features: [t('service3f1'), t('service3f2'), t('service3f3'), t('service3f4')],
      icon: <Image src="/illustration-api.svg" alt="API illustration" width={200} height={200} />,
    },
    {
      title: t('service4Title'),
      description: t('service4Desc'),
      features: [t('service4f1'), t('service4f2'), t('service4f3'), t('service4f4')],
      icon: <Image src="/illustration-deploy.svg" alt="Deploy illustration" width={200} height={200} />,
    },
    {
      title: t('service5Title'),
      description: t('service5Desc'),
      features: [t('service5f1'), t('service5f2'), t('service5f3'), t('service5f4')],
      icon: <Image src="/illustration-integration.svg" alt="Integration illustration" width={200} height={200} />,
    },
    {
      title: t('service6Title'),
      description: t('service6Desc'),
      features: [t('service6f1'), t('service6f2'), t('service6f3'), t('service6f4')],
      icon: <Image src="/illustration-automation.svg" alt="Automation illustration" width={200} height={200} />,
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="bg-codelabz-dark py-20 lg:py-28 border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-codelabz-accent/5 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            {t('title')} <span className="text-codelabz-accent">{t('titleAccent')}</span> {t('titleEnd')}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-slate-100 group"
            >
              <div className="p-4">
                <div className="w-full h-52 text-codelabz-accent rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 80 })}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-display font-bold text-codelabz-dark mb-1">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 my-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-codelabz-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-codelabz-accent"></div> {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 text-center">
        <h3 className="text-2xl font-display font-bold mb-5 text-codelabz-dark">{t('techStack')}</h3>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
          {t('techStackDesc')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Stripe', 'AWS', 'Docker', 'Strapi'].map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/contato"
            className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer hover:scale-105 rounded-full font-bold transition-all tracking-wide text-lg"
          >
            {t('talkToExpert')}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
