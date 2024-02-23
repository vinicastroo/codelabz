'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import TabItem from './TabItem'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/Button'

interface ProcessTabsProps {
  tab: string
  onChangeTab: (tab: string) => void
}
export function ProcessTabs({ tab, onChangeTab }: ProcessTabsProps) {
  return (
    <Tabs.Root value={tab} onValueChange={onChangeTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center justify-around gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="begin"
              title="01. Início"
              isSelected={tab === 'begin'}
            />

            <TabItem
              value="desing"
              title="02. Desing"
              isSelected={tab === 'desing'}
            />

            <TabItem
              value="code"
              title="03. Code"
              isSelected={tab === 'code'}
            />

            <TabItem
              value="deploy"
              title="04. Entrega"
              isSelected={tab === 'deploy'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg " />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <div>
        <Tabs.Content value="begin">
          <div className="flex flex-col gap-4 p-8">
            <span className="font-mono text-4xl font-bold text-ruby-500">
              Onde Tudo Começa
            </span>
            <p className="lg:text-lg">
              Na etapa inicial, concentramos nossos esforços em construir uma
              compreensão profunda do seu projeto. Realizamos reuniões
              colaborativas para explorar suas ideias e objetivos, trocando
              insights e perspectivas. A partir dessas interações, desenvolvemos
              um plano abrangente que define claramente os passos seguintes. É o
              momento de definir a base sólida que nos guiará ao longo da
              jornada de desenvolvimento.
            </p>

            <div className="flex items-end justify-end">
              <Button variant="ghost" onClick={() => onChangeTab('deploy')}>
                <ChevronLeft className="h-6 w-6 text-zinc-600" />
              </Button>
              <Button variant="ghost" onClick={() => onChangeTab('desing')}>
                <ChevronRight className="h-6 w-6 text-zinc-600" />
              </Button>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="desing">
          <div className="flex flex-col gap-4 p-8">
            <span className="font-mono  text-4xl font-bold text-ruby-500">
              Dando Vida às Ideias
            </span>
            <p className="lg:text-lg">
              A fase de design é onde a criatividade encontra a funcionalidade.
              Nesta etapa, nossos designers trabalham com base briefing inicial
              em visuais impressionantes. Realizamos sessões de brainstorming,
              criamos protótipos e refinamos os conceitos até que estejam
              alinhados com a visão da sua empresa. O objetivo é criar designs
              que não apenas pareçam bons, mas que também comuniquem
              efetivamente a essência da sua marca e sejam facilmente
              utilizados.
            </p>

            <div className="flex items-end justify-end">
              <Button variant="ghost" onClick={() => onChangeTab('begin')}>
                <ChevronLeft className="h-6 w-6 text-zinc-600" />
              </Button>
              <Button variant="ghost" onClick={() => onChangeTab('code')}>
                <ChevronRight className="h-6 w-6 text-zinc-600" />
              </Button>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="code">
          <div className="flex flex-col gap-4 p-8">
            <span className="font-mono text-4xl font-bold text-ruby-500">
              Hora de codar!
            </span>
            <p className="lg:text-lg">
              Quando se trata de codificação, precisão e eficiência são
              fundamentais. Nossos desenvolvedores transformam designs em
              realidade, escrevendo códigos limpos e otimizados. Nesta fase,
              focamos em criar um código que seja tanto robusto quanto
              escalável, garantindo que o seu projeto esteja pronto para o
              futuro. Utilizamos as mais recentes tecnologias e práticas para
              garantir que o produto final seja seguro, rápido e compatível com
              todos os dispositivos e navegadores
            </p>

            <div className="flex items-end justify-end">
              <Button variant="ghost" onClick={() => onChangeTab('desing')}>
                <ChevronLeft className="h-6 w-6 text-zinc-600" />
              </Button>
              <Button variant="ghost" onClick={() => onChangeTab('deploy')}>
                <ChevronRight className="h-6 w-6 text-zinc-600" />
              </Button>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="deploy">
          <div className="flex flex-col gap-4 p-8">
            <span className="font-mono text-4xl font-bold text-ruby-500">
              Concretizando ideias
            </span>
            <p className="lg:text-lg ">
              A última etapa do nosso processo é a entrega. Aqui, fazemos os
              ajustes finais e preparamos tudo para o lançamento. Esta fase não
              é apenas sobre entregar o projeto concluído, mas garantir que ele
              exceda suas expectativas. Realizamos testes rigorosos, revisões de
              qualidade e fornecemos treinamento e suporte para garantir uma
              transição suave. A sua satisfação é a nossa missão, e nos
              empenhamos para que cada entrega seja um sucesso retumbante.
            </p>

            <div className="flex items-end justify-end">
              <Button variant="ghost" onClick={() => onChangeTab('code')}>
                <ChevronLeft className="h-6 w-6 text-zinc-600" />
              </Button>
              <Button variant="ghost" onClick={() => onChangeTab('begin')}>
                <ChevronRight className="h-6 w-6 text-zinc-600" />
              </Button>
            </div>
          </div>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  )
}
