<template>
  <CustomDropdown button-text="Sort By" button-class="w-full lg:w-[9rem]">
    <ul class="py-1 list-none">
      <li
        v-for="sort in dummySortBy"
        :key="sort.key"
        class="w-full px-2 py-1 text-sm cursor-pointer hover:bg-black/20"
      >
        {{ sort.name }}
      </li>
    </ul>
  </CustomDropdown>
</template>

<script setup lang="ts">
import CustomDropdown from '@/components/elements/CustomDropdown/CustomDropdown.vue'
import type { SortByProductInterface } from '@/lib/interfaces/product'

const dummySortBy: SortByProductInterface[] = [
  {
    name: 'Latest',
    key: 'latest'
  },
  {
    name: 'Price (Low - High)',
    key: 'priceasc'
  },
  {
    name: 'Price (High - Low)',
    key: 'pricedesc'
  }
]
</script>
