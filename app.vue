<script setup>
useHead({
  title: 'DEV | jeremy',
  meta: [{ name: 'description', hid: 'description', content: 'Frontend developer in hart en nieren' }],
  htmlAttrs: { lang: 'nl' },
})

const theme = useTheme()

onMounted(() => theme.setRandom())
</script>

<template>
  <main class="p-4" :class="{ 'theme-default': theme.active.value === 'Default' }">
    <div class="max-w-[1800px] mx-auto def:default-cursor">
      <Default v-if="theme.active.value === 'Default'" class="theme-default" />
      <Retro v-else-if="theme.active.value === 'Retro'" class="theme-retro font-retro-text" />
    </div>
  </main>
</template>
