<template>
  <DefaultLayout>
    <section class="py-32">
      <AppContainer>
        <div class="max-w-3xl">
          <p class="text-gray-400 mb-4">Hello, I'm</p>

          <h1 class="text-5xl md:text-7xl font-bold leading-tight">Rahul</h1>

          <h2 class="text-3xl md:text-5xl font-semibold text-gray-300 mt-4">
            Full Stack Developer
          </h2>

          <p class="text-gray-400 mt-8 text-lg leading-relaxed">
            I build scalable web applications using Vue.js, TypeScript, Node.js, and modern frontend
            architecture.
          </p>

          <div class="flex items-center gap-4 mt-10">
            <button class="px-6 py-3 rounded-lg bg-white text-black font-medium">
              View Projects
            </button>

            <button class="px-6 py-3 rounded-lg border border-white/20">Contact Me</button>
          </div>
        </div>
      </AppContainer>
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AppContainer from '@/components/layout/AppContainer.vue'
</script>
