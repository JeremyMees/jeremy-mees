<script setup>
const theme = useTheme()

function selectedOption(value) {
  if (theme.active.value === value) return
  theme.setActiveTheme(value)
  isOpen.value = false
}
</script>

<template>
  <div class="grid grid-cols-3 md:grid-cols-4">
    <div class="col-span-3 bg-red-300">
      <p class="text-center title-huge">JEREMY MEES</p>
    </div>
    <div
      class="col-span-3 bg-blue-300 flex justify-center md:col-span-1 border-t-2 md:border-t-0 md:border-l-2 min-h-full border-black flex-col p-4"
    >
      <p class="title font-bold text-center pb-4">THEME'S</p>
      <div class="flex justify-evenly flex-wrap gap-2">
        <div
          v-for="option in theme.options.value"
          :key="option"
          class="border-b-2 hover:border-black border-transparent cursor-pointer text-right"
          :class="{
            underline: option === theme.active.value,
          }"
          @click="selectedOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>
