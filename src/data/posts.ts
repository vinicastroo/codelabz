export type Post = {
  slug: string
  title: string
  /** Title tag curto (~60 caracteres) para <title>/OG/Twitter. Se ausente, usa `title`. */
  metaTitle?: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  author: string
  image: string
}

export const posts: Post[] = [
  {
    slug: 'rafa-helena-arquitetura-caso-de-sucesso',
    title: 'Rafa Helena Arquitetura: um site que transforma portfólio em captação de clientes',
    metaTitle: 'Site para Arquitetos: o Case Rafa Helena',
    excerpt:
      'Como a Codelabz transformou o portfólio disperso da arquiteta Rafa Helena em um site rápido e otimizado para SEO, pensado para gerar contato com clientes.',
    date: '2024-08-10',
    category: 'Cases de Sucesso',
    readTime: '5 min',
    author: 'Equipe Codelabz',
    image: '/banner-rafa.png',
    content: `
      <p>Para escritórios de arquitetura, o site costuma ser o primeiro contato do cliente com o trabalho do profissional. Foi com esse objetivo que desenvolvemos o site institucional da arquiteta Rafa Helena: transformar um portfólio disperso em uma vitrine digital.</p>

      <h2>O desafio</h2>
      <p>Antes do projeto, os trabalhos da Rafa Helena estavam espalhados entre redes sociais e materiais físicos, sem um lugar central que reunisse cases, diferenciais e formas de contato. O objetivo era uma experiência fluida, com carregamento rápido e navegação intuitiva em qualquer dispositivo. Veja também os <a href="/servicos">serviços de criação de sites</a> que aplicamos nesse tipo de projeto.</p>

      <h2>A solução da Codelabz</h2>
      <p>Desenvolvemos uma galeria de projetos responsiva, otimizamos as imagens para carregamento rápido sem perder qualidade visual, e aplicamos boas práticas de SEO técnico — marcação semântica de títulos, dados estruturados e meta tags específicas para cada seção do site.</p>

      <h2>Resultado</h2>
      <p>O site passou a funcionar como ferramenta ativa de captação, com o portfólio apresentado de forma organizada e contato direto via WhatsApp em qualquer página. Na avaliação da própria cliente:</p>

      <blockquote>"Meu site de arquitetura ficou excelente! Do jeito que eu queria, super recomendo!!" — Rafaela Helena, arquiteta</blockquote>

      <p>Quer ver outros projetos com esse mesmo cuidado de portfólio e performance? Conheça mais no nosso <a href="/projetos">portfólio de projetos</a>.</p>
    `,
  },
  {
    slug: 'lovegoods-ecommerce-foco-em-conversao',
    title: 'Lovegoods: como construímos um e-commerce com foco real em conversão',
    excerpt:
      'Entenda as decisões de UX, performance e integrações de pagamento que aplicamos na loja virtual da Lovegoods para aumentar a taxa de conversão.',
    date: '2024-07-02',
    category: 'E-commerce',
    readTime: '6 min',
    author: 'Equipe Codelabz',
    image: '/banner-lovegoods.png',
    content: `
      <p>Um e-commerce bonito não é suficiente se o fluxo de compra não for pensado para converter. No projeto da Lovegoods, loja especializada em presentes criativos e colecionáveis, priorizamos cada etapa da jornada do cliente, do catálogo ao checkout.</p>

      <h2>Catálogo filtrável e experiência mobile</h2>
      <p>Como a maior parte do tráfego de e-commerce vem de dispositivos móveis, estruturamos filtros de produto rápidos, imagens otimizadas em formato moderno e um layout que prioriza a leitura em telas pequenas sem perder informações relevantes para a decisão de compra.</p>

      <h2>Integrações de pagamento e logística</h2>
      <p>Integramos gateways de pagamento confiáveis e serviços de cálculo de frete em tempo real, reduzindo o abandono de carrinho por falta de transparência nos custos finais da compra.</p>

      <h2>Resultado</h2>
      <p>O resultado foi um checkout mais curto, menos etapas de fricção e uma experiência de compra consistente entre desktop e mobile, refletindo diretamente na conversão da loja.</p>
    `,
  },
  {
    slug: 'fidliz-programa-de-fidelizacao-digital',
    title: 'Fidliz: substituindo cartões físicos por um programa de fidelização 100% digital',
    excerpt:
      'Como desenvolvemos a plataforma mobile-first da Fidliz, permitindo que clientes acumulem pontos direto pelo celular, sem depender de cartões físicos.',
    date: '2024-05-18',
    category: 'Sistemas Web',
    readTime: '4 min',
    author: 'Equipe Codelabz',
    image: '/banner-fidliz.png',
    content: `
      <p>Cartões físicos de fidelidade se perdem, rasgam e são facilmente esquecidos em casa. Foi pensando em resolver esse problema que desenvolvemos a Fidliz, uma plataforma digital de fidelização pensada para ser mobile-first.</p>

      <h2>Um sistema pensado para o dia a dia do lojista</h2>
      <p>Criamos um dashboard administrativo simples, onde o lojista parceiro consegue gerenciar pontos, regras de fidelização e campanhas sem depender de suporte técnico constante.</p>

      <h2>Notificações e retenção</h2>
      <p>Implementamos notificações que avisam o cliente sobre pontos acumulados e recompensas disponíveis, incentivando o retorno à loja parceira e fortalecendo o relacionamento entre marca e consumidor.</p>

      <h2>Resultado</h2>
      <p>Hoje, os parceiros da Fidliz contam com uma ferramenta de retenção de clientes moderna, sem custos de impressão de cartões e com dados centralizados sobre o comportamento de compra do público.</p>
    `,
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
