'use client'
import { Menu } from '@/components/Menu'
import { Footer } from '../Components/Footer'
import { MessagesSquare, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/Button'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

export default function Contato() {
  const signupSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('Email inválido').min(1, 'O email é obrigatório'),
    company: z.string().min(1, 'A empresa é obrigatória'),
    phone: z.string().min(1, 'O telefone é obrigatório'),
    description: z.string().min(1, 'A descrição é obrigatória'),
  })
  type SignupFormData = z.infer<typeof signupSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = async (data: SignupFormData) => {
    try {
      await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      toast.success(
        'Proposta enviada com sucesso, entraremos em contato o mais rápido possível!',
      )
    } catch (err) {
      console.error(err)
      toast.error(
        'Aconteceu algum problema no envio da proposta, tente novamente mais tarde!',
      )
    }
  }

  return (
    <>
      <div className="m-auto flex max-w-[1300px] flex-col px-4 lg:px-0">
        <Menu />
      </div>

      <div className="m-auto mt-16 grid min-h-screen max-w-[1300px] grid-cols-contact gap-16 px-4 lg:px-0">
        <aside className="flex h-auto flex-col gap-8 divide-y-[1px] ">
          <div className="flex flex-col">
            <span>É relevante estar ciente</span>
            <strong className="font-mono text-2xl text-sapphire-950">
              Como trabalhamos
            </strong>
          </div>

          <div className="flex flex-col space-y-2 pt-8">
            <MessagesSquare className="h-10 w-10 text-sapphire-950" />
            <span>Sempre temos tempo para conversar</span>
            <p>
              Estamos aqui para te ajudar. Durante todo o processo estaremos
              disponíveis para esclarecer dúvidas, receber sugestões e trocar
              ideias.
            </p>
          </div>

          <div className="flex flex-col space-y-2 pt-8">
            <ShieldCheck className="h-10 w-10 text-sapphire-950" />
            <span>O projeto é seu</span>
            <p>
              Da propriedade intelectual aos arquivos, tudo que te ajudarmos a
              construir é totalmente seu.
            </p>
          </div>
        </aside>

        <main>
          <h1 className="font-mono text-4xl font-bold text-sapphire-950">
            Gostaríamos de saber mais sobre o seu projeto.
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-4 pb-16"
          >
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-700"
              >
                Nome
              </label>

              <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-sapphire-950 focus-within:ring-4 focus-within:ring-sapphire-50">
                <input
                  id="name"
                  className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
                  {...register('name')}
                />
              </div>

              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-700 "
              >
                Email
              </label>

              <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-sapphire-950 focus-within:ring-4 focus-within:ring-sapphire-50">
                <input
                  id="email"
                  className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
                  placeholder="exemplo@email.com.br"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-zinc-700 "
                >
                  Nome da empresa
                </label>

                <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-sapphire-950 focus-within:ring-4 focus-within:ring-sapphire-50">
                  <input
                    id="company"
                    className="w-full flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600  outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
                    {...register('company')}
                  />
                </div>

                {errors.company && (
                  <p className="text-sm text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-zinc-700 "
                >
                  Telefone
                </label>

                <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-sapphire-950 focus-within:ring-4 focus-within:ring-sapphire-50">
                  <input
                    id="phone"
                    className="w-full flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
                    placeholder="(99) 9 9999-9999"
                    {...register('phone')}
                  />
                </div>
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium text-zinc-700 "
              >
                Conte um pouco mais sobre seu projeto
              </label>

              <textarea
                className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-sapphire-200 focus:ring-4 focus:ring-sapphire-100 "
                id="description"
                {...register('description')}
              />
              {errors.description && (
                <p className="text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Button variant="fill" className="px-6">
                Enviar
              </Button>
            </div>
          </form>
        </main>
      </div>

      <Footer />
    </>
  )
}
