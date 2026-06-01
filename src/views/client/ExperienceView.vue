<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <ExperienceHero />

      <ExperienceTimeline :experiences="experiences" />

      <EducationSection :education="education" />

      <AppCTA
        :titles="[
          'Looking For A Frontend Developer?',
          'Need A Vue.js Developer?',
          'Hire Me For Your Next Project',
        ]"
        description="I'm open to frontend developer roles, freelance projects and collaborations."
        buttonText="Hire Me"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceHero from '@/components/experience/ExperienceHero.vue'
import ExperienceTimeline from '@/components/experience/ExperienceTimeline.vue'
import EducationSection from '@/components/experience/EducationSection.vue'
import AppCTA from '@/components/common/AppCTA.vue'

import { experiences, education } from '@/constants/experience'
</script>
