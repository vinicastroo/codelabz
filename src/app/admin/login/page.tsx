'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Não foi possível entrar')
        return
      }

      router.push('/admin')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-codelabz-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-codelabz-surface via-codelabz-dark to-codelabz-dark" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-codelabz-accent/25 blur-[110px]" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sapphire-500/10 blur-[110px]" />

      <div className="relative w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Image src="/logo-code.svg" alt="Codelabz" width={168} height={30} priority />
        </div>

        <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 border border-white/10 p-8">
          <h1 className="text-xl font-bold text-codelabz-dark mb-1">Painel administrativo</h1>
          <p className="text-sm text-slate-500 mb-6">Entre para gerenciar clientes e cobranças.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@codelabz.com.br"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-codelabz-accent focus:ring-2 focus:ring-codelabz-accent/20 transition-shadow"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-codelabz-accent text-white text-sm font-bold rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  Entrar <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">Acesso restrito à equipe Codelabz.</p>
      </div>
    </div>
  )
}
