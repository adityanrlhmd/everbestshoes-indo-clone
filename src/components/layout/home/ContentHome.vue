<template>
  <section class="container flex flex-col items-center gap-12 p-5 mx-auto">
    <div class="flex flex-col w-full gap-3">
      <div class="relative w-full">
        <Swiper
          :loop="true"
          :navigation="navigation"
          :pagination="pagination"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          :modules="[Navigation, Pagination, Autoplay]"
          class="w-full mySwiper"
        >
          <SwiperSlide v-for="(banner, index) in dummyBanner" :key="index">
            <RouterLink :to="banner.link">
              <img
                :alt="banner.image.name"
                :src="banner.image.src"
                class="object-cover w-full aspect-[22/9]"
              />
            </RouterLink>
          </SwiperSlide>
        </Swiper>

        <button type="button" class="banner-swiper-button banner-swiper-button-prev">
          <ChevronLeft class="w-9 h-9 md:w-12 md:h-12" />
        </button>

        <button type="button" class="banner-swiper-button banner-swiper-button-next">
          <ChevronRight class="w-9 h-9 md:w-12 md:h-12" />
        </button>
      </div>

      <h2 class="text-2xl font-bold text-center text-quinary lg:text-3xl">
        #StandTallWithEverbest
      </h2>
    </div>

    <Button>
      <RouterLink to="/women"> FOLLOW US </RouterLink>
    </Button>
  </section>
</template>

<script setup lang="ts">
import type { BannerHomeInterface } from '@/lib/interfaces/home/banner-home'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import type { NavigationOptions, PaginationOptions } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const navigation: NavigationOptions = {
  nextEl: '.banner-swiper-button-next',
  prevEl: '.banner-swiper-button-prev'
}

const pagination: PaginationOptions = {
  clickable: true,
  bulletActiveClass: 'bullet-swiper-active',
  bulletClass: 'bullet-swiper'
}

const dummyBanner: BannerHomeInterface[] = [
  {
    image: {
      name: 'banner',
      src: 'https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    link: '/'
  },
  {
    image: {
      name: 'banner',
      src: 'https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    link: '/'
  }
]
</script>

<style scoped lang="postcss">
.banner-swiper-button {
  @apply absolute z-10 top-1/2 -translate-y-1/2;
}

.banner-swiper-button-next {
  @apply right-0;
}

.banner-swiper-button-prev {
  @apply left-0;
}
</style>
