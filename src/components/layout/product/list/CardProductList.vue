<template>
  <RouterLink :to="`/products/${product.slug}`">
    <div class="relative w-full">
      <img :alt="product.banner.name" :src="product.banner.src" class="w-full aspect-square" />

      <div v-show="product.discountPercent" class="absolute top-0 right-0 z-10">
        <div class="relative">
          <img alt="discount tag" src="@/assets/images/DiscountTagIcon.png" class="w-[55px]" />

          <strong class="absolute text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <p class="-rotate-45"> {{ product.discountPercent }}% </p>
          </strong>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start">
      <strong class="text-lg lg:text-2xl">
        {{ product.name }}
      </strong>

      <b class="text-sm uppercase text-primary" v-show="product.discountPercent">sale</b>
      <div class="flex flex-col items-start mt-1">
        <span v-if="product.discountPercent">
          <s> IDR {{ product.price.toLocaleString() }} </s>
        </span>

        <span v-else> IDR {{ product.price.toLocaleString() }} </span>

        <span v-if="product.discountPercent" class="text-primary">
          IDR {{ (product.price * (product.discountPercent / 100)).toLocaleString() }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/lib/interfaces/product'
import { RouterLink } from 'vue-router'

defineProps<{
  product: ProductInterface
}>()
</script>
