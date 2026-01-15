import { ChevronRight, Facebook, Instagram, Linkedin, Mail, Phone, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <>
      <footer className="bg-codelabz-dark border-t border-white/5 pt-16 pb-8 text-slate-400">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className='flex flex-col gap-2'>
                <Link className="mb-2 cursor-pointer" href="/">
                  <Image width={150} height={40} src="/logo-code.svg" alt="Logo Codelabz" />
                </Link>
                <p className="text-sm leading-relaxed mb-6 max-w-xs">
                  Transformamos ideias em experiências digitais de verdade. Performance, design e resultado para o seu
                  negócio.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-codelabz-accent/30 hover:bg-white/30 flex items-center justify-center  hover:text-white transition-colors group"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform stroke-codelabz-accent group-hover:stroke-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-codelabz-accent/30 hover:bg-white/30 flex items-center justify-center  hover:text-white transition-colors group"
                >
                  <Facebook size={20} className="group-hover:scale-110 transition-transform stroke-codelabz-accent group-hover:stroke-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/code-labz/"
                  className="w-10 h-10 rounded-full bg-codelabz-accent/30 hover:bg-white/30 flex items-center justify-center  hover:text-white transition-colors group"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform stroke-codelabz-accent group-hover:stroke-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-wider">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-codelabz-accent" /> Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicos"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-codelabz-accent" /> Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projetos"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-codelabz-accent" /> Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-codelabz-accent" /> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    <ChevronRight size={14} className="text-codelabz-accent" /> Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-wider">Fale Conosco</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <Mail size={18} className="text-codelabz-accent mt-0.5 group-hover:text-white transition-colors" />
                  <span className="group-hover:text-white transition-colors">contato@codelabz.com.br</span>
                </li>
                <li className="flex items-start gap-3 group cursor-pointer">
                  <a href="https://wa.me/5547996164275" className="flex items-start gap-3 group cursor-pointer">
                    <Phone size={18} className="text-codelabz-accent mt-0.5 group-hover:text-white transition-colors" />
                    <span className="group-hover:text-white transition-colors">+55 47 99616-4275</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5547996164275"
                    className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366] rounded hover:bg-[#25D366] hover:text-white transition-all font-semibold"
                  >
                    <Users size={16} /> Fale pelo WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-wider">Localização</h4>
              <p className="text-sm text-slate-400">
                Balneário Camboriú, SC - Brasil
                <br />
                Atendemos projetos em todo o país e exterior.
              </p>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
            <p>&copy; {new Date().getFullYear()} Codelabz. Todos os direitos reservados.</p>
            <p>Transformamos ideias em código.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
