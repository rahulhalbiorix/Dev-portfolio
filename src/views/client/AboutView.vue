<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <AboutHero />

      <AboutStats />

      <SkillsSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutHero from '@/components/about/AboutHero.vue'
import AboutStats from '@/components/about/AboutStats.vue'
import SkillsSection from '@/components/about/SkillsSection.vue'
</script>
