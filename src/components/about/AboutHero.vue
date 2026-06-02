<template>
  <div class="grid items-center gap-16 lg:grid-cols-2">
    <!-- IMAGE -->
    <div class="flex justify-center">
      <div
        class="h-[380px] w-[380px] overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-2xl shadow-cyan-500/20"
      >
        <img :src="ProfileImage" alt="Rahul Profile" class="h-full w-full object-cover" />
      </div>
    </div>

    <!-- CONTENT -->
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

      <button
        class="rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-600"
      >
        Download Resume
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProfileImage from '@/assets/profile-img/IMG_20240908_204013282.jpg'
</script>
