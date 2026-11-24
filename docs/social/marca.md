# Code Labz no Instagram: guia de marca para conteúdo

Perfil: `@code.labz` · Site: `codelabz.com.br` · LinkedIn: `/company/code-labz`

## Quem somos (o que o conteúdo vende)

Software house de Balneário Camboriú (SC) que cria sites institucionais, landing pages, sistemas web sob medida, SaaS, e-commerce, APIs e automações. Todo post existe pra posicionar a Code Labz como quem resolve o problema de negócio com tecnologia bem feita, e levar pro direct, WhatsApp ou site.

## Público

1. **Principal: donos e gestores de pequenas e médias empresas** (imobiliária, arquitetura, consultoria, comércio, prestador de serviço). Não são técnicos. Querem vender mais, ganhar tempo, parecer profissionais.
2. **Secundário: devs e gente de tecnologia.** Consome novidade tech e dica prática; dá alcance e autoridade.

Regra: cada post escolhe UM público. Post pra empresário não tem jargão sem tradução; post pra dev pode ter código.

## Pilares (rodízio sugerido)

| Pilar | Público | Exemplo | Fonte |
|---|---|---|---|
| Educação de negócio | Empresário | "Quanto custa um site em 2026", "Landing page ou site?" | `blog-drafts/*.md` |
| Novidades tech | Dev e empresário curioso | Lançamento de framework, IA nova, mudança no Google | pesquisa na web (sempre com fonte e data) |
| Dica prática dev | Dev | Snippet Next.js, performance, boa prática | experiência do time |
| Case / bastidor | Empresário | Projeto entregue, antes e depois | `public/banner-*.png`, `src/data/projects` |

## Tom de voz

* Português do Brasil, informal e direto, como conversa entre profissionais. "A gente", "você".
* Frase curta. Uma ideia por slide.
* Sem hype vazio ("revolucionário", "incrível"), sem clichê de coach.
* Sem travessão nem hífen como pontuação no texto (use ponto, vírgula ou dois pontos).
* Números só com fonte verificável. Nunca inventar estatística. Se não tiver fonte, falar qualitativamente.
* Emojis: no máximo 1 ou 2 na legenda, nenhum dentro da arte.

## Visual (igual ao site)

* Fundo navy `#021d3f`, superfície `#032550`, acento ruby `#e0024d`, texto `#f1f5f9`, cinza `#94a3b8`.
* Degradê da marca: `linear-gradient(94.3deg, #e0024d 1%, #1a2140 99%)`.
* Títulos: **Bricolage Grotesque** 800. Texto: **Geist**. Código e rótulos: **Geist Mono**.
* Destaque de palavra-chave em ruby (no JSON: `**palavra**`).
* Logo branco com o "o" em colchetes ruby (`.claude/skills/carrossel-codelabz/assets/logo-white.svg`).
* Imagens de IA: estética tech limpa, tons navy e magenta, luz de neon suave, sem texto dentro da imagem, sem logos de terceiros, sem pessoas reconhecíveis.

## Estrutura que funciona

**Carrossel (6 a 9 slides):** capa com gancho (dor ou curiosidade) → contexto → 3 a 5 slides de valor → resumo ou teste prático → CTA.
**Reels (15 a 35 s):** gancho em até 2 s (pergunta ou afirmação forte, legenda grande) → 3 a 5 cenas de 3 a 5 s → cartela com CTA.

## CTAs (alternar)

* "Chama no direct" · "Link na bio" · "Salva pra consultar depois" · "Manda pra quem precisa ver isso" · "Comenta X que a gente te manda"

## Hashtags base (escolher 5 a 8 por post)

Empresário: `#marketingdigital #sitesprofissionais #presencadigital #empreendedorismo #balneariocamboriu #pequenasempresas #landingpage #seo`
Dev: `#nextjs #react #javascript #webdev #programacao #frontend #performance #desenvolvimentoweb`

## Voz da locução (Reels)

Ainda não escolhida. No primeiro Reels, o agente gera a mesma frase em 2 vozes PT-BR do Higgsfield (`list_voices`) e o usuário escolhe. Anote aqui: `voice_id`, `voice_type` e modelo.
