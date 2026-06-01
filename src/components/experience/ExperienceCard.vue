<template>
  <div
    class="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:border-cyan-400/30 hover:bg-white/10"
  >
    <!-- TOP -->
    <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 class="text-3xl font-bold text-white">
          {{ experience.role }}
        </h2>

        <p class="mt-2 text-lg text-cyan-400">
          {{ experience.company }}
        </p>
      </div>

      <div
        class="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300"
      >
        {{ experience.duration }}
      </div>
    </div>

    <!-- DESCRIPTION -->
    <p class="mb-8 leading-8 text-slate-400">
      {{ experience.description }}
    </p>

    <!-- RESPONSIBILITIES -->
    <div class="mb-8">
      <h3 class="mb-4 text-xl font-semibold text-white">Responsibilities</h3>

      <ul class="space-y-3">
        <li
          v-for="item in experience.responsibilities"
          :key="item"
          class="flex items-start gap-3 text-slate-300"
        >
          <span class="mt-1 text-cyan-400"> • </span>

          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <!-- TECH -->
    <div>
      <h3 class="mb-4 text-xl font-semibold text-white">Technologies</h3>

      <div class="flex flex-wrap gap-3">
        <span
          v-for="tech in experience.tech"
          :key="tech"
          class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  experience: {
    role: string
    company: string
    duration: string
    description: string
    responsibilities: string[]
    tech: string[]
  }
}>()
</script>
