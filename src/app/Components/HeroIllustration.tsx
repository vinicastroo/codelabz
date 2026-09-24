'use client'

import { useState } from 'react'
import Image from 'next/image'

type HeroIllustrationProps = {
  alt: string
}

const SIZE_CLASS = 'w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]'

/** MacBook-shaped placeholder shown until the hero SVG (~270KB) finishes loading. */
function MacbookSkeleton() {
  return (
    <svg
      viewBox="0 0 438 438"
      className={`${SIZE_CLASS} motion-safe:animate-pulse`}
      aria-hidden="true"
    >
      {/* Screen */}
      <rect x="84" y="92" width="270" height="178" rx="14" className="fill-slate-300" />
      <rect x="98" y="106" width="242" height="150" rx="6" className="fill-slate-200" />
      {/* Screen content lines */}
      <rect x="118" y="130" width="120" height="12" rx="6" className="fill-slate-300" />
      <rect x="118" y="154" width="190" height="10" rx="5" className="fill-slate-300" />
      <rect x="118" y="172" width="160" height="10" rx="5" className="fill-slate-300" />
      <rect x="118" y="206" width="72" height="26" rx="8" className="fill-slate-300" />
      {/* Base */}
      <path d="M58 280h322l-18 26H76z" className="fill-slate-300" />
      <rect x="190" y="280" width="58" height="6" rx="3" className="fill-slate-200" />
    </svg>
  )
}

export function HeroIllustration({ alt }: HeroIllustrationProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative ${SIZE_CLASS}`} aria-busy={!loaded}>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <MacbookSkeleton />
      </div>
      <Image
        src="/illustration-hero.svg"
        alt={alt}
        width={500}
        height={500}
        priority
        onLoad={() => setLoaded(true)}
        className={`relative ${SIZE_CLASS} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
