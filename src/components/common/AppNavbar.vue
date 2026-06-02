<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl">
    <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
      <!-- LOGO -->
      <RouterLink
        to="/"
        class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-bold tracking-wide text-transparent"
      >
        Rahul.dev
      </RouterLink>

      <!-- DESKTOP NAV -->
      <nav class="hidden items-center gap-3 md:flex">
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

      <!-- MOBILE BUTTON -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 md:hidden"
        @click="toggleMobileMenu"
      >
        <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-lg"></i>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="border-t border-white/10 bg-[#0f172a]/95 backdrop-blur-xl md:hidden"
      >
        <nav class="flex flex-col gap-3 px-6 py-6">
          <RouterLink
            v-for="route in clientRoutes"
            :key="route.path"
            :to="{ name: route.name }"
            class="group relative overflow-hidden rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:text-white"
            active-class="mobile-active-nav-link"
            @click="closeMobileMenu"
          >
            <!-- TEXT -->
            <span class="relative z-10">
              {{ route.name }}
            </span>

            <!-- UNDERLINE -->
            <span
              class="mobile-nav-line absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-cyan-400 transition-all duration-300"
            ></span>
          </RouterLink>
        </nav>
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
/* MOBILE MENU ANIMATION */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* DESKTOP ACTIVE LINK */
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

/* MOBILE ACTIVE LINK */
.mobile-active-nav-link {
  color: #22d3ee;
}

/* MOBILE ACTIVE UNDERLINE */
.mobile-active-nav-link .mobile-nav-line {
  width: 100%;
}

/* MOBILE HOVER */
.group:hover .mobile-nav-line {
  width: 100%;
}
</style>
