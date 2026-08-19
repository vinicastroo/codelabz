export type Project = {
  id: number
  slug: string
  title: string
  /** Key in the "projects" i18n namespace with the full-length case study text. */
  descriptionKey: string
  /** Key in the "projects" i18n namespace with the short card text, when available. */
  shortDescriptionKey?: string
  image: string
  link?: string
  tags: string[]
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
  },
  {
    id: 5,
    slug: 'guilherme-schulze',
    title: 'Guilherme Schulze',
    descriptionKey: 'guilherme',
    shortDescriptionKey: 'guilhermeShort',
    image: '/banner-guilherme.png',
    tags: ['Portfólio', 'Mídia'],
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
  },
  {
    id: 7,
    slug: 'fidliz',
    title: 'Fidliz',
    descriptionKey: 'fidliz',
    image: '/banner-fidliz.png',
    link: 'https://fideliz-web.vercel.app/',
    tags: ['App Web', 'Fidelização'],
  },
  {
    id: 8,
    slug: 'unidavi-minha-reserva',
    title: 'Unidavi - Minha Reserva',
    descriptionKey: 'minhareserva',
    image: '/banner-minha-reserva.png',
    tags: ['Educacional', 'Sistema'],
  },
  {
    id: 9,
    slug: 'unidavi-minha-prova',
    title: 'Unidavi - Minha Prova',
    descriptionKey: 'minhaprova',
    image: '/banner-minha-prova.png',
    tags: ['Educacional', 'Sistema'],
  },
  {
    id: 10,
    slug: 'apjesc',
    title: 'APJESC - Site Institucional e Sistema Interno',
    descriptionKey: 'apjesc',
    image: '/banner-apjesc.png',
    tags: ['Institucional', 'Sistema'],
  },
  {
    id: 11,
    slug: 'magaventures',
    title: 'Magaventures - Sistema Interno de Gestão',
    descriptionKey: 'magaventures',
    image: '/banner-magaventures.png',
    tags: ['Sistema', 'Dashboard', 'Startups'],
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
  },
]

export function getProjectById(id: number) {
  return projects.find((project) => project.id === id)
}
