<template>
  <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
    <!-- HEADER -->
    <div class="mb-10">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">Contact</p>

      <h2 class="text-4xl font-bold text-white">Contact Information</h2>

      <p class="mt-4 leading-7 text-slate-400">
        Feel free to reach out for collaboration, freelance work or frontend opportunities.
      </p>
    </div>

    <!-- CONTACT ITEMS -->
    <div class="space-y-5">
      <ContactInfoCard v-for="item in contactInfo" :key="item.title" :item="item" />
    </div>

    <!-- SOCIAL LINKS -->
    <div class="mt-12">
      <h3 class="mb-5 text-xl font-semibold text-white">Follow Me</h3>

      <div class="flex flex-wrap gap-4">
        <button
          v-for="link in socialLinks"
          :key="link.name"
          class="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10"
        >
          <i
            :class="[
              link.icon,
              'text-lg text-cyan-400 transition duration-300 group-hover:scale-110',
            ]"
          ></i>

          <span class="text-sm font-medium">
            {{ link.name }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactInfoCard from './ContactInfoCard.vue'

import { contactInfo, socialLinks } from '@/constants/contact'
</script>
