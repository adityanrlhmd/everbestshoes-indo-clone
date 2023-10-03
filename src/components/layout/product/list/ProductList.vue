<template>
  <section class="py-5 space-y-5">
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <CardProductList v-for="product in dummyProducts" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/lib/interfaces/product';
import CardProductList from './CardProductList.vue';

const dummyProducts: ProductInterface[] = [
  {
    id: 1,
    name: 'Kanda',
    price: 99000,
    slug: 'kanda',
    discountPercent: 40,
    image: {
      name: 'kanda',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/553d8340-c8f5-4e92-95e9-4cb09f415e89/1/240x240/kanda.jpg'
    }
  },
  {
    id: 2,
    name: 'Furby',
    price: 199000,
    slug: 'furby',
    discountPercent: 30,
    image: {
      name: 'furby',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/d2ba752a-8193-4ef0-97a3-df0c9393784c/1/240x240/furby.jpg'
    }
  },
  {
    id: 3,
    name: 'Kanda',
    price: 99000,
    slug: 'kanda',
    image: {
      name: 'kanda',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/553d8340-c8f5-4e92-95e9-4cb09f415e89/1/240x240/kanda.jpg'
    }
  },
  {
    id: 4,
    name: 'Furby',
    price: 199000,
    slug: 'furby',
    image: {
      name: 'furby',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/d2ba752a-8193-4ef0-97a3-df0c9393784c/1/240x240/furby.jpg'
    }
  },
  {
    id: 5,
    name: 'Kanda',
    price: 99000,
    slug: 'kanda',
    image: {
      name: 'kanda',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/553d8340-c8f5-4e92-95e9-4cb09f415e89/1/240x240/kanda.jpg'
    }
  },
  {
    id: 6,
    name: 'Furby',
    price: 199000,
    slug: 'furby',
    discountPercent: 40,
    image: {
      name: 'furby',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/d2ba752a-8193-4ef0-97a3-df0c9393784c/1/240x240/furby.jpg'
    }
  },
  {
    id: 7,
    name: 'Kanda',
    price: 99000,
    slug: 'kanda',
    image: {
      name: 'kanda',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/553d8340-c8f5-4e92-95e9-4cb09f415e89/1/240x240/kanda.jpg'
    }
  },
  {
    id: 8,
    name: 'Furby',
    price: 199000,
    slug: 'furby',
    image: {
      name: 'furby',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com/ProductImages/d2ba752a-8193-4ef0-97a3-df0c9393784c/1/240x240/furby.jpg'
    }
  }
]
</script>
