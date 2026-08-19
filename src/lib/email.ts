import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { formatCents } from '@/lib/money'
import { SITE_URL } from '@/lib/seo'

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
})

export async function sendEmail({ to, subject, html }: { to: string; subject: string; html: string }) {
  const command = new SendEmailCommand({
    Source: 'Codelabz <contato@codelabz.com.br>',
    Destination: { ToAddresses: [to] },
    Message: {
      Subject: { Data: subject, Charset: 'UTF-8' },
      Body: { Html: { Data: html, Charset: 'UTF-8' } },
    },
  })

  await sesClient.send(command)
}

export function buildChargeLinkEmailHtml({
  clientName,
  description,
  amountCents,
  dueDate,
  paymentLink,
}: {
  clientName: string
  description: string
  amountCents: number
  dueDate: Date
  paymentLink: string
}) {
  const value = formatCents(amountCents)
  const due = dueDate.toLocaleDateString('pt-BR')

  return `<!doctype html>
<html lang="pt-BR">
  <body style="margin:0;padding:0;background-color:#eef2f7;">
    <span style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;color:#eef2f7;">
      Sua cobrança de ${value} referente a ${description} já está disponível — pague via Pix, boleto ou cartão.
    </span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eef2f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background-color:#021d3f;padding:24px 32px;">
                <img
                  src="${SITE_URL}/email-logo.png"
                  width="150"
                  height="26"
                  alt="Codelabz"
                  style="display:block;width:150px;height:26px;border:0;outline:none;"
                />
              </td>
            </tr>

            <tr>
              <td style="padding:36px 32px 4px;">
                <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#e0024d;">
                  Nova cobrança
                </p>
                <h1 style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.3;color:#021d3f;">
                  Olá, ${clientName}!
                </h1>
                <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#475569;">
                  Sua cobrança referente a <strong style="color:#021d3f;">${description}</strong> já está disponível para pagamento.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
                  <tr>
                    <td style="padding:20px 24px 14px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;">Valor</td>
                          <td align="right" style="font-family:Arial,Helvetica,sans-serif;font-size:26px;font-weight:800;color:#021d3f;">${value}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 24px 20px;border-top:1px solid #e2e8f0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#64748b;">Vencimento</td>
                          <td align="right" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#021d3f;">${due}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:28px 32px 6px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-radius:10px;background-color:#e0024d;">
                      <a
                        href="${paymentLink}"
                        style="display:inline-block;padding:14px 40px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:10px;"
                      >
                        Pagar agora
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td align="center" style="padding:4px 32px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:600;letter-spacing:0.5px;color:#94a3b8;">
                  Pix &nbsp;·&nbsp; Boleto &nbsp;·&nbsp; Cartão de crédito
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:0 32px 32px;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#94a3b8;text-align:center;">
                  Se o botão não funcionar, copie e cole este link no navegador:<br />
                  <a href="${paymentLink}" style="color:#e0024d;word-break:break-all;">${paymentLink}</a>
                </p>
              </td>
            </tr>

            <tr>
              <td style="background-color:#f8fafc;padding:20px 32px;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#94a3b8;text-align:center;">
                  Codelabz · contato@codelabz.com.br<br />
                  Este é um e-mail automático sobre sua assinatura.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

export async function sendChargeLinkEmail({
  to,
  clientName,
  description,
  amountCents,
  dueDate,
  paymentLink,
}: {
  to: string
  clientName: string
  description: string
  amountCents: number
  dueDate: Date
  paymentLink: string
}) {
  const value = formatCents(amountCents)

  await sendEmail({
    to,
    subject: `Cobrança disponível: ${description} — ${value}`,
    html: buildChargeLinkEmailHtml({ clientName, description, amountCents, dueDate, paymentLink }),
  })
}
