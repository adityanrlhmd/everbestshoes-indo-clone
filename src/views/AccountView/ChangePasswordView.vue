<template>
  <main class="container flex flex-col gap-8">
    <h1 class="text-4xl font-bold uppercase">CHANGE PASSWORD?</h1>

    <form @submit="onSubmitLogin" class="flex flex-col max-w-xl gap-5">
      <FormInput type="password" label="Current Password:" required />

      <FormInput type="password" label="New Password:" required />

      <FormInput type="password" label="Confirm Password:" required />

      <Button type="submit" class="bg-black" size="sm"> Submit </Button>
    </form>
  </main>
</template>

<script setup lang="ts">
import FormInput from '@/components/elements/FormInput.vue'
import { Button } from '@/components/ui/button'

const onSubmitLogin = (e: Event) => {
  e.preventDefault()
}
</script>
