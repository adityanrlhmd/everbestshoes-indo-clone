<template>
  <main class="container py-24">
    <h1 class="mb-3 text-4xl font-bold tracking-wider uppercas">Checkout</h1>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <CustomerDetailsCheckout />

      <OrderSummaryCheckout />
    </div>
  </main>
</template>

<script setup lang="ts">
import CustomerDetailsCheckout from '@/components/layout/checkout/CustomerDetailsCheckout.vue'
import OrderSummaryCheckout from '@/components/layout/checkout/OrderSummaryCheckout.vue'
</script>
