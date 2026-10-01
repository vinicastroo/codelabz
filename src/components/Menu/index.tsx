'use client'
import { AnimatePresence, motion } from "framer-motion"
import { X, Menu as MenuIcon, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { Link, useRouter, usePathname } from "@/i18n/navigation"

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

const LOCALES = [
  { code: 'pt', label: 'PT', name: 'Português', Flag: FlagBR },
  { code: 'en', label: 'EN', name: 'English', Flag: FlagUS },
] as const

function LanguageSwitcher({ size = 'sm' }: { size?: 'sm' | 'lg' }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={`items-center rounded-full border border-white/10 bg-white/5 p-0.5 ${size === 'lg' ? 'flex w-full' : 'inline-flex'}`}>
      {LOCALES.map(({ code, label, name, Flag }) => {
        const active = locale === code
        return (
          <button
            key={code}
            onClick={() => router.replace(pathname, { locale: code })}
            aria-label={name}
            aria-pressed={active}
            className={`flex items-center justify-center gap-1.5 rounded-full font-bold tracking-wide transition-colors ${
              size === 'lg' ? 'flex-1 px-4 py-2.5 text-sm' : 'px-2.5 py-1 text-[11px]'
            } ${active ? 'bg-white text-codelabz-dark' : 'text-slate-300 hover:text-white'}`}
          >
            <Flag />
            {label}
          </button>
        )
      })}
    </div>
  )
}

export function Menu() {
  const t = useTranslations('menu')
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: t('services'), href: "/servicos" },
    { name: t('projects'), href: "/projetos" },
    { name: t('contact'), href: "/contato" },
    { name: t('blog'), href: "/blog" },
  ]

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? 'bg-codelabz-dark/95 border-white/10 shadow-lg shadow-black/10'
            : 'bg-codelabz-dark border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-14 md:h-16 flex justify-between items-center">
          <Link href="/" aria-label="Codelabz" className="flex items-center shrink-0">
            <Image width={130} height={35} src="/logo-code.svg" alt="Logo Codelabz" priority className="w-[112px] md:w-[130px] h-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    active ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="mx-2 h-5 w-px bg-white/10" aria-hidden />
            <LanguageSwitcher />
            <Link
              href="/contato"
              className="ml-2 px-5 py-2.5 bg-codelabz-accent hover:bg-rose-600 text-white rounded-full font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-codelabz-accent/25"
            >
              {t('startProject')}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden -mr-2 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-codelabz-dark md:hidden"
          >
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-codelabz-accent/20 blur-3xl"
              aria-hidden
            />

            <div className="relative flex h-14 shrink-0 items-center justify-between px-4 border-b border-white/10">
              <Link href="/" aria-label="Codelabz" onClick={() => setMobileMenuOpen(false)}>
                <Image width={130} height={35} src="/logo-code.svg" alt="Logo Codelabz" className="w-[112px] h-auto" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="relative flex flex-col px-4 pt-6">
              {navLinks.map((link, i) => {
                const active = isActive(link.href)
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className="group flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-mono text-slate-500">0{i + 1}</span>
                        <span className={`font-display text-2xl font-semibold ${active ? 'text-codelabz-accent' : 'text-white'}`}>
                          {link.name}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={20}
                        className={`transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${active ? 'text-codelabz-accent' : 'text-slate-500'}`}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}
              className="relative mt-auto flex flex-col gap-4 px-4 pt-10 pb-8"
            >
              <LanguageSwitcher size="lg" />
              <Link
                href="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-codelabz-accent px-6 py-4 font-bold text-white shadow-lg shadow-codelabz-accent/25 transition-colors hover:bg-rose-600"
              >
                {t('startProject')}
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
