<template>
  <div>
    <HeroSection />
    <TechStack />
    <FeaturedProjects />
    <AppCTA
      :titles="['Let’s Work Together', 'Build Modern Applications', 'Need A Frontend Developer?']"
      description="I'm always interested in new opportunities, freelance projects and collaborations."
      buttonText="Get In Touch"
    />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/home/HeroSection.vue'
import TechStack from '@/components/home/TechStack.vue'
import FeaturedProjects from '@/components/home/FeaturedProjects.vue'
import AppCTA from '@/components/common/AppCTA.vue'
</script>
