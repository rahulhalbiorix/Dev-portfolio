<template>
  <div class="flex items-start gap-5">
    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
      {{ item.icon }}
    </div>

    <div>
      <h3 class="text-lg font-semibold text-white">
        {{ item.title }}
      </h3>

      <p class="mt-2 text-slate-400">
        {{ item.value }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    title: string
    value: string
    icon: string
  }
}>()
</script>
