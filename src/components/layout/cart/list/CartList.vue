<template>
  <Table class="mt-5">
    <TableCaption>A list of your cart.</TableCaption>

    <TableHeader>
      <TableRow>
        <TableHead> Product </TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Quantity</TableHead>
        <TableHead class="text-right"> Total </TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <RowCartList v-for="product in dummyProducts" :key="product.id" :product="product" />
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import { dummyProducts } from '@/lib/data/dummy-products'
import RowCartList from './RowCartList/RowCartList.vue'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
</script>

<style scoped>
.title-header {
  display: none;
}

@media (min-width: 768px) {
  .title-header {
    display: block;
  }
}
</style>
