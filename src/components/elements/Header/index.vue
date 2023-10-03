<template>
  <header>
    <div class="text-white bg-primary">
      <div class="container px-5 py-3 mx-auto text-sm font-semibold text-center">
        <RouterLink to="#"> Sign Up and Get IDR 50.000 off Your First Order </RouterLink>
      </div>
    </div>

    <DesktopHeader />

    <MobileHeader />
  </header>
</template>

<script setup lang="ts">
import MobileHeader from './MobileHeader.vue'
import DesktopHeader from './DesktopHeader.vue'
import { RouterLink } from 'vue-router'
</script>
