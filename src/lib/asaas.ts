const ASAAS_API_KEY = process.env.ASAAS_API_KEY ?? ''

// Chaves de sandbox contêm "_hmlg_" (homologação); chaves de produção não.
// As contas/dados/chaves não são compartilhados entre os dois ambientes,
// então a URL base precisa bater com o tipo da chave.
const ASAAS_BASE_URL = ASAAS_API_KEY.includes('_hmlg_')
  ? 'https://api-sandbox.asaas.com/v3'
  : 'https://api.asaas.com/v3'

class AsaasError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message)
    this.name = 'AsaasError'
  }
}

async function asaasRequest<T>(path: string, init?: RequestInit): Promise<T> {
  if (!ASAAS_API_KEY) {
    throw new AsaasError('ASAAS_API_KEY não configurada', 500)
  }

  const res = await fetch(`${ASAAS_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Codelabz-Billing/1.0',
      access_token: ASAAS_API_KEY,
      ...init?.headers,
    },
  })

  const body = await res.json().catch(() => null)

  if (!res.ok) {
    const message = body?.errors?.[0]?.description || `Asaas respondeu ${res.status}`
    throw new AsaasError(message, res.status)
  }

  return body as T
}

export type AsaasCustomer = {
  id: string
  name: string
}

export async function createAsaasCustomer(input: {
  name: string
  email?: string | null
  phone?: string | null
  document?: string | null
  externalReference: string
}) {
  return asaasRequest<AsaasCustomer>('/customers', {
    method: 'POST',
    body: JSON.stringify({
      name: input.name,
      email: input.email || undefined,
      phone: input.phone || undefined,
      cpfCnpj: input.document || undefined,
      externalReference: input.externalReference,
    }),
  })
}

export type AsaasCharge = {
  id: string
  status: string
  invoiceUrl: string
}

export async function createAsaasCharge(input: {
  customerId: string
  amountCents: number
  dueDate: Date
  description: string
  externalReference: string
}) {
  return asaasRequest<AsaasCharge>('/payments', {
    method: 'POST',
    body: JSON.stringify({
      customer: input.customerId,
      billingType: 'UNDEFINED',
      value: input.amountCents / 100,
      dueDate: input.dueDate.toISOString().slice(0, 10),
      description: input.description,
      externalReference: input.externalReference,
    }),
  })
}
