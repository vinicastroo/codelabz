'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Globe, Monitor, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Reason() {
  const t = useTranslations('reason')

  const cards = [
    { icon: <Globe size={28} />, titleKey: 'card1Title', textKey: 'card1Text' },
    { icon: <Monitor size={28} />, titleKey: 'card2Title', textKey: 'card2Text' },
    { icon: <CheckCircle2 size={28} />, titleKey: 'card3Title', textKey: 'card3Text' },
    { icon: <Rocket size={28} />, titleKey: 'card4Title', textKey: 'card4Text' },
  ]

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-codelabz-dark mb-5 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              key={i}
              className="relative bg-slate-50 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-2 transition-all duration-300 border border-slate-100 group"
            >
              <span className="absolute top-6 right-7 font-display font-black text-3xl text-slate-200 group-hover:text-codelabz-accent/15 transition-colors">
                0{i + 1}
              </span>
              <div className="w-14 h-14 bg-codelabz-dark text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-codelabz-accent transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-display font-bold text-codelabz-dark mb-3">{t(item.titleKey as any)}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{t(item.textKey as any)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
