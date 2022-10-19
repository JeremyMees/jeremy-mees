<script setup>
import Linkedin from '~/assets/icons/linkedin.svg'
import Whatsapp from '~/assets/icons/whatsapp.svg'
import Email from '~/assets/icons/email.svg'
import Phone from '~/assets/icons/phone.svg'

defineEmits(['mouseenter', 'mouseleave'])

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
  <div class="max-w-xl glass p-10 space-y-5">
    <div class="flex justify-center items-center flex-wrap gap-4">
      <nuxt-img
        src="/Jeremy_blobs_w7CLNLogd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666175373177"
        alt="illustration of my face"
        loading="lazy"
        width="80"
        height="80"
        quality="90"
        format="webp"
        provider="imagekit"
      />
      <div class="flex flex-col gap-1">
        <p class="title-small !font-blobs-title">{{ name }}</p>
        <p class="body-small">{{ job }}</p>
      </div>
    </div>
    <div class="body-extra-small gap-1 flex flex-col py-2 text-center">
      <div v-for="text in aboutMe.split('|')" :key="text">
        {{ text.replace('Appeel.io.', '') }}
        <NuxtLink
          v-if="text.includes('Appeel.io')"
          :to="appeelLink"
          target="_blank"
          rel="noreferrer noopener"
          class="text-blobs"
          @mouseenter="$emit('mouseenter')"
          @mouseleave="$emit('mouseleave')"
          >Appeel.io</NuxtLink
        >
      </div>
    </div>
    <div class="flex flex-wrap gap-4 justify-center pt-2">
      <NuxtLink
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Whatsapp"
        :to="`https://wa.me/${number}`"
        class="relative hover:-translate-y-1 duration-300 ease-in-out cursor-pointer fill-blobs"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
      >
        <Whatsapp class="w-6 h-6" />
      </NuxtLink>
      <NuxtLink
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Linkedin"
        :to="linkedinLink"
        class="relative hover:-translate-y-1 duration-300 ease-in-out cursor-pointer fill-blobs"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
      >
        <Linkedin class="w-6 h-6" />
      </NuxtLink>
      <NuxtLink
        rel="noreferrer noopener"
        :to="`mailto:${email}`"
        aria-label="Email"
        class="relative hover:-translate-y-1 duration-300 ease-in-out cursor-pointer fill-blobs"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
      >
        <Email class="w-6 h-6" />
      </NuxtLink>
      <NuxtLink
        rel="noreferrer noopener"
        :to="`tel:${number}`"
        aria-label="Nummer"
        class="relative hover:-translate-y-1 duration-300 ease-in-out cursor-pointer fill-blobs"
        @mouseenter="$emit('mouseenter')"
        @mouseleave="$emit('mouseleave')"
      >
        <Phone class="w-6 h-6" />
      </NuxtLink>
    </div>
  </div>
</template>
