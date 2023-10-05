<template>
  <main class="container flex flex-col gap-8 py-40">
    <h1 class="text-4xl font-bold uppercase">FORGOT YOUR PASSWORD?</h1>

    <form @submit="onSubmitLogin" class="flex flex-col max-w-xl gap-8">
      <FormInput
        type="email"
        label="Enter your email address below and we'll send you a link to reset your password"
        required
      />

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
