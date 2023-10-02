<template>
  <footer>
    <section class="bg-[#273632] text-white">
      <div class="container flex items-start justify-between p-5 mx-auto">
        <ul v-for="(navFooter, index) in dataNavFooter" :key="index" class="space-y-4 list-none grow basis-1">
          <li
            v-for="(navs, index) in navFooter.navigations"
            :key="index"
            class="text-[15px] font-medium tracking-[1.2px]"
          >
            <RouterLink :to="navs.link">
              {{ navs.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { dataNavFooter } from '@/libs/data/navFooter'
</script>

<style scoped lang="postcss">
footer {
  @apply mt-auto
}
</style>
