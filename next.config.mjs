import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

// Legacy numeric project URLs -> current slugs (keep in sync with src/data/projects.ts)
const PROJECT_SLUGS_BY_ID = {
  1: 'rafa-helena-arquitetura',
  2: 'sdl-consultoria',
  3: 'lovegoods',
  4: 'cloock',
  5: 'guilherme-schulze',
  6: 'auros-corretora',
  7: 'fidliz',
  8: 'unidavi-minha-reserva',
  9: 'unidavi-minha-prova',
  10: 'apjesc',
  11: 'magaventures',
  12: 'patrono-jr',
  13: 'tb-motors',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const localePrefixes = ['', '/en']
    return localePrefixes.flatMap((prefix) =>
      Object.entries(PROJECT_SLUGS_BY_ID).map(([id, slug]) => ({
        source: `${prefix}/projetos/${id}`,
        destination: `${prefix}/projetos/${slug}`,
        permanent: true,
      })),
    )
  },
}

export default withNextIntl(nextConfig)
