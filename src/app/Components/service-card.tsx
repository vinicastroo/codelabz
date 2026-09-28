'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

export function ServiceCard({
  icon,
  title,
  desc,
  index,
  featured = false,
  compact = false,
  wide = false,
  learnMoreLabel = 'Saiba mais',
}: {
  icon: ReactNode
  title: string
  desc: string
  index: string
  featured?: boolean
  compact?: boolean
  wide?: boolean
  learnMoreLabel?: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: Number(index) * 0.06 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1.5 hover:border-codelabz-accent/30 hover:shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-7 ${featured
        ? 'min-h-[330px] md:col-span-2 lg:col-span-7 lg:min-h-[330px] lg:p-8'
        : wide
          ? 'min-h-[250px] lg:col-span-6'
        : compact
          ? 'min-h-[250px] lg:col-span-4'
          : 'min-h-[250px] lg:col-span-5 lg:min-h-0'
        }`}
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-codelabz-accent/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-codelabz-accent/[0.06] blur-3xl transition-all duration-500 group-hover:bg-codelabz-accent/[0.12]" />

      {featured && (
        <div className="pointer-events-none absolute -bottom-10 -right-6 text-codelabz-accent/[0.045] [&>svg]:h-48 [&>svg]:w-48">
          {icon}
        </div>
      )}

      <div className={`relative flex items-center justify-between ${featured ? 'mb-8' : 'mb-5'}`}>
        <div className={`flex items-center justify-center rounded-2xl border border-codelabz-accent/15 bg-codelabz-accent/[0.07] text-codelabz-accent transition-all duration-500 group-hover:rotate-[-4deg] group-hover:border-codelabz-accent group-hover:bg-codelabz-accent group-hover:text-white group-hover:shadow-[0_10px_35px_rgba(224,2,77,0.25)] ${featured ? 'h-16 w-16' : compact ? 'h-11 w-11' : 'h-12 w-12'}`}>
          {icon}
        </div>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-codelabz-dark/25 transition-colors duration-300 group-hover:text-codelabz-accent">
          {index}
        </span>
      </div>

      <h3 className={`relative mb-4 max-w-[20ch] font-display font-bold leading-tight tracking-[-0.03em] text-codelabz-dark ${featured ? 'text-3xl lg:text-4xl' : compact ? 'text-xl' : 'text-2xl'}`}>{title}</h3>
      <p className={`relative flex-1 text-slate-600 ${featured ? 'max-w-2xl text-base leading-7 lg:text-lg lg:leading-8' : compact ? 'text-sm leading-6' : 'text-[15px] leading-7'}`}>{desc}</p>

      <div className="relative mt-6 border-t border-slate-200 pt-4">
        <Link
          href="/servicos"
          className="group/link flex items-center justify-between text-sm font-bold text-codelabz-dark transition-colors hover:text-codelabz-accent"
        >
          {learnMoreLabel}
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-codelabz-accent transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:border-codelabz-accent group-hover/link:bg-codelabz-accent group-hover/link:text-white">
            <ArrowRight size={15} />
          </span>
        </Link>
      </div>
    </motion.article>
  )
}
