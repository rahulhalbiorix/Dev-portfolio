<template>
  <section class="px-6 py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
      <!-- LEFT SIDE -->
      <div class="flex justify-center">
        <div
          class="flex h-[380px] w-[380px] items-center justify-center rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-8xl font-bold text-white shadow-2xl shadow-cyan-500/20"
        >
          R
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">About Me</p>

        <h1 class="mb-8 text-5xl font-bold leading-tight text-white">
          Passionate Frontend Developer
        </h1>

        <p class="mb-6 leading-8 text-slate-300">
          I'm a frontend developer focused on building scalable, responsive and modern web
          applications using Vue.js, TypeScript and modern frontend technologies.
        </p>

        <p class="mb-10 leading-8 text-slate-300">
          I enjoy creating reusable architectures, beautiful user interfaces and clean user
          experiences with performance and scalability in mind.
        </p>

        <!-- STATS -->
        <div class="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div
            class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-lg"
          >
            <h3 class="text-3xl font-bold text-cyan-400">2+</h3>

            <p class="mt-2 text-sm text-slate-400">Years Experience</p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-lg"
          >
            <h3 class="text-3xl font-bold text-cyan-400">10+</h3>

            <p class="mt-2 text-sm text-slate-400">Projects</p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-lg"
          >
            <h3 class="text-3xl font-bold text-cyan-400">8+</h3>

            <p class="mt-2 text-sm text-slate-400">Technologies</p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-lg"
          >
            <h3 class="text-3xl font-bold text-cyan-400">100%</h3>

            <p class="mt-2 text-sm text-slate-400">Dedication</p>
          </div>
        </div>

        <!-- BUTTON -->
        <button
          class="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-600"
        >
          Download Resume
        </button>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="mx-auto mt-28 max-w-7xl">
      <div class="mb-14 text-center">
        <h2 class="text-4xl font-bold text-white">My Skills</h2>

        <p class="mt-4 text-slate-400">Technologies and tools I work with</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="skill in skills"
          :key="skill.title"
          class="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
        >
          <div class="mb-5 text-5xl">
            {{ skill.icon }}
          </div>

          <h3 class="mb-4 text-2xl font-semibold text-white">
            {{ skill.title }}
          </h3>

          <p class="leading-7 text-slate-400">
            {{ skill.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    title: 'Frontend Development',
    icon: '💻',
    description:
      'Building responsive and scalable user interfaces using Vue.js, TypeScript and Tailwind CSS.',
  },
  {
    title: 'Backend Basics',
    icon: '⚙️',
    description: 'Basic understanding of Node.js APIs, authentication and database integration.',
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    description:
      'Creating modern, clean and user-friendly interfaces with smooth user experiences.',
  },
  {
    title: 'Version Control',
    icon: '🚀',
    description:
      'Managing projects and collaboration using Git, GitHub and professional workflows.',
  },
]
</script>
