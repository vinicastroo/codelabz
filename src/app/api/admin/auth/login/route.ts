import bcrypt from 'bcryptjs'
import { createAdminSession } from '@/lib/admin-auth'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const adminEmail = process.env.ADMIN_EMAIL
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

  if (!adminEmail || !adminPasswordHash) {
    return Response.json({ error: 'Login administrativo não configurado' }, { status: 500 })
  }

  if (typeof email !== 'string' || typeof password !== 'string') {
    return Response.json({ error: 'Credenciais inválidas' }, { status: 400 })
  }

  const emailMatches = email.trim().toLowerCase() === adminEmail.trim().toLowerCase()
  const passwordMatches = await bcrypt.compare(password, adminPasswordHash)

  if (!emailMatches || !passwordMatches) {
    return Response.json({ error: 'Email ou senha incorretos' }, { status: 401 })
  }

  await createAdminSession(adminEmail)

  return Response.json({ ok: true })
}
