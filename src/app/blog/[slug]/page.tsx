import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from 'lucide-react'

// Mock function to simulate data fetching
const getPostData = (slug: string) => {
  // In a real scenario, fetch based on slug
  return {
    title: "A Importância da Transformação Digital para Pequenas Empresas",
    date: "12 Out 2023",
    readTime: "5 min",
    author: "Equipe Codelabz",
    category: "Negócios",
    image: "/banner-rafa.png",
    content: `
      <p class="lead text-xl text-slate-600 mb-8">
        A transformação digital não é mais uma opção para o futuro, é uma necessidade urgente para empresas que desejam se manter competitivas no mercado atual.
      </p>

      <h2 class="text-2xl font-display font-bold text-codelabz-dark mb-4 mt-8">O que é Transformação Digital?</h2>
      <p class="mb-6 text-slate-600 leading-relaxed">
        Muitos acreditam que transformação digital se resume a criar uma página no Facebook ou ter um site simples. No entanto, o conceito vai muito além. Trata-se de integrar a tecnologia digital em todas as áreas de uma empresa, mudando fundamentalmente a forma como você opera e entrega valor aos seus clientes.
      </p>

      <h2 class="text-2xl font-display font-bold text-codelabz-dark mb-4 mt-8">Por que é crucial para pequenas empresas?</h2>
      <p class="mb-6 text-slate-600 leading-relaxed">
        Pequenas empresas muitas vezes pensam que tecnologia de ponta é coisa de grandes corporações. Esse é um erro perigoso. Ferramentas digitais democratizaram o acesso a recursos que antes custavam milhões.
      </p>
      <ul class="list-disc pl-6 mb-6 text-slate-600 space-y-2">
        <li><strong>Eficiência Operacional:</strong> Automatizar tarefas repetitivas libera tempo para focar no estratégico.</li>
        <li><strong>Experiência do Cliente:</strong> Consumidores esperam atendimento rápido e personalizado, algo que CRMs e chatbots facilitam.</li>
        <li><strong>Tomada de Decisão:</strong> Dados precisos permitem decisões baseadas em fatos, não em achismos.</li>
      </ul>

      <h2 class="text-2xl font-display font-bold text-codelabz-dark mb-4 mt-8">Como começar?</h2>
      <p class="mb-6 text-slate-600 leading-relaxed">
        Comece pequeno. Identifique os gargalos do seu negócio. É o atendimento? O controle de estoque? A gestão financeira? Escolha uma área e implemente uma solução digital. A Codelabz pode ajudar nesse processo, desenvolvendo sistemas sob medida que se adaptam exatamente à sua necessidade, sem o peso de softwares genéricos e complexos.
      </p>
    `
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostData(slug)

  return (
    <main className="bg-white min-h-screen  pb-20">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden mb-12 bg-codelabz-dark">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-codelabz-dark via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 font-medium text-sm backdrop-blur-md bg-white/10 px-4 py-2 rounded-full w-fit">
              <ArrowLeft size={16} /> Voltar para o blog
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 max-w-4xl leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-codelabz-accent rounded-full flex items-center justify-center text-white">
                  <User size={16} />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-codelabz-accent" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-codelabz-accent" />
                <span>{post.readTime} de leitura</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-codelabz-accent" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-lg prose-slate max-w-none mb-16 prose-headings:font-display prose-headings:text-codelabz-dark prose-a:text-codelabz-accent">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 font-medium">
            Gostou deste artigo? Compartilhe:
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-[#1877F2] hover:text-white text-slate-600 transition-all font-medium text-sm">
              <Share2 size={16} /> Facebook
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-[#0A66C2] hover:text-white text-slate-600 transition-all font-medium text-sm">
              <Share2 size={16} /> LinkedIn
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-[#25D366] hover:text-white text-slate-600 transition-all font-medium text-sm">
              <Share2 size={16} /> WhatsApp
            </button>
          </div>
        </div>
      </article>
    </main>
  )
}