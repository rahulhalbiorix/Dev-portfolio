<template>
  <footer class="border-t border-white/10 bg-[#0b1120] px-6 py-16">
    <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">
      <!-- BRAND -->
      <div>
        <h2 class="text-3xl font-bold text-white">Rahul.dev</h2>

        <p class="mt-5 leading-7 text-slate-400">
          Frontend developer focused on building scalable, modern and high-performance web
          applications.
        </p>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="mb-5 text-lg font-semibold text-white">Quick Links</h3>

        <ul class="space-y-3">
          <li v-for="route in clientRoutes" :key="route.path">
            <RouterLink :to="route.path" class="text-slate-400 transition hover:text-cyan-400">
              {{ route.name }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- SOCIAL LINKS -->
      <div>
        <h3 class="mb-5 text-lg font-semibold text-white">Social Links</h3>

        <div class="flex flex-col gap-3">
          <a href="#" class="text-slate-400 transition hover:text-cyan-400"> GitHub </a>

          <a href="#" class="text-slate-400 transition hover:text-cyan-400"> LinkedIn </a>

          <a href="#" class="text-slate-400 transition hover:text-cyan-400"> Twitter </a>
        </div>
      </div>

      <!-- CONTACT -->
      <div>
        <h3 class="mb-5 text-lg font-semibold text-white">Contact</h3>

        <div class="space-y-3 text-slate-400">
          <p>Ahmedabad, India</p>
          <p>rahul@example.com</p>
          <p>+91 98765 43210</p>
        </div>
      </div>
    </div>

    <!-- BOTTOM -->
    <div
      class="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row"
    >
      <p>© 2026 Rahul.dev. All rights reserved.</p>

      <p>Built with Vue.js & Tailwind CSS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { clientRoutes } from '@/router/clientRoute'
</script>
