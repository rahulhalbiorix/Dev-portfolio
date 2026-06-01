<template>
  <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
