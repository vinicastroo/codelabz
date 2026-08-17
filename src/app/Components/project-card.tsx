'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard({
  id,
  title,
  description,
  image,
  link,
  tags,
  viewProjectLabel = 'Ver projeto',
  headingLevel = 'h3',
}: {
  id?: number
  title: string
  description: string
  image: string
  link?: string
  tags: string[]
  viewProjectLabel?: string
  headingLevel?: 'h2' | 'h3'
}) {
  const Heading = headingLevel

  return (

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }} // Mudado para whileInView para animar no scroll mobile também
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.3 }} className="cursor-pointer backdrop-blur-xl rounded-lg overflow-hidden transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-80 overflow-hidden bg-transparent shrink-0">
        <Image
          src={image || '/placeholder.svg'}
          alt={`Print da tela inicial do projeto ${title}, desenvolvido pela Codelabz`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#032550] via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="p-6 border border-muted bg-white flex flex-col flex-1">
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
            {id ? (
              <Link href={`/projetos/${id}`} className="hover:underline">
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

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-codelabz-accent hover:underline font-medium text-xs transition-colors group/link pt-5"
          >
            {viewProjectLabel}
            <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
