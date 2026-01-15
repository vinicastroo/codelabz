import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

export const dynamic = 'force-dynamic'

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
})

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, message } = await req.json()

    // Email para o admin
    const adminEmailCommand = new SendEmailCommand({
      Source: 'Code labz <contato@codelabz.com.br>',
      Destination: {
        ToAddresses: ['viniciusc.d.c@hotmail.com'],
      },
      Message: {
        Subject: {
          Data: `Proposta de ${name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `<div>
           <h1>Proposta de ${name}</h1>
           <p>Email: ${email}</p>
           <p>Empresa: ${company}</p>
           <p>Telefone: ${phone}</p>
           <p>${message}</p>
         </div>`,
            Charset: 'UTF-8',
          },
        },
      },
    })

    await Promise.all([
      sesClient.send(adminEmailCommand),
    ])

    return Response.json(
      { message: 'Email enviado com sucesso' },
      {
        status: 200,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('Falha ao enviar email: ', error)
    return Response.json(
      { error: 'Falha ao enviar email' },
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      },
    )
  }
}
