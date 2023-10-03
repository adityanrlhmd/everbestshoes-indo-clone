<template>
  <CustomDropdown button-text="Color" button-class="w-full lg:w-[9rem]">
    <ul class="py-1 list-none">
      <li
        v-for="color in dummyColorProducts"
        :key="color.codeHex"
        class="flex items-center gap-3 px-2 py-1 text-sm cursor-pointer group"
      >
        <span
          :style="{
            backgroundColor: color.codeHex
          }"
          class="w-4 h-4 rounded-full outline-black outline-offset-2 outline-1 group-hover:outline"
        />

        {{ color.name }}
      </li>
    </ul>
  </CustomDropdown>
</template>

<script setup lang="ts">
import CustomDropdown from '@/components/elements/CustomDropdown.vue'
import type { ColorProductInterface } from '@/lib/interfaces/product'

const dummyColorProducts: ColorProductInterface[] = [
  {
    name: 'Black',
    codeHex: '#000000'
  },
  {
    name: 'White',
    codeHex: '#ffffff'
  },
  {
    name: 'Red',
    codeHex: '#ff0000'
  },
  {
    name: 'Blue',
    codeHex: '#0000ff'
  }
]
</script>
