<template>
  <div class="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10 sm:rounded-3xl sm:p-6"
    >
      <!-- GLOW EFFECT -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:to-blue-500/10"
      ></div>

      <!-- CONTENT -->
      <div class="relative z-10 flex items-center gap-4 sm:gap-5">
        <!-- ICON -->
        <div
          class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
        >
          <i
            :class="[
              stat.icon,
              'text-2xl text-cyan-400 transition-transform duration-300 group-hover:rotate-6 sm:text-3xl',
            ]"
          ></i>
        </div>

        <!-- TEXT -->
        <div>
          <h3 class="text-3xl font-bold leading-none text-white sm:text-4xl">
            {{ stat.value }}
          </h3>

          <p class="mt-2 text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stats } from '@/constants/about'
</script>
