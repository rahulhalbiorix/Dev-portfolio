<template>
  <div class="relative">
    <!-- LINE -->
    <div class="absolute left-4 top-0 hidden h-full w-[2px] bg-cyan-500/30 md:block"></div>

    <!-- ITEMS -->
    <div
      v-for="experience in experiences"
      :key="experience.company"
      class="relative mb-16 md:pl-16"
    >
      <!-- DOT -->
      <div
        class="absolute left-0 top-2 hidden h-8 w-8 rounded-full border-4 border-slate-950 bg-cyan-500 md:block"
      ></div>

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
