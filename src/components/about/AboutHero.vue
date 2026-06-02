<template>
  <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
    <!-- IMAGE -->
    <div class="order-1 flex justify-center lg:order-1">
      <div
        class="h-[260px] w-[260px] overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 shadow-2xl shadow-cyan-500/20 sm:h-[320px] sm:w-[320px] lg:h-[380px] lg:w-[380px] lg:rounded-[32px]"
      >
        <img :src="ProfileImage" alt="Rahul Profile" class="h-full w-full object-cover" />
      </div>
    </div>

    <!-- CONTENT -->
    <div class="order-2 text-center lg:text-left">
      <!-- LABEL -->
      <p class="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
        About Me
      </p>

      <!-- TITLE -->
      <h1 class="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:mb-8 lg:text-5xl">
        Passionate Frontend Developer
      </h1>

      <!-- DESCRIPTION -->
      <p class="mb-5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
        I'm a frontend developer focused on building scalable, responsive and modern web
        applications using Vue.js, TypeScript and modern frontend technologies.
      </p>

      <p class="mb-8 text-sm leading-7 text-slate-300 sm:mb-10 sm:text-base sm:leading-8">
        I enjoy creating reusable architectures, beautiful user interfaces and clean user
        experiences with performance and scalability in mind.
      </p>

      <!-- BUTTON -->
      <div class="flex justify-center lg:justify-start">
        <button
          class="w-full rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition duration-300 hover:bg-cyan-600 sm:w-auto"
        >
          Download Resume
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileImage from '@/assets/profile-img/profileImage.webp'
</script>
