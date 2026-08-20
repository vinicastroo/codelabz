'use client'

import Image from 'next/image'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

const AVATARS = [
  '/avaliacao-foto-1.png',
  '/avaliacao-foto-2.png',
  '/avaliacao-foto-3.png',
  '/avaliacao-foto-4.png',
  '/avaliacao-foto-5.png',
]

export function Cta() {
  const t = useTranslations('cta')

  return (
    <section className="relative overflow-hidden bg-codelabz-light py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_100px_rgba(2,29,63,0.14)] lg:min-h-[470px] lg:grid-cols-[1.65fr_0.85fr] lg:rounded-[2.5rem]">
          <div className="relative flex flex-col p-8 sm:p-12 lg:p-14">
            <div className="absolute right-0 top-0 h-px w-2/3 bg-gradient-to-r from-transparent to-codelabz-accent/40" />

            <span className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
              <span className="h-px w-8 bg-codelabz-accent" />
              {t('eyebrow')}
            </span>

            <h2 className="max-w-[12ch] font-display text-4xl font-bold leading-[1.02] tracking-[-0.045em] text-codelabz-dark sm:text-5xl lg:text-7xl">
              {t('title')}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {t('subtitle')}
            </p>

            <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-6 lg:mt-auto">
              <div className="flex -space-x-3">
                {AVATARS.map((src, index) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    style={{ zIndex: AVATARS.length - index }}
                  />
                ))}
              </div>
              <span className="max-w-[250px] text-xs font-semibold leading-5 text-slate-500">
                {t('trustText')}
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-codelabz-accent p-8 sm:p-10 lg:min-h-0">
            <ArrowUpRight
              aria-hidden
              className="absolute -right-10 -top-12 h-64 w-64 text-white/[0.11] sm:h-72 sm:w-72"
              strokeWidth={1}
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            <div className="relative">
              <a
                href="https://wa.me/5547996164275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-codelabz-dark px-6 py-4 font-bold text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-[#00152f]"
              >
                <MessageCircle size={19} />
                {t('button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
