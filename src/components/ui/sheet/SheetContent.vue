<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useEmitAsProps,
} from "radix-vue"
import { X } from "lucide-vue-next"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

interface SheetContentProps extends DialogContentProps {
  side?: "left" | "right" | "top" | "bottom"
  class?: string
}

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const emitsAsProps = useEmitAsProps(emits)

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-white shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500' dark:bg-neutral-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-neutral-200 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top dark:border-neutral-800",
        bottom:
          "inset-x-0 bottom-0 border-t border-neutral-200 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom dark:border-neutral-800",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-neutral-200 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm dark:border-neutral-800",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l border-neutral-200 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm dark:border-neutral-800",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-neutral-950/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side: props.side }), props.class)" 
      v-bind="{ ...props, ...emitsAsProps }"
    >
      <slot />

      <DialogClose
        class="absolute top-4 right-4 p-0.5 transition-colors rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
      >
        <X class="w-5 h-5 text-black dark:text-neutral-400" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
