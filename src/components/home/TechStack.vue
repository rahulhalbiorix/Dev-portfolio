<template>
  <section class="px-6 py-20">
    <div class="mx-auto max-w-7xl">
      <!-- TITLE -->
      <div class="mb-14 text-center">
        <h2 class="text-4xl font-bold text-white">Tech Stack</h2>

        <p class="mt-4 text-slate-400">Technologies I work with</p>
      </div>

      <!-- STACK GRID -->
      <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        <div
          v-for="tech in techStack"
          :key="tech.name"
          class="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-500/10"
        >
          <div class="mb-3 text-5xl">
            {{ tech.icon }}
          </div>

          <h3 class="font-semibold text-white">
            {{ tech.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const techStack = [
  {
    name: 'Vue.js',
    icon: '🟢',
  },
  {
    name: 'TypeScript',
    icon: '🔵',
  },
  {
    name: 'JavaScript',
    icon: '🟡',
  },
  {
    name: 'Node.js',
    icon: '🟩',
  },
  {
    name: 'Tailwind CSS',
    icon: '💨',
  },
]
</script>
