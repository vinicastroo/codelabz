import { ProcessCard } from '@/components/Process'

export function ProcessContainer() {
  return (
    <section
      id="processos"
      className="m-auto flex max-w-[1300px] flex-col space-y-8 px-4 p-8 lg:py-16 "
    >
      <div className="flex flex-col">
        <span className="text-lg text-sapphire-950">Nossos processos</span>
        <strong className="text-4xl text-sapphire-950">
          Entenda como trabalhamos
        </strong>
      </div>

      <ProcessCard />
    </section>
  )
}
