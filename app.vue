<script setup>
import { useContentStore } from '~/stores/content'

const content = useContentStore()
const theme = ref('Default')
</script>

<template>
  <main class="p-4" :class="{ 'theme-default': theme === 'Default' }">
    <div class="max-w-[1800px] mx-auto def:default-cursor">
      <section v-if="theme === 'Default'" class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-2 justify-between items-center default-shadow px-4 py-2">
          <div class="title-small">Jeremy Mees</div>
          <Dropdown v-model="theme" :options="content.themes" class="" />
        </div>
        <Default />
        <DefaultFooter class="my-4" />
      </section>
      <section v-else-if="theme === 'Test'">other theme</section>
    </div>
  </main>
</template>
