<template>
  <main class="container py-24">
    <h1 class="mb-3 text-4xl font-bold tracking-wider uppercas">Checkout</h1>

    <form class="grid grid-cols-1 gap-16 lg:gap-36 xl:gap-48 md:grid-cols-2">
      <CustomerDetailsCheckout />

      <OrderSummaryCheckout />
    </form>
  </main>
</template>

<script setup lang="ts">
import CustomerDetailsCheckout from '@/components/layout/checkout/customer-details/CustomerDetailsCheckout.vue'
import OrderSummaryCheckout from '@/components/layout/checkout/order-summary/OrderSummaryCheckout.vue'
</script>
