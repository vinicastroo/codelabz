'use client'
import { motion } from 'framer-motion'
export function Reason() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-linear py-10 mt-8 lg:mt-0 px-4"
    >
      <div className="m-auto flex w-full max-w-[1300px] flex-col items-center justify-between gap-8 px-4  lg:flex-row lg:px-0">
        <h2 className="font-mono text-2xl text-white lg:text-5xl">
          Por que preciso estar na internet ?
        </h2>
        <p className="max-w-[640px] font-mono text-white">
          Estar na internet é crucial para o sucesso dos negócios hoje. Amplia o
          alcance global, oferece acesso 24/7 aos clientes, e proporciona
          estratégias de publicidade online eficientes e econômicas. É
          fundamental para crescer e competir no mercado moderno.
        </p>
      </div>
    </motion.div>
  )
}
