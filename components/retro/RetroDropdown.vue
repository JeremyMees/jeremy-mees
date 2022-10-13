<script setup>
const theme = useTheme()
const isOpen = ref(false)

function selectedOption(value) {
  if (theme.active.value === value) return
  theme.setActiveTheme(value)
  isOpen.value = false
}
</script>

<template>
  <button v-click-outside="() => (isOpen = false)" class="select relative">
    <div class="flex flex-row items-center mx-auto gap-x-4" @click="isOpen = !isOpen">
      <div>Wijzig thema</div>
    </div>
    <div
      class="bg-red-500 flex flex-col absolute w-full left-0 top-5 select !p-0 !text-left"
      :class="{ hidden: !isOpen }"
    >
      <div
        v-for="option in theme.options.value"
        :key="option"
        class="hover:border-2 border-black p-2"
        :class="{
          'bg-gray-400/20': option === theme.active.value,
        }"
        @click="selectedOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </button>
</template>

<style scoped>
.select {
  border-image: url('/button.png') 30 stretch;
  border-style: solid;
  border-width: 5.5px;
  @apply bg-white text-black active:bg-black active:text-white font-bold duration-200 rounded ease-in-out cursor-pointer text-[25px] leading-[0] min-h-[20px] min-w-[59px] px-5 py-2 text-center;
}
</style>
