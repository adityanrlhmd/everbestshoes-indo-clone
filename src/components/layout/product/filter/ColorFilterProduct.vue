<template>
  <ColorCustomDropdown :colors="dummyColorProducts" />
</template>

<script setup lang="ts">
import ColorCustomDropdown from '@/components/elements/CustomDropdown/ColorCustomDropdown.vue'
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
