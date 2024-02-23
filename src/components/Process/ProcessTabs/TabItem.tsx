'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  icon?: boolean
  isSelected?: boolean
}

export default function TabItem({
  value,
  title,
  isSelected = false,
}: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative flex-1 px-2 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-ruby-700 data-[state=active]:text-ruby-700  "
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-ruby-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-ruby-700 "
        />
      )}
    </Tabs.Trigger>
  )
}
