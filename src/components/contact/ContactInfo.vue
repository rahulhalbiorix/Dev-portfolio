<template>
  <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
    <h2 class="mb-8 text-3xl font-bold text-white">Contact Information</h2>

    <!-- ITEMS -->
    <div class="space-y-6">
      <ContactInfoCard v-for="item in contactInfo" :key="item.title" :item="item" />
    </div>

    <!-- SOCIAL -->
    <div class="mt-12">
      <h3 class="mb-5 text-xl font-semibold text-white">Follow Me</h3>

      <div class="flex gap-4">
        <button
          v-for="link in socialLinks"
          :key="link"
          class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
        >
          {{ link }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactInfoCard from './ContactInfoCard.vue'

import { contactInfo, socialLinks } from '@/constants/contact'
</script>
