<script setup>
defineEmits(['mouseenter', 'mouseleave'])
</script>

<template>
  <div class="flex flex-wrap gap-2 justify-between items-center glass px-4 py-2">
    <div class="title-small !font-blobs-title" @mouseenter="$emit('mouseenter')" @mouseleave="$emit('mouseleave')">
      Jeremy Mees
    </div>
    <Dropdown @mouseenter="$emit('mouseenter')" @mouseleave="$emit('mouseleave')" />
  </div>
</template>
