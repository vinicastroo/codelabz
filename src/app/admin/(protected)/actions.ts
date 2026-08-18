'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { reaisToCents } from '@/lib/money'
import { generateMonthlyCharges } from '@/lib/billing'

export async function createClientAction(formData: FormData) {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const phone = String(formData.get('phone') || '').trim()
  const document = String(formData.get('document') || '').trim()
  const notes = String(formData.get('notes') || '').trim()

  if (!name) return

  const client = await prisma.billingClient.create({
    data: {
      name,
      email: email || null,
      phone: phone || null,
      document: document || null,
      notes: notes || null,
    },
  })

  revalidatePath('/admin/clientes')
  redirect(`/admin/clientes/${client.id}`)
}

export async function createSubscriptionAction(formData: FormData) {
  const clientId = String(formData.get('clientId') || '')
  const description = String(formData.get('description') || '').trim()
  const amount = String(formData.get('amount') || '')
  const billingDay = Number(formData.get('billingDay') || 5)

  if (!clientId || !description || !amount) return

  await prisma.subscription.create({
    data: {
      clientId,
      description,
      amountCents: reaisToCents(amount),
      billingDay: Math.min(Math.max(billingDay, 1), 28),
    },
  })

  revalidatePath(`/admin/clientes/${clientId}`)
}

export async function updateSubscriptionStatusAction(formData: FormData) {
  const subscriptionId = String(formData.get('subscriptionId') || '')
  const status = String(formData.get('status') || '') as 'ACTIVE' | 'PAUSED' | 'CANCELLED'
  const clientId = String(formData.get('clientId') || '')

  if (!subscriptionId || !status) return

  await prisma.subscription.update({
    where: { id: subscriptionId },
    data: { status },
  })

  revalidatePath(`/admin/clientes/${clientId}`)
}

export async function markChargePaidAction(formData: FormData) {
  const chargeId = String(formData.get('chargeId') || '')
  if (!chargeId) return

  await prisma.charge.update({
    where: { id: chargeId },
    data: { status: 'PAID', paidAt: new Date() },
  })

  revalidatePath('/admin')
  revalidatePath('/admin/cobrancas')
  revalidatePath('/admin/clientes')
}

export async function cancelChargeAction(formData: FormData) {
  const chargeId = String(formData.get('chargeId') || '')
  if (!chargeId) return

  await prisma.charge.update({
    where: { id: chargeId },
    data: { status: 'CANCELLED' },
  })

  revalidatePath('/admin')
  revalidatePath('/admin/cobrancas')
  revalidatePath('/admin/clientes')
}

export async function generateChargesAction() {
  await generateMonthlyCharges()
  revalidatePath('/admin')
  revalidatePath('/admin/cobrancas')
}
