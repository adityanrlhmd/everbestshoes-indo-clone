<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { CheckboxIndicator, CheckboxRoot, useEmitAsProps } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps<CheckboxRootProps>()
const emits = defineEmits<CheckboxRootEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <CheckboxRoot
    v-bind="{ ...props, ...emitsAsProps }"
    :class="
      cn(
        'peer h-4 w-4 shrink-0 rounded-sm border border-neutral-200 focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-primary-foreground dark:border-neutral-800 dark:data-[state=checked]:bg-neutral-50',
        $attrs.class ?? ''
      )
    "
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <Check class="w-4 h-4" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
