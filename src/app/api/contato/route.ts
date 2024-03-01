// defaults to auto
import { PrismaClient } from '@prisma/client'
export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()
export async function POST(req: Request) {
  const response = await req.json()
  const { name, email, company, phone, description } = response.data
  try {
    const emailAlreadyExists = await prisma.clients.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    })

    console.log(emailAlreadyExists)
    if (emailAlreadyExists) {
      return Response.json(
        { error: 'Email já cadastrado' },
        {
          status: 400,
          headers: {
            'content-type': 'application/json',
          },
        },
      )
    }

    await prisma.clients.create({
      data: {
        name,
        email,
        company,
        phone,
        description,
      },
    })

    return Response.json(
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
    return Response.json(
      { error: 'Falha ao criar usuário' },
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }
}
