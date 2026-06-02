<template>
  <section class="mt-20 px-5 sm:px-6 lg:mt-28">
    <div
      class="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 px-6 py-12 text-center backdrop-blur-xl sm:px-10 sm:py-16 lg:rounded-[32px] lg:px-16 lg:py-20"
    >
      <!-- SMALL LABEL -->
      <p class="mb-4 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
        Let's Work Together
      </p>

      <!-- ANIMATED TITLE -->
      <transition name="fade" mode="out-in">
        <h2
          :key="currentTitle"
          class="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
          {{ currentTitle }}
        </h2>
      </transition>

      <!-- DESCRIPTION -->
      <p
        class="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:text-lg"
      >
        {{ description }}
      </p>

      <!-- BUTTON -->
      <div class="mt-10">
        <button
          class="w-full rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition duration-300 hover:bg-cyan-600 sm:w-auto"
        >
          {{ buttonText }}
        </button>
      </div>

      <!-- OPTIONAL GLOW -->
      <div
        class="pointer-events-none absolute left-1/2 top-1/2 hidden h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl lg:block"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  titles: string[]
  description: string
  buttonText: string
}>()

const currentIndex = ref(0)

const currentTitle = computed(() => {
  return props.titles[currentIndex.value]
})

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.titles.length
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
