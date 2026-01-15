"use client"
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Divide, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
const blogPosts: {
  slug: string,
  title: string,
  excerpt: string,
  date: string,
  readTime: string,
  category: string,
  image: string,
}[] = [
    // {
    //   slug: "transformacao-digital-pequenas-empresas",
    //   title: "A Importância da Transformação Digital para Pequenas Empresas",
    //   excerpt: "Descubra como a tecnologia pode alavancar seus resultados, otimizar processos e colocar sua empresa à frente da concorrência.",
    //   date: "12 Out 2023",
    //   readTime: "5 min",
    //   category: "Negócios",
    //   image: "/banner-rafa.png" // Placeholder usando imagem existente
    // },
    // {
    //   slug: "ux-design-vendas",
    //   title: "Como o UX Design impacta diretamente nas suas vendas",
    //   excerpt: "Um site bonito não basta. Entenda como a experiência do usuário define se o visitante vira cliente ou vai para o concorrente.",
    //   date: "28 Set 2023",
    //   readTime: "7 min",
    //   category: "Design",
    //   image: "/banner-lovegoods.png" // Placeholder usando imagem existente
    // },
    // {
    //   slug: "seo-guia-basico",
    //   title: "SEO: O guia básico para aparecer no Google",
    //   excerpt: "Não adianta ter um site incrível se ninguém o encontra. Aprenda os princípios básicos para ranquear melhor nos buscadores.",
    //   date: "15 Set 2023",
    //   readTime: "6 min",
    //   category: "Marketing",
    //   image: "/banner-sdl.png" // Placeholder usando imagem existente
    // }
  ]

export default function BlogPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      <div className="bg-codelabz-dark py-20 border-b border-white/5 pt-32">
        <div className="container mx-auto px-6 text-center">
          <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm mb-4 block"> Blog & Insights</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white"> Conteúdo para impulsionar seu negócio</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Artigos sobre tecnologia, design, marketing e estratégias digitais para ajudar sua empresa a crescer no ambiente online.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            blogPosts.length > 0 ? blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-codelabz-accent text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Tag size={12} /> {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-codelabz-accent" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-codelabz-accent" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2 className="text-xl font-display font-bold text-codelabz-dark mb-3 group-hover:text-codelabz-accent transition-colors leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-slate-50 flex items-center text-codelabz-accent font-bold text-sm gap-2 group/btn">
                      Ler artigo completo
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            )) : <div className="col-span-full flex flex-col items-center justify-center text-center py-24 px-6 bg-slate-50 rounded-2xl border border-slate-200">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-codelabz-dark mb-4">
                Em breve novos conteúdos por aqui
              </h2>
              <p className="text-slate-600 max-w-xl mb-8">
                No momento ainda não temos artigos publicados, mas já estamos preparando conteúdos sobre
                tecnologia, criação de sites, sistemas web, design e estratégias digitais para ajudar sua
                empresa a crescer no ambiente online.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-codelabz-accent text-white rounded-full font-bold hover:scale-105 transition-all"
              >
                Falar com especialistas
                <ArrowRight size={18} />
              </Link>
            </div>
          }
        </div>
      </div>
    </motion.div>
  )
}