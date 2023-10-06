<template>
  <section class="flex flex-col gap-8 text-sm">
    <h2 class="text-xl font-bold">Order Summary</h2>

    <div class="flex flex-col">
      <div class="flex flex-col border-b divide-y divide-neutral-300 border-neutral-300">
        <ProductOrder :product="dummyProducts[0]" />
      </div>

      <div class="flex items-center justify-between py-2 font-bold border-b border-neutral-300">
        <span>Sub Total</span>

        <span class="ml-auto">IDR 4,235,000</span>
      </div>

      <div class="flex items-center justify-between py-2 border-b border-neutral-300">
        <span class="ml-auto">IDR 0</span>
      </div>

      <div class="flex items-center justify-between py-2 font-bold border-b border-neutral-300">
        <span>Total</span>

        <span class="ml-auto">IDR 4,235,000</span>
      </div>

      <div class="flex flex-col py-2 border-b border-neutral-300">
        <RadioGroup :default-value="selectedPaidOption">
          <div
            v-for="option in paidOptions"
            :key="option.value"
            class="flex items-center space-x-2"
          >
            <RadioGroupItem :id="option.value" :value="option.value" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </RadioGroup>
      </div>

      <Button type="submit" variant="primary" class="mt-3 md:w-full"> Proceed to Checkout </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { dummyProducts } from '@/lib/data/dummy-products'
import ProductOrder from './ProductOrder.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const paidOptions = [
  {
    label: 'NICEPAY Credit + Debit Card',
    value: 'creditDebit'
  },
  {
    label: 'NICEPAY Virtual Account Bank Transfer',
    value: 'VA'
  }
]

const selectedPaidOption = ref(paidOptions[0].value)
</script>
