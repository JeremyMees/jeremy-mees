<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  number: { type: Number, required: true },
})
</script>

<template>
  <div class="flex flex-col gap-6 p-4">
    <p class="title-large text-center">{{ number }}</p>
    <p class="title underline text-center">{{ title }}</p>
    <p>{{ text }}</p>
  </div>
</template>
