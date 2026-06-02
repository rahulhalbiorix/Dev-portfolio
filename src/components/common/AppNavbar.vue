<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
    <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6">
      <!-- LOGO -->
      <RouterLink
        to="/"
        class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent"
      >
        Rahul.dev
      </RouterLink>

      <!-- DESKTOP NAV -->
      <nav class="hidden items-center gap-2 md:flex">
        <RouterLink
          v-for="route in clientRoutes"
          :key="route.path"
          :to="{ name: route.name }"
          class="group relative rounded-xl px-5 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
          active-class="active-nav-link"
        >
          <!-- TEXT -->
          <span class="relative z-10">
            {{ route.name }}
          </span>

          <!-- UNDERLINE -->
          <span
            class="nav-line absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300"
          ></span>
        </RouterLink>
      </nav>

      <!-- MOBILE MENU BUTTON -->
      <button
        class="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 md:hidden"
        @click="toggleMobileMenu"
      >
        <i
          :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          class="text-lg transition duration-300 group-hover:scale-110"
        ></i>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="absolute left-0 top-full w-full border-t border-white/10 bg-[#0f172a]/95 px-5 py-6 backdrop-blur-2xl md:hidden"
      >
        <nav class="flex flex-col gap-3">
          <RouterLink
            v-for="route in clientRoutes"
            :key="route.path"
            :to="{ name: route.name }"
            class="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-5 py-4 text-base font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/10 hover:text-white"
            active-class="mobile-active-nav-link"
            @click="closeMobileMenu"
          >
            <!-- TEXT -->
            <span>
              {{ route.name }}
            </span>

            <!-- ICON -->
            <i
              class="fa-solid fa-arrow-right text-xs opacity-40 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100"
            ></i>
          </RouterLink>
        </nav>

        <!-- OPTIONAL SOCIAL -->
        <div class="mt-6 flex items-center justify-center gap-5 border-t border-white/10 pt-5">
          <button
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <i class="fa-brands fa-github"></i>
          </button>

          <button
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </button>

          <button
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-slate-300 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { clientRoutes } from '@/router/clientRoute'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
/* MOBILE MENU */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* DESKTOP ACTIVE */
.active-nav-link {
  color: #22d3ee;
}

.active-nav-link .nav-line {
  width: 32px;
}

/* DESKTOP HOVER */
.group:hover .nav-line {
  width: 32px;
}

/* MOBILE ACTIVE */
.mobile-active-nav-link {
  border-color: rgba(34, 211, 238, 0.2);
  background: rgba(34, 211, 238, 0.08);
  color: #22d3ee;
}
</style>
