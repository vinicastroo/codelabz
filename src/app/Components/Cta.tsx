'use client'
import Link from 'next/link'

export function Cta() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10 bg-white">
        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#032550] mb-4 lg:mb-8">
          Pronto para tirar seu projeto do papel?
        </h2>
        <p className="text-[#032550]/90 text-lg lg:text-xl max-w-2xl mx-auto mb-5 lg:mb-10 ">
          Não perca mais tempo. A transformação digital da sua empresa começa com um clique.
        </p>
        <Link href="/contato">
          <button
            className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer  hover:scale-105 rounded-full font-bold transition-all tracking-wide text-lg"
          >
            Iniciar um projeto agora
          </button>
        </Link>
      </div>
    </section>
  )
}
