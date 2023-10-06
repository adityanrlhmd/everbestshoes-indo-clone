<template>
  <div class="container flex flex-col items-start gap-20 py-20 md:py-32 md:flex-row lg:gap-40">
    <aside class="grid w-full grid-cols-2 md:w-fit gap-x-5 md:grid-cols-1">
      <RouterLink
        v-for="(nav, index) in navAccount"
        :key="index"
        :to="nav.link"
        class="py-2 text-sm font-semibold border-b border-neutral-300 whitespace-nowrap"
      >
        {{ nav.label }}
      </RouterLink>

      <button
        class="py-2 text-sm font-semibold text-left border-b border-neutral-300 whitespace-nowrap"
      >
        Log Out
      </button>
    </aside>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

type NavAccount = {
  label: string
  link: string
}

const navAccount: NavAccount[] = [
  {
    label: 'My Profile',
    link: '/account/profile'
  },
  {
    label: 'My Transactions',
    link: '/account/transactions'
  },
  {
    label: 'My Rewards',
    link: '/account/vouchers'
  },
  {
    label: 'Change Password',
    link: '/account/change-password'
  }
]
</script>
