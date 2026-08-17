'use client'
import { Mail, Phone, Users } from 'lucide-react'
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20 pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t('tag')}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-codelabz-dark">
              {t('title')}
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="space-y-8 mt-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-codelabz-accent/10 rounded-full flex items-center justify-center text-codelabz-accent shrink-0">
                  <Mail />
                </div>
                <div>
                  <h2 className="font-bold text-codelabz-dark text-lg">{t('emailLabel')}</h2>
                  <p className="text-slate-500 hover:text-codelabz-accent transition-colors cursor-pointer">
                    contato@codelabz.com.br
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-codelabz-accent/10 rounded-full flex items-center justify-center text-codelabz-accent shrink-0">
                  <Phone />
                </div>
                <div>
                  <h2 className="font-bold text-codelabz-dark text-lg">{t('whatsappLabel')}</h2>
                  <a href="https://wa.me/5547996164275" className="text-slate-500 hover:text-codelabz-accent transition-colors cursor-pointer">
                    +55 47 99616-4275
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-codelabz-accent/10 rounded-full flex items-center justify-center text-codelabz-accent shrink-0">
                  <Users />
                </div>
                <div>
                  <h2 className="font-bold text-codelabz-dark text-lg">{t('socialLabel')}</h2>
                  <div className="flex gap-4 mt-1 text-slate-500">
                    <a href="https://www.instagram.com/code.labz/" className="hover:text-codelabz-accent transition-colors">
                      Instagram
                    </a>
                    <span className="text-slate-300">•</span>
                    <a href="https://www.linkedin.com/company/code-labz/" className="hover:text-codelabz-accent transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-md">
              <h2 className="text-2xl font-bold text-codelabz-dark mb-6">{t('formTitle')}</h2>
              <form className="space-y-6" onSubmit={handleSubmit(handleContact)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">{t('nameLabel')}</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder={t('namePlaceholder')}
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">{t('companyLabel')}</label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder={t('companyPlaceholder')}
                    />
                    {errors.company && <span className="text-red-500 text-xs">{errors.company.message}</span>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">{t('emailFieldLabel')}</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">{t('phoneLabel')}</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder={t('phonePlaceholder')}
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-codelabz-dark mb-2">{t('messageLabel')}</label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors resize-none"
                    placeholder={t('messagePlaceholder')}
                  />
                  {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-codelabz-accent hover:bg-rose-600 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('submitting') : t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
