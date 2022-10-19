<template>
  <div class="bg-transparent">
    <div class="blob-one" />
    <div class="blob-two" />
    <div class="blob-three" />
    <div class="blob-four" />
    <div class="blob-five" />
  </div>
</template>

<style scoped>
.blob-one {
  border-radius: 30% 50% 20% 40%;
  animation: transform 20s ease-in-out infinite both alternate, movement_one 40s ease-in-out infinite both;
  @apply bg-blobs h-[200px] w-[200px]  absolute left-3/4 top-10 opacity-70;
}

.blob-two {
  animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
  @apply bg-blobs w-[500px] h-[500px] -left-10 top-0 -rotate-180 absolute opacity-70;
}

.blob-three {
  animation: transform 20s ease-in-out infinite both alternate, movement_three 50s ease-in-out infinite both;
  @apply bg-blobs h-[350px] w-[350px] left-1/2 top-1/3 -rotate-90 absolute opacity-70;
}

.blob-four {
  animation: transform 20s ease-in-out infinite both alternate, movement_three 50s ease-in-out infinite both;
  @apply bg-blobs h-[700px] w-[700px] left-1/2 -bottom-[40rem] -rotate-90 absolute opacity-70;
}

.blob-five {
  animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
  @apply bg-blobs w-[200px] h-[200px] left-10 -bottom-[85rem] -rotate-180 absolute opacity-70;
}

@keyframes transform {
  0%,
  100% {
    border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
  }
  20% {
    border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
  }
  40% {
    border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
  }
  60% {
    border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
  }
  80% {
    border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
  }
}

@keyframes movement_one {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
  }
}

@keyframes movement_two {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
  }
}

@keyframes movement_three {
  0%,
  500% {
    transform: none;
  }
  50% {
    transform: translate(50%, 20%) rotate(10deg) scale(1.2);
  }
}
</style>
