'use client'
import { motion } from 'framer-motion'
import React from 'react';

export function ServiceCard({
  title,
  desc,
  icon,
}: { id: string; title: string; desc: string; icon: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }} // Mudado para whileInView para animar no scroll mobile também
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }} className="bg-white p-8 rounded-2xl transition-all duration-300 group h-full">
      <div className="w-full h-52 text-codelabz-accent rounded-xl flex items-center justify-center mb-6  group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
      </div>
      <h3 className="text-xl font-display font-bold text-center text-codelabz-dark my-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed text-center">{desc}</p>
    </motion.div>
  )
}