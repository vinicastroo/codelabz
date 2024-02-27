'use client'

import {
  IlustrationServicesBegin,
  IlustrationServicesCode,
  IlustrationServicesDeploy,
  IlustrationServicesDesing,
} from '@/assets/ilustrations'

import { ProcessTabs } from './ProcessTabs'
import { useState } from 'react'
import { motion } from 'framer-motion'
export function ProcessCard() {
  const [currentTab, setCurrentTab] = useState('begin')

  function onChangeTab(tab: string) {
    setCurrentTab(tab)
  }

  return (
    <div className="flex flex-col-reverse rounded-md border border-zinc-200 shadow-sm lg:flex-row">
      <div className="flex flex-col">
        <ProcessTabs tab={currentTab} onChangeTab={onChangeTab} />
      </div>

      <div className="flex items-center justify-center border-zinc-200  lg:border-l">
        {currentTab === 'begin' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 1],
            }}
            transition={{ delay: 0.1 }}
          >
            <IlustrationServicesBegin />
          </motion.div>
        )}
        {currentTab === 'desing' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 1],
            }}
            transition={{ delay: 0.1 }}
          >
            <IlustrationServicesDesing />
          </motion.div>
        )}
        {currentTab === 'code' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 1],
            }}
            transition={{ delay: 0.1 }}
          >
            <IlustrationServicesCode />
          </motion.div>
        )}
        {currentTab === 'deploy' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 1],
            }}
            transition={{ delay: 0.1 }}
          >
            <IlustrationServicesDeploy />
          </motion.div>
        )}
      </div>
    </div>
  )
}
