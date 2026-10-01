import pt from '../../../messages/pt.json'
import { absoluteUrl, BUSINESS, SITE_URL } from '@/lib/seo'
import { projects } from '@/data/projects'
import { posts } from '@/data/posts'

export const dynamic = 'force-static'

const SERVICE_COUNT = 6

function buildLlmsTxt() {
  const page = pt.servicesPage as Record<string, string>
  const projectTexts = pt.projects as Record<string, string>

  const services = Array.from({ length: SERVICE_COUNT }, (_, i) => {
    const n = i + 1
    return `- **${page[`service${n}Title`]}**: ${page[`service${n}Desc`]}`
  })

  const projectLinks = projects.map((project) => {
    const text = projectTexts[project.shortDescriptionKey ?? project.descriptionKey]
    return `- [${project.title}](${absoluteUrl('pt', `/projetos/${project.slug}`)}): ${text} (${project.tags.join(', ')})`
  })

  const postLinks = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((post) => `- [${post.title}](${absoluteUrl('pt', `/blog/${post.slug}`)}): ${post.excerpt}`)

  return [
    `# ${BUSINESS.name}`,
    '',
    `> ${pt.homeMeta.description}`,
    '',
    `${BUSINESS.name} é uma software house de ${BUSINESS.addressLocality} (${BUSINESS.addressRegion}, Brasil) que desenvolve sites institucionais, sistemas web sob medida, SaaS, e-commerces, APIs e automações para empresas de todo o Brasil.`,
    '',
    `- Email: ${BUSINESS.email}`,
    `- Telefone/WhatsApp: ${BUSINESS.telephone} (${BUSINESS.whatsapp})`,
    `- LinkedIn: ${BUSINESS.linkedin}`,
    `- Instagram: ${BUSINESS.instagram}`,
    `- Versão em inglês do site: ${absoluteUrl('en', '/')}`,
    '',
    '## Páginas principais',
    '',
    `- [Início](${SITE_URL}): ${pt.homeMeta.description}`,
    `- [Serviços](${absoluteUrl('pt', '/servicos')}): ${pt.servicosMeta.description}`,
    `- [Projetos](${absoluteUrl('pt', '/projetos')}): ${pt.projetosMeta.description}`,
    `- [Blog](${absoluteUrl('pt', '/blog')}): ${pt.blogMeta.description}`,
    `- [Contato](${absoluteUrl('pt', '/contato')}): ${pt.contatoMeta.description}`,
    '',
    '## Serviços',
    '',
    ...services,
    '',
    '## Projetos',
    '',
    ...projectLinks,
    '',
    '## Blog',
    '',
    ...postLinks,
    '',
    '## Optional',
    '',
    `- [Sitemap](${SITE_URL}/sitemap.xml): lista completa de URLs do site em português e inglês`,
    '',
  ].join('\n')
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
