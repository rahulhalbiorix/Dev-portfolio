<template>
  <section class="px-5 py-16 sm:px-6 lg:px-12 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <!-- TITLE -->
      <div class="mb-14 text-center lg:mb-16">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
          Portfolio
        </p>

        <h2 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Featured Projects</h2>

        <p class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
          Some of my recent frontend projects built with modern technologies and scalable
          architecture.
        </p>
      </div>

      <!-- PROJECT GRID -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] sm:rounded-3xl"
        >
          <!-- IMAGE -->
          <div class="relative overflow-hidden">
            <div
              class="absolute inset-0 z-10 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"
            ></div>

            <img
              :src="defaultProjectImage"
              :alt="project.title"
              class="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-60"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-5 sm:p-6">
            <!-- TITLE -->
            <h3 class="mb-3 text-xl font-bold text-white sm:text-2xl">
              {{ project.title }}
            </h3>

            <!-- DESCRIPTION -->
            <p class="mb-5 text-sm leading-7 text-slate-400 sm:text-base">
              {{ project.description }}
            </p>

            <!-- TAGS -->
            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="rounded-full border border-cyan-400/10 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300 sm:text-sm"
              >
                {{ tech }}
              </span>
            </div>

            <!-- BUTTONS -->
            <div class="flex flex-col gap-3 sm:flex-row">
              <button
                class="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-cyan-600"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>

                Live Demo
              </button>

              <button
                class="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
              >
                <i class="fa-brands fa-github"></i>

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
import defaultProjectImage from '@/assets/project-img/05b05941-3d8e-40f0-a4e7-9bf77bde4bdd.png'

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
