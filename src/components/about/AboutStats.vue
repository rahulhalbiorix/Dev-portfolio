<template>
  <div class="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-lg"
    >
      <h3 class="text-3xl font-bold text-cyan-400">
        {{ stat.value }}
      </h3>

      <p class="mt-2 text-sm text-slate-400">
        {{ stat.label }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stats } from '@/constants/about'
</script>
