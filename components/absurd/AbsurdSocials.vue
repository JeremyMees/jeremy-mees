<script setup>
import Linkedin from '~/assets/icons/linkedin.svg'
import Whatsapp from '~/assets/icons/whatsapp.svg'
import Email from '~/assets/icons/email.svg'
import Phone from '~/assets/icons/phone.svg'

defineProps({
  email: { type: String, required: true },
  number: { type: String, required: true },
  linkedinLink: { type: String, required: true },
  appeelLink: { type: String, required: true },
})
</script>

<template>
  <div class="grid grid-cols-4 border-black border-b-2">
    <NuxtLink
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Whatsapp"
      :to="`https://wa.me/${number}`"
      class="p-4 border-r-2 border-black bg-white"
    >
      <Whatsapp class="w-10 h-10" />
    </NuxtLink>
    <NuxtLink
      rel="noreferrer noopener"
      target="_blank"
      aria-label="Linkedin"
      :to="linkedinLink"
      class="p-4 border-r-2 border-black bg-indigo-300"
    >
      <Linkedin class="w-10 h-10" />
    </NuxtLink>
    <NuxtLink
      rel="noreferrer noopener"
      :to="`mailto:${email}`"
      aria-label="Email"
      class="p-4 border-r-2 border-black bg-yellow-300"
    >
      <Email class="w-10 h-10" />
    </NuxtLink>
    <NuxtLink rel="noreferrer noopener" :to="`tel:${number}`" aria-label="Nummer" class="p-4 bg-green-300">
      <Phone class="w-10 h-10" />
    </NuxtLink>
  </div>
</template>
