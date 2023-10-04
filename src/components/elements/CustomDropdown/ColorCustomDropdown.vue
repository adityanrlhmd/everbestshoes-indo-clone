<template>
  <CustomDropdown :button-class="titleClass">
    <template #buttonText>
      <span v-if="titleColorProduct" class="flex items-center gap-3 text-sm">
        <span
          :style="{
            backgroundColor: titleColorProduct.codeHex
          }"
          class="w-4 h-4 rounded-full outline-black outline-offset-2 outline-1 group-hover:outline"
        />

        {{ titleColorProduct.name }}
      </span>
      <span v-else>Color</span>
    </template>

    <ul class="py-1 list-none">
      <li
        v-for="color in colors"
        :key="color.codeHex"
        @click="onClickColor ? onClickColor(color) : null"
        class="flex items-center gap-3 px-2 py-1 text-sm cursor-pointer group"
      >
        <span
          :style="{
            backgroundColor: color.codeHex
          }"
          :class="
            currentColorsProduct?.some((colorProduct) => colorProduct.codeHex === color.codeHex)
              ? 'outline'
              : ''
          "
          class="w-4 h-4 rounded-full outline-black outline-offset-2 outline-1 group-hover:outline"
        />

        {{ color.name }}
      </li>
    </ul>
  </CustomDropdown>
</template>

<script setup lang="ts">
import CustomDropdown from './CustomDropdown.vue'
import type { ColorProductInterface } from '@/lib/interfaces/product'

const props = defineProps<{
  colors: ColorProductInterface[]
  currentColorsProduct?: ColorProductInterface[]
  titleColorProduct?: ColorProductInterface
  titleClass?: string
  onClickColor?: Function
}>()

const titleClass = props.titleClass || 'w-full lg:w-[9rem]'
</script>
