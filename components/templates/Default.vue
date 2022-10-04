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
  <div class="min-h-screen overflow-y-auto no-scrollbar">
    <div class="flex flex-col gap-10 min-h-full">
      <div class="flex flex-wrap justify-between gap-1">
        <div class="flex flex-col gap-1 max-w-xl">
          <p class="title-large gradient-text">De ideale boost</p>
          <p class="title-large">Die jouw bedrijf verdiend</p>
          <p class="pt-4 body-normal">
            Als Creatieve Developer combineer ik strakke designs met goed geschreven code om sterke producten te
            ontwikkelen. Daardoor kunnen mijn klanten altijd goede resultaten verwachten van een samenwerking met mij.
          </p>
          <NuxtLink rel="noreferrer noopener" :to="`mailto:${content.email}`" class="max-w-max default-cursor">
            <DefaultButton />
          </NuxtLink>
        </div>
        <img id="float2" src="/images/ok.png" class="w-[300px] h-[300px] -rotate-[60deg] relative mx-auto" />
      </div>
      <div class="flex flex-wrap-reverse justify-center xl:justify-between gap-4 items-center">
        <img id="float1" src="/images/thumb.png" class="w-[350px] h-[350px] relative scale-x-[-1]" />
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
          <DefaultButton />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
