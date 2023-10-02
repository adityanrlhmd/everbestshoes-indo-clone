<template>
  <header>
    <div class="text-white bg-primary">
      <div class="container px-5 py-3 mx-auto text-sm font-semibold text-center">
        <RouterLink to="#"> Sign Up and Get IDR 50.000 off Your First Order </RouterLink>
      </div>
    </div>

    <div class="container flex-col hidden gap-8 px-5 pt-5 pb-2 mx-auto lg:flex">
      <div class="grid grid-cols-3 text-xs font-semibold uppercase">
        <span>
          <RouterLink to="/login"> Sign in </RouterLink>
          <span>/</span>
          <RouterLink to="/register"> Register </RouterLink>
        </span>

        <figure class="flex justify-center">
          <img alt="logo everbest" src="@/assets/images/logo/everbestblack.png" />
        </figure>

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
            <li v-for="navRoot in dataNavHeader" :key="navRoot.link" class="dropdown">
              <RouterLink :to="navRoot.link">
                <span class="font-bold uppercase pr-[30px]">
                  {{ navRoot.name }}
                </span>
              </RouterLink>

              <div class="dropdown-content">
                <div class="container grid grid-cols-4 gap-4 p-5 mx-auto">
                  <div
                    v-for="navFirstChild in navRoot.children"
                    :key="navFirstChild.link"
                    class="space-y-4 text-xs uppercase"
                  >
                    <RouterLink :to="navFirstChild.link">
                      <span
                        class="font-semibold border-b border-quaternary text-[#273632] pr-2 pb-1"
                      >
                        {{ navFirstChild.name }}
                      </span>
                    </RouterLink>

                    <ul class="space-y-4 list-none">
                      <li
                        v-for="navSecondChild in navFirstChild.children"
                        :key="navSecondChild.link"
                      >
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

    <div class="container flex items-center justify-between gap-4 px-5 mx-auto py-7 lg:hidden">
      <div class="drawer w-fit">
        <input id="drawer-nav" type="checkbox" class="drawer-toggle" />

        <div class="drawer-content">
          <label for="drawer-nav" class="drawer-button">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </label>
        </div>

        <div class="drawer-side">
          <label for="drawer-nav" aria-label="close sidebar" class="drawer-overlay"></label>

          <nav
            class="relative flex flex-col divide-y divide-[#F3CFB2] bg-secondary h-screen overflow-y-auto min-w-[18rem]"
          >
            <RouterLink to="/">
              <figure class="p-5">
                <img
                  alt="logo everbest"
                  src="@/assets/images/logo/everbestblack.png"
                  class="w-[60%]"
                />
              </figure>
            </RouterLink>

            <section
              v-for="navRoot in dataNavHeader"
              :key="navRoot.link"
              class="flex flex-col px-5 py-3 uppercase"
            >
              <RouterLink :to="navRoot.link">
                <span class="font-bold">
                  {{ navRoot.name }}
                </span>
              </RouterLink>

              <ul class="list-none">
                <li
                  v-for="navFirstChild in navRoot.children"
                  :key="navFirstChild.link"
                  class="text-sm rounded-none collapse collapse-arrow"
                >
                  <input type="radio" name="nav-accordion" class="min-h-0" />
                  <div class="min-h-0 px-0 py-3 collapse-title after:right-[0.3rem] relative">
                    <RouterLink :to="navFirstChild.link">
                      <span class="font-medium border-b border-quaternary text-[#273632]">
                        {{ navFirstChild.name }}
                      </span>
                    </RouterLink>
                  </div>

                  <ul class="!p-0 space-y-4 list-none collapse-content">
                    <li v-for="navSecondChild in navFirstChild.children" :key="navSecondChild.link">
                      <RouterLink :to="navSecondChild.link">
                        <span>
                          {{ navSecondChild.name }}
                        </span>
                      </RouterLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <ul class="text-xs font-semibold uppercase list-none">
                <li class="px-5 py-3">
                  <span>
                    <RouterLink to="/login"> Sign in </RouterLink>
                    <span>/</span>
                    <RouterLink to="/register"> Register </RouterLink>
                  </span>
                </li>

                <li class="px-5 py-3">
                  <RouterLink to="/wishlist"> Wishlist </RouterLink>
                </li>

                <li class="px-5 py-3">
                  <RouterLink to="/cart"> Cart </RouterLink>
                </li>
              </ul>
            </section>
          </nav>
        </div>
      </div>

      <img alt="logo everbest" src="@/assets/images/logo/everbestblack.png" />

      <ul class="flex gap-3 list-none">
        <li>
          <RouterLink to="#"> <font-awesome-icon icon="fa-solid fa-search" /> </RouterLink>
        </li>
        <li>
          <RouterLink to="#"> <font-awesome-icon icon="fa-regular fa-heart" /> </RouterLink>
        </li>
        <li>
          <RouterLink to="#"> <font-awesome-icon icon="fa-solid fa-bag-shopping" /> </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { dataNavHeader } from '@/libs/data/navHeader'
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="postcss">
.dropdown {
  @apply overflow-hidden;
}

.dropdown-content {
  @apply hidden absolute bg-secondary w-full left-0 z-10;
}

.dropdown:hover .dropdown-content {
  @apply block;
}

.collapse-arrow > .collapse-title:after {
  @apply right-[0.3rem];
}
</style>
