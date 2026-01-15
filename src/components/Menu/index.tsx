'use client'
import { AnimatePresence, motion } from "framer-motion";
import { X, Menu as MenuIcon, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Menu() {
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
    // { name: "Início", id: "" },
    { name: "Serviços", id: "servicos" },
    { name: "Projetos", id: "projetos" },
    { name: "Contato", id: "contato" },
    { name: "Blog", id: "blog" },
  ]


  return (
    <>
      < header className="fixed top-0 left-0 right-0 z-50 bg-codelabz-dark/95 backdrop-blur-md shadow-lg py-3 transition-all duration-300" >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer flex items-center" onClick={() => setActivePage("home")}>
            <Link href='/'>
              <Image width={150} height={40} src="/logo-code.svg" alt="Logo Codelabz" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`/${link.id}`}
                className={`text-sm font-medium transition-colors hover:text-white ${activePage === link.id ? "text-white font-semibold" : "text-slate-300"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contato"
              className="px-6 py-2.5 bg-codelabz-accent hover:bg-rose-600 text-white rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-codelabz-accent/20"
            >
              Iniciar um projeto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-codelabz-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon size={28} />
          </button>
        </div>
      </header >

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
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
                <button
                  className="mt-4 px-6 py-4 bg-codelabz-accent text-white rounded-lg text-center font-bold"
                >
                  Iniciar Projeto
                </button>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  )
}