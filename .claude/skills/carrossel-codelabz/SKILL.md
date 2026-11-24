---
name: carrossel-codelabz
description: Cria carrossel de Instagram da Code Labz (1080x1350, identidade do site) a partir de um JSON e renderiza os PNGs. Use quando pedirem carrossel, post em slides ou post estático da Code Labz.
---

# Carrossel Code Labz

Antes de escrever, leia `docs/social/marca.md` (tom, público, pilares, CTA). A pauta vem de `docs/social/pautas.md`, de um `blog-drafts/*.md` ou do usuário.

## Fluxo

1. **Pasta:** `content/<AAAA-MM-DD>-<slug>/`.
2. **Roteiro:** escreva `carrossel.json` (formato abaixo). 6 a 9 slides: capa com gancho, valor, CTA no último. Uma ideia por slide.
3. **Renderize:**
   ```bash
   node .claude/skills/carrossel-codelabz/render.cjs content/<pasta>/carrossel.json
   ```
   Gera `slide-01.png`… e `grade.png`. Se aparecer `AVISO: slide N estourou`, corte texto e renderize de novo.
4. **Confira olhando** `grade.png` e pelo menos a capa em tamanho real (Read na imagem). Texto cortado, palavra órfã feia no título ou slide vazio demais: ajuste.
5. **Legenda:** escreva `legenda.md` (formato abaixo).
6. Mostre `grade.png` ao usuário, peça aprovação e marque `[~]` em `docs/social/pautas.md`.

## Formato do `carrossel.json`

```json
{
  "pauta": "slug",
  "fonte": "blog-drafts/x.md ou URL da notícia",
  "slides": [
    { "tipo": "capa", "kicker": "Performance", "titulo": "Seu site está **espantando cliente**", "subtitulo": "…", "imagem": "capa.png" },
    { "tipo": "texto", "kicker": "opcional", "titulo": "…", "corpo": ["parágrafo 1", "parágrafo 2"], "imagem": "opcional.png" },
    { "tipo": "lista", "titulo": "…", "itens": [{ "titulo": "…", "texto": "…" }, "item simples"] },
    { "tipo": "numero", "valor": "2,5s", "legenda": "…", "fonte": "obrigatória se for estatística" },
    { "tipo": "codigo", "titulo": "…", "arquivo": "app/page.tsx", "codigo": "…", "nota": "…" },
    { "tipo": "comparacao", "titulo": "…", "esquerda": { "titulo": "Ruim", "itens": ["…"] }, "direita": { "titulo": "Bom", "itens": ["…"] } },
    { "tipo": "cta", "titulo": "…", "texto": "…", "botao": "Chama no direct", "site": "codelabz.com.br" }
  ]
}
```

* `**x**` = destaque ruby; `` `x` `` = mono; `\n` = quebra.
* `"tema": "claro"` em qualquer slide troca pro fundo claro (use pouco, pra variar ritmo).
* `imagem` é caminho relativo à pasta do post. Na capa vira fundo com degradê por cima.

### Limites de texto (pra caber)

| Tipo | Limite |
|---|---|
| capa título | até ~6 palavras (3 linhas) |
| texto | título até 2 linhas, corpo até ~45 palavras |
| lista | 3 a 4 itens, texto de cada item até ~14 palavras |
| codigo | até ~12 linhas de 40 colunas |
| comparacao | 3 itens por lado, até ~7 palavras cada |

## Imagem de capa com IA (opcional, gasta crédito)

Use Higgsfield `generate_image` (modelo padrão `gpt_image_2_6`), `aspect_ratio` `4:5`. Antes: `estimate_image_cost`, diga o custo ao usuário e espere o ok. Prompt na estética da marca (marca.md: navy e magenta, sem texto, sem logo de terceiros). Baixe o resultado com `curl` para `content/<pasta>/capa.png`.

## Formato do `legenda.md`

```
# Legenda
<gancho na 1ª linha, até 125 caracteres>

<2 a 4 frases de valor>

<CTA>

#hashtag1 #hashtag2 … (5 a 8, de marca.md)

# Texto alternativo
<descrição curta do carrossel para acessibilidade>
```
