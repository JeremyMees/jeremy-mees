<script setup>
import ChevronDown from '@/assets/icons/chevron-down.svg'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  options: { type: Array, required: true },
  modelValue: { type: String, required: true },
})

const isOpen = ref(false)

function selectedOption(value) {
  if (props.modelValue === value) return
  emit('update:modelValue', value)
  isOpen.value = false
}
</script>

<template>
  <div v-click-outside="() => (isOpen = false)" class="def:font-title def:border-2 def:border-black relative">
    <div class="flex flex-row items-center p-2 mx-auto gap-x-4 group" @click="isOpen = !isOpen">
      <div>Wijzig thema</div>
      <ChevronDown class="relative duration-200 top-1 h-4 w-4 stroke-2" :class="{ 'rotate-180': isOpen }" />
    </div>
    <div class="bg-white flex flex-col absolute w-full def:border-2 def:border-black" :class="{ hidden: !isOpen }">
      <div
        v-for="option in options"
        :key="option"
        class="def:hover:!bg-yellow-400/20 p-2"
        :class="{
          'def:bg-yellow-400/40': option === modelValue,
        }"
        @click="selectedOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
