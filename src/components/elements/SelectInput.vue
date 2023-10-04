<template>
  <div class="flex flex-col">
    <label v-show="label" :class="labelClass">{{ label }}</label>

    <Select>
      <SelectTrigger>
        <SelectValue v-model="selectValue" :placeholder="placeholder"  />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectItem v-for="option in options" :key="option.value" :value="option.value">
            {{ option.label }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { ref } from 'vue'

type Option = {
  label: string
  value: string
}

const props = defineProps<{
  label?: string
  labelClass?: string
  placeholder?: string
  value?: string
  options: Option[]
}>()

const selectValue = ref(props.value || '')
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<style scoped lang="postcss">
label {
  @apply mb-1 text-sm;
}
</style>
