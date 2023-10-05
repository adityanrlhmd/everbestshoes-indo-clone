<template>
  <div class="container mx-auto py-7 lg:hidden">
    <div class="flex items-center justify-between gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <nav
            class="relative flex flex-col divide-y divide-[#F3CFB2] bg-secondary h-screen overflow-y-auto"
          >
            <SheetClose asChild>
              <RouterLink to="/" class="p-5 w-[60%]">
                <img alt="logo everbest" src="@/assets/images/logo/everbestblack.png" />
              </RouterLink>
            </SheetClose>

            <section
              v-for="navRoot in dataNavHeader"
              :key="navRoot.link"
              class="flex flex-col px-5 py-3 uppercase"
            >
              <SheetClose asChild>
                <RouterLink :to="navRoot.link">
                  <span class="font-bold">
                    {{ navRoot.name }}
                  </span>
                </RouterLink>
              </SheetClose>

              <ul class="list-none">
                <li
                  v-for="(navFirstChild, index) in navRoot.children"
                  :key="navFirstChild.link"
                  class="text-sm"
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem :value="'item-' + (index + 1)">
                      <AccordionTrigger>
                        <SheetClose asChild>
                          <RouterLink :to="navFirstChild.link" class="py-3">
                            <span class="font-medium border-b border-primary text-quinary">
                              {{ navFirstChild.name }}
                            </span>
                          </RouterLink>
                        </SheetClose>
                      </AccordionTrigger>

                      <AccordionContent>
                        <ul class="!p-0 space-y-4 list-none collapse-content">
                          <li
                            v-for="navSecondChild in navFirstChild.children"
                            :key="navSecondChild.link"
                          >
                            <SheetClose asChild>
                              <RouterLink :to="navSecondChild.link">
                                <span>
                                  {{ navSecondChild.name }}
                                </span>
                              </RouterLink>
                            </SheetClose>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </section>

            <section>
              <ul class="text-xs font-semibold uppercase list-none">
                <li class="px-5 py-3">
                  <span>
                    <SheetClose asChild>
                      <RouterLink to="/login"> Sign in </RouterLink>
                    </SheetClose>
                    <span>/</span>
                    <SheetClose asChild>
                      <RouterLink to="/register"> Register </RouterLink>
                    </SheetClose>
                  </span>
                </li>

                <li class="px-5 py-3">
                  <SheetClose asChild>
                    <RouterLink to="/wishlist"> Wishlist </RouterLink>
                  </SheetClose>
                </li>

                <li class="px-5 py-3">
                  <SheetClose asChild>
                    <RouterLink to="/cart"> Cart </RouterLink>
                  </SheetClose>
                </li>
              </ul>
            </section>
          </nav>
        </SheetContent>
      </Sheet>

      <RouterLink to="/">
        <img
          alt="logo everbest"
          src="@/assets/images/logo/everbestblack.png"
          class="max-w-[200px] object-contain w-full"
        />
      </RouterLink>

      <ul class="flex items-center gap-3 text-xl list-none">
        <li>
          <span @click="onOpenSearch">
            <Search :size="19" :stroke-width="1" />
          </span>
        </li>

        <li>
          <RouterLink to="/wishlist">
            <Heart :size="19" :stroke-width="1" />
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/cart">
            <ShoppingBag :size="19" :stroke-width="1" />
          </RouterLink>
        </li>
      </ul>
    </div>

    <InputSearch v-if="showSearch" :on-hide-search="onCloseSearch" />
  </div>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { dataNavHeader } from '@/lib/data/nav-header'
import { Heart, Menu, Search, ShoppingBag } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import InputSearch from '../InputSearch.vue'

const showSearch = ref<boolean>(false)

const onOpenSearch = (event: MouseEvent) => {
  event.stopPropagation()

  if (!showSearch.value) {
    showSearch.value = true
  }
}

const onCloseSearch = (event: MouseEvent) => {
  showSearch.value = false
}
</script>
