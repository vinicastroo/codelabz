#!/usr/bin/env node
// Renderiza um carrossel da Code Labz a partir de um JSON.
// Uso: node .claude/skills/carrossel-codelabz/render.cjs content/<data>-<slug>/carrossel.json
// Saída: slide-01.png ... na mesma pasta do JSON, 1080x1350, e grade.png (prévia lado a lado).
'use strict'

const fs = require('fs')
const path = require('path')
const { pathToFileURL } = require('url')
const { execFileSync } = require('child_process')

let chromium
try {
  ;({ chromium } = require('playwright'))
} catch {
  ;({ chromium } = require('/opt/node22/lib/node_modules/playwright'))
}

const SKILL = __dirname
const W = 1080
const H = 1350

const jsonPath = process.argv[2]
if (!jsonPath) {
  console.error('uso: node render.cjs <caminho/carrossel.json>')
  process.exit(1)
}
const outDir = path.dirname(path.resolve(jsonPath))
const spec = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
const slides = spec.slides || []
if (!slides.length) {
  console.error('carrossel.json sem "slides"')
  process.exit(1)
}

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// **destaque** vira cor de acento, `codigo` vira mono, \n vira quebra
const md = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br>')

const fileUrl = (p) => pathToFileURL(path.resolve(outDir, p)).href
const logo = fs.readFileSync(path.join(SKILL, 'assets/logo-white.svg'), 'utf8')
const fontsCss = fs
  .readFileSync(path.join(SKILL, 'fonts/fonts.css'), 'utf8')
  .replace(/url\((.+?)\)/g, (_, f) => `url(${pathToFileURL(path.join(SKILL, 'fonts', f)).href})`)
const css = fs.readFileSync(path.join(SKILL, 'template.css'), 'utf8')
const handle = spec.handle || '@code.labz'

function body(s) {
  switch (s.tipo) {
    case 'capa':
      return `
        ${s.imagem ? `<div class="bg-img" style="background-image:url('${fileUrl(s.imagem)}')"></div><div class="bg-fade"></div>` : ''}
        <div class="capa">
          ${s.kicker ? `<div class="kicker">${md(s.kicker)}</div>` : ''}
          <h1>${md(s.titulo)}</h1>
          ${s.subtitulo ? `<p class="sub">${md(s.subtitulo)}</p>` : ''}
        </div>`
    case 'texto':
      return `
        <div class="bloco">
          ${s.kicker ? `<div class="kicker">${md(s.kicker)}</div>` : ''}
          <h2>${md(s.titulo)}</h2>
          ${(Array.isArray(s.corpo) ? s.corpo : [s.corpo]).filter(Boolean).map((p) => `<p>${md(p)}</p>`).join('')}
          ${s.imagem ? `<img class="img" src="${fileUrl(s.imagem)}">` : ''}
        </div>`
    case 'lista':
      return `
        <div class="bloco">
          ${s.kicker ? `<div class="kicker">${md(s.kicker)}</div>` : ''}
          <h2>${md(s.titulo)}</h2>
          <ol class="lista">${(s.itens || [])
            .map((it, i) => {
              const t = typeof it === 'string' ? { titulo: it } : it
              return `<li><span class="n">${String(i + 1).padStart(2, '0')}</span><div><strong>${md(t.titulo)}</strong>${t.texto ? `<p>${md(t.texto)}</p>` : ''}</div></li>`
            })
            .join('')}</ol>
        </div>`
    case 'numero':
      return `
        <div class="bloco numero">
          ${s.kicker ? `<div class="kicker">${md(s.kicker)}</div>` : ''}
          <div class="valor">${md(s.valor)}</div>
          <p class="legenda">${md(s.legenda)}</p>
          ${s.fonte ? `<p class="fonte">Fonte: ${md(s.fonte)}</p>` : ''}
        </div>`
    case 'codigo':
      return `
        <div class="bloco">
          ${s.kicker ? `<div class="kicker">${md(s.kicker)}</div>` : ''}
          <h2>${md(s.titulo)}</h2>
          <div class="term"><div class="term-bar"><i></i><i></i><i></i><span>${esc(s.arquivo || s.linguagem || '')}</span></div><pre>${esc(s.codigo)}</pre></div>
          ${s.nota ? `<p class="nota">${md(s.nota)}</p>` : ''}
        </div>`
    case 'comparacao': {
      const col = (c, cls) =>
        `<div class="col ${cls}"><h3>${md(c.titulo)}</h3><ul>${(c.itens || []).map((i) => `<li>${md(i)}</li>`).join('')}</ul></div>`
      return `
        <div class="bloco">
          ${s.kicker ? `<div class="kicker">${md(s.kicker)}</div>` : ''}
          <h2>${md(s.titulo)}</h2>
          <div class="comp">${col(s.esquerda, 'ruim')}${col(s.direita, 'bom')}</div>
        </div>`
    }
    case 'cta':
      return `
        <div class="cta">
          <h2>${md(s.titulo)}</h2>
          ${s.texto ? `<p>${md(s.texto)}</p>` : ''}
          <div class="botao">${md(s.botao || 'Fale com a Code Labz')}</div>
          <div class="site">${esc(s.site || 'codelabz.com.br')}</div>
        </div>`
    default:
      throw new Error(`tipo de slide desconhecido: ${s.tipo}`)
  }
}

function page(s, i) {
  const n = slides.length
  const last = i === n - 1
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<style>${fontsCss}\n${css}</style></head>
<body class="t-${s.tipo} ${s.tema === 'claro' ? 'claro' : ''}">
  <div class="glow"></div>
  <div class="grid"></div>
  <header><div class="logo">${logo}</div><div class="cont">${String(i + 1).padStart(2, '0')}/${String(n).padStart(2, '0')}</div></header>
  <main>${body(s)}</main>
  <footer>
    <span>${esc(handle)}</span>
    ${last ? '<span class="salve">Salve pra consultar depois</span>' : '<span class="arrasta">Arrasta <b>→</b></span>'}
  </footer>
  <div class="progress"><div style="width:${((i + 1) / n) * 100}%"></div></div>
</body></html>`
}

;(async () => {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })
  const pg = await ctx.newPage()
  const files = []
  for (let i = 0; i < slides.length; i++) {
    const htmlPath = path.join(outDir, `.slide-${i + 1}.html`)
    fs.writeFileSync(htmlPath, page(slides[i], i))
    await pg.goto(pathToFileURL(htmlPath).href)
    await pg.evaluate(() => document.fonts.ready)
    // avisa se algum texto estourou a área útil
    const overflow = await pg.evaluate(() => {
      const m = document.querySelector('main')
      return m.scrollHeight > m.clientHeight + 2
    })
    if (overflow) console.warn(`AVISO: slide ${i + 1} (${slides[i].tipo}) estourou a altura, corte texto`)
    const out = path.join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`)
    await pg.screenshot({ path: out })
    fs.unlinkSync(htmlPath)
    files.push(out)
    console.log(out)
  }
  await browser.close()

  // prévia: todos os slides lado a lado em miniatura
  try {
    const cols = Math.min(files.length, 5)
    const rows = Math.ceil(files.length / cols)
    execFileSync('ffmpeg', [
      '-y', '-loglevel', 'error',
      '-i', path.join(outDir, 'slide-%02d.png'),
      '-vf', `scale=324:405,tile=${cols}x${rows}:padding=12:margin=12:color=0x0b1426`,
      '-frames:v', '1',
      path.join(outDir, 'grade.png'),
    ])
    console.log(path.join(outDir, 'grade.png'))
  } catch (e) {
    console.warn('sem ffmpeg, grade.png não gerada')
  }
})()
