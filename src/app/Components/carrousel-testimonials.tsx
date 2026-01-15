'use client'
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

const items = [
  {
    name: "Rafaela Helena",
    role: "Arquiteta Proprietária",
    company: "Arquiteta",
    content:
      "Meu site de arquitetura ficou excelente! Do jeito que eu queria, super recomendo !!",
    image: "./avaliacao-foto-1.png",
  },
  {
    name: "Guilherme Schulze",
    role: "Videomaker & Fotógrafo",
    company: "Videomaker & Fotógrafo",
    content:
      "Fiz meu site profissional com a Code Labz e ficou excelente! O design é muito bonito, moderno e a navegação é super fluida. Fiquei muito satisfeito com o resultado e recomendo demais!",
    image: "./avaliacao-foto-2.png",
  },
  {
    name: "Renato Niehues",
    role: "Auros Corretora imobiliria",
    company: "Auros Corretora imobiliria",
    content:
      "Contratar a Code Labz foi essencial. Eles desenvolveram uma solução completa para nós: um site moderno para os clientes e um sistema robusto para nossa gestão de imóveis. Recomendo fortemente pela qualidade e competência.",
    image: "./avaliacao-foto-3.png",
  },
  {
    name: "Sérgio Dallolmo",
    role: "SDL Consultoria",
    company: "SDL Consultoria",
    content:
      "A Code Labz fez um excelente trabalho na nossa Landing Page. O site ficou profissional, objetivo e transmitiu perfeitamente a seriedade da nossa consultoria. Recomendo pela agilidade e qualidade.",
    image: "./avaliacao-foto-4.png",
  },
  {
    name: "Rosandro Schauffler",
    role: "APJESC",
    company: "APJESC",
    content:
      "Excelente trabalho da Code Labz. Desenvolveram um portal completo e um sistema interno que facilitou muito a administração e o controle dos nossos associados. Recomendo!",
    image: "./avaliacao-foto-5.png",
  },
]

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3)
      else if (window.innerWidth >= 768) setItemsPerPage(2)
      else setItemsPerPage(1)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, items.length - itemsPerPage)

  // ✅ FUNÇÃO MEMOIZADA (pra usar no interval sem bugs)
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  // ✅ se diminuir a tela e currentIndex ficar maior que maxIndex, corrige
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0)
  }, [itemsPerPage, maxIndex, currentIndex])

  return (
    <div className="relative group py-12 bg-codelabz-light">
      <div className="overflow-hidden px-4 py-4">
        <motion.div
          animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="flex gap-0"
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
              className="px-3"
            >
              <div className="h-full bg-white p-8 rounded-2xl shadow-sm border-2 border-slate-100 hover:shadow-md  transition-all duration-300 flex flex-col">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 flex-grow italic text-sm md:text-base">
                  {`"${item.content}"`}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h4 className="font-bold text-codelabz-dark text-sm">{item.name}</h4>
                    <p className="text-xs text-codelabz-accent font-semibold tracking-wide">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 bg-white text-codelabz-dark rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-codelabz-accent hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 bg-white text-codelabz-dark rounded-full shadow-lg border border-slate-100 flex items-center justify-center hover:bg-codelabz-accent hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
              ? "w-8 bg-codelabz-accent"
              : "w-2 bg-slate-300 hover:bg-codelabz-accent/50"
              }`}
          />
        ))}
      </div>
    </div>
  )
}
