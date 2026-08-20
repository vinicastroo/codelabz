'use client'

import { useTranslations } from 'next-intl'
import { Marquee } from '@/components/ui/marquee'

const LOGOS = [
  { name: 'Rafa Helena Arquitetura', src: '/logos/rafahelena-white.png', invert: false },
  { name: 'Auros Corretora', src: '/logos/auros-azul.svg', invert: true },
  { name: 'Cloock', src: '/logos/cloock-white.png', invert: false },
  { name: 'Fidliz', src: '/logos/fidliz.svg', invert: true },
  { name: 'Lovegoods', src: '/logos/lovegoods.svg', invert: true },
  { name: 'Patrono Jr.', src: '/logos/patrono.png', invert: true },
  { name: 'TB Motors', src: '/logos/tbmotors.svg', invert: true },
  { name: 'Unidavi', src: '/logos/unidavi.png', invert: true },
]

export function TrustedBy() {
  const t = useTranslations('trustedBy')

  return (
    <section className="relative bg-codelabz-dark border-t border-white/5 py-10 lg:py-14 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 lg:mb-10">
        <p className="text-center text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest">
          {t('title')}
        </p>
      </div>

      <div className="relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee pauseOnHover className="[--duration:34s] [--gap:1.5rem]">
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="relative flex items-center justify-center w-[150px] sm:w-[170px] h-16 sm:h-[72px] rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 px-5 py-3 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className={`max-h-8 sm:max-h-9 max-w-full w-auto h-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${logo.invert ? '[filter:brightness(0)_invert(1)]' : ''}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
