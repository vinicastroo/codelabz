import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Tag, User } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { articleJsonLd, breadcrumbJsonLd, buildAlternates, buildOpenGraph } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'
import { getPostBySlug, posts } from '@/data/posts'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

function formatDate(dateISO: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${dateISO}T00:00:00`))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const seoTitle = post.metaTitle ?? post.title

  return {
    title: `${seoTitle} | Codelabz`,
    description: post.excerpt,
    alternates: buildAlternates(locale, `/blog/${post.slug}`),
    openGraph: buildOpenGraph({
      locale,
      path: `/blog/${post.slug}`,
      title: seoTitle,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
    }),
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.excerpt,
    },
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string }
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const bc = await getTranslations({ locale, namespace: 'menu' })

  const moreArticles = posts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <main className="bg-white min-h-screen pb-20">
      <JsonLd
        data={[
          breadcrumbJsonLd(locale, [
            { name: locale === 'pt' ? 'Início' : 'Home', path: '/' },
            { name: bc('blog'), path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleJsonLd({
            locale,
            slug: post.slug,
            title: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            authorName: post.author,
          }),
        ]}
      />
      <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden mb-12 bg-codelabz-dark">
        <Image
          src={post.image}
          alt={`Imagem de capa do artigo "${post.title}"`}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-codelabz-dark via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <div className="container mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 font-medium text-sm backdrop-blur-md bg-white/10 px-4 py-2 rounded-full w-fit">
              <ArrowLeft size={16} /> {locale === 'pt' ? 'Voltar para o blog' : 'Back to blog'}
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
                <span>{formatDate(post.date, locale)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-codelabz-accent" />
                <span>{post.readTime}</span>
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
        <div className="prose prose-lg max-w-none mb-16 prose-headings:font-display">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 font-medium">
            {locale === 'pt' ? 'Gostou deste artigo? Compartilhe:' : 'Liked this article? Share it:'}
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

      {moreArticles.length > 0 && (
        <section className="container mx-auto px-6 mt-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-codelabz-dark mb-8">
            {locale === 'pt' ? 'Continue lendo' : 'Keep reading'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreArticles.map((related) => (
              <Link href={`/blog/${related.slug}`} key={related.slug} className="group h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden bg-slate-200">
                    <Image
                      src={related.image}
                      alt={`Imagem de capa do artigo "${related.title}"`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-codelabz-accent text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Tag size={12} /> {related.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-display font-bold text-codelabz-dark mb-2 leading-tight group-hover:text-codelabz-accent transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{related.excerpt}</p>
                    <div className="mt-auto pt-3 border-t border-slate-50 flex items-center text-codelabz-accent font-bold text-xs gap-2 group/btn">
                      {locale === 'pt' ? 'Ler artigo' : 'Read article'}
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
