<script setup lang="ts">
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<AccordionTriggerProps & { class?: string }>()
</script>

<template>
  <AccordionHeader class="flex" as="div">
    <AccordionTrigger
      v-bind="props"
      :class="
        cn(
          'flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          props.class
        )
      "
    >
      <slot />
      <ChevronDown class="w-5 h-5 transition-transform duration-200 shrink-0" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
