// Gera o hash bcrypt de uma senha para usar em ADMIN_PASSWORD_HASH.
// Uso: pnpm hash-password "minha-senha-aqui"
import bcrypt from 'bcryptjs'

const password = process.argv[2]

if (!password) {
  console.error('Uso: pnpm hash-password "minha-senha-aqui"')
  process.exit(1)
}

const hash = bcrypt.hashSync(password, 12)
// Next.js expande "$algo" dentro de arquivos .env como se fosse
// variável, o que corrompe hashes bcrypt (cheios de "$"). Escapamos
// os "$" abaixo especificamente para colar no arquivo .env local.
const escapedForDotenv = hash.replace(/\$/g, '\\$')

console.log('\nAdicione isto ao seu .env (arquivo local):\n')
console.log(`ADMIN_PASSWORD_HASH="${escapedForDotenv}"\n`)
console.log('Se for configurar pelo painel da Vercel em vez de um .env, use sem escapar:\n')
console.log(`ADMIN_PASSWORD_HASH="${hash}"\n`)
