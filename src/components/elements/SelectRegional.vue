<template>
  <SelectInput
    v-model="selectedProvince"
    label="Province: *"
    name="province"
    :options="provinces"
    :required="required"
  />

  <SelectInput
    v-model="selectedRegency"
    label="Regency: *"
    name="regency"
    :options="regencies"
    :required="required"
    :disabled="!selectedProvince"
  />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import SelectInput from './SelectInput.vue'

const props = defineProps<{
  required?: boolean
}>()

const selectedProvince = ref('')
const selectedRegency = ref('')

const provinces = ref([])
const regencies = ref([])

const getProvinces = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_REGION_IDN_URL}/provinces.json`)
    const data = await response.json()
    provinces.value = data.map((province: any) => ({
      value: province.id,
      label: province.name
    }))
  } catch (error) {
    console.error(error)
  }
}

const getRegencies = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_REGION_IDN_URL}/regencies/${selectedProvince.value}.json`
    )
    const data = await response.json()
    regencies.value = data.map((city: any) => ({
      value: city.id,
      label: city.name
    }))
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getProvinces()
})

watch(selectedProvince, () => {
  getRegencies()
})
</script>
