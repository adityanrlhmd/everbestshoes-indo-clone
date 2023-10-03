<template>
  <div class="container flex items-center justify-between gap-4 px-5 mx-auto py-7 lg:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <nav
          class="relative flex flex-col divide-y divide-[#F3CFB2] bg-secondary h-screen overflow-y-auto min-w-[18rem]"
        >
          <SheetClose asChild>
            <RouterLink to="/" class="p-5 w-[60%]">
              <img
                alt="logo everbest"
                src="@/assets/images/logo/everbestblack.png"
              />
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
                          <span class="font-medium border-b border-quaternary text-[#273632]">
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
      </SheetContent>
    </Sheet>

    <RouterLink to="/">
      <img
        alt="logo everbest"
        src="@/assets/images/logo/everbestblack.png"
        class="max-w-[200px] object-contain"
      />
    </RouterLink>

    <ul class="flex gap-3 text-xl list-none">
      <li>
        <RouterLink to="#">
          <Search :size="19" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="#">
          <Heart :size="19" />
        </RouterLink>
      </li>
      <li>
        <RouterLink to="#">
          <ShoppingBag :size="19" />
        </RouterLink>
      </li>
    </ul>
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
import { RouterLink } from 'vue-router'
</script>
