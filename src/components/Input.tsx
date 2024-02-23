import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>
export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder-zinc-400"
      {...props}
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className={twMerge(
        'flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none ',
        'focus-within:border-sapphire-950 focus-within:ring-4 focus-within:ring-sapphire-50',
        props.className,
      )}
      {...props}
    ></div>
  )
}
