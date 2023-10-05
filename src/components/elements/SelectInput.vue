<template>
  <div class="flex flex-col">
    <label v-show="label" :class="labelClass">{{ label }}</label>

    <Select v-model="selectValue" :required="required" :disabled="disabled" @update:modelValue="updateSelectValue">
      <SelectTrigger>
        <SelectValue :placeholder="placeholder" />
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

import { ref, defineProps, defineEmits } from 'vue'

type Option = {
  label: string
  value: string
}

const props = defineProps<{
  label?: string
  labelClass?: string
  placeholder?: string
  value?: string
  required?: boolean
  disabled?: boolean
  options: Option[]
}>()

const emit = defineEmits(['update:modelValue'])

const selectValue = ref(props.value || '')

function updateSelectValue(value: string) {
  selectValue.value = value
  emit('update:modelValue', value)
}
</script>