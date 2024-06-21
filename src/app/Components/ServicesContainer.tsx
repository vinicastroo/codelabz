import { Services } from '@/components/Services'

export function ServicesContainer() {
  return (
    <section id="servicos" className="py-16">
      <div className="m-auto flex max-w-[1300px] flex-col space-y-8 px-4">
        <div className="flex flex-col">
          <h2 className="text-lg text-sapphire-950">Nossos serviços</h2>
          <strong className="text-4xl text-sapphire-950">
            Entenda o que oferecemos
          </strong>
        </div>

        <Services />
      </div>
    </section>
  )
}
