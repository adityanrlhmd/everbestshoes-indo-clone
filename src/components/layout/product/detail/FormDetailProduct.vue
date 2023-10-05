<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col items-start">
      <strong class="text-3xl md:text-4xl">
        {{ product.name }}
      </strong>

      <div class="flex flex-col items-start mt-1 text-xl">
        <span v-if="product.discountPercent">
          <s> IDR {{ product.price.toLocaleString() }} </s>
        </span>

        <span v-else class="text-primary"> IDR {{ product.price.toLocaleString() }} </span>

        <span v-if="product.discountPercent" class="text-primary">
          IDR {{ (product.price * (product.discountPercent / 100)).toLocaleString() }}
        </span>
      </div>
    </div>

    <div class="flex flex-col w-full gap-10">
      <div class="flex flex-col w-full gap-3">
        <ColorCustomDropdown
          :colors="product.colors"
          title-class="w-full lg:w-full"
          :title-color-product="currentColorProduct"
          :current-colors-product="[currentColorProduct]"
          :on-click-color="onClickColor"
        />

        <SizeCustomDropdown
          :sizes="product.sizes"
          title-class="w-full lg:w-full"
          :title-size-product="currentSizeProduct"
          :current-sizes-product="[currentSizeProduct]"
          :on-click-size="onClickSize"
        />

        <div class="flex items-center justify-between w-full px-1 py-2 border-b border-black">
          <span>Quantity</span>

          <div class="flex items-center gap-7 lg:gap-10">
            <Minus :stroke-width="2" :size="20" class="w-6 h-6 text-primary" />

            <span class="text-xs">01</span>

            <Plus :stroke-width="2" :size="20" class="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <Button variant="outline-primary" class="md:w-full"> find yout fit </Button>
          <Button variant="primary" class="md:w-full"> add to cart </Button>
        </div>

        <div class="flex items-center justify-between">
          <button class="flex items-center gap-1 text-sm">
            <Heart class="text-primary" :size="16" />
            <span>Add to Wishlist</span>
          </button>

          <button class="flex items-center gap-1 text-sm">
            <Plus class="text-primary" :size="16" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorCustomDropdown from '@/components/elements/CustomDropdown/ColorCustomDropdown.vue'
import SizeCustomDropdown from '@/components/elements/CustomDropdown/SizeCustomDropdown.vue'
import { Button } from '@/components/ui/button'
import type { ColorProductInterface, ProductInterface } from '@/lib/interfaces/product'
import { Heart, Minus, Plus } from 'lucide-vue-next'
import { ref } from 'vue'

const props = defineProps<{
  product: ProductInterface
}>()

const currentColorProduct = ref<ColorProductInterface>(props.product.colors[0])
const onClickColor = (color: ColorProductInterface) => {
  currentColorProduct.value = color
}

const currentSizeProduct = ref<number>(props.product.sizes[0])
const onClickSize = (size: number) => {
  currentSizeProduct.value = size
}
</script>
