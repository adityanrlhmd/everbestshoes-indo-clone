<template>
  <div class="flex items-center gap-4 py-2">
    <img :alt="product.banner.name" :src="product.banner.src" class="aspect-square max-w-[60px]" />

    <h3>{{ product.name }}</h3>

    <span>x3</span>

    <div class="flex flex-col items-start">
      <span v-if="product.discountPercent">
        <s> IDR {{ product.price.toLocaleString() }} </s>
      </span>

      <span v-else> IDR {{ product.price.toLocaleString() }} </span>

      <span v-if="product.discountPercent" class="text-primary">
        IDR {{ (product.price * (product.discountPercent / 100)).toLocaleString() }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/lib/interfaces/product'
import { computed, ref } from 'vue'

const props = defineProps<{
  product: ProductInterface
}>()

const quantity = ref<number>(1)

const priceProduct = computed(() => {
  if (props.product.discountPercent) {
    return props.product.price * (props.product.discountPercent / 100)
  } else {
    return props.product.price
  }
})

const total = computed(() => priceProduct.value * quantity.value)
</script>
