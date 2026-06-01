<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
    <AppContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="text-2xl font-bold tracking-wide"> Rahul.dev </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#about" class="hover:text-gray-300 transition"> About </a>

          <a href="#skills" class="hover:text-gray-300 transition"> Skills </a>

          <a href="#projects" class="hover:text-gray-300 transition"> Projects </a>

          <a href="#contact" class="hover:text-gray-300 transition"> Contact </a>
        </nav>

        <!-- Mobile Button -->
        <button class="md:hidden" @click="isOpen = !isOpen">☰</button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden py-4 flex flex-col gap-4">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppContainer from './AppContainer.vue'

const isOpen = ref(false)
</script>
