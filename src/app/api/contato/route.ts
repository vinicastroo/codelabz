// defaults to auto
import { PrismaClient } from '@prisma/client'
import FormData from 'form-data'
import Mailgun from 'mailgun.js'
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

    const mailgun = new Mailgun(FormData)
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere',
    })

    mg.messages
      .create('codelabz.com.br', {
        from: 'Codelabz <contato@codelabz.com.br>',
        to: ['viniciusc.d.c@hotmail.com'],
        subject: `Proposta de ${name}`,
        html: `<div>
        <h1>Proposta de ${name}</h1>
        <p>Email: ${email}</p>
        <p>Empresa: ${company}</p>
        <p>Telefone: ${phone}</p>
        <p>${description}</p>
      </div>`,
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err)) // logs any error
    // mg.messages
    //   .create('sandbox-123.mailgun.org', {
    //     from: 'Codelabz <contato@codelabz.com.br>',
    //     to: [email],
    //     subject: `Proposta de ${name}`,
    //     html: `<div>
    //     <h1>Proposta de ${name}</h1>
    //     <p>Email: ${email}</p>
    //     <p>Empresa: ${company}</p>
    //     <p>Telefone: ${phone}</p>
    //     <p>${description}</p>
    //   </div>`,
    //   })
    //   .then((msg) => console.log(msg)) // logs response data
    //   .catch((err) => console.log(err)) // logs any error

    // mg.messages().send(
    //   {
    //     from: 'Mailgun Sandbox <postmaster@sandboxb119293e63f14ec8979f8825aa51ecef.mailgun.org>',
    //     to: email,
    //     subject: `Proposta de enviada com sucesso !`,
    //     text: `<p>Muito obrigado por entrar em contato, entraremos em contato o mais rápido possível </p>`,
    //   },
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   (error: any, body: any) => {
    //     console.log(body)
    //     console.log(error)
    //   },
    // )

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
