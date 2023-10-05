<template>
  <Popover v-model:modelValue="selectedDate">
    <PopoverTrigger as-child>
      <div class="flex flex-col">
        <label v-show="label" :class="labelClass">{{ label }}</label>
        <div
          :class="
            cn(
              'flex items-center justify-start h-10 w-full border hover:bg-transparent hover:text-black border-neutral-200 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400',
              !selectedDate && 'text-muted-foreground'
            )
          "
        >
          <CalendarIcon :stroke-width="1.5" class="w-4 h-4 mr-2" />

          <input
            type="text"
            @keydown="onKeyDownInput"
            class="w-full outline-none caret-transparent"
            v-bind="$attrs"
            :value="selectedDate ? format(selectedDate, 'PPP') : ''"
            :placeholder="placeholder"
          />
        </div>
      </div>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="modelValue" />
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const props = defineProps<{
  label?: string
  labelClass?: string
  placeholder?: string
  value?: Date
}>()

const selectedDate = ref<Date | undefined>(props.value || undefined)

const modelValue = computed({
  get: () => selectedDate.value,
  set: (value) => {
    selectedDate.value = value
  }
})

const onKeyDownInput = (e: Event) => {
  e.preventDefault()
}
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
