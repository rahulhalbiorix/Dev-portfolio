<template>
  <div
    :class="[
      'absolute rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-[0_0_30px_rgba(34,211,238,0.2)] backdrop-blur-2xl',
      position,
      animation,
    ]"
  >
    <img
      :src="icon"
      :alt="name"
      class="h-8 w-8 object-contain transition duration-300 hover:scale-125 hover:rotate-12"
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
