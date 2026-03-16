'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

// Mesmos dados da listagem
const projetos = [
  {
    id: 1,
    title: 'Rafa Helena Arquitetura',
    description:
      'Desenvolvemos o site da arquiteta Rafaela Helena com foco em transmitir sofisticação, personalidade e criatividade. A plataforma valoriza o portfólio, apresenta os serviços com elegância e oferece uma experiência fluida, conectando clientes à essência da marca.',
    image: '/banner-rafa.png',
    link: 'http://rafahelena.com.br/',
  },
  {
    id: 2,
    title: 'SDL Consultoria',
    description:
      'Criamos um site institucional moderno e funcional para a SDL Consultoria, destacando seus serviços de assessoria em segurança do trabalho, meio ambiente e treinamentos. A plataforma reforça a credibilidade da empresa com uma navegação clara, conteúdo organizado e design responsivo.',
    image: '/banner-sdl.png',
    link: 'https://sdlconsultoria.ind.br/',
  },
  {
    id: 3,
    title: 'Lovegoods',
    description:
      'Construímos a loja virtual da Lovegoods, especializada em presentes criativos e colecionáveis. O site destaca os produtos com um layout dinâmico, foco na experiência do usuário e integração completa com soluções de pagamento e logística.',
    image: '/banner-lovegoods.png',
    link: 'https://lovegoods.com.br/',
  },
  // Adicione os outros cases conforme necessário...
]

export default function ProjetoDetalhePage() {
  const params = useParams()
  const id = Number(params.id)
  const projeto = projetos.find((p) => p.id === id)

  if (!projeto) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Projeto não encontrado</h1>
        <Link href="/Projetos" className="text-blue-600 hover:underline">
          Voltar para lista de projetos
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Image
          src={projeto.image}
          alt={projeto.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4 text-sapphire-950">{projeto.title}</h1>
          <p className="text-gray-700 mb-6">{projeto.description}</p>
          <div className="flex gap-2">
            <Link
              href={projeto.link}
              target="_blank"
              className="bg-ruby-500 text-white px-4 py-2 rounded hover:bg-ruby-600 transition"
            >
              Ver projeto online
            </Link>
            <Link
              href="/Projetos"
              className="bg-sapphire-950 text-white px-4 py-2 rounded hover:bg-sapphire-800 transition"
            >
              ← Voltar para lista de projetos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}