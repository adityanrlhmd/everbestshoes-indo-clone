<template>
  <div class="flex flex-col gap-4">
    <h3 class="font-bold">Shipping Address</h3>

    <div class="flex flex-col gap-2">
      <FormInput label="Recipient Name *" name="recipientName" required />
      <FormInput label="Recipient Contact No *" name="recipientContact" required />

      <SelectRegional required />

      <FormInput label="Postal Code *" name="post" required />
      <FormInput label="Address Line *" name="address" required />

      <CheckboxInput id="billing-address" label="Use this as my Billing Address" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CheckboxInput from '@/components/elements/CheckboxInput.vue'
import FormInput from '@/components/elements/FormInput.vue'
import SelectRegional from '@/components/elements/SelectRegional.vue'
</script>
