<script setup lang="ts">
import { Check, ChevronsUpDown } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Options = {
  value: string
  label: string
}

const props = defineProps<{
  options: Options[]
  value?: Options
  placeholder?: string
  placeholderSearch?: string
}>()

const open = ref(false)
const selectedValue = ref<Options | undefined>(props.value)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <button
        role="combobox"
        :aria-expanded="open"
        class="flex items-center justify-between w-full h-10 gap-2 px-3 py-2 text-sm border hover:bg-transparent hover:text-black border-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 whitespace-nowrap"
      >
        {{
          selectedValue
            ? options.find((option) => option.value === selectedValue?.value)?.label
            : placeholder
        }}

        <ChevronsUpDown class="w-4 h-4 ml-auto opacity-50 shrink-0" />
      </button>
    </PopoverTrigger>

    <PopoverContent class="w-[200px] p-0">
      <Command v-model="selectedValue">
        <CommandInput :placeholder="placeholderSearch" />
        <CommandEmpty>Not found.</CommandEmpty>
        <CommandGroup>
          <CommandItem
            v-for="option in options"
            :key="option.value"
            :value="option"
            @select="open = false"
          >
            <Check
              :class="
                cn(
                  'mr-2 h-4 w-4',
                  selectedValue?.value === option.value ? 'opacity-100' : 'opacity-0'
                )
              "
            />
            {{ option.label }}
          </CommandItem>
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
</template>
