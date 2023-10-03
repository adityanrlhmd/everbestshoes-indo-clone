<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/elements/Header/index.vue'
import Footer from '@/components/elements/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
