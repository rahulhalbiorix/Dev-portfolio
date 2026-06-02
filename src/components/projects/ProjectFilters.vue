<template>
  <div class="mb-10 flex flex-wrap justify-center gap-3 sm:mb-12 sm:gap-4 lg:mb-14">
    <button
      v-for="category in categories"
      :key="category"
      class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300 sm:px-6 sm:py-3 sm:text-sm"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  categories: string[]
}>()
</script>
