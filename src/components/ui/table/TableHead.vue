<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <th :class="cn( 'h-12 px-4 text-base text-left align-middle font-semibold [&:has([role=checkbox])]:pr-0 dark:text-neutral-400', props.class)" >
    <slot />
  </th>
</template>
