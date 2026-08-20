'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"

export const Carousel: React.FC = () => {
  const t = useTranslations('testimonials')
  const locale = useLocale()

  const items = [
    {
      name: t('t1Name'),
      role: t('t1Role'),
      company: t('t1Company'),
      content: t('t1Content'),
      image: "/avaliacao-foto-1.png",
    },
    {
      name: t('t2Name'),
      role: t('t2Role'),
      company: t('t2Company'),
      content: t('t2Content'),
      image: "/avaliacao-foto-2.png",
    },
    {
      name: t('t3Name'),
      role: t('t3Role'),
      company: t('t3Company'),
      content: t('t3Content'),
      image: "/avaliacao-foto-3.png",
    },
    {
      name: t('t4Name'),
      role: t('t4Role'),
      company: t('t4Company'),
      content: t('t4Content'),
      image: "/avaliacao-foto-4.png",
    },
    {
      name: t('t5Name'),
      role: t('t5Role'),
      company: t('t5Company'),
      content: t('t5Content'),
      image: "/avaliacao-foto-5.png",
    },
    {
      name: t('t6Name'),
      role: t('t6Role'),
      company: t('t6Company'),
      content: t('t6Content'),
    },
    {
      name: t('t7Name'),
      role: t('t7Role'),
      company: t('t7Company'),
      content: t('t7Content'),
    },
  ]

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(0)
  }, [itemsPerPage, maxIndex, currentIndex])

  return (
    <div className="relative group py-24 lg:py-32 bg-codelabz-light">
      <div className="container mx-auto px-6 text-center mb-14 lg:mb-16">
        <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm block mb-3">{t('tag')}</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-codelabz-dark tracking-tight">{t('title')}</h2>
      </div>
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
              <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow italic text-sm md:text-base">
                  {`"${item.content}"`}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={locale === 'pt' ? `Foto de ${item.name}` : `Photo of ${item.name}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="w-10 h-10 shrink-0 rounded-full bg-codelabz-accent/10 ring-2 ring-slate-100 flex items-center justify-center text-codelabz-accent font-bold text-sm"
                    >
                      {item.name.charAt(0)}
                    </div>
                  )}
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
