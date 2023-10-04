<template>
  <footer>
    <section class="container py-8">
      <div class="text-white bg-quaternary">
        <div
          class="flex flex-col items-center justify-center max-w-xl gap-5 px-5 py-10 mx-auto text-center"
        >
          <h2 class="text-3xl">
            <strong> Let's Be Friends </strong>
          </h2>

          <p>Sign up for exclusives and be the first in the know.</p>

          <form class="flex flex-col items-center justify-center w-full gap-5">
            <input
              class="w-full text-center text-white bg-transparent border-b outline-none placeholder:text-white border-tertiary"
              placeholder="Your Email Here"
            />

            <Button type="button" class="bg-tertiary text-quaternary"> Submit </Button>
          </form>
        </div>
      </div>
    </section>

    <section class="text-white bg-quinary">
      <div class="container divide-y divide-primary">
        <div class="container grid grid-cols-1 gap-5 px-0 py-10 mx-auto lg:grid-cols-4">
          <ul
            v-for="(navFooter, index) in dataNavFooter"
            :key="index"
            class="hidden space-y-4 list-none grow basis-1 lg:block"
          >
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
  
          <div class="flex flex-col gap-3">
            <h3 class="p-2 pl-0 text-xs uppercase border-b border-primary w-fit">Stay Connected</h3>
  
            <ul class="flex items-center gap-3">
              <li>
                <Facebook :size="22" :stroke-width="1.5" />
              </li>
              <li>
                <Instagram :size="22" :stroke-width="1.5" />
              </li>
              <li>
                <Youtube :size="22" :stroke-width="1.5" />
              </li>
              <li>
                <Twitter :size="22" :stroke-width="1.5" />
              </li>
            </ul>
          </div>
        </div>
  
        <article class="flex flex-wrap gap-5 py-5 text-xs">
          <RouterLink to="/"> Term and Conditions </RouterLink>
  
          <RouterLink to="/"> Privacy Policy </RouterLink>
  
          <p class="flex-[1_1_400px]">
            © 2019 Everbest | PT. Everbesindo Surya Jaya. All right reserved
          </p>
        </article>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import Button from '../ui/button/Button.vue'
import { dataNavFooter } from '@/lib/data/nav-footer'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-vue-next'
</script>

<style scoped lang="postcss">
footer {
  @apply mt-auto;
}
</style>
