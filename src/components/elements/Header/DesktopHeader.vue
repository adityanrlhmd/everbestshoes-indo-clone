<template>
  <div class="container flex-col hidden gap-8 px-5 pt-5 pb-2 mx-auto lg:flex">
    <div class="grid grid-cols-3 text-xs font-semibold uppercase">
      <span>
        <RouterLink to="/login"> Sign in </RouterLink>
        <span>/</span>
        <RouterLink to="/register"> Register </RouterLink>
      </span>

      <RouterLink to="/">
        <figure class="flex justify-center">
          <img alt="logo everbest" src="@/assets/images/logo/everbestblack.png" />
        </figure>
      </RouterLink>

      <ul class="flex justify-end gap-4">
        <li>
          <RouterLink to="/wishlist"> Wishlist </RouterLink>
        </li>

        <li>
          <RouterLink to="/cart"> Cart </RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-between gap-4">
      <nav>
        <ul class="flex list-none">
          <li v-for="navRoot in dataNavHeader" :key="navRoot.link" class="dropdown-nav">
            <RouterLink :to="navRoot.link">
              <span class="font-bold uppercase pr-[30px] hover:text-quaternary transition-all">
                {{ navRoot.name }}
              </span>
            </RouterLink>

            <div class="dropdown-nav-content">
              <div class="container grid grid-cols-4 gap-4 p-5 mx-auto">
                <div
                  v-for="navFirstChild in navRoot.children"
                  :key="navFirstChild.link"
                  class="space-y-4 text-xs uppercase"
                >
                  <RouterLink :to="navFirstChild.link">
                    <span class="font-semibold border-b border-quaternary text-[#273632] pr-2 pb-1">
                      {{ navFirstChild.name }}
                    </span>
                  </RouterLink>

                  <ul class="space-y-4 list-none">
                    <li v-for="navSecondChild in navFirstChild.children" :key="navSecondChild.link">
                      <RouterLink :to="navSecondChild.link">
                        <span>
                          {{ navSecondChild.name }}
                        </span>
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dataNavHeader } from '@/lib/data/nav-header'
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="postcss">
.dropdown-nav {
  @apply overflow-hidden;
}

.dropdown-nav-content {
  @apply hidden absolute bg-secondary w-full left-0 z-10;
}

.dropdown-nav:hover .dropdown-nav-content {
  @apply block;
}
</style>
