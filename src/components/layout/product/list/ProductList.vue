<template>
  <section class="py-5 space-y-5">
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <CardProductList v-for="product in dummyProducts" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CardProductList from './CardProductList.vue'
import { dummyProducts } from '@/lib/data/dummy-products'
</script>
