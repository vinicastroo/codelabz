'use client'

import { Rocket, ArrowRight, Gauge, Layers3, MonitorSmartphone } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { LightBeams } from './LightBeams'
import { MacbookHero } from './MacbookHero'

export function Header() {
  const t = useTranslations('header')

  return (
    <header className="relative flex h-screen w-full max-w-full items-center overflow-hidden bg-white pt-16">
      <LightBeams variant="light" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full bg-codelabz-dark/5 border border-codelabz-dark/10 backdrop-blur-sm text-slate-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-6 lg:mb-8">
            <span className="relative flex items-center justify-center h-2 w-2">
              <span className="animate-ping absolute inline-flex top-0 left-0 items-center justify-center h-full w-full rounded-full bg-codelabz-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-codelabz-accent"></span>
            </span>
            {t('badge')}
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.08] mb-6 text-codelabz-dark tracking-tight">
            {t('title1')}{' '}
            <span className="text-codelabz-accent">
              {t('titleAccent')}
            </span>{' '}
            {t('title2')}
          </h1>

          <p className="text-base md:text-xl text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-lg lg:max-w-xl font-light">
            {t('description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full sm:w-auto">
            <Link href="/contato" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-codelabz-accent hover:bg-rose-600 text-white rounded-full font-bold transition-all shadow-xl shadow-codelabz-accent/30 flex items-center justify-center gap-2 group hover:-translate-y-1">
                <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
                {t('cta1')}
              </button>
            </Link>

            <Link href="/projetos" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/70 border border-codelabz-dark/20 text-codelabz-dark rounded-full font-bold transition-all flex items-center justify-center gap-2 group hover:bg-white hover:border-codelabz-dark/35 hover:-translate-y-1 shadow-sm">
                {t('cta2')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 lg:col-span-5 relative h-[280px] sm:h-[420px] lg:h-[560px] w-full lg:w-[140%]">
          <div
            className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(3,37,80,0.16) 0%, transparent 70%)', filter: 'blur(50px)' }}
          />
          <MacbookHero />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 0.8, duration: 0.5 }, scale: { delay: 0.8, duration: 0.5 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
            className="pointer-events-none absolute left-[4%] top-[18%] z-20 hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-[#061a36]/55 px-3 py-2 text-white shadow-xl shadow-black/20 backdrop-blur-2xl"
          >
            <Gauge size={15} className="text-emerald-300" />
            <strong className="text-[11px] font-bold">{t('performanceBadge')}</strong>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, 7, 0] }}
            transition={{ opacity: { delay: 1, duration: 0.5 }, scale: { delay: 1, duration: 0.5 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 } }}
            className="pointer-events-none absolute right-[8%] top-[39%] z-20 hidden md:flex items-center gap-2 rounded-full border border-white/15 bg-[#061a36]/55 px-3 py-2 text-white shadow-xl shadow-black/20 backdrop-blur-2xl"
          >
            <MonitorSmartphone size={15} className="text-cyan-300" />
            <strong className="text-[11px] font-bold">{t('responsiveBadge')}</strong>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ opacity: { delay: 1.2, duration: 0.5 }, scale: { delay: 1.2, duration: 0.5 }, y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 } }}
            className="pointer-events-none absolute bottom-[14%] left-[9%] z-20 hidden md:flex items-center gap-2 rounded-full border border-codelabz-accent/25 bg-[#061a36]/60 px-3 py-2 text-white shadow-xl shadow-codelabz-accent/10 backdrop-blur-2xl"
          >
            <Layers3 size={15} className="text-rose-300" />
            <strong className="text-[11px] font-bold">{t('workflowBadge')}</strong>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
