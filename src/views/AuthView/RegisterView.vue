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
      <FormInput type="email" label="Email: *" name="email" required />

      <SelectInput
        v-model="selectedProvince"
        label="Province: *"
        name="province"
        :options="provinces"
        required
      />

      <SelectInput
        v-model="selectedRegency"
        label="Regency: *"
        name="regency"
        :options="regencies"
        required
        :disabled="!selectedProvince"
      />

      <SelectInput
        label="I Am Celebrating: *"
        name="celebrating"
        :options="celebrateOption"
        required
      />
      <SelectInput label="Gender: *" name="gender" :options="genderOption" required />

      <SelectInput
        label="Marital Status: *"
        name="maritalStatus"
        :options="maritalStatusOption"
        required
      />

      <FormInput type="password" label="Password: *" name="password" required />
      <FormInput type="password" label="Confirm Password: *" name="confirmPassword" required />

      <CheckboxInput
        id="receive-email"
        label="Yes, I would like to receive email and promotions updates from Everbest Group"
        label-class="text-xs"
      />

      <CheckboxInput
        id="agree-TNC"
        label=" I agree to the terms and conditions, privacy policy as per the Everbest Group *"
        label-class="text-xs"
        required
      />

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
import CheckboxInput from '@/components/elements/CheckboxInput.vue'
import SelectInput from '@/components/elements/SelectInput.vue'
import DatePicker from '@/components/elements/DatePicker.vue'
import FormInput from '@/components/elements/FormInput.vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { onMounted, ref, watch } from 'vue'

const selectedProvince = ref('')
const selectedRegency = ref('')

const provinces = ref([])
const regencies = ref([])

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

const celebrateOption = [
  {
    label: 'Christmas',
    value: 'christmas'
  },
  {
    label: 'Idul Fitri',
    value: 'idul-fitri'
  },
  {
    label: 'Nyepi',
    value: 'nyepi'
  },
  {
    label: 'Waisak',
    value: 'waisak'
  }
]

const maritalStatusOption = [
  {
    label: 'Christmas',
    value: 'christmas'
  },
  {
    label: 'Idul Fitri',
    value: 'idul-fitri'
  },
  {
    label: 'Nyepi',
    value: 'nyepi'
  },
  {
    label: 'Waisak',
    value: 'waisak'
  }
]

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

const onSubmitRegister = (e: Event) => {
  e.preventDefault()
}
</script>

<style scoped lang="postcss">
.form-register label {
  @apply mb-1 text-sm;
}
</style>
