<script setup>
useHead({
  title: 'DEV | jeremy',
  meta: [{ name: 'description', hid: 'description', content: 'Frontend developer in hart en nieren' }],
  htmlAttrs: { lang: 'nl' },
})

const theme = useTheme()

// onMounted(() => theme.setRandom())
</script>

<template>
  <main
    :class="{
      'theme-default p-4': theme.active.value === 'Default',
      'theme-retro font-retro-text p-4': theme.active.value === 'Retro',
      'theme-blobs bg-[#0A2463] text-white': theme.active.value === 'Blobs',
    }"
  >
    <BlobsShapes class="blob:block hidden" />
    <div class="max-w-[1800px] mx-auto def:default-cursor">
      <component :is="theme.active.value" />
    </div>
  </main>
</template>
