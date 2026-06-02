<template>
  <div
    class="group flex items-start gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05]"
  >
    <!-- ICON -->
    <div
      class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20"
    >
      <i
        :class="[item.icon, 'text-2xl text-cyan-400 transition duration-300 group-hover:rotate-6']"
      ></i>
    </div>

    <!-- TEXT -->
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
