// defaults to auto
import { PrismaClient } from '@prisma/client'

import { Resend } from 'resend'
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

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Code labz <contato@codelabz.com.br>',
      to: 'viniciusc.d.c@hotmail.com',
      subject: `Proposta de ${name}`,
      html: `<div>
           <h1>Proposta de ${name}</h1>
           <p>Email: ${email}</p>
           <p>Empresa: ${company}</p>
           <p>Telefone: ${phone}</p>
           <p>${description}</p>
         </div>`,
    })

    await resend.emails.send({
      from: 'Code labz <contato@codelabz.com.br>',
      to: email,
      subject: `Próximas Etapas: Informações Importantes em Breve`,
      html: `<!DOCTYPE html>
      <html>
      <head>
          <title>Email de Agradecimento</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
              }
              .container {
                  width: 80%;
                  margin: auto;
                  padding: 20px;
              }
              .signature {
                  margin-top: 50px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <p>Prezado(a) ${name},</p>
              
              <p>Espero que esta mensagem o(a) encontre bem.</p>
      
              <p>Estou no processo de compilar/organizar as informações necessárias e pretendo entrar em contato em breve com mais detalhes. Acredito que nossa futura parceria tem um grande potencial, e estou ansioso(a) para explorar as possibilidades.</p>
      
              <p>Por favor, sinta-se à vontade para entrar em contato caso tenha alguma dúvida em contato@codelabz.com.br ou necessidade adicional no ínterim. Estou à disposição para quaisquer esclarecimentos ou discussões adicionais.</p>
      
              <p>Mais uma vez, agradeço sinceramente pelo seu tempo e consideração. Aguardo com expectativa a nossa próxima interação.</p>
      
              <div class="signature">
                  <p>Atenciosamente,</p>
                  <p>Vinicius Castro / Code labz</p>
              </div>
          </div>
      </body>
      </html>`,
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
