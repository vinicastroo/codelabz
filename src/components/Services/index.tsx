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
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '../Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Services() {
  const [step, setStep] = useState(0)

  const [direction, setDirection] = useState('right')

  const [size, setSize] = useState(1)

  useEffect(() => {
    if (window) {
      const width = window.innerWidth

      if (width < 640) {
        setSize(1)
      } else if (width >= 640 && width < 768) {
        setSize(1)
      } else if (width >= 768 && width < 1024) {
        setSize(2)
      } else if (width >= 1024 && width < 1280) {
        setSize(4)
      } else if (width >= 1280 && width < 1536) {
        setSize(4)
      } else {
        setSize(4)
      }
    }
  }, [])

  const services = useMemo(() => {
    return [
      {
        id: 0,
        title: 'Desenvolvimento de sites responsivos',
        description:
          'Criamos sites que se adaptam automaticamente a qualquer dispositivo — de smartphones a desktops — oferecendo uma navegação fluida, rápida e intuitiva para todos os usuários.',
        icon: IlustrationResponsive,
      },
      {
        id: 1,
        title: 'Desenvolvimento de Sistemas',
        description:
          'Transformamos ideias em sistemas inteligentes que automatizam processos, otimizam rotinas e resolvem problemas específicos do seu negócio com eficiência.',
        icon: IlustrationDashboard,
      },
      {
        id: 2,
        title: 'Desenvolvimento de API',
        description:
          'Criamos APIs robustas que conectam plataformas, integram serviços e permitem que diferentes sistemas conversem entre si de forma segura, rápida e confiável.',
        icon: IlustrationAPI,
      },
      {
        id: 3,
        title: 'Deploy de aplicações',
        description:
          'Publicamos e configuramos sua aplicação na nuvem, tornando-a acessível, segura e escalável — pronta para receber usuários de qualquer lugar do mundo.',
        icon: IlustrationDeploy,
      },
      {
        id: 4,
        title: 'Integração de Sistemas',
        description:
          'Conectamos diferentes softwares e plataformas para que eles compartilhem dados em tempo real, reduzindo retrabalho e aumentando a produtividade da sua operação.',
        icon: IlustrationIntegration,
      },
      {
        id: 5,
        title: 'Consultorias em TI',
        description:
          'Ajudamos sua empresa a tomar decisões estratégicas em tecnologia, com análises personalizadas e soluções que otimizam recursos, reduzem custos e impulsionam resultados.',
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
          aria-labelledby="Retroceder"
          title="Retroceder"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          onClick={() => onAddStep()}
          disabled={step + 1 + size > services.length}
          className="text-zinc-600 disabled:cursor-not-allowed disabled:text-zinc-300"
          aria-labelledby="Avançar"
          title="Avançar"
        >
          <ChevronRight className="h-6 w-6 " />
        </Button>
      </div>
    </>
  )
}
