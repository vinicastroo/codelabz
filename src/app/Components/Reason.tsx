'use client'
import { motion } from 'framer-motion'
import { CheckCircle2, Globe, Monitor, Rocket } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Reason() {
  const t = useTranslations('reason')

  const cards = [
    { icon: <Globe size={32} />, titleKey: 'card1Title', textKey: 'card1Text' },
    { icon: <Monitor size={32} />, titleKey: 'card2Title', textKey: 'card2Text' },
    { icon: <CheckCircle2 size={32} />, titleKey: 'card3Title', textKey: 'card3Text' },
    { icon: <Rocket size={32} />, titleKey: 'card4Title', textKey: 'card4Text' },
  ]

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <motion.div initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }} className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-codelabz-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-slate-600 text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              key={i}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 group"
            >
              <div className="w-14 h-14 bg-white text-codelabz-accent border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-codelabz-accent group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-codelabz-dark mb-3">{t(item.titleKey as any)}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{t(item.textKey as any)}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
