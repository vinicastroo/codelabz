'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export function ProjectCard({
  slug,
  title,
  description,
  image,
  link,
  tags,
  detailsLabel = 'Ver projeto',
  viewProjectLabel = 'Ver projeto',
  headingLevel = 'h3',
  variant = 'default',
  featured = false,
  showDescription = featured,
  className = '',
}: {
  slug?: string
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
  detailsLabel?: string
  viewProjectLabel?: string
  headingLevel?: 'h2' | 'h3'
  variant?: 'default' | 'showcase'
  featured?: boolean
  showDescription?: boolean
  className?: string
}) {
  const Heading = headingLevel
  const locale = useLocale()

  if (variant === 'showcase') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className={`group relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-codelabz-surface shadow-[0_20px_60px_rgba(0,0,0,0.25)] ${className}`}
      >
        <Link href={slug ? `/projetos/${slug}` : link ?? '/projetos'} className="absolute inset-0 block">
          <Image
            src={image || '/placeholder.svg'}
            alt={locale === 'pt' ? `Tela inicial do projeto ${title}` : `Homepage of the ${title} project`}
            fill
            sizes={featured ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 100vw, 30vw'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(2,29,63,0.98) 0%, rgba(2,29,63,0.9) 28%, rgba(2,29,63,0.5) 58%, rgba(2,29,63,0) 84%)',
            }}
          />
          <div className="absolute inset-0 bg-codelabz-accent/0 transition-colors duration-500 group-hover:bg-codelabz-accent/[0.06]" />

          <div className={`absolute inset-x-0 bottom-0 flex flex-col p-6 ${featured ? 'sm:p-9 lg:p-10' : 'sm:p-7'}`}>
            <div className="flex items-end justify-between gap-5">
              <div className="min-w-0">
                <Heading className={`max-w-[18ch] font-display font-bold leading-tight tracking-[-0.03em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)] ${featured ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl'}`}>
                  {title}
                </Heading>
                {showDescription && (
                  <p className={`mt-2 max-w-xl line-clamp-2 text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.3)] ${featured ? 'text-sm leading-6 sm:text-base' : 'text-sm leading-5'}`}>
                    {description}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-codelabz-accent group-hover:bg-codelabz-accent">
                <ExternalLink size={18} />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }} // Mudado para whileInView para animar no scroll mobile também
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.3 }} className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 group h-full flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 ${className}`}>
      <div className="relative h-60 overflow-hidden bg-transparent shrink-0">
        <Image
          src={image || '/placeholder.svg'}
          alt={locale === 'pt' ? `Tela inicial do projeto ${title}` : `Homepage of the ${title} project`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032550] via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="p-6 bg-white flex flex-col flex-1">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 bg-codelabz-accent text-white rounded-full font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <Heading className="text-xl font-display font-bold text-[#032550] mb-3 transition-colors">
            {slug ? (
              <Link href={`/projetos/${slug}`} className="hover:underline">
                {title}
              </Link>
            ) : (
              title
            )}
          </Heading>

          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-xs font-semibold">
          {slug && (
            <Link href={`/projetos/${slug}`} className="group/details inline-flex items-center gap-2 text-codelabz-dark transition-colors hover:text-codelabz-accent">
              {detailsLabel}
              <ArrowRight size={14} className="transition-transform group-hover/details:translate-x-1" />
            </Link>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-right text-codelabz-accent hover:underline"
            >
              {viewProjectLabel}
              <ExternalLink size={14} className="shrink-0 transition-transform group-hover/link:translate-x-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
