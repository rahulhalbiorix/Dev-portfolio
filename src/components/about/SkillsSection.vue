<template>
  <div class="mt-28">
    <!-- TITLE -->
    <div class="mb-14 text-center">
      <h2 class="text-4xl font-bold text-white">My Skills</h2>

      <p class="mt-4 text-slate-400">Technologies and tools I work with</p>
    </div>

    <!-- GRID -->
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <SkillCard v-for="skill in skills" :key="skill.title" :skill="skill" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillCard from './SkillCard.vue'
import { skills } from '@/constants/about'
</script>
