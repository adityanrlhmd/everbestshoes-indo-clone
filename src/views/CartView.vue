<template>
  <main class="container py-24">
    <h1 class="text-4xl font-bold tracking-wider uppercase">Cart</h1>

    <CartList />
    <CheckoutCart />
  </main>
</template>

<script setup lang="ts">
import CheckoutCart from '@/components/layout/cart/checkout/CheckoutCart.vue'
import CartList from '@/components/layout/cart/list/CartList.vue'
</script>
