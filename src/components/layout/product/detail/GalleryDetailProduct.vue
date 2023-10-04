<template>
  <div class="grid grid-cols-8 gap-2">
    <div class="hidden w-full md:block">
      <Swiper
        @swiper="setThumbsSwiper"
        direction="vertical"
        :loop="true"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="w-full max-h-[270px] lg:max-h-[320px] xl:max-h-[450px] thumbsSwiper"
      >
        <SwiperSlide v-for="(image, index) in product.gallery" :key="index" class="!h-fit w-fit">
          <img :alt="image.name" :src="image.src" class="aspect-square" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="relative px-5 md:px-0 col-span-full md:col-span-7">
      <div class="relative">
        <Swiper
          :style="{
            '--swiper-navigation-color': '#000',
            '--swiper-pagination-color': '#000'
          }"
          :loop="true"
          :spaceBetween="10"
          :navigation="navigationMain"
          :thumbs="{ swiper: thumbsSwiper }"
          :modules="modules"
          class="w-full"
        >
          <SwiperSlide v-for="(image, index) in product.gallery" :key="index">
            <img :alt="image.name" :src="image.src" class="object-cover w-full aspect-square" />
          </SwiperSlide>
        </Swiper>

        <button type="button" class="gallery-swiper-button gallery-swiper-button-prev">
          <ChevronLeft :stroke-width="1" class="w-12 h-12 md:w-12 md:h-12" />
        </button>

        <button type="button" class="gallery-swiper-button gallery-swiper-button-next">
          <ChevronRight :stroke-width="1" class="w-12 h-12 md:w-12 md:h-12" />
        </button>
      </div>

      <div class="hidden md:block">
        <ContentDetailProduct v-if="product" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentDetailProduct from '@/components/layout/product/detail/ContentDetailProduct.vue'
import type { ProductInterface } from '@/lib/interfaces/product'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref } from 'vue'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import type { NavigationOptions, Swiper as SwiperTypes } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const modules = [FreeMode, Navigation, Thumbs]
const thumbsSwiper = ref<SwiperTypes | null>(null)

const setThumbsSwiper = (swiper: SwiperTypes) => {
  thumbsSwiper.value = swiper
}

const navigationMain: NavigationOptions = {
  nextEl: '.gallery-swiper-button-next',
  prevEl: '.gallery-swiper-button-prev'
}

defineProps<{
  product: ProductInterface
}>()
</script>

<style scoped lang="postcss">
.thumbsSwiper .swiper-slide {
  opacity: 0.6;
}

.thumbsSwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.gallery-swiper-button {
  @apply absolute z-10 top-1/2 -translate-y-1/2 md:hidden;
}

.gallery-swiper-button-next {
  @apply -right-5;
}

.gallery-swiper-button-prev {
  @apply -left-5;
}
</style>
