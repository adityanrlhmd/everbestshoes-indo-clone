<template>
  <div class="flex items-start gap-4 mx-auto">
    <img :alt="product.banner.name" :src="product.banner.src" class="aspect-square max-w-[169px]" />

    <div class="flex flex-col gap-4 text-sm uppercase">
      <div class="flex flex-col">
        <RouterLink :to="`/products/${product.slug}`" class="font-bold">
          {{ product.name }}
        </RouterLink>

        <span>Color: Almond</span>
        <span>Size: 35</span>
      </div>

      <p>
        IDR
        {{
          product.discountPercent
            ? (product.price * (product.discountPercent / 100)).toLocaleString()
            : product.price.toLocaleString()
        }}
      </p>

      <div class="flex flex-col">
        <Button size="sm"> Add to cart </Button>
        <Button variant="destructive-ghost" size="sm"> Remove </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import type { ProductInterface } from '@/lib/interfaces/product'

defineProps<{
  product: ProductInterface
}>()
</script>
