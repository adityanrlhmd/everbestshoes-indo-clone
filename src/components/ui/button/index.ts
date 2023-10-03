import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
  "inline-flex items-center justify-center w-[220px] uppercase text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-quaternary text-white text-base font-semibold w-full md:w-fit",
        destructive:
          "bg-destructive text-neutral-50 hover:bg-red-500/90 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline:
          "border border-quinary text-quinary hover:bg-quinary hover:text-white",
        secondary:
          "bg-secondary text-neutral-900 hover:bg-neutral-100/80 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-accent-foreground dark:hover:bg-neutral-800",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-3 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
