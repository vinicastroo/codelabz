'use client'
import { AnimatePresence, motion } from "framer-motion"
import { X, Menu as MenuIcon } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"

function FlagBR() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#0F9B4F" />
      <path d="M12 4L21 12L12 20L3 12Z" fill="#FBC02D" />
      <circle cx="12" cy="12" r="4.2" fill="#2B4A9B" />
    </svg>
  )
}

function FlagUS() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 rounded-full" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#F5F5F5" />
      <g clipPath="url(#us-circle)">
        <rect y="1.8" width="24" height="2.6" fill="#B22234" />
        <rect y="7" width="24" height="2.6" fill="#B22234" />
        <rect y="12.2" width="24" height="2.6" fill="#B22234" />
        <rect y="17.4" width="24" height="2.6" fill="#B22234" />
        <rect y="0" width="12" height="12" fill="#3C3B6E" />
      </g>
      <defs>
        <clipPath id="us-circle">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
    </svg>
  )
}

function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <div className="flex items-center gap-1.5 px-1 py-0.5">
      <button
        onClick={() => switchLocale('pt')}
        aria-label="Português"
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${locale === 'pt' ? 'bg-white opacity-100' : 'opacity-30 hover:opacity-70'}`}
      >
        <FlagBR />
      </button>
      <button
        onClick={() => switchLocale('en')}
        aria-label="English"
        className={`flex items-center justify-center w-7 h-7 rounded-full transition-all ${locale === 'en' ? 'bg-white opacity-100' : 'opacity-30 hover:opacity-70'}`}
      >
        <FlagUS />
      </button>
    </div>
  )
}

export function Menu() {
  const t = useTranslations('menu')
  const [activePage, setActivePage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setMobileMenuOpen(false)
  }, [activePage])

  const navLinks = [
    { name: t('services'), id: "servicos" },
    { name: t('projects'), id: "projetos" },
    { name: t('contact'), id: "contato" },
    { name: t('blog'), id: "blog" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-codelabz-dark/95 backdrop-blur-md shadow-lg py-2 transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer flex items-center" onClick={() => setActivePage("home")}>
            <Link href='/'>
              <Image width={130} height={35} src="/logo-code.svg" alt="Logo Codelabz" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${link.id}`}
                className={`text-xs font-medium transition-colors hover:text-white ${activePage === link.id ? "text-white font-semibold" : "text-slate-300"}`}
              >
                {link.name}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link href="/contato"
              className="px-5 py-2 bg-codelabz-accent hover:bg-rose-600 text-white rounded-full font-bold text-xs transition-all transform hover:-translate-y-0.5 shadow-lg shadow-codelabz-accent/20"
            >
              {t('startProject')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-codelabz-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-codelabz-dark flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <Image width={150} height={40} src="/logo-code.svg" alt="Logo Codelabz" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-codelabz-accent">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-xl font-display font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.id}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left border-b border-white/5 pb-4 ${activePage === link.id ? "text-codelabz-accent" : "text-white"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 mt-2">
                <LanguageSwitcher />
              </div>
              <button
                className="mt-4 px-6 py-4 bg-codelabz-accent text-white rounded-lg text-center font-bold"
              >
                {t('startProject')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
