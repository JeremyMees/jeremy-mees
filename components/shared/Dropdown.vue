<script setup>
import ChevronDown from '~/assets/icons/chevron-down.svg'

const theme = useTheme()

const isOpen = ref(false)

function selectedOption(value) {
  if (theme.active.value === value) return
  theme.setActiveTheme(value)
  isOpen.value = false
}
</script>

<template>
  <div
    v-click-outside="() => (isOpen = false)"
    class="sun:font-title sun:border-2 sun:border-black relative z-10 blob:cursor-pointer"
  >
    <div class="flex flex-row items-center p-2 mx-auto gap-x-4 group" @click="isOpen = !isOpen">
      <div>Wijzig thema</div>
      <ChevronDown class="relative duration-200 top-1 h-4 w-4 stroke-2" :class="{ 'rotate-180': isOpen }" />
    </div>
    <div
      class="sun:bg-white flex flex-col absolute w-full sun:border-2 sun:border-black blob:glass"
      :class="{ hidden: !isOpen }"
    >
      <div
        v-for="option in theme.options.value"
        :key="option"
        class="sun:hover:!bg-yellow-400/20 p-2"
        :class="{
          'sun:bg-yellow-400/40 blob:text-blobs': option === theme.active.value,
        }"
        @click="selectedOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
