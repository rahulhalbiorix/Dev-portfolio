<template>
  <div
    class="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 sm:rounded-[28px] sm:hover:-translate-y-3"
  >
    <!-- IMAGE -->
    <div class="relative overflow-hidden">
      <!-- OVERLAY -->
      <div
        class="absolute inset-0 z-10 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"
      ></div>

      <img
        :src="defaultProjectImage"
        :alt="project.title"
        class="h-48 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-52"
      />
    </div>

    <!-- CONTENT -->
    <div class="p-5 sm:p-7">
      <!-- TOP -->
      <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h2 class="text-xl font-bold text-white sm:text-2xl">
          {{ project.title }}
        </h2>

        <span class="w-fit rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
          {{ project.type }}
        </span>
      </div>

      <!-- DESCRIPTION -->
      <p class="mb-5 text-sm leading-7 text-slate-400 sm:mb-6 sm:text-base">
        {{ project.description }}
      </p>

      <!-- TECH -->
      <div class="mb-6 flex flex-wrap gap-2 sm:mb-8">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:text-sm"
        >
          {{ tech }}
        </span>
      </div>

      <!-- BUTTONS -->
      <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <button
          class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-cyan-600"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>

          Live Demo
        </button>

        <button
          class="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
        >
          <i class="fa-brands fa-github"></i>

          GitHub
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import defaultProjectImage from '@/assets/project-img/05b05941-3d8e-40f0-a4e7-9bf77bde4bdd.png'

defineProps<{
  project: {
    title: string
    type: string
    description: string
    tech: string[]
  }
}>()
</script>
