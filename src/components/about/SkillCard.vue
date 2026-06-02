<template>
  <div
    class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 sm:rounded-3xl sm:p-6 lg:p-8"
  >
    <!-- GLOW EFFECT -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 opacity-0 transition duration-300 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 group-hover:opacity-100"
    ></div>

    <!-- CONTENT -->
    <div class="relative z-10">
      <!-- ICON -->
      <div
        class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20 sm:mb-6 sm:h-16 sm:w-16"
      >
        <i
          :class="[
            skill.icon,
            'text-2xl text-cyan-400 transition duration-300 group-hover:rotate-6 sm:text-3xl',
          ]"
        ></i>
      </div>

      <!-- TITLE -->
      <h3 class="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
        {{ skill.title }}
      </h3>

      <!-- DESCRIPTION -->
      <p class="text-sm leading-7 text-slate-400 sm:text-base">
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
