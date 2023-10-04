<template>
  <main class="container flex flex-col gap-8 py-32">
    <h1 class="text-4xl font-bold uppercase">Sign Up</h1>

    <form
      @submit="onSubmitRegister"
      class="flex flex-col max-w-xl gap-3 form-register text-[#575757]"
    >
      <FormInput label="Given Name: *" name="givenName" required />
      <FormInput label="Family Name: *" name="familyName" required />
      <DatePicker label="Date Of Birth: *" required />
      <FormInput label="Mobile: *" name="mobile" required />
      <FormInput label="Email: *" name="email" required />
      <SelectInput label="Gender:" name="gender" :options="genderOption" />

      <Button type="submit" class="bg-black" size="sm"> Sign Up </Button>
    </form>

    <div class="flex flex-col gap-4 text-sm">
      <span>
        Have an account?
        <RouterLink to="/login" class="text-[#337ab7]"> Login Now </RouterLink>
      </span>
    </div>
  </main>
</template>

<script setup lang="ts">
import SelectInput from '@/components/elements/SelectInput.vue'
import DatePicker from '@/components/elements/DatePicker.vue'
import FormInput from '@/components/elements/FormInput.vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

const genderOption = [
  {
    label: 'Male',
    value: 'male'
  },
  {
    label: 'Female',
    value: 'female'
  }
]

const onSubmitRegister = (e: Event) => {
  e.preventDefault()
}
</script>

<style scoped lang="postcss">
.form-register label {
  @apply mb-1 text-sm;
}
</style>
