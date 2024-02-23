import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-md px-4 py-2 text-sm font-semibold shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  variants: {
    variant: {
      primary:
        'border border-ruby-600 lg:px-4 py-2 text-center font-bold text-ruby-600 shadow-sm hover:scale-110 transition ease-in-out delay-150',
      fill: 'bg-ruby-600 px-4 py-2 text-center font-bold text-white shadow-sm hover:bg-ruby-400',
      ghost: 'rounded-md px-2 hover:bg-zinc-50 text-zinc-500 shadow-none  ',
      outline: 'shadow-none text-sapphire-950 hover:bg-zinc-50  ',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
