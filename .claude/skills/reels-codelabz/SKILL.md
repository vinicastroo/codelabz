---
name: reels-codelabz
description: Cria Reels/TikTok/Shorts da Code Labz com IA (cenas e locução no Higgsfield) e monta o vertical 1080x1920 com legenda, logo e cartela da marca. Use quando pedirem reels, vídeo curto ou vídeo com IA da Code Labz.
---

# Reels Code Labz com IA

Leia antes `docs/social/marca.md`. **Tudo no Higgsfield gasta crédito:** nunca gere sem antes mostrar o roteiro aprovado e o custo estimado, e receber o ok do usuário.

## Fluxo

### 1. Roteiro (grátis, sempre primeiro)

Crie `content/<AAAA-MM-DD>-<slug>/roteiro.md` e mostre ao usuário:

* **Gancho** (0 a 2 s): pergunta ou afirmação forte. É a legenda grande da cena 1.
* **3 a 5 cenas** de 3 a 5 s. Para cada uma: legenda na tela (até 8 palavras), fala da locução, prompt visual em inglês.
* **Cartela** final: título, texto e botão.
* Duração total 15 a 35 s. Locução lida em voz alta cabe no tempo (≈ 2,5 palavras por segundo).

Prompt visual: vertical, estética tech limpa (navy, magenta, neon suave), câmera com movimento simples (slow push in, orbit), **sem texto, sem logos, sem rostos reconhecíveis**. Prefira metáforas visuais (loja com fila, velocímetro, tela carregando, código flutuando) a "pessoa no computador".

### 2. Orçamento

1. `balance` pra ver o saldo.
2. Escolha por cena: **imagem parada** (barato, ganha zoom no montador) ou **clipe de vídeo** (caro, use no gancho e em 1 ou 2 cenas-chave).
3. Estime: `estimate_image_cost` (`gpt_image_2_6`, `aspect_ratio: "9:16"`), `estimate_video_cost` (`seedance_2_5`, `aspect_ratio: "9:16"`, `duration: 5`, imagem da cena como referência), `estimate_audio_cost` (locução).
4. Mostre a tabela de custo por cena e o total. **Espere o ok.**

### 3. Geração

* Imagens das cenas: `generate_image_batch` (uma por cena, 9:16). Olhe cada uma; refaça só a que ficar ruim.
* Clipes: `generate_video_batch` com `seedance_2_5`, a imagem aprovada da cena em `medias` (job_id), `aspect_ratio: "9:16"`, `duration: 5`.
* Locução: `generate_audio` com `seed_audio`. Voz: use a de `docs/social/marca.md` (seção Voz); se não houver, `list_voices`, escolha 2 vozes PT-BR, gere a mesma frase curta nas duas e deixe o usuário escolher, depois anote em marca.md.
* Trilha (opcional): `generate_audio` com `suno_music`, `instrumental: true`, style tipo "minimal electronic, tech, upbeat, 100 bpm", `duration` = duração do vídeo arredondada pra cima (mínimo 15).
* `jobs_wait` até terminar e baixe tudo com `curl -sL -o` em `content/<pasta>/midia/` (`cena-01.mp4`, `cena-02.png`, `locucao.mp3`, `trilha.mp3`).

### 4. Montagem (grátis)

Escreva `content/<pasta>/reels.json` e rode:

```bash
node .claude/skills/reels-codelabz/montar.cjs content/<pasta>/reels.json
```

```json
{
  "locucao": "midia/locucao.mp3",
  "trilha": "midia/trilha.mp3",
  "atraso_locucao": 0.3,
  "volume_trilha": 0.18,
  "cenas": [
    { "clipe": "midia/cena-01.mp4", "duracao": 3, "legenda": "Seu site demora **3 segundos**?" },
    { "imagem": "midia/cena-02.png", "duracao": 4, "legenda": "…", "posicao": "baixo" }
  ],
  "final": { "titulo": "Site rápido **vende mais**", "texto": "…", "botao": "Chama no direct", "duracao": 2.5 }
}
```

* `posicao`: `baixo` (padrão), `meio` ou `topo`. A cena 1 e as com `"destaque": true` têm legenda maior.
* Ajuste `duracao` das cenas pra somar a duração da locução (meça com `ffprobe`).
* `"final": false` tira a cartela; `"logo": false` tira o logo do topo.

Saídas: `reels.mp4` (locução e trilha, −14 LUFS), `reels-sem-musica.mp4` (pra usar música em alta do app), `capa.png`, `contato.png`.

### 5. Conferência e entrega

* Olhe `contato.png` e `capa.png` (Read). Legenda em cima de algo importante: troque `posicao`.
* Escreva `legenda.md` (mesmo formato do carrossel) e marque `[~]` em `docs/social/pautas.md`.
* Entregue ao usuário: `contato.png`, caminho do `reels.mp4` e custo gasto.

## Sem crédito? Reels só com material próprio

Dá pra montar sem Higgsfield: cenas com `imagem` apontando pra slides de um carrossel já renderizado, prints de cases (`public/banner-*.png`) ou gravação de tela, sem locução e com `trilha` de banco livre. O montador é o mesmo.
