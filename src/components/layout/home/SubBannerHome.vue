<template>
  <section class="container p-5 mx-auto">
    <div class="flex flex-col items-center gap-4 mb-12 text-center">
      <h2 class="heading">From Daylight to Starlight</h2>

      <p class="text-base lg:text-xl">
        Unbound your style with our latest selection of bags and shoes
      </p>

      <Button>
        <RouterLink to="/women">
          SHOP NOW
        </RouterLink>
      </Button>
    </div>

    <div class="flex flex-wrap items-center gap-5">
      <div v-for="(article, index) in articleSubBanner" :key="index" class="flex-[1_1_400px]">
        <RouterLink :to="article.link" class="relative">
          <img
            :alt="article.image.name"
            :src="article.image.src"
            class="w-full h-[327px] md:h-[400px] object-cover"
          />

          <span
            class="bg-[#003E52] min-w-[220px] h-12 font-bold absolute left-1/2 -translate-x-1/2 bottom-11 flex items-center justify-center text-white uppercase"
          >
            {{ article.textCTA }}
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import type { SubBannerHomeInterface } from '@/lib/interfaces/home/banner-home'

const articleSubBanner: SubBannerHomeInterface[] = [
  {
    image: {
      name: 'Women',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com//SharedImages/ContentImages/c9898ebf-504c-46cf-8b7c-7f4e36ac1d6e/20231002160309304858_06717420-75b3-4556-8c76-75ce457fd68a.png'
    },
    link: '/',
    textCTA: 'Shop Women'
  },
  {
    image: {
      name: 'Men',
      src: 'https://id-everbestshoes-cdn.ascentismedia.com//SharedImages/ContentImages/557b2368-d00f-4afa-a1fa-4cbb216d47b5/20231002160246462667_a0eb96ea-be5b-4ada-9dc3-a59eebeb3562.png'
    },
    link: '/',
    textCTA: 'Shop Men'
  }
]
</script>
