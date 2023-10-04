<script setup lang="ts">
import { SelectIcon, SelectTrigger, type SelectTriggerProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<SelectTriggerProps & { class?: string; invalid?: boolean }>(),
  {
    class: "''",
    invalid: false
  }
)
</script>

<template>
  <SelectTrigger
    v-bind="props"
    :class="
      cn(
        'flex h-10 w-full items-center justify-between border outline-none border-neutral-200 bg-white px-3 py-2 text-sm placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-400',
        props.class,
        props.invalid ? '!ring-quarternary ring-2 placeholder:!text-quarternary' : ''
      )
    "
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="w-4 h-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
