<template>
  <div class="mt-20 sm:mt-24 lg:mt-28">
    <!-- HEADING -->
    <div class="mb-12 text-center sm:mb-14">
      <p class="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
        Qualification
      </p>

      <h2 class="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Education</h2>

      <p class="mt-5 text-sm leading-7 text-slate-400 sm:mt-4 sm:text-base lg:text-lg">
        My academic background
      </p>
    </div>

    <!-- CARD -->
    <div
      class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 sm:rounded-[28px] sm:p-6 lg:p-8"
    >
      <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <!-- LEFT CONTENT -->
        <div>
          <!-- DEGREE -->
          <h3 class="text-2xl font-bold text-white sm:text-3xl">
            {{ education.degree }}
          </h3>

          <!-- UNIVERSITY -->
          <p class="mt-3 text-base text-cyan-400 sm:text-lg">
            {{ education.university }}
          </p>

          <!-- DESCRIPTION -->
          <p class="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            {{ education.description }}
          </p>
        </div>

        <!-- DURATION -->
        <div
          class="w-fit rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300 sm:px-5 sm:text-sm"
        >
          {{ education.duration }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  education: {
    degree: string
    university: string
    duration: string
    description: string
  }
}>()
</script>
