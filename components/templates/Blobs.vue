<script setup>
import { gsap } from 'gsap'
import { useContentStore } from '~/stores/content'

const content = useContentStore()
const ball = ref()
const pos = reactive({ x: 0, y: 0 })
const mouse = reactive({ x: pos.x, y: pos.y })
const speed = ref(0.35)

onMounted(() => {
  gsap.set('.ball', { xPercent: -50, yPercent: -50 })

  if (process.client) {
    pos.x = window.innerWidth / 2
    pos.y = window.innerHeight / 2
  }

  const xSet = gsap.quickSetter(ball.value, 'x', 'px')
  const ySet = gsap.quickSetter(ball.value, 'y', 'px')

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed.value, gsap.ticker.deltaRatio())

    pos.x += (mouse.x - pos.x) * dt
    pos.y += (mouse.y - pos.y) * dt
    xSet(pos.x)
    ySet(pos.y)
  })
})

function mouseMove(e) {
  mouse.x = e.x
  mouse.y = e.y
}
</script>

<template>
  <div class="min-h-screen overflow-y-auto no-scrollbar p-4 relative z-[1] flex flex-col gap-10" @mousemove="mouseMove">
    <BlobsHeader
      @mouseenter="gsap.to('.ball', { scale: 1.75, duration: 0.25 })"
      @mouseleave="gsap.to('.ball', { scale: 1 })"
    />
    <div
      class="title-large text-center my-[250px] mx-auto w-fit tracking-wider space-y-4"
      @mouseenter="gsap.to('.ball', { scale: 1.75, duration: 0.25 })"
      @mouseleave="gsap.to('.ball', { scale: 1 })"
    >
      <p>{{ content.title1 }}</p>
      <p>{{ content.title2 }}</p>
    </div>
    <div class="p-10 body-normal max-w-xl glass flex flex-col gap-4">
      <p>{{ content.description }}</p>
      <NuxtLink
        rel="noreferrer noopener"
        :to="`mailto:${content.email}`"
        class="max-w-max"
        @mouseenter="gsap.to('.ball', { scale: 1.75, duration: 0.25 })"
        @mouseleave="gsap.to('.ball', { scale: 1 })"
      >
        <BlobsButton class="self-end">{{ content.cta }} </BlobsButton>
      </NuxtLink>
    </div>
    <BlobsContactCard
      :name="content.name"
      :job="content.job"
      :email="content.email"
      :number="content.number"
      :linkedinLink="content.linkedinLink"
      :aboutMe="content.aboutMe"
      :appeelLink="content.appeelLink"
      class="self-end"
      @mouseenter="gsap.to('.ball', { scale: 1.75, duration: 0.25 })"
      @mouseleave="gsap.to('.ball', { scale: 1 })"
    />
    <div class="flex flex-col gap-4">
      <BlobsListItem
        v-for="(listItem, index) in content.list"
        :key="listItem.title"
        :title="listItem.title"
        :text="listItem.text"
        :number="index + 1"
      />
    </div>
    <div class="max-w-xl glass flex flex-col gap-4 p-10 self-end">
      <p class="title">{{ content.ctaTitle }}</p>
      <p class="body-normal max-w-xl">{{ content.ctaText }}</p>
      <NuxtLink
        rel="noreferrer noopener"
        :to="`mailto:${content.email}`"
        @mouseenter="gsap.to('.ball', { scale: 1.75, duration: 0.25 })"
        @mouseleave="gsap.to('.ball', { scale: 1 })"
      >
        <BlobsButton> {{ content.cta }} </BlobsButton>
      </NuxtLink>
    </div>
    <BlobsFooter />
    <div
      ref="ball"
      class="ball w-10 h-10 fixed top-0 left-0 bg-white/80 z-[20] pointer-events-none mix-blend-difference"
    />
  </div>
</template>

<style scoped>
.ball {
  border-radius: 30% 50% 20% 40%;
}
</style>
