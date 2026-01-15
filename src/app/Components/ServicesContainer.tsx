import { ArrowRight, } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'
import { ServiceCard } from './service-card';

export function ServicesContainer() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-codelabz-dark backdrop-blur-md shadow-lg">
      {/* Modern Clean Background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div> */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.05,
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between sm:items-center lg:items-start  mb-16 gap-6">
          <div>
            <span className="text-codelabz-accent font-bold uppercase sm:text-start lg:text-start tracking-widest text-sm block mb-2">
              O que fazemos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Nossas Especialidades</h2>
          </div>
          <Link href="/servicos">
            <button
              className="px-2 py-1.5 lg:px-6 lg:py-3 sm:text-sm rounded-full border border-white  text-white hover:scale-105 cursor-pointer transition-all font-medium flex items-center gap-2"
            >
              Conhecer todos os serviços <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ServiceCard
            id="sites"
            title="Criação de Sites profissionais"
            desc="Sites rápidos, responsivos e otimizados para SEO, focados em posicionamento no Google, autoridade de marca e conversão."
            icon={<Image src="/illustration-seo.svg" alt="Ilustração de sites responsivos" width={200} height={200} />}
          />
          <ServiceCard
            id="systems"
            title="Desenvolvimento de Sistemas"
            desc="Sistemas sob medida para gestão, SaaS, dashboards e automação de processos, trazendo mais controle, eficiência e menos dependência de planilhas."
            icon={<Image src="/illustration-api.svg" alt="Ilustração de sites responsivos" width={200} height={200} />}
          />
          <ServiceCard
            id="ecommerce"
            title="E-commerce"
            desc="Lojas virtuais rápidas, seguras e escaláveis, com integração de pagamentos e logística para aumentar suas vendas online."
            icon={<Image src="/illustration-ecommerce.svg" alt="Ilustração de sites responsivos" width={200} height={200} />}
          />
        </div>
      </div>
    </section>

  )
}
