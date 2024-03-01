// defaults to auto
import { PrismaClient } from '@prisma/client'
export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()
export async function POST(req: Request) {
  const data = await req.json()
  const { name, email, company, phone, description } = data

  try {
    await prisma.clients.create({
      data: {
        name,
        email,
        company,
        phone,
        description,
      },
    })

    Response.json(
      { message: 'Cliente criado com sucesso' },
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Falha ao criar usuário: ', error)
    Response.json(
      { error: 'Falha ao criar usuário' },
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }
  return Response.json({ message: 'Hello from Next.js!' })
}
