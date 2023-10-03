<script setup lang="ts">
import FilterProduct from '@/components/layout/product/filter/FilterProduct.vue'
import ProductList from '@/components/layout/product/list/ProductList.vue'
</script>

<template>
  <main class="container p-5 mx-auto">
    <FilterProduct />
    <ProductList />
  </main>
</template>
