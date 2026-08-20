'use client'
import { motion } from 'framer-motion'
import { Code2, PanelsTopLeft, Rocket, Search } from 'lucide-react'

const icons = {
  '01': Search,
  '02': PanelsTopLeft,
  '03': Code2,
  '04': Rocket,
}

export function ProcessStep({ number, title, text, last = false }: { number: string; title: string; text: string; last?: boolean }) {
  const Icon = icons[number as keyof typeof icons] ?? Search

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: Number(number) * 0.06 }}
      className={`group relative grid gap-5 px-6 py-7 transition-colors duration-300 hover:bg-white/[0.045] sm:grid-cols-[72px_1fr] sm:gap-7 sm:px-8 sm:py-8 lg:px-10 ${last ? '' : 'border-b border-white/10'}`}
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-codelabz-accent/25 bg-codelabz-accent/10 text-codelabz-accent transition-all duration-300 group-hover:border-codelabz-accent group-hover:bg-codelabz-accent group-hover:text-white">
        <Icon size={24} />
        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-codelabz-dark bg-white px-1 font-display text-[9px] font-bold text-codelabz-dark">
          {number}
        </span>
      </div>

      <div className="self-center">
        <h3 className="mb-2 font-display text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">{title}</h3>
        <p className="max-w-2xl text-sm leading-6 text-slate-300/75 sm:text-[15px] sm:leading-7">{text}</p>
      </div>
    </motion.div>
  )
}
