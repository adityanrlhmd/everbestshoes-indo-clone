<template>
  <div class="flex flex-col gap-4">
    <h3 class="font-bold">Billing Address</h3>

    <div class="flex flex-col gap-2">
      <SelectRegional required />

      <FormInput label="Postal Code *" name="post" required />
      <FormInput label="Address Line *" name="address" required />
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from '@/components/elements/FormInput.vue'
import SelectRegional from '@/components/elements/SelectRegional.vue'
</script>
