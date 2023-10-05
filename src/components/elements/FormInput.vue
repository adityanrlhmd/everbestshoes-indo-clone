<template>
  <div class="flex flex-col">
    <label v-show="label" :class="labelClass">{{ label }}</label>

    <Input
      v-model="inputValue"
      v-bind="$attrs"
      :placeholder="placeholder"
      :required="required"
      :type="type"
    />
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { ref } from 'vue'

const props = defineProps<{
  label?: string
  labelClass?: string
  value?: string
  placeholder?: string
  required?: boolean
  type?:
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
}>()

const inputValue = ref(props.value || '')
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
