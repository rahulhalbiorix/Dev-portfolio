<template>
  <div
    class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-8"
  >
    <!-- HEADER -->
    <div class="mb-8 sm:mb-10">
      <p class="mb-3 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
        Contact
      </p>

      <h2 class="text-3xl font-bold text-white sm:text-4xl">Contact Information</h2>

      <p class="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
        Feel free to reach out for collaboration, freelance work or frontend opportunities.
      </p>
    </div>

    <!-- CONTACT ITEMS -->
    <div class="space-y-4 sm:space-y-5">
      <ContactInfoCard v-for="item in contactInfo" :key="item.title" :item="item" />
    </div>

    <!-- SOCIAL LINKS -->
    <div class="mt-10 sm:mt-12">
      <h3 class="mb-5 text-lg font-semibold text-white sm:text-xl">Follow Me</h3>

      <div class="flex flex-wrap gap-3 sm:gap-4">
        <button
          v-for="link in socialLinks"
          :key="link.name"
          class="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-500/10 sm:gap-3 sm:rounded-2xl sm:px-5"
        >
          <i
            :class="[
              link.icon,
              'text-base text-cyan-400 transition duration-300 group-hover:scale-110 sm:text-lg',
            ]"
          ></i>

          <span class="text-xs font-medium sm:text-sm">
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
