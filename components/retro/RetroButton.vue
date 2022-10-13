<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  border-image: url('/button.png') 30 stretch;
  border-style: solid;
  border-width: 5.5px;
  @apply bg-white text-black active:bg-black active:text-white font-bold duration-200 rounded ease-in-out cursor-pointer text-[25px] leading-[0] min-h-[20px] min-w-[59px] px-5 py-2 text-center;
}
</style>
