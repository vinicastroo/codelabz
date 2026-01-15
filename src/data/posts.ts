export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  image?: string
}

export const posts: Post[] = [
  {
    slug: 'rafa-helena-arquitetura',
    title: 'Rafa Helena Arquitetura — caso de sucesso',
    excerpt:
      'Site institucional com foco em portfólio e presença digital para escritórios de arquitetura.',
    content: `<p>Desenvolvemos o site da Rafa Helena focando em estética, performance e apresentação de portfólio. Implementamos galleries responsivas, otimização de imagens e SEO técnico.</p>`,
    date: '2024-08-10',
    image: '/banner-rafa.png',
  },
  {
    slug: 'lovegoods-loja-virtual',
    title: 'Lovegoods — loja virtual com foco em conversão',
    excerpt:
      'Construção de e‑commerce com fluxo de compra otimizado e integrações de pagamento.',
    content: `<p>A Lovegoods recebeu uma loja com checkout otimizado, catálogo filtrável e integração com gateways de pagamento. Resultado: aumento da conversão e melhoria na experiência mobile.</p>`,
    date: '2024-07-02',
    image: '/banner-lovegoods.png',
  },
  {
    slug: 'fidliz-programa-fidelizacao',
    title: 'Fidliz — programa de fidelização digital',
    excerpt:
      'Plataforma mobile-first que substitui cartões físicos por sistema digital de pontos.',
    content: `<p>Implementamos um sistema de acúmulo de pontos, dashboard administrativo e notificações. O produto permitiu maior retenção dos clientes dos nossos parceiros.</p>`,
    date: '2024-05-18',
    image: '/banner-fidliz.png',
  },
]