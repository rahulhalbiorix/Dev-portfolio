<template>
  <section class="relative overflow-hidden px-6 py-16 lg:px-12 lg:py-24">
    <div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
      <!-- LEFT CONTENT -->
      <div class="order-2 text-center lg:order-1 lg:text-left">
        <p class="mb-4 text-xs font-medium uppercase tracking-[4px] text-cyan-400 sm:text-sm">
          Frontend Developer
        </p>

        <h1 class="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
          Hi, I'm

          <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rahul
          </span>
        </h1>

        <p
          class="mx-auto max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0"
        >
          I build modern, scalable and beautiful web applications using Vue.js, TypeScript and
          modern frontend technologies.
        </p>

        <!-- BUTTONS -->
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
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
      <div class="order-1 relative flex items-center justify-center lg:order-2">
        <!-- BACKGROUND GLOW -->
        <div
          class="absolute h-[280px] w-[280px] rounded-full bg-cyan-500/20 blur-3xl sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px]"
        ></div>

        <!-- GRADIENT ORB -->
        <div
          class="absolute h-[240px] w-[240px] rounded-full border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-3xl sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]"
        ></div>

        <!-- OUTER RING -->
        <div
          class="absolute z-20 h-[260px] w-[260px] rounded-full border-[3px] border-dashed border-transparent border-r-blue-500 border-t-cyan-400 animate-spin-slow sm:h-[340px] sm:w-[340px] lg:h-[430px] lg:w-[430px]"
        ></div>

        <!-- SECOND RING -->
        <div
          class="absolute z-10 hidden rounded-full border border-dashed border-cyan-400/30 animate-reverse-spin sm:block sm:h-[300px] sm:w-[300px] lg:h-[390px] lg:w-[390px]"
        ></div>

        <!-- MAIN CONTAINER -->
        <div
          class="relative flex h-[220px] w-[220px] animate-float items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(34,211,238,0.35)] backdrop-blur-2xl sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px]"
        >
          <!-- INNER GLOW -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-2xl"
          ></div>

          <!-- PROFILE IMAGE -->
          <div class="relative overflow-hidden rounded-full border-4 border-white/10">
            <img
              :src="profileImage"
              alt="Profile Picture"
              class="h-[180px] w-[180px] object-cover transition duration-700 hover:scale-110 sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px]"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
          </div>

          <!-- TECH BADGES -->
          <TechBadge
            v-for="badge in techBadges"
            :key="badge.name"
            :icon="badge.icon"
            :name="badge.name"
            :position="badge.position"
            :animation="badge.animation"
          />

          <!-- SMALL GLOW DOTS -->
          <div
            class="absolute left-4 top-14 h-2 w-2 animate-ping rounded-full bg-cyan-400 sm:h-3 sm:w-3"
          ></div>

          <div
            class="absolute bottom-10 right-6 h-3 w-3 animate-pulse rounded-full bg-blue-500 sm:h-4 sm:w-4"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import profileImage from '@/assets/profile-img/IMG_20240908_204013282.webp'
import vueIcon from '@/assets/Tech-Icon/Vue.js.png'
import NodeIcon from '@/assets/Tech-Icon/Node.js.png'
import tailwindIcon from '@/assets/Tech-Icon/Tailwind CSS.png'
import ReactIcon from '@/assets/Tech-Icon/React.png'
import TechBadge from '@/components/common/TechBadge.vue'

const techBadges = [
  {
    icon: vueIcon,
    name: 'Vue.js',
    position: '-left-2 top-4 sm:-left-10 sm:top-12',
    animation: 'animate-float',
  },
  {
    icon: tailwindIcon,
    name: 'Tailwind',
    position: '-right-2 top-6 sm:-right-12 sm:top-20',
    animation: 'animate-bounce-slow',
  },
  {
    icon: NodeIcon,
    name: 'Node.js',
    position: 'bottom-4 -left-2 sm:bottom-12 sm:-left-12',
    animation: 'animate-float-delay',
  },
  {
    icon: ReactIcon,
    name: 'React',
    position: 'bottom-2 -right-2 sm:bottom-6 sm:-right-10',
    animation: 'animate-float',
  },
]
</script>
<style scoped>
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes reverseSpin {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes floatDelay {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes bounceSlow {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.animate-spin-slow {
  animation: spinSlow 14s linear infinite;
}

.animate-reverse-spin {
  animation: reverseSpin 20s linear infinite;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-float-delay {
  animation: floatDelay 5s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounceSlow 3s ease-in-out infinite;
}
</style>
