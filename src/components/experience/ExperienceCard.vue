<template>
  <div
    class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 sm:rounded-[28px] sm:p-6 lg:p-8"
  >
    <!-- TOP -->
    <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <!-- ROLE -->
        <h2 class="text-2xl font-bold text-white sm:text-3xl">
          {{ experience.role }}
        </h2>

        <!-- COMPANY -->
        <p class="mt-2 text-base text-cyan-400 sm:text-lg">
          {{ experience.company }}
        </p>
      </div>

      <!-- DURATION -->
      <div
        class="w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:px-5 sm:text-sm"
      >
        {{ experience.duration }}
      </div>
    </div>

    <!-- DESCRIPTION -->
    <p class="mb-6 text-sm leading-7 text-slate-400 sm:mb-8 sm:text-base sm:leading-8">
      {{ experience.description }}
    </p>

    <!-- RESPONSIBILITIES -->
    <div class="mb-6 sm:mb-8">
      <h3 class="mb-4 text-lg font-semibold text-white sm:text-xl">Responsibilities</h3>

      <ul class="space-y-3">
        <li
          v-for="item in experience.responsibilities"
          :key="item"
          class="flex items-start gap-3 text-sm text-slate-300 sm:text-base"
        >
          <span class="mt-1 text-cyan-400">•</span>

          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <!-- TECH -->
    <div>
      <h3 class="mb-4 text-lg font-semibold text-white sm:text-xl">Technologies</h3>

      <div class="flex flex-wrap gap-2 sm:gap-3">
        <span
          v-for="tech in experience.tech"
          :key="tech"
          class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
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
