<script setup>
defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  number: { type: Number, required: true },
})
</script>

<template>
  <div class="flex gap-x-10 gap-y-4 mb-4 flex-wrap md:flex-nowrap">
    <div class="text-[8rem] leading-tight text-blobs w-full md:w-auto text-center md:text-left">
      {{ number }}
    </div>
    <div class="flex flex-col gap-2 p-10 max-w-xl glass">
      <p class="title-small text-blobs">
        {{ title }}
      </p>
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
