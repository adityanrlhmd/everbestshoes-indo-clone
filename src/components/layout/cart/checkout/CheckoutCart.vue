<template>
  <section class="flex flex-col max-w-md gap-8 py-5 ml-auto">
    <div class="flex items-center gap-4">
      <Input name="promo" placeholder="Enter Promo Code" class="text-xs h-9" />

      <Button variant="outline" size="sm" class="px-6 text-xs w-fit"> Apply </Button>
    </div>

    <div class="flex flex-col text-sm">
      <div class="flex items-center justify-between gap-4 py-2 border-b border-black">
        <span>Sub Total</span>
        <span class="whitespace-nowrap">IDR 4,235,000</span>
      </div>

      <div class="flex items-center justify-between gap-4 py-2 border-b border-black">
        <span>Redeemable Points</span>
        <span class="whitespace-nowrap text-primary">0 Points</span>
      </div>

      <div class="flex items-center justify-between gap-4 py-2 font-bold border-b border-black">
        <span>Grand Total</span>
        <span class="whitespace-nowrap">IDR 4,235,000</span>
      </div>

      <p class="py-2">
        Note: Redeeming of points and/or vouchers applied to your order is not valid through VA
        Payment method
      </p>
    </div>

    <Button @click="onCheckout" variant="primary" class="md:w-full"> Checkout </Button>
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'vue-router'

const router = useRouter()

const onCheckout = () => {
  router.push('/checkout')
}
</script>
