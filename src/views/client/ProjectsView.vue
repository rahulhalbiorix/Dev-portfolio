<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <ProjectsHero />

      <ProjectFilters :categories="categories" />

      <ProjectGrid :projects="projects" />

      <AppCTA
        :titles="[
          'Want To Work Together?',
          'Need A Portfolio Website?',
          'Let’s Build Your Next Project',
        ]"
        description="I'm available for freelance projects and frontend development opportunities."
        buttonText="Contact Me"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectsHero from '@/components/projects/ProjectsHero.vue'
import ProjectFilters from '@/components/projects/ProjectFilters.vue'
import ProjectGrid from '@/components/projects/ProjectGrid.vue'
import AppCTA from '@/components/common/AppCTA.vue'

import { categories, projects } from '@/constants/projects'
</script>
