'use client';
import { IlustrationAPI, IlustrationDashboard, IlustrationDeploy, IlustrationECommerce, IlustrationHome, IlustrationIntegration, IlustrationResponsive, IlustrationServicesCode } from "@/assets/ilustrations";
import { Layout, ShoppingCart, Code2, Zap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const TechBadge: React.FC<{ name: string }> = ({ name }) => (
  <div className="px-5 py-3 bg-white border border-slate-200 rounded-lg text-codelabz-dark font-semibold text-sm hover:bg-codelabz-accent hover:text-white hover:border-codelabz-accent transition-all cursor-default">
    {name}
  </div>
)


export default function ServicosPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
      <div className="bg-codelabz-dark py-20 lg:py-28 border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-codelabz-accent/5 skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-6 relative z-10 pt-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
            O que a <span className="text-codelabz-accent">Codelabz</span> faz por você
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Soluções digitais de ponta a ponta. Não entregamos apenas código, entregamos valor, estratégia e resultado
            para o seu negócio.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Criação de Sites",
              description:
                "Desenvolvemos sites modernos, rápidos e responsivos para fortalecer sua presença online e transformar visitantes em clientes.",
              features: [
                "Sites institucionais e landing pages",
                "Sites profissionais",
                "Design moderno e responsivo",
                "Alta performance e SEO",
                "Integração com WhatsApp e formulários",
              ],

              icon: <Image src="/illustration-seo.svg" alt="Ilustração de sites responsivos" width={200} height={200} />,
            },
            {
              title: "Desenvolvimento de Sistemas",
              description:
                "Transformamos ideias em sistemas inteligentes que automatizam processos, otimizam rotinas e resolvem problemas específicos do seu negócio com eficiência.",
              features: [
                "Sistemas sob medida",
                "Automação de processos",
                "Dashboards e relatórios",
                "Painéis administrativos",
              ],
              icon: <Image src="/illustration-dashboard.svg" alt="Ilustração de sites responsivos" width={200} height={200} />,
            },
            {
              title: "Desenvolvimento de API",
              description:
                "Criamos APIs robustas que conectam plataformas, integram serviços e permitem que diferentes sistemas conversem entre si de forma segura, rápida e confiável.",
              features: [
                "APIs REST / GraphQL",
                "Integrações seguras",
                "Performance e escalabilidade",
                "Documentação (Swagger/OpenAPI)",
              ],
              icon: <Image src="/illustration-api.svg" alt="Ilustração de sites responsivos" width={200} height={200} />,
            },
            {
              title: "Deploy de aplicações",
              description:
                "Publicamos e configuramos sua aplicação na nuvem, tornando-a acessível, segura e escalável — pronta para receber usuários de qualquer lugar do mundo.",
              features: [
                "Deploy em VPS ou Cloud",
                "SSL e domínio configurados",
                "CI/CD automatizado",
                "Monitoramento e backups",
              ],
              icon: <Image src="/illustration-deploy.svg" alt="Ilustração de sites responsivos" width={200} height={200} />,
            },
            {
              title: "Integração de Sistemas",
              description:
                "Conectamos diferentes softwares e plataformas para que eles compartilhem dados em tempo real, reduzindo retrabalho e aumentando a produtividade da sua operação.",
              features: [
                "Integração via API/Webhooks",
                "Sincronização em tempo real",
                "Automação entre plataformas",
                "Redução de retrabalho",
              ],
              icon: <Image src="/illustration-integration.svg" alt="Ilustração de sites responsivos" width={200} height={200} />,
            },
            {
              title: "Automação",
              description:
                "Automatizamos tarefas e fluxos do seu negócio para reduzir tempo operacional, eliminar erros manuais e aumentar produtividade com processos inteligentes.",
              features: [
                "Automação de tarefas repetitivas",
                "Integrações com ferramentas (Zapier, Make, N8N)",
                "Disparos automáticos (WhatsApp / Email)",
                "Workflows personalizados",
              ],
              icon: (
                <Image
                  src="/illustration-automation.svg"
                  alt="Ilustração de automação"
                  width={200}
                  height={200}
                />
              ),
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-slate-100 group"
            >
              <div className="p-4">
                <div className="w-full h-52  text-codelabz-accent rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { size: 80 })}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-display font-bold text-codelabz-dark mb-1">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 my-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-codelabz-dark">
                      <div className="w-1.5 h-1.5 rounded-full bg-codelabz-accent"></div> {feat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 text-center">
        <h3 className="text-2xl font-display font-bold mb-5 text-codelabz-dark">Stack Tecnológico</h3>
        <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
          Utilizamos as ferramentas mais modernas do mercado para garantir velocidade, segurança e escalabilidade.
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            "React",
            "Next.js",
            "Node.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "AWS",
            "Docker",
            "Strapi",
          ].map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="mt-10">
          <button
            className="px-10 py-4 bg-codelabz-accent text-white hover:bg-codelabz-accent cursor-pointer  hover:scale-105 rounded-full font-bold transition-all tracking-wide text-lg"
          >
            Falar com um especialista
            {/* <ArrowRight className="group-hover:translate-x-1 transition-transform" /> */}
          </button>
        </div>
      </div>
    </motion.div>
  )
}