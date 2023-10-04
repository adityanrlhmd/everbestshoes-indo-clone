<template>
  <SizeCustomDropdown :sizes="dummySizeProducts" />
</template>

<script setup lang="ts">
import SizeCustomDropdown from '@/components/elements/CustomDropdown/SizeCustomDropdown.vue'

const dummySizeProducts: number[] = [35, 36, 37, 38, 39, 40, 41, 42]
</script>
