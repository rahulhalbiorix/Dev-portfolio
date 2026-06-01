<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <!-- HEADING -->
      <div class="mb-16 text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
          Technologies
        </p>

        <h2 class="text-4xl font-bold text-white lg:text-5xl">Tech Stack</h2>

        <p class="mt-6 text-lg text-slate-400">Technologies I work with</p>
      </div>

      <!-- GRID -->
      <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        <TechCard v-for="tech in techStack" :key="tech.name" :name="tech.name" :icon="tech.icon" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TechCard from './TechCard.vue'

import { techStack } from '@/constants/tech-stack'
</script>
