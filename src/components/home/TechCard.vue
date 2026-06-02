<template>
  <div
    class="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] sm:rounded-3xl sm:p-6"
  >
    <!-- ICON -->
    <div class="mb-4 flex justify-center sm:mb-5">
      <div
        class="flex h-16 w-16 items-center justify-center rounded-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-20 sm:w-20"
      >
        <img :src="icon" :alt="name" class="h-10 w-10 object-contain sm:h-12 sm:w-12" />
      </div>
    </div>

    <!-- NAME -->
    <h3 class="text-sm font-semibold text-white sm:text-base lg:text-lg">
      {{ name }}
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon: string
}>()
</script>
