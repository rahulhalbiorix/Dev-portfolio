<template>
  <section class="px-5 py-16 sm:px-6 lg:px-12 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- HEADING -->
      <div class="mb-14 text-center lg:mb-16">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
          Technologies
        </p>

        <h2 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Tech Stack</h2>

        <p class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
          Technologies and tools I use to build scalable, modern and high-performance web
          applications.
        </p>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        <TechCard v-for="tech in techStack" :key="tech.name" :name="tech.name" :icon="tech.icon" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechCard from './TechCard.vue'
import { techStack } from '@/constants/tech-stack'
</script>
