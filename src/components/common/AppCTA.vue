<template>
  <section class="mt-28 px-6">
    <div
      class="mx-auto max-w-6xl rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur-xl"
    >
      <!-- ANIMATED TITLE -->
      <transition name="fade" mode="out-in">
        <h2 :key="currentTitle" class="text-4xl font-bold text-white lg:text-5xl">
          {{ currentTitle }}
        </h2>
      </transition>

      <!-- DESCRIPTION -->
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        {{ description }}
      </p>

      <!-- BUTTON -->
      <button
        class="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-600"
      >
        {{ buttonText }}
      </button>
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
