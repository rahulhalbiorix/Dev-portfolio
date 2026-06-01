<template>
  <div class="mb-14 flex flex-wrap justify-center gap-4">
    <button
      v-for="category in categories"
      :key="category"
      class="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-lg transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
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
