export type Post = {
  slug: string
  title: string
  /** Title tag curto (~60 caracteres) para <title>/OG/Twitter. Se ausente, usa `title`. */
  metaTitle?: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  author: string
  image: string
}

export const posts: Post[] = [
  {
    slug: 'rafa-helena-arquitetura-caso-de-sucesso',
    title: 'Rafa Helena Arquitetura: um site que transforma portfólio em captação de clientes',
    metaTitle: 'Site para Arquitetos: o Case Rafa Helena',
    excerpt:
      'Como a Codelabz transformou o portfólio disperso da arquiteta Rafa Helena em um site rápido e otimizado para SEO, pensado para gerar contato com clientes.',
    date: '2026-06-25',
    category: 'Cases de Sucesso',
    readTime: '5 min',
    author: 'Equipe Codelabz',
    image: '/banner-rafa.png',
    content: `
      <p>Para escritórios de arquitetura, o site costuma ser o primeiro contato do cliente com o trabalho do profissional. Foi com esse objetivo que desenvolvemos o site institucional da arquiteta Rafa Helena: transformar um portfólio disperso em uma vitrine digital.</p>

      <h2>O desafio</h2>
      <p>Antes do projeto, os trabalhos da Rafa Helena estavam espalhados entre redes sociais e materiais físicos, sem um lugar central que reunisse cases, diferenciais e formas de contato. O objetivo era uma experiência fluida, com carregamento rápido e navegação intuitiva em qualquer dispositivo. Veja também os <a href="/servicos">serviços de criação de sites</a> que aplicamos nesse tipo de projeto.</p>

      <h2>A solução da Codelabz</h2>
      <p>Desenvolvemos uma galeria de projetos responsiva, otimizamos as imagens para carregamento rápido sem perder qualidade visual, e aplicamos boas práticas de SEO técnico — marcação semântica de títulos, dados estruturados e meta tags específicas para cada seção do site.</p>

      <h2>Resultado</h2>
      <p>O site passou a funcionar como ferramenta ativa de captação, com o portfólio apresentado de forma organizada e contato direto via WhatsApp em qualquer página. Na avaliação da própria cliente:</p>

      <blockquote>"Meu site de arquitetura ficou excelente! Do jeito que eu queria, super recomendo!!" — Rafaela Helena, arquiteta</blockquote>

      <p>Quer ver outros projetos com esse mesmo cuidado de portfólio e performance? Conheça mais no nosso <a href="/projetos">portfólio de projetos</a>.</p>
    `,
  },
  {
    slug: 'lovegoods-ecommerce-foco-em-conversao',
    title: 'Lovegoods: como construímos um e-commerce com foco real em conversão',
    metaTitle: 'Case Lovegoods: E-commerce Focado em Conversão',
    excerpt:
      'Veja como a Codelabz estruturou o e-commerce da Lovegoods com catálogo filtrável, checkout enxuto e integrações que reduzem abandono de carrinho.',
    date: '2026-05-10',
    category: 'E-commerce',
    readTime: '6 min',
    author: 'Equipe Codelabz',
    image: '/banner-lovegoods.png',
    content: `
      <p>A Lovegoods, especializada em presentes criativos e colecionáveis, precisava de uma loja virtual construída do zero para vender online — não uma adaptação de plataforma genérica. Desenvolvemos o e-commerce da marca com foco em cada etapa da jornada de compra, do catálogo ao checkout.</p>

      <h2>O desafio</h2>
      <p>Um catálogo de presentes e colecionáveis precisa funcionar bem tanto para quem já sabe o que procura quanto para quem está só explorando. A loja também precisava nascer pensada para mobile desde o início, já que é por ali que passa a maior parte do tráfego de e-commerce. Veja como estruturamos esse tipo de projeto nos nossos <a href="/servicos">serviços de e-commerce</a>.</p>

      <h2>Catálogo filtrável e experiência mobile</h2>
      <p>Estruturamos filtros de produto rápidos, imagens otimizadas em formato moderno e um layout que prioriza a leitura em telas pequenas sem perder informações relevantes para a decisão de compra.</p>

      <h2>Integrações de pagamento e logística</h2>
      <p>Integramos gateways de pagamento confiáveis e serviços de cálculo de frete em tempo real, reduzindo o abandono de carrinho por falta de transparência nos custos finais da compra.</p>

      <h2>Resultado</h2>
      <p>O resultado foi um checkout mais curto, com menos etapas de fricção, e uma experiência de compra consistente entre desktop e mobile — construída do zero para converter, não adaptada depois. Confira outros projetos de e-commerce que já entregamos <a href="/projetos">no nosso portfólio</a>.</p>
    `,
  },
  {
    slug: 'fidliz-programa-de-fidelizacao-digital',
    title: 'Fidliz: substituindo cartões físicos por um programa de fidelização 100% digital',
    excerpt:
      'Como desenvolvemos a plataforma mobile-first da Fidliz, permitindo que clientes acumulem pontos direto pelo celular, sem depender de cartões físicos.',
    date: '2026-03-20',
    category: 'Sistemas Web',
    readTime: '4 min',
    author: 'Equipe Codelabz',
    image: '/banner-fidliz.png',
    content: `
      <p>Cartões físicos de fidelidade se perdem, rasgam e são facilmente esquecidos em casa. Foi pensando em resolver esse problema que desenvolvemos a Fidliz, uma plataforma digital de fidelização pensada para ser mobile-first.</p>

      <h2>Um sistema pensado para o dia a dia do lojista</h2>
      <p>Criamos um dashboard administrativo simples, onde o lojista parceiro consegue gerenciar pontos, regras de fidelização e campanhas sem depender de suporte técnico constante.</p>

      <h2>Notificações e retenção</h2>
      <p>Implementamos notificações que avisam o cliente sobre pontos acumulados e recompensas disponíveis, incentivando o retorno à loja parceira e fortalecendo o relacionamento entre marca e consumidor.</p>

      <h2>Resultado</h2>
      <p>Hoje, os parceiros da Fidliz contam com uma ferramenta de retenção de clientes moderna, sem custos de impressão de cartões e com dados centralizados sobre o comportamento de compra do público.</p>
    `,
  },
  {
    slug: 'minha-prova-sistema-de-avaliacoes-unidavi',
    title: 'Minha Prova: como estruturamos o sistema de aplicação de provas da UNIDAVI',
    metaTitle: 'Minha Prova: Sistema de Provas Online da UNIDAVI',
    excerpt:
      'Como a Codelabz criou o Minha Prova, sistema da UNIDAVI para criar, aplicar e corrigir provas online com banco de questões e alternativas embaralhadas.',
    date: '2026-02-08',
    category: 'Sistemas Web',
    readTime: '5 min',
    author: 'Equipe Codelabz',
    image: '/banner-minha-prova.png',
    content: `
      <p>Aplicar provas em papel dificulta reaproveitar questões entre turmas e obriga o professor a corrigir tudo manualmente. Para a <a href="https://www.unidavi.edu.br" target="_blank" rel="noopener noreferrer">UNIDAVI</a>, instituição de ensino superior de Rio do Sul (SC), desenvolvemos o Minha Prova: um sistema acadêmico onde professores montam um banco de questões e aplicam provas digitalmente, turma por turma.</p>

      <h2>Como o professor usa o sistema</h2>
      <p>O acesso é feito por login institucional com Google. Na tela inicial, o professor vê as turmas em que está vinculado; dentro de cada turma, acompanha as provas já cadastradas — com status de liberação — e a lista de participantes.</p>

      <h2>Banco de questões reutilizável</h2>
      <p>As questões ficam centralizadas em um banco único, organizadas por curso, disciplina, autor e status. Isso permite montar uma prova nova selecionando questões já cadastradas, em vez de reescrever tudo a cada aplicação. Na criação da prova, o professor escolhe as questões e visualiza uma pré-visualização antes de liberar.</p>

      <h2>A prova na visão do aluno</h2>
      <p>Do lado do aluno, as alternativas de cada questão aparecem embaralhadas — cada aluno vê uma ordem diferente — e as respostas são marcadas por botões de rádio, com um botão de finalizar ao final da prova.</p>

      <h2>Arquitetura técnica</h2>
      <p>A API foi construída em Node.js com Fastify, Prisma e PostgreSQL; o frontend em Next.js, com autenticação via next-auth. É a mesma stack que usamos em <a href="/servicos">sistemas sob medida</a> quando o projeto pede performance e integração direta com login institucional.</p>

      <p>Veja outros sistemas que desenvolvemos para instituições de ensino <a href="/projetos">no nosso portfólio</a>.</p>
    `,
  },
  {
    slug: 'minha-reserva-sistema-de-reservas-unidavi',
    title: 'Minha Reserva: como estruturamos o sistema de reservas de salas da UNIDAVI',
    metaTitle: 'Minha Reserva: Sistema de Reservas da UNIDAVI',
    excerpt:
      'Como a Codelabz criou o Minha Reserva, sistema da UNIDAVI para gerenciar reservas de salas e equipamentos por local, período e nível de acesso.',
    date: '2025-12-15',
    category: 'Sistemas Web',
    readTime: '5 min',
    author: 'Equipe Codelabz',
    image: '/banner-minha-reserva.png',
    content: `
      <p>Coordenar reserva de salas, Chromebooks, projetores e caixas de som entre vários prédios e laboratórios fica difícil de controlar manualmente. Para a <a href="https://www.unidavi.edu.br" target="_blank" rel="noopener noreferrer">UNIDAVI</a>, instituição de ensino superior de Rio do Sul (SC), desenvolvemos o Minha Reserva: um sistema que centraliza pessoas, equipamentos, salas e reservas por localização.</p>

      <h2>Acesso e visão geral</h2>
      <p>A autenticação é feita por código de mentor e senha. Depois do login, um menu único reúne todas as áreas de gerenciamento do sistema — reservas, salas, equipamentos, pessoas e permissões.</p>

      <h2>Calendário de reservas</h2>
      <p>As reservas aparecem em um calendário organizado por dia e período, com abas separando pedidos, itens já entregues, recolhidos e cancelados. Criar uma nova reserva é feito escolhendo pessoa, sala e período — sem depender de planilha ou controle por WhatsApp.</p>

      <h2>Salas, equipamentos e períodos configuráveis</h2>
      <p>Salas e equipamentos ficam em listagens paginadas, com os equipamentos organizados por tipo — Chromebooks, caixas de som, projetores, entre outros. Os períodos disponíveis (matutino, vespertino, noturno) também podem ser personalizados conforme a necessidade de cada unidade.</p>

      <h2>Controle de acesso por pessoa e local</h2>
      <p>Cada pessoa tem cargo e status de ativo no sistema, e os cargos definem se aquele perfil tem acesso administrativo. Além disso, o acesso pode ser configurado por localização — prédios, laboratórios e biblioteca podem ter permissões diferentes para os mesmos usuários.</p>

      <h2>Arquitetura técnica</h2>
      <p>A API foi construída em Node.js com Express, TypeORM e PostgreSQL; o painel administrativo em React com Material UI. Projetos assim combinam bem com nossos <a href="/servicos">serviços de desenvolvimento de sistemas</a>, especialmente quando envolvem múltiplos níveis de permissão.</p>

      <p>Confira outros sistemas internos que já desenvolvemos <a href="/projetos">no nosso portfólio</a>.</p>
    `,
  },
  {
    slug: 'patrono-jr-consultoria-juridica-caso-de-sucesso',
    title: 'Patrono Jr.: um site institucional para transmitir credibilidade jurídica',
    metaTitle: 'Case Patrono Jr.: Site para Consultoria Jurídica',
    excerpt:
      'Como a Codelabz desenvolveu o site institucional da Patrono Jr., empresa júnior de Direito da UESC, com visual sofisticado para transmitir credibilidade.',
    date: '2026-08-14',
    category: 'Cases de Sucesso',
    readTime: '4 min',
    author: 'Equipe Codelabz',
    image: '/banner-patrono.png',
    content: `
      <p>Uma empresa júnior formada por estudantes de Direito enfrenta um desafio duplo de credibilidade: precisa transmitir a mesma seriedade de um escritório jurídico estabelecido, mas também superar a percepção de que, por ser um projeto acadêmico, teria menos rigor profissional. Foi esse o ponto de partida do site que desenvolvemos para a Patrono Assessoria e Consultoria Júnior, a primeira empresa júnior de Direito da <a href="https://www.uesc.br" target="_blank" rel="noopener noreferrer">UESC</a> (Universidade Estadual de Santa Cruz).</p>

      <h2>O desafio</h2>
      <p>O site precisava apresentar os serviços jurídicos oferecidos com clareza, sem soar amador, e facilitar o contato com a equipe — tudo isso comunicando, logo no primeiro acesso, o mesmo nível de seriedade esperado de qualquer consultoria jurídica.</p>

      <h2>A solução da Codelabz</h2>
      <p>Desenvolvemos um site institucional com visual sofisticado e estrutura clara, priorizando a apresentação dos serviços jurídicos e um caminho direto até o contato com a equipe. Veja mais sobre como estruturamos esse tipo de projeto nos nossos <a href="/servicos">serviços de criação de sites institucionais</a>.</p>

      <h2>Resultado</h2>
      <p>Na avaliação da própria cliente:</p>

      <blockquote>"Trabalho incrível! Alcançamos a versão final do site em menos de 2 semanas! O Vinicius é super atencioso e dedicado, sempre estava a disposição para tirar qualquer dúvida e realizar qualquer modificação! O site ficou do jeitinho que eu sempre sonhei para a empresa, recomendo muito!" — Maria Eduarda Chagas de Sousa, Patrono Assessoria e Consultoria Júnior</blockquote>

      <p>Confira outros projetos institucionais que já entregamos <a href="/projetos">no nosso portfólio</a>.</p>
    `,
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug)
}
