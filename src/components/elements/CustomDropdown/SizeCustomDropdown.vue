<template>
  <CustomDropdown :button-class="titleClass">
    <template #buttonText>
      <span v-if="titleSizeProduct" class="flex items-center gap-3 text-sm">
        {{ titleSizeProduct }}
      </span>

      <span v-else>Size</span>
    </template>

    <ul class="py-1 list-none">
      <li
        v-for="size in sizes"
        :key="size"
        @click="onClickSize ? onClickSize(size) : null"
        class="flex items-center gap-3 px-2 py-1 text-sm cursor-pointer group"
      >
        <span
          :class="currentSizesProduct?.some((sizeProduct) => sizeProduct === size) ? 'outline bg-black' : ''"
          class="w-4 h-4 rounded-full bg-black/40 outline-black outline-offset-2 outline-1 group-hover:outline group-hover:bg-black"
        />

        {{ size }}
      </li>
    </ul>
  </CustomDropdown>
</template>

<script setup lang="ts">
import CustomDropdown from './CustomDropdown.vue'

const props = defineProps<{
  sizes: number[]
  currentSizesProduct?: number[]
  titleSizeProduct?: number
  titleClass?: string
  onClickSize?: Function
}>()

const titleClass = props.titleClass || 'w-full lg:w-[9rem]'
</script>
