'use client'
import { Menu } from '@/components/Menu'
import { Footer } from '../Components/Footer'
import { Mail, MessagesSquare, Phone, ShieldCheck, Users } from 'lucide-react'

import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import api from '@/lib/api'
import { AxiosError } from 'axios'
import { motion } from 'framer-motion'

const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome deve ter pelo menos 3 caracteres' }),
  company: z.string().min(3, { message: 'A empresa deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  phone: z.string().min(10, { message: 'Digite um telefone válido' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function Contato() {
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
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.message) {
        toast.error(error.response.data.message)
        return
      }
      toast.error('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pb-20 pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm mb-4 block">Contato</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-codelabz-dark">
              Vamos iniciar um projeto?
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Estamos prontos para entender seu desafio e propor a melhor solução tecnológica. Preencha o formulário e
              retornaremos em breve.
            </p>

            <div className="space-y-8 mt-12 bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-codelabz-accent/10 rounded-full flex items-center justify-center text-codelabz-accent shrink-0">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-bold text-codelabz-dark text-lg">Email</h3>
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
                  <h3 className="font-bold text-codelabz-dark text-lg">WhatsApp</h3>
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
                  <h3 className="font-bold text-codelabz-dark text-lg">Redes Sociais</h3>
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
              <h3 className="text-2xl font-bold text-codelabz-dark mb-6">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={handleSubmit(handleContact)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">Nome</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder="Seu nome completo"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">Empresa</label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder="Nome da empresa"
                    />
                    {errors.company && <span className="text-red-500 text-xs">{errors.company.message}</span>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">Email</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder="seu@email.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-codelabz-dark mb-2">Telefone</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-codelabz-dark mb-2">Como podemos ajudar?</label>
                  <textarea
                    rows={4}
                    {...register('message')}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-codelabz-accent focus:ring-1 focus:ring-codelabz-accent transition-colors resize-none"
                    placeholder="Conte um pouco sobre o projeto, funcionalidades desejadas, etc..."
                  />
                  {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-codelabz-accent hover:bg-rose-600 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
