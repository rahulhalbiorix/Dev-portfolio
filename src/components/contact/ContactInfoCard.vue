<template>
  <div
    class="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:gap-5 sm:p-5"
  >
    <!-- ICON -->
    <div
      class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20 sm:h-14 sm:w-14"
    >
      <i
        :class="[
          item.icon,
          'text-xl text-cyan-400 transition duration-300 group-hover:rotate-6 sm:text-2xl',
        ]"
      ></i>
    </div>

    <!-- TEXT -->
    <div class="min-w-0">
      <h3 class="text-base font-semibold text-white sm:text-lg">
        {{ item.title }}
      </h3>

      <p class="mt-2 break-words text-sm leading-6 text-slate-400 sm:text-base">
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
