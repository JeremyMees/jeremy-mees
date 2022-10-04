<script setup>
import Linkedin from '~/assets/icons/linkedin.svg'
import Whatsapp from '~/assets/icons/whatsapp.svg'
import Email from '~/assets/icons/email.svg'
import Phone from '~/assets/icons/phone.svg'

defineProps({
  name: { type: String, required: true },
  job: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  linkedinLink: { type: String, required: true },
  aboutMe: { type: String, required: true },
  appeelLink: { type: String, required: true },
})
</script>

<template>
  <div
    class="default-shadow relative hover:scale-[1.05] border-lg duration-300 ease-in-out p-4 max-w-md w-full text-center bg-white"
  >
    <nuxt-img
      src="/Jeremy_37gNW-I-He.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664890846501"
      alt="illustration of my face"
      loading="lazy"
      width="80"
      height="80"
      quality="90"
      format="webp"
      provider="imagekit"
      class="mx-auto"
    />
    <p class="title-small">{{ name }}</p>
    <p class="body-small">{{ job }}</p>
    <div class="body-extra-small gap-1 flex flex-col py-2">
      <div v-for="text in aboutMe.split('|')" :key="text">
        {{ text.replace('Appeel.io.', '') }}
        <NuxtLink
          v-if="text.includes('Appeel.io')"
          :to="appeelLink"
          target="_blank"
          rel="noreferrer noopener"
          class="default-link curdefault-cursorsor"
          >Appeel.io</NuxtLink
        >
      </div>
    </div>
    <div class="flex flex-wrap gap-2 justify-center pt-2">
      <NuxtLink
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Whatsapp"
        :to="`https://wa.me/${number}`"
        class="bg-yellow-400/40 p-1 rounded relative hover:-translate-y-1 duration-300 ease-in-out default-cursor"
      >
        <Whatsapp class="w-4 h-4" />
      </NuxtLink>
      <NuxtLink
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Linkedin"
        :to="linkedinLink"
        class="bg-yellow-400/40 p-1 rounded relative hover:-translate-y-1 duration-300 ease-in-out default-cursor"
      >
        <Linkedin class="w-4 h-4" />
      </NuxtLink>
      <NuxtLink
        rel="noreferrer noopener"
        :to="`mailto:${email}`"
        aria-label="Email"
        class="bg-yellow-400/40 p-1 rounded relative hover:-translate-y-1 duration-300 ease-in-out default-cursor"
      >
        <Email class="w-4 h-4" />
      </NuxtLink>
      <NuxtLink
        rel="noreferrer noopener"
        :to="`tel:${number}`"
        aria-label="Nummer"
        class="bg-yellow-400/40 p-1 rounded relative hover:-translate-y-1 duration-300 ease-in-out default-cursor"
      >
        <Phone class="w-4 h-4" />
      </NuxtLink>
    </div>
  </div>
</template>
