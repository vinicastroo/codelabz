export type Project = {
  id: number
  slug: string
  title: string
  titleEn?: string
  /** Key in the "projects" i18n namespace with the full-length case study text. */
  descriptionKey: string
  /** Key in the "projects" i18n namespace with the short card text, when available. */
  shortDescriptionKey?: string
  image: string
  link?: string
  tags: string[]
  tagsEn: string[]
  details?: Record<'pt' | 'en', {
    context: string
    solution: string
    highlights: string[]
  }>
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'rafa-helena-arquitetura',
    title: 'Rafa Helena Arquitetura',
    descriptionKey: 'rafahelena',
    shortDescriptionKey: 'rafahelenaShort',
    image: '/banner-rafa.png',
    link: 'http://rafahelena.com.br/',
    tags: ['Site Institucional', 'Design'],
    tagsEn: ['Corporate Website', 'Design'],
  },
  {
    id: 2,
    slug: 'sdl-consultoria',
    title: 'SDL Consultoria',
    descriptionKey: 'sdl',
    shortDescriptionKey: 'sdlShort',
    image: '/banner-sdl.png',
    link: 'https://sdlconsultoria.ind.br/',
    tags: ['Corporativo', 'Consultoria'],
    tagsEn: ['Corporate', 'Consulting'],
  },
  {
    id: 3,
    slug: 'lovegoods',
    title: 'Lovegoods',
    descriptionKey: 'lovegoods',
    shortDescriptionKey: 'lovegoodsShort',
    image: '/banner-lovegoods.png',
    link: 'https://lovegoods.com.br/',
    tags: ['E-commerce', 'Vendas'],
    tagsEn: ['E-commerce', 'Sales'],
  },
  {
    id: 4,
    slug: 'cloock',
    title: 'Cloock',
    descriptionKey: 'cloock',
    shortDescriptionKey: 'cloockShort',
    image: '/banner-cloock.png',
    link: 'https://www.cloock.com.br/',
    tags: ['SaaS', 'Sistema Web'],
    tagsEn: ['SaaS', 'Web System'],
  },
  {
    id: 5,
    slug: 'guilherme-schulze',
    title: 'Guilherme Schulze',
    descriptionKey: 'guilherme',
    shortDescriptionKey: 'guilhermeShort',
    image: '/banner-guilherme.png',
    tags: ['Portfólio', 'Mídia'],
    tagsEn: ['Portfolio', 'Media'],
  },
  {
    id: 6,
    slug: 'auros-corretora',
    title: 'Auros Corretora',
    descriptionKey: 'auros',
    shortDescriptionKey: 'aurosShort',
    image: '/banner-auros.png',
    link: 'https://www.aurosimobiliaria.com.br/',
    tags: ['Imobiliária', 'Sistema Interno'],
    tagsEn: ['Real Estate', 'Internal System'],
  },
  {
    id: 7,
    slug: 'fidliz',
    title: 'Fidliz',
    descriptionKey: 'fidliz',
    image: '/banner-fidliz.png',
    link: 'https://fideliz-web.vercel.app/',
    tags: ['App Web', 'Fidelização'],
    tagsEn: ['Web App', 'Loyalty'],
  },
  {
    id: 8,
    slug: 'unidavi-minha-reserva',
    title: 'Unidavi - Minha Reserva',
    descriptionKey: 'minhareserva',
    image: '/banner-minha-reserva.png',
    tags: ['Educacional', 'Sistema'],
    tagsEn: ['Education', 'System'],
  },
  {
    id: 9,
    slug: 'unidavi-minha-prova',
    title: 'Unidavi - Minha Prova',
    descriptionKey: 'minhaprova',
    image: '/banner-minha-prova.png',
    tags: ['Educacional', 'Sistema'],
    tagsEn: ['Education', 'System'],
  },
  {
    id: 10,
    slug: 'apjesc',
    title: 'APJESC - Site Institucional e Sistema Interno',
    titleEn: 'APJESC - Corporate Website and Internal System',
    descriptionKey: 'apjesc',
    image: '/banner-apjesc.png',
    tags: ['Institucional', 'Sistema'],
    tagsEn: ['Corporate', 'System'],
  },
  {
    id: 11,
    slug: 'magaventures',
    title: 'Magaventures - Sistema Interno de Gestão',
    titleEn: 'Magaventures - Internal Management System',
    descriptionKey: 'magaventures',
    image: '/banner-magaventures.png',
    tags: ['Sistema', 'Dashboard', 'Startups'],
    tagsEn: ['System', 'Dashboard', 'Startups'],
  },
  {
    id: 12,
    slug: 'patrono-jr',
    title: 'Patrono Jr.',
    descriptionKey: 'patrono',
    shortDescriptionKey: 'patronoShort',
    image: '/banner-patrono.png',
    link: 'https://www.patronojunior.com.br/',
    tags: ['Jurídico', 'Institucional'],
    tagsEn: ['Legal', 'Corporate'],
  },
  {
    id: 13,
    slug: 'tb-motors',
    title: 'TB Motors',
    descriptionKey: 'tbmotors',
    shortDescriptionKey: 'tbmotorsShort',
    image: '/banner-tbmotors.png',
    link: 'https://www.tbmotorssc.com.br/',
    tags: ['Automotivo', 'Vitrine Online'],
    tagsEn: ['Automotive', 'Online Inventory'],
    details: {
      pt: {
        context: 'A TB Motors trabalha com carros e motos seminovos premium. O site precisava apresentar o estoque de forma organizada, dar espaço próprio para cada veículo e encurtar o caminho até o atendimento comercial.',
        solution: 'Estruturamos uma vitrine online com listagem, filtros, fichas individuais e contato pelo WhatsApp. A navegação facilita a consulta pelo celular e mantém as informações importantes de cada veículo acessíveis.',
        highlights: ['Vitrine de carros e motos', 'Filtros de busca', 'Fichas detalhadas por veículo', 'Contato direto pelo WhatsApp'],
      },
      en: {
        context: 'TB Motors sells premium pre-owned cars and motorcycles. The website needed to organize the inventory, give each vehicle its own page and shorten the path to the sales team.',
        solution: 'We structured an online inventory with listings, filters, individual vehicle pages and WhatsApp contact. The navigation makes mobile browsing straightforward while keeping important vehicle information accessible.',
        highlights: ['Car and motorcycle inventory', 'Search filters', 'Detailed vehicle pages', 'Direct WhatsApp contact'],
      },
    },
  },
]

export function localizeProject(project: Project, locale: string) {
  return {
    ...project,
    title: locale === 'en' ? (project.titleEn ?? project.title) : project.title,
    tags: locale === 'en' ? project.tagsEn : project.tags,
  }
}

export function getProjectBySlug(slug: string, locale: string = 'pt') {
  const project = projects.find((item) => item.slug === slug)
  return project ? localizeProject(project, locale) : undefined
}
