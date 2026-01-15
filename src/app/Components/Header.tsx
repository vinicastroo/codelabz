'use client'

import { ArrowRight, Rocket } from 'lucide-react'
import Link from 'next/link'
// import { Scene3D } from './Scene3D' // Parece não estar sendo usado no snippet, mas mantive a lógica
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  return (
    <header className="relative pt-8 pb-12 lg:pt-40 lg:pb-32 bg-[#F1F5F9] overflow-hidden">
      {/* Modern Clean Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.15,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 items-center">

        <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} // Mudado para whileInView para animar no scroll mobile também
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex justify-center items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-codelabz-dark text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 lg:mb-8 shadow-sm">
            <span className="relative flex items-center justify-center h-2 w-2">
              <span className="animate-ping absolute inline-flex top-0 left-0 items-center justify-center h-full w-full rounded-full bg-codelabz-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-codelabz-accent"></span>
            </span>
            Software house focada em produtos digitais
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold  text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] lg:mb-6 mb-2 text-codelabz-dark tracking-tight">
            Transformamos ideias em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-codelabz-accent to-codelabz-accent relative">
              soluções digitais
            </span>{" "}
            de verdade.
          </h1>

          {/* Paragraph */}
          <p className="text-sm md:text-xl text-slate-600 lg:mb-8 mb-2 sm:mb-10 leading-relaxed max-w-lg lg:max-w-xl font-light">
            Desenvolvemos sites e sistemas web personalizados, rápidos e escaláveis. Unimos design moderno, tecnologia sólida e foco total em resultado.

          </p>

          {/* Buttons Group */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full sm:w-auto">
            <Link href="/contato" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-8 lg:py-4 py-3 bg-codelabz-accent hover:bg-rose-600 text-white rounded-lg font-bold transition-all shadow-xl shadow-codelabz-accent/20 flex items-center justify-center gap-2 group hover:-translate-y-1"
              >
                <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
                Iniciar meu projeto
              </button>
            </Link>

            <Link href="/projetos" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto px-8 lg:py-4 py-3 bg-white border border-slate-200 text-codelabz-dark rounded-lg font-bold transition-all flex items-center justify-center shadow-sm hover:shadow-md"
              >
                Ver nossos projetos
              </button>
            </Link>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 lg:col-span-6 relative h-[250px] sm:h-[450px] lg:h-[600px] w-full lg:-mr-12 touch-none flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }} // Mudado para whileInView para animar no scroll mobile também
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center scale-90 sm:scale-100"
          >
            <Image src="/illustration-hero.svg" alt="Ilustração do Home" width={200} height={200} />
          </motion.div>
        </div>
      </div>
    </header>
  )
}