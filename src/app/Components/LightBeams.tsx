'use client'

import { motion } from 'framer-motion'

type LightBeamsProps = {
  variant?: 'dark' | 'light'
}

export function LightBeams({ variant = 'dark' }: LightBeamsProps) {
  const isLight = variant === 'light'

  if (isLight) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(2,29,63,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(2,29,63,0.035) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${isLight ? 'rgba(2,29,63,0.1)' : 'rgba(255,255,255,1)'} 1px, transparent 1px), linear-gradient(90deg, ${isLight ? 'rgba(2,29,63,0.1)' : 'rgba(255,255,255,1)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: isLight ? 0.45 : 0.05,
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: 28 }}
        animate={{ opacity: 1, rotate: [28, 24, 28] }}
        transition={{ opacity: { duration: 1.4 }, rotate: { duration: 16, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute -top-[20%] right-[6%] h-[150%] w-[10%] origin-top"
        style={{
          background: isLight
            ? 'linear-gradient(180deg, transparent 0%, rgba(226,236,248,0.8) 12%, rgba(86,126,174,0.42) 30%, rgba(3,37,80,0.3) 55%, rgba(3,37,80,0.08) 80%, transparent 100%)'
            : 'linear-gradient(180deg, transparent 0%, rgba(255,235,240,0.9) 12%, rgba(255,150,180,0.7) 30%, rgba(224,2,77,0.55) 55%, rgba(224,2,77,0.15) 80%, transparent 100%)',
          filter: 'blur(18px)',
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: 28 }}
        animate={{ opacity: 1, rotate: [28, 24, 28] }}
        transition={{ opacity: { duration: 1.4 }, rotate: { duration: 16, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute -top-[20%] right-[2%] h-[150%] w-[28%] origin-top"
        style={{
          background: isLight
            ? 'linear-gradient(180deg, transparent 0%, rgba(3,37,80,0.22) 20%, rgba(3,37,80,0.12) 45%, transparent 85%)'
            : 'linear-gradient(180deg, transparent 0%, rgba(224,2,77,0.5) 20%, rgba(224,2,77,0.3) 45%, transparent 85%)',
          filter: 'blur(70px)',
        }}
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-25%] right-[-10%] h-[60%] w-[45%] rounded-full"
        style={{ background: `radial-gradient(circle, ${isLight ? 'rgba(3,37,80,0.16)' : 'rgba(224,2,77,0.3)'} 0%, transparent 70%)`, filter: 'blur(90px)' }}
      />

      <div
        className="absolute bottom-[-30%] left-[-10%] h-[70%] w-[50%] rounded-full"
        style={{ background: `radial-gradient(circle, rgba(3,37,80,${isLight ? 0.08 : 0.9}) 0%, transparent 70%)`, filter: 'blur(80px)' }}
      />

      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${isLight ? 'to-white' : 'to-codelabz-dark'}`} />
    </div>
  )
}
