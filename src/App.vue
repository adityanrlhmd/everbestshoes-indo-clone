<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/elements/Header/Header.vue'
import Footer from '@/components/elements/Footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
