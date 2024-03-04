// defaults to auto
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'
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

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      secure: true,
      port: 587,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
      },
    })

    const toMeMailOptions = {
      from: process.env.USER_EMAIL,
      to: 'viniciusc.d.c@hotmail.com',
      subject: `Proposta de ${name}`,
      html: `<div>
        <h1>Proposta de ${name}</h1>
        <p>Email: ${email}</p>
        <p>Empresa: ${company}</p>
        <p>Telefone: ${phone}</p>
        <p>${description}</p>
      </div>`,
    }

    const emailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: `Proposta de enviada com sucesso !`,
      html: `<p>Muito obrigado por entrar em contato, entraremos em contato o mais rápido possível </p>`,
    }

    await Promise.all([
      transporter.sendMail(toMeMailOptions, function (err) {
        if (err) {
          console.error(err)
        }
      }),
      transporter.sendMail(emailOptions, function (err) {
        if (err) {
          console.error(err)
        }
      }),
    ])

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
