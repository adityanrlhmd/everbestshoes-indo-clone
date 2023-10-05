<template>
  <div class="flex items-center gap-2">
    <Checkbox :id="id" :checked="checked" :required="required"  />

    <label
      :for="id"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      :class="labelClass"
    >
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'

defineProps<{
  id: string
  checked?: boolean
  label?: string
  labelClass?: string
  required?: boolean
}>()
</script>
