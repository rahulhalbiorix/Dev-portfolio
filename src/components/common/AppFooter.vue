<template>
  <footer class="border-t border-white/10 bg-[#0b1120] px-5 py-14 sm:px-6 lg:px-12 lg:py-16">
    <!-- TOP SECTION -->
    <div class="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
      <!-- BRAND -->
      <div class="sm:col-span-2 lg:col-span-1">
        <h2
          class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          Rahul.dev
        </h2>

        <p class="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
          Frontend developer focused on building scalable, modern and high-performance web
          applications.
        </p>
      </div>

      <!-- QUICK LINKS -->
      <div>
        <h3 class="mb-5 text-lg font-semibold text-white">Quick Links</h3>

        <ul class="space-y-3">
          <li v-for="route in clientRoutes" :key="route.path">
            <RouterLink
              :to="route.path"
              class="text-sm text-slate-400 transition duration-300 hover:text-cyan-400 sm:text-base"
            >
              {{ route.name }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- SOCIAL LINKS -->
      <div>
        <h3 class="mb-5 text-lg font-semibold text-white">Social Links</h3>

        <div class="flex flex-col gap-4">
          <a
            href="#"
            class="group flex items-center gap-3 text-sm text-slate-400 transition duration-300 hover:text-cyan-400 sm:text-base"
          >
            <i
              class="fa-brands fa-github text-lg transition duration-300 group-hover:scale-110"
            ></i>

            GitHub
          </a>

          <a
            href="#"
            class="group flex items-center gap-3 text-sm text-slate-400 transition duration-300 hover:text-cyan-400 sm:text-base"
          >
            <i
              class="fa-brands fa-linkedin text-lg transition duration-300 group-hover:scale-110"
            ></i>

            LinkedIn
          </a>

          <a
            href="#"
            class="group flex items-center gap-3 text-sm text-slate-400 transition duration-300 hover:text-cyan-400 sm:text-base"
          >
            <i
              class="fa-brands fa-x-twitter text-lg transition duration-300 group-hover:scale-110"
            ></i>

            Twitter
          </a>
        </div>
      </div>

      <!-- CONTACT -->
      <div>
        <h3 class="mb-5 text-lg font-semibold text-white">Contact</h3>

        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-location-dot mt-1 text-cyan-400"></i>

            <p class="text-sm text-slate-400 sm:text-base">Ahmedabad, India</p>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-envelope mt-1 text-cyan-400"></i>

            <p class="text-sm text-slate-400 sm:text-base">rahul@example.com</p>
          </div>

          <div class="flex items-start gap-3">
            <i class="fa-solid fa-phone mt-1 text-cyan-400"></i>

            <p class="text-sm text-slate-400 sm:text-base">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM -->
    <div
      class="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-slate-500 sm:text-sm md:flex-row md:text-left"
    >
      <p>© 2026 Rahul.dev. All rights reserved.</p>

      <p>Built with Vue.js & Tailwind CSS</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { clientRoutes } from '@/router/clientRoute'
</script>
