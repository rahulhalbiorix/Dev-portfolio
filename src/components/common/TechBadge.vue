<template>
  <div
    :class="[
      'absolute rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-2xl sm:p-4',
      position,
      animation,
    ]"
  >
    <img
      :src="icon"
      :alt="name"
      class="h-5 w-5 object-contain transition duration-300 hover:scale-125 hover:rotate-12 sm:h-8 sm:w-8"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  name: string
  position: string
  animation: string
}>()
</script>
