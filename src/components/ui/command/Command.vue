<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'
import { ComboboxRoot, useEmitAsProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <ComboboxRoot
    v-bind="{ ...props, ...emitsAsProps }"
    :open="true"
    :model-value="''"
    :class="cn( 'flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50', $attrs.class ??  ' ')" 
  >
    <slot />
  </ComboboxRoot>
</template>
