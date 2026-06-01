<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <!-- PAGE HEADER -->
      <div class="mb-20 text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">My Projects</p>

        <h1 class="text-5xl font-bold text-white lg:text-6xl">Featured Work</h1>

        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A collection of projects showcasing my frontend development skills, reusable architecture
          and modern UI implementation.
        </p>
      </div>

      <!-- FILTER BUTTONS -->
      <div class="mb-14 flex flex-wrap justify-center gap-4">
        <button
          v-for="category in categories"
          :key="category"
          class="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-lg transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
        >
          {{ category }}
        </button>
      </div>

      <!-- PROJECT GRID -->
      <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:-translate-y-3 hover:border-cyan-400/30"
        >
          <!-- PROJECT IMAGE -->
          <div
            class="relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
          >
            <div class="absolute inset-0 bg-black/20"></div>

            <span class="relative z-10 text-7xl transition duration-300 group-hover:scale-110">
              🚀
            </span>
          </div>

          <!-- PROJECT CONTENT -->
          <div class="p-7">
            <!-- TITLE -->
            <div class="mb-4 flex items-start justify-between">
              <h2 class="text-2xl font-bold text-white">
                {{ project.title }}
              </h2>

              <span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
                {{ project.type }}
              </span>
            </div>

            <!-- DESCRIPTION -->
            <p class="mb-6 leading-7 text-slate-400">
              {{ project.description }}
            </p>

            <!-- TECH STACK -->
            <div class="mb-8 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- BUTTONS -->
            <div class="flex gap-4">
              <button
                class="flex-1 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-white transition hover:bg-cyan-600"
              >
                Live Demo
              </button>

              <button
                class="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA SECTION -->
      <div
        class="mt-28 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur-xl"
      >
        <h2 class="text-4xl font-bold text-white">Want To Work Together?</h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I'm available for freelance projects, collaborations and frontend development
          opportunities.
        </p>

        <button
          class="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-600"
        >
          Contact Me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = ['All', 'Frontend', 'Dashboard', 'Full Stack', 'UI/UX']

const projects = [
  {
    title: 'Developer Portfolio',
    type: 'Frontend',
    description:
      'Modern responsive portfolio built with Vue.js, TypeScript and Tailwind CSS with reusable architecture.',
    tech: ['Vue 3', 'TypeScript', 'Tailwind', 'Vite'],
  },
  {
    title: 'Admin Dashboard',
    type: 'Dashboard',
    description: 'Scalable admin panel with analytics, charts and reusable component architecture.',
    tech: ['Vue', 'Pinia', 'Chart.js', 'Tailwind'],
  },
  {
    title: 'Task Management App',
    type: 'Full Stack',
    description: 'Task management system with authentication, CRUD operations and responsive UI.',
    tech: ['Vue', 'Firebase', 'Tailwind', 'TypeScript'],
  },
  {
    title: 'E-Commerce UI',
    type: 'UI/UX',
    description:
      'Beautiful modern ecommerce frontend design with animations and responsive layouts.',
    tech: ['Vue', 'GSAP', 'Tailwind', 'Figma'],
  },
  {
    title: 'Analytics Platform',
    type: 'Dashboard',
    description: 'Data analytics platform with charts, filtering and dynamic dashboard widgets.',
    tech: ['Vue', 'Charts', 'Pinia', 'TypeScript'],
  },
  {
    title: 'Blog Platform',
    type: 'Full Stack',
    description: 'Modern blog application with markdown editor and admin management system.',
    tech: ['Vue', 'Node.js', 'MongoDB', 'Tailwind'],
  },
]
</script>
