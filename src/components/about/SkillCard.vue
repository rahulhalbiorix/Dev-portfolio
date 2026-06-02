<template>
  <div
    class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
  >
    <!-- GLOW EFFECT -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 transition duration-300 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 group-hover:opacity-100"
    ></div>

    <!-- CONTENT -->
    <div class="relative z-10">
      <!-- ICON -->
      <div
        class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20"
      >
        <i
          :class="[
            skill.icon,
            'text-3xl text-cyan-400 transition duration-300 group-hover:rotate-6',
          ]"
        ></i>
      </div>

      <!-- TITLE -->
      <h3 class="mb-4 text-2xl font-bold text-white">
        {{ skill.title }}
      </h3>

      <!-- DESCRIPTION -->
      <p class="leading-7 text-slate-400">
        {{ skill.description }}
      </p>
    </div>
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
