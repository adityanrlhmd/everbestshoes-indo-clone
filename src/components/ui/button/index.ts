import { cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center w-full md:w-fit md:min-w-[220px] uppercase text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300',
  {
    variants: {
      variant: {
        default: 'bg-black text-white font-semibold',
        primary: 'bg-primary text-white font-semibold',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-red-500/90 dark:text-destructive-foreground dark:hover:bg-red-900/90',
        'destructive-ghost':
          'text-destructive hover:bg-destructive hover:text-destructive-foreground dark:hover:bg-neutral-800',
        outline: 'border border-quinary text-quinary hover:bg-quinary hover:text-white',
        'outline-primary': 'border border-primary text-primary hover:bg-primary hover:text-white',
        secondary:
          'bg-secondary text-neutral-900 hover:bg-neutral-100/80 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        ghost: 'hover:bg-neutral-100 hover:text-accent-foreground dark:hover:bg-neutral-800',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'py-3 px-4',
        sm: 'py-2 px-3 md:min-w-[150px] ',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
