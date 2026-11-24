#!/usr/bin/env node
// Monta um Reels vertical (1080x1920, 30 fps) da Code Labz a partir de um reels.json.
// Uso: node .claude/skills/reels-codelabz/montar.cjs content/<data>-<slug>/reels.json
// Cada cena usa um clipe (video) ou uma imagem parada (ganha zoom lento). A legenda e o
// logo são desenhados em HTML com as fontes da marca e sobrepostos. No fim entra a cartela.
// Saída na pasta do JSON: reels.mp4 (com locução e trilha), reels-sem-musica.mp4, capa.png.
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

const W = 1080
const H = 1920
const FPS = 30
const SKILL = __dirname
const CARROSSEL = path.join(SKILL, '..', 'carrossel-codelabz')

const jsonPath = process.argv[2]
if (!jsonPath) {
  console.error('uso: node montar.cjs <caminho/reels.json>')
  process.exit(1)
}
const dir = path.dirname(path.resolve(jsonPath))
const spec = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
const cenas = spec.cenas || []
if (!cenas.length) throw new Error('reels.json sem "cenas"')
const tmp = path.join(dir, '.build')
fs.mkdirSync(tmp, { recursive: true })

const ff = (args) => execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...args], { stdio: 'inherit' })
const dur = (f) =>
  parseFloat(
    execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString(),
  )
const abs = (p) => path.resolve(dir, p)
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<em>$1</em>').replace(/\n/g, '<br>')

const fontsCss = fs
  .readFileSync(path.join(CARROSSEL, 'fonts/fonts.css'), 'utf8')
  .replace(/url\((.+?)\)/g, (_, f) => `url(${pathToFileURL(path.join(CARROSSEL, 'fonts', f)).href})`)
const logo = fs.readFileSync(path.join(CARROSSEL, 'assets/logo-white.svg'), 'utf8')

const baseCss = `${fontsCss}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;overflow:hidden;background:transparent;font-family:'Geist',sans-serif;color:#f1f5f9}
em{font-style:normal;color:#ff2e67}
.logo{position:absolute;top:120px;left:0;right:0;display:flex;justify-content:center}
.logo svg{width:250px;height:auto;filter:drop-shadow(0 4px 16px rgba(0,0,0,.6))}
`

// legenda por cena: posição "baixo" (padrão), "meio" ou "topo"
function overlayHtml(c, i) {
  const pos = { topo: 'top:300px', meio: 'top:50%;transform:translateY(-50%)', baixo: 'bottom:430px' }[c.posicao || 'baixo']
  const grande = i === 0 || c.destaque
  return `<!doctype html><html><head><meta charset="utf-8"><style>${baseCss}
.leg{position:absolute;left:70px;right:70px;${pos};text-align:center}
.leg span{display:inline;font-family:'Bricolage Grotesque',sans-serif;font-weight:800;
 font-size:${grande ? 92 : 68}px;line-height:1.22;letter-spacing:-.01em;
 background:rgba(2,29,63,.88);box-decoration-break:clone;-webkit-box-decoration-break:clone;
 padding:6px 26px;border-radius:18px}
</style></head><body>
${spec.logo === false ? '' : `<div class="logo">${logo}</div>`}
${c.legenda ? `<div class="leg"><span>${md(c.legenda)}</span></div>` : ''}
</body></html>`
}

function cartelaHtml(f) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${baseCss}
body{background:#021d3f;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 90px}
body::before{content:'';position:absolute;inset:0;background:radial-gradient(1000px 1000px at 50% 45%,rgba(224,2,77,.4),transparent 65%)}
.c{position:relative;display:flex;flex-direction:column;align-items:center}
.c svg{width:420px;height:auto;margin-bottom:110px}
h2{font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:96px;line-height:1.05;letter-spacing:-.02em}
p{font-size:44px;color:#cbd5e1;margin-top:40px;line-height:1.35}
.b{margin-top:80px;font-size:46px;font-weight:700;padding:34px 70px;border-radius:999px;background:linear-gradient(94.3deg,#e0024d 1%,#ac0543 99%);box-shadow:0 20px 60px rgba(224,2,77,.45)}
.s{margin-top:44px;font-family:'Geist Mono',monospace;font-size:36px;color:#94a3b8}
</style></head><body><div class="c">${logo}
<h2>${md(f.titulo || 'Seu projeto merece **ser rápido**')}</h2>
${f.texto ? `<p>${md(f.texto)}</p>` : ''}
<div class="b">${md(f.botao || 'Chama no direct')}</div>
<div class="s">${esc(f.site || 'codelabz.com.br')}</div></div></body></html>`
}

;(async () => {
  // 1. overlays e cartela em PNG
  const browser = await chromium.launch()
  const pg = await (await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 })).newPage()
  const shot = async (html, out, transparente) => {
    const f = path.join(tmp, 'tmp.html')
    fs.writeFileSync(f, html)
    await pg.goto(pathToFileURL(f).href)
    await pg.evaluate(() => document.fonts.ready)
    await pg.screenshot({ path: out, omitBackground: transparente })
  }
  for (let i = 0; i < cenas.length; i++) await shot(overlayHtml(cenas[i], i), path.join(tmp, `ov-${i}.png`), true)
  const final = spec.final || {}
  const temCartela = spec.final !== false
  if (temCartela) await shot(cartelaHtml(final), path.join(tmp, 'cartela.png'), false)
  await browser.close()

  // 2. cada cena vira um segmento 1080x1920 sem áudio, com a legenda queimada
  const segs = []
  for (let i = 0; i < cenas.length; i++) {
    const c = cenas[i]
    const d = c.duracao || 3
    const out = path.join(tmp, `seg-${i}.mp4`)
    const fit = `scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1`
    let input
    let vf
    if (c.clipe) {
      input = ['-stream_loop', '-1', '-i', abs(c.clipe)]
      vf = `[0:v]${fit},fps=${FPS},trim=duration=${d},setpts=PTS-STARTPTS[v]`
    } else if (c.imagem) {
      input = ['-loop', '1', '-i', abs(c.imagem)]
      const frames = Math.round(d * FPS)
      // zoom lento (Ken Burns) para imagem parada
      vf = `[0:v]scale=${W * 2}:${H * 2}:force_original_aspect_ratio=increase,crop=${W * 2}:${H * 2},zoompan=z='1+0.08*on/${frames}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${H}:fps=${FPS},setsar=1[v]`
    } else {
      throw new Error(`cena ${i + 1} sem "clipe" nem "imagem"`)
    }
    ff([
      ...input, '-i', path.join(tmp, `ov-${i}.png`),
      '-filter_complex', `${vf};[v][1:v]overlay=0:0,format=yuv420p[o]`,
      '-map', '[o]', '-t', String(d), '-r', String(FPS), '-an',
      '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', out,
    ])
    segs.push(out)
  }
  if (temCartela) {
    const out = path.join(tmp, 'seg-cartela.mp4')
    ff(['-loop', '1', '-i', path.join(tmp, 'cartela.png'), '-t', String(final.duracao || 2.5), '-r', String(FPS),
      '-vf', 'format=yuv420p', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '18', out])
    segs.push(out)
  }

  // 3. concatena
  const lista = path.join(tmp, 'lista.txt')
  fs.writeFileSync(lista, segs.map((s) => `file '${s}'`).join('\n'))
  const video = path.join(tmp, 'video.mp4')
  ff(['-f', 'concat', '-safe', '0', '-i', lista, '-c', 'copy', video])
  const total = dur(video)

  // 4. áudio: locução (opcional) + trilha (opcional) com ducking, normalizado em -14 LUFS
  const loc = spec.locucao ? abs(spec.locucao) : null
  const mus = spec.trilha ? abs(spec.trilha) : null
  const mix = (comMusica, out) => {
    const ins = ['-i', video]
    const parts = []
    let n = 1
    let vozLabel = null
    let musLabel = null
    if (loc) {
      ins.push('-i', loc)
      parts.push(`[${n}:a]adelay=${Math.round((spec.atraso_locucao || 0.3) * 1000)}|all=1,volume=1.0[voz]`)
      vozLabel = '[voz]'
      n++
    }
    if (comMusica && mus) {
      ins.push('-stream_loop', '-1', '-i', mus)
      parts.push(`[${n}:a]volume=${spec.volume_trilha ?? (loc ? 0.18 : 0.7)},afade=t=out:st=${Math.max(0, total - 1.5)}:d=1.5[mus]`)
      musLabel = '[mus]'
      n++
    }
    let final
    if (vozLabel && musLabel) {
      parts.push(`[voz]asplit[voz1][voz2];[mus][voz2]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=400[duck];[voz1][duck]amix=inputs=2:normalize=0[a0]`)
      final = '[a0]'
    } else {
      final = vozLabel || musLabel
    }
    if (!final) {
      ff(['-i', video, '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo', '-t', String(total), '-c:v', 'copy', '-c:a', 'aac', '-shortest', out])
      return
    }
    parts.push(`${final}apad,atrim=duration=${total},loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]`)
    ff([...ins, '-filter_complex', parts.join(';'), '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-t', String(total), out])
  }
  mix(true, path.join(dir, 'reels.mp4'))
  if (mus) mix(false, path.join(dir, 'reels-sem-musica.mp4'))

  // 5. capa (primeiro frame com legenda) e folha de contato
  ff(['-i', path.join(dir, 'reels.mp4'), '-vf', `select=eq(n\\,${Math.round(FPS * 0.8)})`, '-frames:v', '1', path.join(dir, 'capa.png')])
  ff(['-i', path.join(dir, 'reels.mp4'), '-vf', `fps=${(8 / total).toFixed(4)},scale=270:480,tile=8x1:padding=8:color=0x0b1426`, '-frames:v', '1', path.join(dir, 'contato.png')])

  fs.rmSync(tmp, { recursive: true, force: true })
  console.log(`${path.join(dir, 'reels.mp4')} (${total.toFixed(1)} s)`)
})()
