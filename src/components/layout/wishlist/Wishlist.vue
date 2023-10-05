<template>
  <section class="flex flex-col gap-5 mt-3">
    <span v-if="dummyProducts.length > 0">{{ dummyProducts.length }} Item(s) in Wishlist</span>
    <span v-else>There are no products in your wishlist.</span>

    <div
      v-if="dummyProducts.length > 0"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      <CardWishlist v-for="product in dummyProducts" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardWishlist from './CardWishlist.vue'
import { dummyProducts } from '@/lib/data/dummy-products'
</script>
