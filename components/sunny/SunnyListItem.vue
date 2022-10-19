<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  number: { type: Number, required: true },
})
</script>

<template>
  <div class="text-center max-w-sm w-full min-h-[200px] relative p-2 pt-6">
    <div class="flex flex-col gap-2">
      <p class="title">{{ title }}</p>
      <p>{{ text }}</p>
    </div>
    <div
      class="absolute left-1/2 -translate-x-1/2 font-bold -top-5 text-[12rem] leading-none text-yellow-400/40 z-[-1]"
    >
      {{ number }}
    </div>
  </div>
</template>
