import { ProcessCard } from '@/components/Process'

export function ProcessContainer() {
  return (
    <section id="processos" className="bg-white py-8 lg:py-40 ">
      <div className="m-auto flex max-w-[1300px] flex-col space-y-8 px-4">
        <div className="flex flex-col">
          <h2 className="text-lg text-sapphire-950">Nossos processos</h2>
          <strong className="text-4xl text-sapphire-950">
            Entenda como trabalhamos
          </strong>
        </div>

        <ProcessCard />
      </div>
    </section>
  )
}
