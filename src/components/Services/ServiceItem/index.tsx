import { ElementType } from 'react'

export interface ServiceItemProps {
  title: string
  description: string
  icon: ElementType
}
export function ServiceItem({
  title,
  description,
  icon: Icon,
}: ServiceItemProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex h-64 items-center justify-center rounded-md bg-white p-6 shadow-sm">
        <Icon />
      </div>

      <div className="flex flex-col gap-4">
        <span className="font-mono text-2xl text-sapphire-950 font-bold">
          {title}
        </span>
        <p className="flex-1 break-words text-zinc-700 text-sm lg:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}
