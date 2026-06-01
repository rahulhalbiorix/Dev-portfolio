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
      <div class="relative flex items-center justify-center">
        <!-- BACKGROUND GLOW -->
        <div
          class="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl animate-pulse"
        ></div>

        <!-- ANIMATED GRADIENT ORB -->
        <div
          class="absolute h-[420px] w-[420px] rounded-full border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-3xl"
        ></div>

        <!-- ROTATING OUTER RING -->
        <div
          class="absolute z-20 h-[430px] w-[430px] rounded-full border-[3px] border-dashed border-transparent border-t-cyan-400 border-r-blue-500 animate-spin-slow"
        ></div>

        <!-- SECOND ROTATING RING -->
        <div
          class="absolute z-10 h-[390px] w-[390px] rounded-full border border-dashed border-cyan-400/30 animate-reverse-spin"
        ></div>

        <!-- MAIN CONTAINER -->
        <div
          class="relative flex h-[350px] w-[350px] animate-float items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(34,211,238,0.35)] backdrop-blur-2xl"
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
              class="h-[300px] w-[300px] object-cover transition duration-700 hover:scale-110"
            />

            <!-- IMAGE OVERLAY -->
            <div class="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
          </div>

          <!-- FLOATING TECH BADGES -->
          <TechBadge
            v-for="badge in techBadges"
            :key="badge.name"
            :icon="badge.icon"
            :name="badge.name"
            :position="badge.position"
            :animation="badge.animation"
          />

          <!-- SMALL GLOW DOTS -->
          <div class="absolute left-6 top-20 h-3 w-3 animate-ping rounded-full bg-cyan-400"></div>

          <div
            class="absolute bottom-16 right-10 h-4 w-4 animate-pulse rounded-full bg-blue-500"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import profileImage from '@/assets/profile-img/IMG_20240908_204013282.jpg'
import vueIcon from '@/assets/Tech-Icon/Vue.js.png'
import NodeIcon from '@/assets/Tech-Icon/Node.js.png'
import tailwindIcon from '@/assets/Tech-Icon/Tailwind CSS.png'
import ReactIcon from '@/assets/Tech-Icon/React.png'
import TechBadge from '@/components/common/TechBadge.vue'

const techBadges = [
  {
    icon: vueIcon,
    name: 'Vue.js',
    position: '-left-10 top-12',
    animation: 'animate-float',
  },
  {
    icon: tailwindIcon,
    name: 'Tailwind',
    position: '-right-12 top-20',
    animation: 'animate-bounce-slow',
  },
  {
    icon: NodeIcon,
    name: 'Node.js',
    position: 'bottom-12 -left-12',
    animation: 'animate-float-delay',
  },
  {
    icon: ReactIcon,
    name: 'React',
    position: 'bottom-6 -right-10',
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
