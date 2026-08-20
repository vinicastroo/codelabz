import type { Locale } from '@/i18n/routing'

export const SITE_URL = 'https://www.codelabz.com.br'
export const SITE_NAME = 'Codelabz'

export const BUSINESS = {
  name: 'Codelabz',
  legalName: 'Codelabz Tecnologia',
  telephone: '+55-47-99616-4275',
  whatsapp: 'https://wa.me/5547996164275',
  email: 'contato@codelabz.com.br',
  addressLocality: 'Balneário Camboriú',
  addressRegion: 'SC',
  addressCountry: 'BR',
  postalCode: '88330-000',
  latitude: -26.9926,
  longitude: -48.6353,
  linkedin: 'https://www.linkedin.com/company/code-labz/',
  instagram: 'https://www.instagram.com/code.labz/',
  logo: `${SITE_URL}/logo.png`,
}

/**
 * next-intl uses "as-needed" locale prefixes: the default locale (pt) has no
 * prefix while other locales (en) are prefixed with /en.
 */
export function absoluteUrl(locale: Locale, path: string = '') {
  const cleanPath = path === '/' ? '' : path
  const prefix = locale === 'en' ? '/en' : ''
  return `${SITE_URL}${prefix}${cleanPath}` || SITE_URL
}

export function buildAlternates(locale: Locale, path: string = '') {
  return {
    canonical: absoluteUrl(locale, path),
    languages: {
      'pt-BR': absoluteUrl('pt', path),
      en: absoluteUrl('en', path),
      'x-default': absoluteUrl('pt', path),
    },
  }
}

export function buildOpenGraph({
  locale,
  path,
  title,
  description,
  images,
  type = 'website',
}: {
  locale: Locale
  path: string
  title: string
  description: string
  images?: { url: string; width: number; height: number }[]
  type?: 'website' | 'article'
}) {
  return {
    title,
    description,
    url: absoluteUrl(locale, path),
    siteName: SITE_NAME,
    images: images ?? [{ url: `${SITE_URL}/logo.png`, width: 800, height: 600 }],
    locale: locale === 'pt' ? 'pt_BR' : 'en_US',
    type,
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    sameAs: [BUSINESS.linkedin, BUSINESS.instagram],
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    image: BUSINESS.logo,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [BUSINESS.linkedin, BUSINESS.instagram],
  }
}

export type ServiceItem = {
  name: string
  description: string
  slug: string
}

export function servicesJsonLd(locale: Locale, services: ServiceItem[]) {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(locale, '/servicos')}#${service.slug}`,
    name: service.name,
    description: service.description,
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    url: absoluteUrl(locale, '/servicos'),
  }))
}

export type BreadcrumbEntry = {
  name: string
  path: string
}

export function breadcrumbJsonLd(locale: Locale, items: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  }
}

export function articleJsonLd({
  locale,
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName = 'Equipe Codelabz',
}: {
  locale: Locale
  slug: string
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${absoluteUrl(locale, `/blog/${slug}`)}#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(locale, `/blog/${slug}`),
    },
    headline: title,
    description,
    image: image.startsWith('http') ? image : `${SITE_URL}${image}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  }
}
