<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <ContactHero />

      <div class="grid gap-12 lg:grid-cols-2">
        <ContactInfo />

        <ContactForm />
      </div>

      <AppCTA
        :titles="[
          'Ready To Build Something Amazing?',
          'Let’s Create Something Modern',
          'Start Your Next Project Today',
        ]"
        description="Let's create modern and scalable web applications together."
        buttonText="Start Project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactHero from '@/components/contact/ContactHero.vue'
import ContactInfo from '@/components/contact/ContactInfo.vue'
import ContactForm from '@/components/contact/ContactForm.vue'
import AppCTA from '@/components/common/AppCTA.vue'
</script>
