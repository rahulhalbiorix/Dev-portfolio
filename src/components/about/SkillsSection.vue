<template>
  <div class="mt-20 sm:mt-24 lg:mt-28">
    <!-- TITLE -->
    <div class="mb-12 text-center sm:mb-14">
      <p class="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
        Expertise
      </p>

      <h2 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">My Skills</h2>

      <p class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
        Technologies and tools I use to build scalable and modern web applications.
      </p>
    </div>

    <!-- GRID -->
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      <SkillCard v-for="skill in skills" :key="skill.title" :skill="skill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue'
import { skills } from '@/constants/about'
</script>
