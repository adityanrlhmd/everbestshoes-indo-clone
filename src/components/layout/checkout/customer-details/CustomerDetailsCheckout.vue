<template>
  <section class="flex flex-col gap-8 text-sm">
    <h2 class="!text-left heading">Customer Details</h2>

    <div class="flex flex-col gap-2">
      <FormInput label="Given Name *" name="givenName" required />
      <FormInput label="Family Name *" name="familyName" required />
      <FormInput label="Email *" name="email" required />
      <FormInput label="Contact No *" name="contact" required />
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="font-bold">Checkout Option</h3>

      <RadioGroup :default-value="selectedCheckoutOption">
        <div
          v-for="option in checkoutOptions"
          :key="option.value"
          class="flex items-center space-x-2"
        >
          <RadioGroupItem :id="option.value" :value="option.value" />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </RadioGroup>
    </div>

    <ShippingAddressDetail />
    <BillingAddressDetailVue />
  </section>
</template>

<script setup lang="ts">
import FormInput from '@/components/elements/FormInput.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ref } from 'vue'
import BillingAddressDetailVue from './BillingAddressDetail.vue'
import ShippingAddressDetail from './ShippingAddressDetail.vue'

const checkoutOptions = [
  {
    label: 'Delivery',
    value: 'delivery'
  },
  {
    label: 'Collection',
    value: 'collection'
  }
]

const selectedCheckoutOption = ref(checkoutOptions[0].value)
</script>
