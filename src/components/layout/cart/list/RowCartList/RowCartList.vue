<template>
  <TableRow>
    <TableCell class="flex flex-col items-start gap-4 md:flex-row">
      <img
        :alt="product.banner.name"
        :src="product.banner.src"
        class="aspect-square w-full max-w-[169px]"
      />

      <div class="flex flex-col gap-4">
        <h3 class="text-xl font-bold">{{ product.name }}</h3>

        <button class="flex items-center gap-3 text-xs whitespace-nowrap">
          <BadgePercent :size="14" class="text-primary" />
          <span>Apply coupon</span>
        </button>

        <button class="flex items-center gap-3 text-xs whitespace-nowrap">
          <Trash2 :size="14" class="text-primary" />
          <span>Remove Item</span>
        </button>
      </div>
    </TableCell>

    <TableCell>
      <div class="flex flex-col whitespace-nowrap">
        <span v-if="product.discountPercent">
          <s> IDR {{ product.price.toLocaleString() }} </s>
        </span>

        <span v-else> IDR {{ product.price.toLocaleString() }} </span>

        <span v-if="product.discountPercent" class="text-primary">
          IDR {{ priceProduct.toLocaleString() }}
        </span>
      </div>
    </TableCell>

    <TableCell class="">
      <QuantityProductCart :value="quantity" />
    </TableCell>

    <TableCell class="text-right whitespace-nowrap">
      <span class="text-primary">IDR {{ total.toLocaleString() }}</span>
    </TableCell>
  </TableRow>
</template>

<script setup lang="ts">
import QuantityProductCart from './QuantityProductCart.vue'
import { TableCell, TableRow } from '@/components/ui/table'
import type { ProductInterface } from '@/lib/interfaces/product'
import { BadgePercent } from 'lucide-vue-next'
import { Trash2 } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{
  product: ProductInterface
}>()

const quantity = ref<string>('1')

const priceProduct = props.product.discountPercent
  ? props.product.price * (props.product.discountPercent / 100)
  : props.product.price
const total = priceProduct * parseInt(quantity.value)
</script>
