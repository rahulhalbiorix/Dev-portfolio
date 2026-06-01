<template>
  <div
    class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:border-cyan-400/30"
  >
    <div class="mb-5 text-5xl">
      {{ skill.icon }}
    </div>

    <h3 class="mb-4 text-2xl font-semibold text-white">
      {{ skill.title }}
    </h3>

    <p class="leading-7 text-slate-400">
      {{ skill.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    title: string
    icon: string
    description: string
  }
}>()
</script>
