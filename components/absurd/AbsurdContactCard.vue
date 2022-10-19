<script setup>
defineProps({
  name: { type: String, required: true },
  job: { type: String, required: true },
  aboutMe: { type: String, required: true },
})
</script>

<template>
  <div class="p-4">
    <div class="gap-1 flex items-center gap-4">
      <div>
        <p class="title-small">{{ name }}</p>
        <p class="">{{ job }}</p>
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
      />
    </div>
    <div class="gap-1 flex flex-col py-2">
      <div v-for="text in aboutMe.split('|')" :key="text">
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
    </div>
  </div>
</template>
