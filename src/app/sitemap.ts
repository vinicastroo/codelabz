import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/seo'
import { routing } from '@/i18n/routing'
import { projects } from '@/data/projects'
import { posts } from '@/data/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const locale of routing.locales) {
    entries.push(
      {
        url: absoluteUrl(locale, '/'),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: absoluteUrl(locale, '/servicos'),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: absoluteUrl(locale, '/projetos'),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: absoluteUrl(locale, '/contato'),
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.6,
      },
      {
        url: absoluteUrl(locale, '/blog'),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    )

    for (const project of projects) {
      entries.push({
        url: absoluteUrl(locale, `/projetos/${project.id}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }

    for (const post of posts) {
      entries.push({
        url: absoluteUrl(locale, `/blog/${post.slug}`),
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    }
  }

  return entries
}
