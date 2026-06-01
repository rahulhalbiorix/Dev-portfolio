<template>
  <section class="px-6 py-20">
    <div class="mx-auto max-w-7xl">
      <!-- TITLE -->
      <div class="mb-14 text-center">
        <h2 class="text-4xl font-bold text-white">Featured Projects</h2>

        <p class="mt-4 text-slate-400">Some of my recent work</p>
      </div>

      <!-- PROJECT GRID -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.title"
          class="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30"
        >
          <!-- IMAGE -->
          <div
            class="flex h-52 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-6xl"
          >
            🚀
          </div>

          <!-- CONTENT -->
          <div class="p-6">
            <h3 class="mb-3 text-2xl font-semibold text-white">
              {{ project.title }}
            </h3>

            <p class="mb-5 leading-7 text-slate-400">
              {{ project.description }}
            </p>

            <!-- TAGS -->
            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- BUTTONS -->
            <div class="flex gap-4">
              <button
                class="rounded-lg bg-cyan-500 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
              >
                Live Demo
              </button>

              <button
                class="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'Developer Portfolio',
    description: 'Modern responsive portfolio built with Vue 3 and Tailwind CSS.',
    tech: ['Vue', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Admin Dashboard',
    description: 'Scalable admin panel with reusable component architecture.',
    tech: ['Vue', 'Pinia', 'Charts'],
  },
  {
    title: 'Task Management App',
    description: 'Productivity application with drag-and-drop functionality.',
    tech: ['Vue', 'Firebase', 'Tailwind'],
  },
]
</script>
