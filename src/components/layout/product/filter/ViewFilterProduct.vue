<template>
  <CustomDropdown button-text="View" button-class="w-full lg:w-[9rem]">
    <ul class="py-1 list-none">
      <li
        v-for="(view, index) in dummyView"
        :key="index"
        class="w-full px-2 py-1 text-sm cursor-pointer hover:bg-black/20"
      >
        {{ view.number }}
      </li>
    </ul>
  </CustomDropdown>
</template>

<script setup lang="ts">
import CustomDropdown from '@/components/elements/CustomDropdown/CustomDropdown.vue'
import type { ViewByProductInterface } from '@/lib/interfaces/product'

const dummyView: ViewByProductInterface[] = [
  {
    number: 32
  },
  {
    number: 64
  },
  {
    number: 128
  },
  {
    number: 256
  }
]
</script>
