<template>
  <div class="flex flex-col">
    <label v-show="label" :class="labelClass">{{ label }}</label>

    <Input v-model="inputValue" v-bind="$attrs" :placeholder="placeholder" />
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
