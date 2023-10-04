<template>
  <main class="container flex flex-col gap-8 py-40">
    <h1 class="text-4xl font-bold uppercase">Login</h1>

    <form @submit="onSubmitLogin" class="flex flex-col max-w-xl gap-8">
      <FormInput label-class="font-bold" label="Email Address/Card No:" required />
      <FormInput label-class="font-bold" label="Password:" type="password" required />

      <Button type="submit" class="bg-black" size="sm"> Login </Button>
    </form>

    <div class="flex flex-col gap-4 text-sm">
      <span>
        Don't have an account?
        <RouterLink to="/register" class="text-[#337ab7]"> Register Now </RouterLink>
      </span>

      <span>
        Forgot your password?
        <RouterLink to="/register" class="text-[#337ab7]"> Click here </RouterLink>
      </span>
    </div>
  </main>
</template>

<script setup lang="ts">
import FormInput from '@/components/elements/FormInput.vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

const onSubmitLogin = (e: Event) => {
  e.preventDefault()
}
</script>
