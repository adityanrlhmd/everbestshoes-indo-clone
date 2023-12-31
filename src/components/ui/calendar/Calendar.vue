<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useVModel } from '@vueuse/core'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { DatePicker } from 'v-calendar'
import { computed, nextTick, onMounted, ref } from 'vue'
import { buttonVariants } from '../button'

const props = withDefaults(
  defineProps<{
    modelValue?:
      | string
      | number
      | Date
      | Partial<{
          start: Date
          end: Date
        }>
    modelModifiers?: object
    columns?: number
    type?: 'single' | 'range'
  }>(),
  {
    type: 'single',
    columns: 1
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', payload: typeof props.modelValue): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true
})

const datePicker = ref<InstanceType<typeof DatePicker>>()
const calendarRef = computed(() => datePicker.value?.calendarRef)

function handleNav(direction: 'prev' | 'next') {
  if (!calendarRef.value) return

  if (direction === 'prev') calendarRef.value.movePrev()
  else calendarRef.value.moveNext()
}

onMounted(async () => {
  await nextTick()
  await nextTick()
  if (modelValue.value instanceof Date && calendarRef.value)
    calendarRef.value.focusDate(modelValue.value)
})
</script>

<template>
  <div class="relative">
    <div class="absolute inset-x-0 flex justify-between w-full px-4 top-3">
      <button
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 md:w-7 bg-transparent p-0 opacity-50 hover:opacity-100 md:min-w-0'
          )
        "
        @click="handleNav('prev')"
      >
        <ChevronLeft class="w-4 h-4" />
      </button>

      <button
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 md:w-7 bg-transparent p-0 opacity-50 hover:opacity-100 md:min-w-0'
          )
        "
        @click="handleNav('next')"
      >
        <ChevronRight class="w-4 h-4" />
      </button>
    </div>

    <DatePicker
      ref="datePicker"
      v-model="modelValue"
      :model-modifiers="modelModifiers"
      class="calendar"
      trim-weeks
      :transition="'none'"
      :columns="columns"
    />
  </div>
</template>

<style lang="postcss">
.calendar {
  @apply p-3 text-center;
}
.calendar .vc-pane-layout {
  @apply grid gap-4;
}
.calendar .vc-title {
  @apply text-sm font-medium pointer-events-none;
}
.calendar .vc-pane-header-wrapper {
  @apply hidden;
}
.calendar .vc-weeks {
  @apply mt-4;
}
.calendar .vc-weekdays {
  @apply flex;
}
.calendar .vc-weekday {
  @apply text-muted-foreground w-9 font-normal text-[0.8rem];
}
.calendar .vc-weeks {
  @apply w-full space-y-2 flex flex-col [&>_div]:grid [&>_div]:grid-cols-7;
}
.calendar .vc-day:has(.vc-highlights) {
  @apply bg-accent first:rounded-l-md last:rounded-r-md overflow-hidden;
}
.calendar .vc-day-content {
  @apply text-center text-sm p-0 relative focus-within:relative focus-within:z-20 inline-flex items-center justify-center ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-9 w-9  font-normal aria-selected:opacity-100 select-none;
}
.calendar
  .is-not-in-month:not(:has(.vc-highlight-content-solid)):not(
    :has(.vc-highlight-content-light)
  ):not(:has(.vc-highlight-content-outline)),
.calendar .vc-disabled {
  @apply text-muted-foreground opacity-50;
}
.calendar .vc-highlight-content-solid,
.calendar .vc-highlight-content-outline {
  @apply bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white;
}
.calendar .vc-highlight-content-light {
  @apply bg-accent text-accent-foreground;
}
</style>
