<script setup>
import { useContentStore } from '~/stores/content'

const content = useContentStore()
</script>

<template>
  <div class="min-h-screen overflow-y-auto no-scrollbar py-10 px-4">
    <div class="grid grid-cols-4 border-2 border-black">
      <AbsurdHeader class="col-span-4" />
      <div class="flex flex-col gap-1 col-span-4 md:col-span-2 border-t-2 md:border-r-2 p-4 border-black bg-orange-300">
        <p class="title-large underline">{{ content.title1 }}</p>
        <p class="title-large">{{ content.title2 }}</p>
        <p class="py-4 leading-4">
          {{ content.description }}
        </p>
        <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max">
          <AbsurdButton> {{ content.cta }} </AbsurdButton>
        </NuxtLink>
      </div>
      <AbsurdContactCard
        :name="content.name"
        :job="content.job"
        :aboutMe="content.aboutMe"
        class="col-span-4 md:col-span-2 border-t-2 border-black bg-white"
      />
      <AbsurdSocials
        :email="content.email"
        :number="content.number"
        :linkedinLink="content.linkedinLink"
        :appeelLink="content.appeelLink"
        class="col-span-4 border-black border-t-2"
      />
      <div class="sm:col-span-2 md:col-span-1 col-span-4 p-4 bg-emerald-300 w-full h-full border-black sm:border-r-2">
        <nuxt-img
          src="/03_fHF60gBVx.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666190351822"
          alt="illustration of my face"
          loading="lazy"
          width="400"
          height="400"
          quality="90"
          format="webp"
          provider="imagekit"
          class="w-full h-full object-contain"
        />
      </div>
      <AbsurdListItem
        v-for="(listItem, index) in content.list"
        :key="listItem.title"
        :title="listItem.title"
        :text="listItem.text"
        :number="index + 1"
        class="sm:col-span-2 md:col-span-1 col-span-4 border-black"
        :class="{
          'bg-violet-300 md:border-r-2 border-t-2 sm:border-t-0': index === 0,
          'bg-white sm:border-r-2 border-t-2 md:border-t-0': index === 1,
          'bg-orange-300 border-t-2 md:border-t-0': index === 2,
        }"
      />
      <div
        class="sm:col-span-2 md:col-span-3 col-span-4 p-4 bg-blue-300 border-black sm:border-r-2 border-t-2 flex flex-col gap-4 justify-center"
      >
        <p class="title">{{ content.ctaTitle }}</p>
        <p class="body-normal max-w-xl">{{ content.ctaText }}</p>
        <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max">
          <AbsurdButton> {{ content.cta }} </AbsurdButton>
        </NuxtLink>
      </div>
      <div class="sm:col-span-2 md:col-span-1 col-span-4 p-4 bg-red-300 w-full h-full border-black border-t-2">
        <nuxt-img
          src="/06_lvtaaW8iV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666192037556"
          alt="illustration of my face"
          loading="lazy"
          width="400"
          height="400"
          quality="90"
          format="webp"
          provider="imagekit"
          class="w-full h-full object-contain"
        />
      </div>
      <AbsurdFooter class="col-span-4 bg-yellow-300" />
    </div>
  </div>
</template>
