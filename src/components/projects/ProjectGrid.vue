<template>
  <div class="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3 xl:gap-8">
    <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
  </div>
</template>

<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'

defineProps<{
  projects: {
    title: string
    type: string
    description: string
    tech: string[]
  }[]
}>()
</script>
