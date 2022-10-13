<script setup>
import { useContentStore } from '~/stores/content'

const content = useContentStore()
</script>

<template>
  <div class="text-xl space-y-8">
    <RetroHeader />
    <div class="flex flex-wrap-reverse gap-2 items-end justify-between">
      <div class="flex flex-col gap-1 max-w-xl">
        <p class="title-large underline">{{ content.title1 }}</p>
        <p class="title-large">{{ content.title2 }}</p>
        <p class="py-4 leading-4">
          {{ content.description }}
        </p>
        <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max default-cursor">
          <RetroButton> Neem contact op </RetroButton>
        </NuxtLink>
      </div>
      <RetroDropdown />
    </div>
    <div class="flex flex-wrap-reverse gap-4 items-center justify-evenly">
      <RetroContactCard
        :name="content.name"
        :job="content.job"
        :email="content.email"
        :number="content.number"
        :linkedinLink="content.linkedinLink"
        :aboutMe="content.aboutMe"
        :appeelLink="content.appeelLink"
      />
      <nuxt-img
        src="/Hello_GYQ0lupmF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665667286739"
        alt="illustration of my face"
        loading="lazy"
        width="400"
        height="300"
        quality="90"
        format="webp"
        provider="imagekit"
        class="flip-horizontal"
      />
    </div>
    <ol>
      <li v-for="(listItem, index) in content.list" :key="listItem.title" class="flex gap-2 mb-4">
        <div class="title-small">{{ index + 1 }}.</div>
        <div class="flex flex-col">
          <p class="title-small">
            {{ listItem.title }}
          </p>
          <p class="">
            {{ listItem.text }}
          </p>
        </div>
      </li>
    </ol>
    <div class="max-w-xl flex flex-col gap-4">
      <p class="title">{{ content.ctaTitle }}</p>
      <p class="body-normal max-w-xl">{{ content.ctaText }}</p>
      <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max default-cursor">
        <RetroButton> Neem contact op</RetroButton>
      </NuxtLink>
    </div>
    <RetroFooter />
  </div>
</template>
