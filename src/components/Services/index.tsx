'use client'

import {
  IlustrationAPI,
  IlustrationConsulting,
  IlustrationDashboard,
  IlustrationDeploy,
  IlustrationIntegration,
  IlustrationResponsive,
} from '@/assets/ilustrations'
import { ServiceItem } from './ServiceItem'
import { useCallback, useMemo, useState } from 'react'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Services() {
  const [step, setStep] = useState(0)

  const [direction, setDirection] = useState('right')

  const [size] = useState(() => {
    const width = window.innerWidth

    if (width < 640) {
      return 1
    } else if (width >= 640 && width < 768) {
      return 1
    } else if (width >= 768 && width < 1024) {
      return 2
    } else if (width >= 1024 && width < 1280) {
      return 4
    } else if (width >= 1280 && width < 1536) {
      return 4
    } else {
      return 4
    }
  })

  const services = useMemo(() => {
    return [
      {
        id: 0,
        title: 'Desenvolvimento de sites responsivos',
        description:
          'É criar um site que se adapta automaticamente a qualquer tamanho de tela, garantindo que ele funcione bem tanto em computadores quanto em dispositivos móveis, proporcionando uma experiência agradável para todos os usuários.',
        icon: IlustrationResponsive,
      },
      {
        id: 1,
        title: 'Desenvolvimento de Sistemas',
        description:
          'É como montar um quebra-cabeça digital para resolver problemas específicos. Cada peça é um código que, quando combinado, forma um programa que executa tarefas úteis, como gerenciar dados ou automatizar processos.',
        icon: IlustrationDashboard,
      },
      {
        id: 2,
        title: 'Desenvolvimento de API',
        description:
          'É como construir um garçom para um restaurante digital. Assim como um garçom pega os pedidos dos clientes e traz a comida da cozinha, a API recebe pedidos de programas ou aplicativos e entrega as informações ou executa ações necessárias. É uma maneira de diferentes softwares se comunicarem entre si.',
        icon: IlustrationAPI,
      },
      {
        id: 3,
        title: 'Deploy de aplicações',
        description:
          'É como mudar sua loja ou escritório para um shopping center online gigante. Ao invés de manter sua loja em um prédio físico, você a coloca em um espaço virtual, onde ela pode ser acessada de qualquer lugar pela internet. Isso torna sua loja mais fácil de gerenciar, mais segura e acessível para mais clientes.',
        icon: IlustrationDeploy,
      },
      {
        id: 4,
        title: 'Integração de Sistemas',
        description:
          'Permite que diferentes programas de computador e aplicativos trabalhem em conjunto, compartilhando informações e recursos para operar mais eficientemente.',
        icon: IlustrationIntegration,
      },
      {
        id: 5,
        title: 'Consultorias em TI',
        description:
          'É um serviço onde especialistas em tecnologia da informação ajudam empresas a melhorar e otimizar seus sistemas de computador. Eles dão conselhos sobre como usar a tecnologia para atingir objetivos de negócios e resolver problemas.',
        icon: IlustrationConsulting,
      },
    ]
  }, [])

  const servicesView = useMemo(() => {
    const min = step
    const max = step + size

    const filter = services.filter((_, index) => {
      if (index >= min && index < max) {
        return true
      }
      return false
    })

    return filter
  }, [step, size, services])

  const onAddStep = useCallback(() => {
    setDirection('right')
    if (step + 1 + size > services.length) {
      setStep(0)
    } else {
      setStep(step + 1)
    }
  }, [step, size, services])

  const onRemoveStep = useCallback(() => {
    setDirection('left')
    if (step - 1 < 0) {
      setStep(services.length - size)
    } else {
      setStep(step - 1)
    }
  }, [step, size, services])

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {servicesView.map(({ id, icon, title, description }) => {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.5, 1],
                x: direction === 'right' ? [100, 10, 0] : [-100, -10, 0],
              }}
              transition={{ delay: 0.1 }}
            >
              <ServiceItem
                key={id}
                icon={icon}
                title={title}
                description={description}
              />
            </motion.div>
          )
        })}
      </div>
      <div className="flex items-end justify-end">
        <Button
          variant="ghost"
          onClick={() => onRemoveStep()}
          disabled={step - 1 < 0}
          className="text-zinc-600 disabled:cursor-not-allowed disabled:text-zinc-300"
        >
          <ChevronLeft className="h-6 w-6 " />
        </Button>
        <Button
          variant="ghost"
          onClick={() => onAddStep()}
          disabled={step + 1 + size > services.length}
          className="text-zinc-600 disabled:cursor-not-allowed disabled:text-zinc-300"
        >
          <ChevronRight className="h-6 w-6 " />
        </Button>
      </div>
    </>
  )
}
