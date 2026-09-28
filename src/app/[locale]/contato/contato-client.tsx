'use client'
import { ArrowUpRight, Mail, MessageCircle, Send, Users } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import api from '@/lib/api'
import { AxiosError } from 'axios'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function ContatoPageClient() {
  const t = useTranslations('contactPage')
  const fieldClass = 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-codelabz-accent focus:bg-white focus:ring-4 focus:ring-codelabz-accent/10'

  const contactFormSchema = z.object({
    name: z.string().min(3, { message: t('validation.nameMin') }),
    company: z.string().min(3, { message: t('validation.companyMin') }),
    email: z.string().email({ message: t('validation.emailInvalid') }),
    phone: z.string().min(10, { message: t('validation.phoneMin') }),
    message: z.string().min(10, { message: t('validation.messageMin') }),
  })

  type ContactFormData = z.infer<typeof contactFormSchema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleContact(data: ContactFormData) {
    try {
      await api.post('/contato', data)
      toast.success(t('successToast'))
      reset()
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        toast.error(error.response.data.message)
        return
      }
      toast.error(t('errorToast'))
    }
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-codelabz-light">
      <section className="relative overflow-hidden bg-codelabz-dark pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-codelabz-accent/10 blur-[120px]" />

        <div className="container relative mx-auto grid items-start gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
          <div className="lg:sticky lg:top-32">
            <span className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-codelabz-accent">
              <span className="h-px w-8 bg-codelabz-accent" />
              {t('tag')}
            </span>
            <h1 className="max-w-[11ch] font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              {t('title')}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300/75 sm:text-lg">
              {t('subtitle')}
            </p>

            <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
              <a href="mailto:contato@codelabz.com.br" className="group flex items-center gap-4 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-codelabz-accent"><Mail size={19} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{t('emailLabel')}</span>
                  <span className="mt-1 block truncate text-sm font-semibold text-white">contato@codelabz.com.br</span>
                </span>
                <ArrowUpRight size={18} className="text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-codelabz-accent" />
              </a>

              <a href="https://wa.me/5547996164275" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-codelabz-accent"><MessageCircle size={19} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{t('whatsappLabel')}</span>
                  <span className="mt-1 block text-sm font-semibold text-white">+55 47 99616-4275</span>
                </span>
                <ArrowUpRight size={18} className="text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-codelabz-accent" />
              </a>

              <div className="flex items-center gap-4 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-codelabz-accent"><Users size={19} /></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{t('socialLabel')}</span>
                  <span className="mt-1 flex gap-4 text-sm font-semibold text-white">
                    <a href="https://www.instagram.com/code.labz/" target="_blank" rel="noopener noreferrer" className="hover:text-codelabz-accent">Instagram</a>
                    <a href="https://www.linkedin.com/company/code-labz/" target="_blank" rel="noopener noreferrer" className="hover:text-codelabz-accent">LinkedIn</a>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_35px_100px_rgba(0,0,0,0.3)] sm:p-8 lg:rounded-[2.5rem] lg:p-10">
            <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-6">
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-codelabz-dark sm:text-3xl">{t('formTitle')}</h2>
              <span className="font-display text-sm font-bold tracking-[0.2em] text-codelabz-accent">01</span>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit(handleContact)}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-codelabz-dark">{t('nameLabel')}</label>
                  <input type="text" {...register('name')} className={fieldClass} placeholder={t('namePlaceholder')} />
                  {errors.name && <span className="mt-1.5 block text-xs text-red-500">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-codelabz-dark">{t('companyLabel')}</label>
                  <input type="text" {...register('company')} className={fieldClass} placeholder={t('companyPlaceholder')} />
                  {errors.company && <span className="mt-1.5 block text-xs text-red-500">{errors.company.message}</span>}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-codelabz-dark">{t('emailFieldLabel')}</label>
                  <input type="email" {...register('email')} className={fieldClass} placeholder={t('emailPlaceholder')} />
                  {errors.email && <span className="mt-1.5 block text-xs text-red-500">{errors.email.message}</span>}
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-codelabz-dark">{t('phoneLabel')}</label>
                  <input type="tel" {...register('phone')} className={fieldClass} placeholder={t('phonePlaceholder')} />
                  {errors.phone && <span className="mt-1.5 block text-xs text-red-500">{errors.phone.message}</span>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-codelabz-dark">{t('messageLabel')}</label>
                <textarea rows={5} {...register('message')} className={`${fieldClass} resize-none`} placeholder={t('messagePlaceholder')} />
                {errors.message && <span className="mt-1.5 block text-xs text-red-500">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-codelabz-accent px-8 py-4 font-bold text-white shadow-xl shadow-codelabz-accent/20 transition-all hover:-translate-y-0.5 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? t('submitting') : t('submit')}
                <Send size={17} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
