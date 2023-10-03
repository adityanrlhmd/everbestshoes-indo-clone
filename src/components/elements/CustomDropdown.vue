<template>
  <div ref="dropdownRef" class="relative">
    <button
      type="button"
      @click="toggleDropdown"
      :class="
        cn(
          'py-2 px-1 border-b border-black flex items-center justify-between w-[9rem]',
          buttonClass
        )
      "
    >
      {{ buttonText }}
      <ChevronUp v-if="isOpen" class="w-6 h-6 text-quaternary" />
      <ChevronDown v-else class="w-6 h-6 text-quaternary" />
    </button>

    <div v-if="isOpen" class="absolute left-0 z-30 w-full bg-white shadow" ref="dropdown">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

const isOpen = ref(false)
const dropdownRef = ref();

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event: MouseEvent): void => {
  if (!dropdownRef.value || !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

defineProps({
  buttonText: { type: String, default: 'Toggle Dropdown' },
  buttonClass: {
    type: String,
    default: ''
  }
})
</script>
