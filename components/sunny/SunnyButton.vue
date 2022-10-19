<template>
  <button class="button sunny-cursor">
    <slot />
  </button>
</template>

<style scoped>
.button {
  @apply hover:after:left-0 hover:after:top-0 relative outline-none border-2 border-black bg-transparent select-none min-w-max py-1 px-3 my-2;
}

.button:after {
  @apply from-yellow-400/70 to-yellow-300/70 bg-gradient-to-r w-full -z-[1] absolute h-full top-1 left-1 duration-200 content-[''];
}
</style>
