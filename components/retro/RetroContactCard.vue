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
  <div class="max-w-sm border-2 border-black">
    <div class="retro-header flex justify-center border-b-2 border-black">
      <div class="bg-white px-4 title-small font-bold">Over mij</div>
    </div>
    <div class="flex flex-col gap-1 p-2">
      <div class="flex gap-1 justify-between">
        <div class="flex flex-col gap-1">
          <p class="title-small">{{ name }}</p>
          <p>{{ job }}</p>
        </div>
        <nuxt-img
          src="/Jeremy_retro_zKYqEja0b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665479059084"
          alt="illustration of my face"
          loading="lazy"
          width="80"
          height="80"
          quality="90"
          format="webp"
          provider="imagekit"
          class="flip-horizontal"
        />
      </div>
      <div class="leading-4" v-for="text in aboutMe.split('|')" :key="text">
        {{ text.replace('Appeel.io.', '') }}
        <NuxtLink
          v-if="text.includes('Appeel.io')"
          :to="appeelLink"
          target="_blank"
          rel="noreferrer noopener"
          class="underline"
          >Appeel.io</NuxtLink
        >
      </div>
      <div class="flex gap-2 flex-wrap">
        <NuxtLink
          rel="noreferrer noopener"
          target="_blank"
          aria-label="Whatsapp"
          :to="`https://wa.me/${number}`"
          class="underline"
        >
          whatsapp
        </NuxtLink>
        <NuxtLink rel="noreferrer noopener" target="_blank" aria-label="Linkedin" :to="linkedinLink" class="underline">
          Linkedin
        </NuxtLink>
        <NuxtLink rel="noreferrer noopener" :to="`mailto:${email}`" aria-label="Email" class="underline">
          Email
        </NuxtLink>
        <NuxtLink rel="noreferrer noopener" :to="`tel:${number}`" aria-label="Nummer" class="underline">
          Phone
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
