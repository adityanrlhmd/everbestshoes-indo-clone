<template>
  <div class="flex flex-col gap-8 py-3 md:py-10">
    <article class="flex flex-col gap-4 text-sm">
      <h3 class="text-lg font-bold">Description</h3>

      <p class="whitespace-pre-line">
        {{ product.description }}
      </p>

      <div v-if="product.productDetails" class="flex flex-col items-start">
        <h4>Product Details</h4>

        <ol class="list-disc list-inside">
          <li v-for="(detail, index) in product.productDetails" :key="index">
            {{ detail.name }} : {{ detail.value }}
          </li>
        </ol>
      </div>

      <div v-if="product.material" class="flex flex-col items-start">
        <h4>Material</h4>

        <ol class="list-disc list-inside">
          <li v-for="(material, index) in product.material" :key="index">
            {{ material.name }} : {{ material.value }}
          </li>
        </ol>
      </div>
    </article>

    <article v-if="product.shipping" class="flex flex-col gap-4 text-sm">
      <h3 class="text-lg font-bold">Shipping and Returns</h3>

      <p class="whitespace-pre-line">
        {{ product.shipping }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/lib/interfaces/product'

defineProps<{
  product: ProductInterface
}>()
</script>
