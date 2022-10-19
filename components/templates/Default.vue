<script setup>
import { gsap } from 'gsap'
import { useContentStore } from '~/stores/content'

const content = useContentStore()

onMounted(() => {
  gsap.to('#float1', { duration: 1.5, y: -10, ease: 'power1.easeInOut', delay: 0.5, repeat: -1, yoyo: true })
  gsap.to('#float2', { duration: 1.5, y: -10, ease: 'power1.easeInOut', delay: 1, repeat: -1, yoyo: true })
})
</script>

<template>
  <div class="min-h-screen overflow-y-auto no-scrollbar p-4">
    <DefaultHeader />
    <div class="flex flex-col gap-10 min-h-full py-8">
      <div class="flex flex-wrap justify-between gap-1">
        <div class="flex flex-col gap-1 max-w-xl">
          <p class="title-large gradient-text">{{ content.title1 }}</p>
          <p class="title-large">{{ content.title2 }}</p>
          <p class="pt-4 body-normal">
            {{ content.description }}
          </p>
          <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max default-cursor">
            <DefaultButton> {{ content.cta }} </DefaultButton>
          </NuxtLink>
        </div>
        <nuxt-img
          id="float2"
          alt="ok hand"
          src="/ok_tIw6OC6Wb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664890846626"
          preload
          width="300"
          height="300"
          quality="90"
          format="webp"
          provider="imagekit"
          class="-rotate-[60deg] max-w-[300px] max-h-[300px] relative mx-auto aspect-square"
        />
      </div>
      <div class="flex flex-wrap-reverse justify-center xl:justify-between gap-4 items-center">
        <nuxt-img
          id="float1"
          alt="thumbs up hand"
          src="/thumb_d-bxD6Wg5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664890846671"
          loading="lazy"
          width="350"
          height="350"
          quality="90"
          format="webp"
          provider="imagekit"
          class="relative scale-x-[-1] aspect-square"
        />
        <DefaultContactCard
          :name="content.name"
          :job="content.job"
          :email="content.email"
          :number="content.number"
          :linkedinLink="content.linkedinLink"
          :aboutMe="content.aboutMe"
          :appeelLink="content.appeelLink"
          class="xl:mr-[200px]"
        />
      </div>
      <div class="flex flex-wrap justify-center pt-20">
        <DefaultListItem
          v-for="(listItem, index) in content.list"
          :key="listItem.title"
          :title="listItem.title"
          :text="listItem.text"
          :number="index + 1"
        />
      </div>
      <div class="max-w-xl flex flex-col gap-4 pt-10">
        <p class="title">{{ content.ctaTitle }}</p>
        <p class="body-normal max-w-xl">{{ content.ctaText }}</p>
        <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max default-cursor">
          <DefaultButton> {{ content.cta }} </DefaultButton>
        </NuxtLink>
      </div>
    </div>
    <DefaultFooter />
  </div>
</template>
