<template>
  <CustomDropdown button-text="Size" button-class="w-full lg:w-[9rem]">
    <ul class="py-1 list-none">
      <li
        v-for="size in dummySizeProducts"
        :key="size.number"
        class="flex items-center gap-3 px-2 py-1 text-sm cursor-pointer group"
      >
        <span
          class="w-4 h-4 rounded-full bg-black/40 outline-black outline-offset-2 outline-1 group-hover:outline group-hover:bg-black"
        />

        {{ size.number }}
      </li>
    </ul>
  </CustomDropdown>
</template>

<script setup lang="ts">
import CustomDropdown from '@/components/elements/CustomDropdown.vue'
import type { SizeProductInterface } from '@/lib/interfaces/product'

const dummySizeProducts: SizeProductInterface[] = [
  {
    number: 35
  },
  {
    number: 36
  },
  {
    number: 37
  },
  {
    number: 38
  },
  {
    number: 39
  },
  {
    number: 40
  }
]
</script>
