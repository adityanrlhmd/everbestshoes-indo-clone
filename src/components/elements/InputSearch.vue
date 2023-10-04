<template>
  <div class="flex items-center gap-1 transition-all border-b border-black w-full lg:w-[12rem] mt-3 lg:mt-0">
    <button @click="onHideSearch()">
      <X :size="18" :stroke-width="2" />
    </button>

    <input type="text" class="w-full" />

    <Search :size="18" :stroke-width="2" />
  </div>
</template>

<script setup lang="ts">
import { Search, X } from 'lucide-vue-next';
import { defineProps } from 'vue';

defineProps<{
  onHideSearch: Function
}>()


</script>
