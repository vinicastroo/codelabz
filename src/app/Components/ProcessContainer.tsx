import { ProcessStep } from "./proccess-step";

export function ProcessContainer() {
  return (
    <section className="py-24 bg-white text-codelabz-dark" aria-labelledby="processo-desenvolvimento">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-codelabz-accent font-bold uppercase tracking-widest text-sm block mb-2">Workflow</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Nosso processo de criação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProcessStep
            number="01"
            title="Descoberta"
            text="Entendemos seu negócio, público-alvo e objetivos para definir a melhor estratégia digital e o tipo de solução ideal."
          />
          <ProcessStep
            number="02"
            title="Design & UI"
            text="Criamos interfaces modernas e intuitivas, focadas em experiência do usuário (UX) e usabilidade, com protótipos visuais antes do desenvolvimento."
          />
          <ProcessStep
            number="03"
            title="Desenvolvimento"
            text="Transformamos o projeto em código seguro, escalável e de alta performance, utilizando tecnologias modernas no desenvolvimento web e de sistemas."
          />
          <ProcessStep
            number="04"
            title="Entrega"
            text="Realizamos testes completos, lançamos a solução e acompanhamos os resultados para garantir estabilidade, performance e evolução contínua."
          />
        </div>
      </div>
    </section>
  )
}
