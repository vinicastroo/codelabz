'use client'

import { motion } from 'framer-motion'
import { Gauge, Lock } from 'lucide-react'
import { useTranslations } from 'next-intl'

const CODE_LINES: { indent: number; parts: { text: string; className: string }[] }[] = [
  { indent: 0, parts: [{ text: 'export function Hero() {', className: 'text-sky-300' }] },
  { indent: 1, parts: [{ text: 'return (', className: 'text-slate-300' }] },
  { indent: 2, parts: [{ text: '<section>', className: 'text-codelabz-accent' }] },
  { indent: 3, parts: [{ text: '<h1>', className: 'text-codelabz-accent' }, { text: 'Sua marca, no topo', className: 'text-emerald-300' }] },
  { indent: 3, parts: [{ text: 'do Google', className: 'text-emerald-300' }, { text: '</h1>', className: 'text-codelabz-accent' }] },
  { indent: 2, parts: [{ text: '</section>', className: 'text-codelabz-accent' }] },
  { indent: 1, parts: [{ text: ')', className: 'text-slate-300' }] },
  { indent: 0, parts: [{ text: '}', className: 'text-sky-300' }] },
]

export function BrowserMockup() {
  const t = useTranslations('header')

  return (
    <div className="relative w-full max-w-[420px]" style={{ perspective: '1400px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: -8, rotateX: 4 }}
        animate={{ opacity: 1, y: [0, -12, 0], rotateY: -8, rotateX: 4 }}
        transition={{
          opacity: { duration: 0.9, ease: 'easeOut', delay: 0.2 },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative rounded-2xl border border-white/10 bg-[#04122b]/80 backdrop-blur-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[10px] text-slate-400 font-medium">
            <Lock size={10} />
            codelabz.com.br
          </div>
        </div>

        <div className="p-5 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-relaxed">
          {CODE_LINES.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.1}em` }} className="whitespace-pre">
              <span className="text-slate-600 select-none mr-3">{String(i + 1).padStart(2, '0')}</span>
              {line.parts.map((part, j) => (
                <span key={j} className={part.className}>
                  {part.text}
                  {j < line.parts.length - 1 ? ' ' : ''}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: [0, 10, 0], x: -20 }}
        transition={{
          opacity: { duration: 0.9, ease: 'easeOut', delay: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
        }}
        className="absolute -bottom-6 -left-6 sm:-left-10 flex items-center gap-3 pl-3 pr-5 py-3 rounded-2xl border border-white/10 bg-[#04122b]/90 backdrop-blur-xl shadow-2xl"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
          <Gauge size={18} />
        </div>
        <div>
          <p className="text-white font-display font-bold text-sm leading-none mb-1">98/100</p>
          <p className="text-slate-400 text-[11px] leading-none">{t('mockupBadge')}</p>
        </div>
      </motion.div>
    </div>
  )
}
