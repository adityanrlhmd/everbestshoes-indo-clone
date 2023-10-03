<template>
  <section class="flex flex-col justify-between gap-y-5 lg:items-center lg:flex-row">
    <div class="grid grid-cols-2 gap-5 lg:grid-cols-4">
      <ColorFilterProduct />
      <SizeFilterProduct />
      <SortFilterProduct />
      <ViewFilterProduct />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <Button variant="outline" size="sm" class="w-full lg:w-[150px]"> Apply </Button>

      <Button variant="outline" size="sm" class="w-full lg:w-[150px]"> Clear </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import ColorFilterProduct from './ColorFilterProduct.vue'
import SizeFilterProduct from './SizeFilterProduct.vue'
import SortFilterProduct from './SortFilterProduct.vue'
import ViewFilterProduct from './ViewFilterProduct.vue'
</script>
