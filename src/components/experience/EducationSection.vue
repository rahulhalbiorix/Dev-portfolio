<template>
  <div class="mt-28">
    <div class="mb-14 text-center">
      <h2 class="text-4xl font-bold text-white">Education</h2>

      <p class="mt-4 text-slate-400">My academic background</p>
    </div>

    <div class="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 class="text-3xl font-bold text-white">
            {{ education.degree }}
          </h3>

          <p class="mt-3 text-lg text-cyan-400">
            {{ education.university }}
          </p>

          <p class="mt-5 leading-8 text-slate-400">
            {{ education.description }}
          </p>
        </div>

        <div
          class="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300"
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
