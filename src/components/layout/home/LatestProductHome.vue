<template>
  <section class="bg-[#CAD1EA] flex flex-col gap-4 py-5 px-10">
    <h2 class="heading">What's New</h2>

    <div class="relative">
      <Swiper
        :slides-per-view="2"
        :slides-per-group="2"
        :space-between="30"
        :breakpoints="{
          '768': {
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        }"
        :navigation="navigation"
        :pagination="pagination"
        :modules="[Navigation, Pagination]"
        class="w-full mySwiper"
      >
        <SwiperSlide v-for="(product, index) in dummyProducts" :key="index">
          <RouterLink :to="'/products/' + product.slug">
            <img
              :alt="product.image.name"
              :src="product.image.src"
              class="object-cover w-full aspect-square"
            />

            <div class="flex flex-col items-start">
              <strong class="tetx-xl">{{ product.name }}</strong>

              <span>IDR {{ product.price.toLocaleString() }}</span>
            </div>
          </RouterLink>
        </SwiperSlide>
      </Swiper>

      <button type="button" class="latest-swiper-button latest-swiper-button-prev">
        <ChevronLeft class="w-9 h-9 md:w-12 md:h-12" />
      </button>

      <button type="button" class="latest-swiper-button latest-swiper-button-next">
        <ChevronRight class="w-9 h-9 md:w-12 md:h-12" />
      </button>
    </div>

    <div class="flex items-center justify-center">
      <div className="custom-pagination" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProductInterface } from '@/lib/interfaces/product'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

import { Navigation, Pagination } from 'swiper/modules'
import type { NavigationOptions, PaginationOptions } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const navigation: NavigationOptions = {
  disabledClass: 'latest-swiper-button-disabled',
  nextEl: '.latest-swiper-button-next',
  prevEl: '.latest-swiper-button-prev'
}

const pagination: PaginationOptions = {
  clickable: true,
  el: '.custom-pagination',
  bulletActiveClass: 'bullet-swiper-active',
  bulletClass: 'bullet-swiper'
}

const dummyProducts: ProductInterface[] = [
  {
    id: 1,
    name: 'Kanda',
    price: 99000,
    slug: 'kanda',
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

<style scoped lang="postcss">
.custom-pagination {
  @apply !w-fit;
}

.latest-swiper-button {
  @apply absolute z-10 top-1/2 -translate-y-1/2;
}

.latest-swiper-button-next {
  @apply -right-10;
}

.latest-swiper-button-prev {
  @apply -left-10;
}

.latest-swiper-button-disabled {
  @apply opacity-25
}
</style>
