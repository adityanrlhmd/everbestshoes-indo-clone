<template>
  <Select v-model="selectedValue">
    <SelectTrigger class="w-fit">
      <SelectValue />
    </SelectTrigger>

    <SelectContent>
      <SelectGroup>
        <SelectItem
          v-for="number in Array.from({ length: 10 }, (_, index) => index + 1)"
          :key="number"
          :value="`${number}`"
        >
          {{ number }}
        </SelectItem>
        <SelectLabel>Fruits</SelectLabel>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ref } from 'vue'

const props = defineProps<{
  value?: string
}>()

const selectedValue = ref(props.value || '')
</script>
