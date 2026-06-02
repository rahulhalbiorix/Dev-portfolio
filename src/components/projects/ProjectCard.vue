<template>
  <div
    class="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:-translate-y-3 hover:border-cyan-400/30"
  >
    <!-- IMAGE -->
    <div
      class="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-6xl"
    >
      <img :src="defaultProjectImage" :alt="project.title" class="h-full w-full object-cover" />
    </div>

    <!-- CONTENT -->
    <div class="p-7">
      <!-- TOP -->
      <div class="mb-4 flex items-start justify-between">
        <h2 class="text-2xl font-bold text-white">
          {{ project.title }}
        </h2>

        <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
          {{ project.type }}
        </span>
      </div>

      <!-- DESCRIPTION -->
      <p class="mb-6 leading-7 text-slate-400">
        {{ project.description }}
      </p>

      <!-- TECH -->
      <div class="mb-8 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
        >
          {{ tech }}
        </span>
      </div>

      <!-- BUTTONS -->
      <div class="flex gap-4">
        <button
          class="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-cyan-600"
        >
          Live Demo
        </button>

        <button
          class="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
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
