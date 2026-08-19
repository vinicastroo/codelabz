export function formatCents(cents: number) {
  return (cents / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

export function reaisToCents(value: string | number) {
  const normalized = typeof value === 'string' ? value.replace(',', '.') : value
  const amount = Number(normalized)
  if (Number.isNaN(amount)) return 0
  return Math.round(amount * 100)
}
