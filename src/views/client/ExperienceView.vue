<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-6xl">
      <!-- PAGE HEADER -->
      <div class="mb-24 text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">Experience</p>

        <h1 class="text-5xl font-bold text-white lg:text-6xl">My Journey</h1>

        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My professional journey, frontend development experience and technologies I have worked
          with.
        </p>
      </div>

      <!-- TIMELINE -->
      <div class="relative">
        <!-- LINE -->
        <div class="absolute left-4 top-0 hidden h-full w-[2px] bg-cyan-500/30 md:block"></div>

        <!-- EXPERIENCE ITEMS -->
        <div
          v-for="experience in experiences"
          :key="experience.company"
          class="relative mb-16 md:pl-16"
        >
          <!-- TIMELINE DOT -->
          <div
            class="absolute left-0 top-2 hidden h-8 w-8 rounded-full border-4 border-slate-950 bg-cyan-500 md:block"
          ></div>

          <!-- CARD -->
          <div
            class="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition duration-300 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <!-- TOP -->
            <div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 class="text-3xl font-bold text-white">
                  {{ experience.role }}
                </h2>

                <p class="mt-2 text-lg text-cyan-400">
                  {{ experience.company }}
                </p>
              </div>

              <div
                class="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300"
              >
                {{ experience.duration }}
              </div>
            </div>

            <!-- DESCRIPTION -->
            <p class="mb-8 leading-8 text-slate-400">
              {{ experience.description }}
            </p>

            <!-- RESPONSIBILITIES -->
            <div class="mb-8">
              <h3 class="mb-4 text-xl font-semibold text-white">Responsibilities</h3>

              <ul class="space-y-3">
                <li
                  v-for="item in experience.responsibilities"
                  :key="item"
                  class="flex items-start gap-3 text-slate-300"
                >
                  <span class="mt-1 text-cyan-400"> • </span>

                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- TECH STACK -->
            <div>
              <h3 class="mb-4 text-xl font-semibold text-white">Technologies</h3>

              <div class="flex flex-wrap gap-3">
                <span
                  v-for="tech in experience.tech"
                  :key="tech"
                  class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EDUCATION -->
      <div class="mt-28">
        <div class="mb-14 text-center">
          <h2 class="text-4xl font-bold text-white">Education</h2>

          <p class="mt-4 text-slate-400">My academic background</p>
        </div>

        <div class="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 class="text-3xl font-bold text-white">Bachelor of Computer Applications</h3>

              <p class="mt-3 text-lg text-cyan-400">Gujarat University</p>

              <p class="mt-5 leading-8 text-slate-400">
                Studied software development, programming fundamentals, databases and modern web
                technologies.
              </p>
            </div>

            <div
              class="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300"
            >
              2021 - 2024
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-28 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur-xl"
      >
        <h2 class="text-4xl font-bold text-white">Looking For A Frontend Developer?</h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I'm open to frontend developer roles, freelance projects and exciting collaborations.
        </p>

        <button
          class="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-600"
        >
          Hire Me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    duration: '2025 - Present',
    description:
      'Working on scalable frontend applications using Vue.js, TypeScript and reusable component architecture.',
    responsibilities: [
      'Developed responsive user interfaces using Vue.js and Tailwind CSS.',
      'Created reusable and scalable component architecture.',
      'Integrated REST APIs and handled frontend state management.',
      'Optimized performance and improved user experience.',
    ],
    tech: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Git'],
  },
  {
    role: 'Frontend Intern',
    company: 'Startup Company',
    duration: '2024 - 2025',
    description:
      'Worked on frontend development, bug fixing and responsive UI implementation for modern web applications.',
    responsibilities: [
      'Built responsive pages and reusable UI components.',
      'Collaborated with senior developers and designers.',
      'Fixed frontend bugs and improved UI consistency.',
      'Learned professional Git workflow and deployment.',
    ],
    tech: ['Vue.js', 'JavaScript', 'CSS', 'GitHub'],
  },
]
</script>
