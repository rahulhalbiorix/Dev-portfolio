<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-lg">
    <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
      <!-- LOGO -->
      <RouterLink to="/" class="text-2xl font-bold tracking-wide text-white">
        Rahul.dev
      </RouterLink>

      <!-- DESKTOP NAV -->
      <nav class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="route in clientRoutes"
          :key="route.path"
          :to="{ name: route.name }"
          class="text-sm text-gray-300 transition duration-300 hover:text-white"
        >
          {{ route.name }}
        </RouterLink>
      </nav>

      <!-- MOBILE MENU BUTTON -->
      <button
        class="rounded-lg border border-white/10 bg-white/5 p-2 text-white md:hidden"
        @click="toggleMobileMenu"
      >
        <span v-if="mobileMenuOpen">✕</span>
        <span v-else>☰</span>
      </button>
    </div>

    <!-- MOBILE MENU -->
    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="border-t border-white/10 bg-slate-900 md:hidden">
        <nav class="flex flex-col gap-5 px-6 py-6">
          <RouterLink
            v-for="route in clientRoutes"
            :key="route.path"
            :to="{ name: route.name }"
            class="text-white"
            @click="closeMobileMenu"
          >
            {{ route.name }}
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
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
