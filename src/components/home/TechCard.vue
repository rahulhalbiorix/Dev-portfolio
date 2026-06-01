<template>
  <div
    class="group rounded-3xl border border-white/10 p-6 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
  >
    <!-- ICON -->
    <div class="mb-5 flex justify-center">
      <div
        class="flex h-20 w-20 items-center justify-center rounded-2xl transition duration-500 group-hover:scale-110 group-hover:rotate-6"
      >
        <img :src="icon" :alt="name" class="h-12 w-12 object-contain" />
      </div>
    </div>

    <!-- NAME -->
    <h3 class="text-lg font-semibold text-white">
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
