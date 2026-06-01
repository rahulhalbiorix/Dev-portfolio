<template>
  <section class="relative overflow-hidden px-6 py-24 lg:px-12">
    <div class="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
      <!-- LEFT CONTENT -->
      <div>
        <p class="mb-4 text-sm font-medium uppercase tracking-[4px] text-cyan-400">
          Frontend Developer
        </p>

        <h1 class="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
          Hi, I'm
          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rahul
          </span>
        </h1>

        <p class="max-w-xl text-lg leading-8 text-slate-300">
          I build modern, scalable and beautiful web applications using Vue.js, TypeScript and
          modern frontend technologies.
        </p>

        <!-- BUTTONS -->
        <div class="mt-10 flex flex-wrap gap-4">
          <button
            class="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600"
          >
            View Projects
          </button>

          <button
            class="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur-lg transition hover:bg-white/10"
          >
            Contact Me
          </button>
        </div>
      </div>

      <!-- RIGHT IMAGE -->
      <div class="flex justify-center">
        <div
          class="flex h-[350px] w-[350px] items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-8xl font-bold text-white shadow-2xl shadow-cyan-500/20"
        >
          R
        </div>
      </div>
    </div>
  </section>
</template>
