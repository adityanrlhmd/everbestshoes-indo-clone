<template>
  <main class="container grid grid-cols-1 gap-5 py-5 md:grid-cols-3">
    <section class="md:col-span-2">
      <GalleryDetailProduct v-if="currentProduct" :product="currentProduct" />
    </section>

    <section>
      <FormDetailProduct v-if="currentProduct" :product="currentProduct" />
    </section>

    <section class="md:hidden">
      <ContentDetailProduct v-if="currentProduct" :product="currentProduct" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { dummyProducts } from '@/lib/data/dummy-products'

import ContentDetailProduct from '@/components/layout/product/detail/ContentDetailProduct.vue'
import GalleryDetailProduct from '@/components/layout/product/detail/GalleryDetailProduct.vue'
import FormDetailProduct from '@/components/layout/product/detail/FormDetailProduct.vue'
import type { ImageType } from '@/lib/types/image'
import { useRoute } from 'vue-router'

const route = useRoute()
const { slug: currentProductSlug } = route.params

const currentProduct = dummyProducts.find((product) => product.slug === currentProductSlug)

const dummyGallery: ImageType[] = [
  {
    name: 'gallery',
    src: 'https://images.unsplash.com/photo-1683009427051-00a2fe827a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'gallery',
    src: 'https://plus.unsplash.com/premium_photo-1695930295426-3cb6c23ec25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
  },
  {
    name: 'gallery',
    src: 'https://images.unsplash.com/photo-1696251143046-2d32fb985b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'gallery',
    src: 'https://images.unsplash.com/photo-1696177785428-b8c79ff04d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    name: 'gallery',
    src: 'https://images.unsplash.com/photo-1682687220945-922198770e60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'gallery',
    src: 'https://plus.unsplash.com/premium_photo-1695930295426-3cb6c23ec25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
  },
  {
    name: 'gallery',
    src: 'https://plus.unsplash.com/premium_photo-1696273225510-5ff59f0e5695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    name: 'gallery',
    src: 'https://images.unsplash.com/photo-1696260425424-cd3a251e138b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80'
  }
]
</script>
