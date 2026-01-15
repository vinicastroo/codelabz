'use client'
import { motion } from 'framer-motion'

export function ProcessStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }} // Mudado para whileInView para animar no scroll mobile também
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }} className="relative">
      <div className="text-6xl font-display font-black text-codelabz-accent mb-4">{number}</div>
      <h3 className="text-2xl font-display font-bold text-codelabz-dark mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </motion.div>
  )
}