<template>
  <div class="relative">
    <!-- TIMELINE LINE -->
    <div class="absolute left-3 top-0 h-full w-[2px] bg-cyan-500/30 sm:left-4"></div>

    <!-- ITEMS -->
    <div
      v-for="experience in experiences"
      :key="experience.company"
      class="relative mb-8 pl-10 sm:mb-12 sm:pl-14 lg:mb-16 lg:pl-16"
    >
      <!-- DOT -->
      <div
        class="absolute left-0 top-3 h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-500 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
      ></div>

      <!-- CARD -->
      <ExperienceCard :experience="experience" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceCard from './ExperienceCard.vue'

defineProps<{
  experiences: {
    role: string
    company: string
    duration: string
    description: string
    responsibilities: string[]
    tech: string[]
  }[]
}>()
</script>
