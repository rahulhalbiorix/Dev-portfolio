<template>
  <section class="px-6 py-24">
    <div class="mx-auto max-w-7xl">
      <!-- PAGE HEADER -->
      <div class="mb-20 text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">Contact Me</p>

        <h1 class="text-5xl font-bold text-white lg:text-6xl">Let's Connect</h1>

        <p class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Have a project idea, freelance opportunity or just want to say hello? Feel free to contact
          me.
        </p>
      </div>

      <!-- CONTENT -->
      <div class="grid gap-12 lg:grid-cols-2">
        <!-- LEFT SIDE -->
        <div>
          <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
            <h2 class="mb-8 text-3xl font-bold text-white">Contact Information</h2>

            <!-- CONTACT ITEMS -->
            <div class="space-y-6">
              <div class="flex items-start gap-5">
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl"
                >
                  📍
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-white">Location</h3>

                  <p class="mt-2 text-slate-400">Ahmedabad, India</p>
                </div>
              </div>

              <div class="flex items-start gap-5">
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl"
                >
                  📧
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-white">Email</h3>

                  <p class="mt-2 text-slate-400">rahul@example.com</p>
                </div>
              </div>

              <div class="flex items-start gap-5">
                <div
                  class="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl"
                >
                  📞
                </div>

                <div>
                  <h3 class="text-lg font-semibold text-white">Phone</h3>

                  <p class="mt-2 text-slate-400">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <!-- SOCIAL LINKS -->
            <div class="mt-12">
              <h3 class="mb-5 text-xl font-semibold text-white">Follow Me</h3>

              <div class="flex gap-4">
                <button
                  class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                >
                  GitHub
                </button>

                <button
                  class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                >
                  LinkedIn
                </button>

                <button
                  class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                >
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SIDE -->
        <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
          <h2 class="mb-8 text-3xl font-bold text-white">Send Message</h2>

          <form class="space-y-6" @submit.prevent="submitForm">
            <!-- NAME -->
            <div>
              <label class="mb-3 block text-sm font-medium text-slate-300"> Full Name </label>

              <input
                v-model="form.name"
                type="text"
                placeholder="Enter your name"
                class="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <!-- EMAIL -->
            <div>
              <label class="mb-3 block text-sm font-medium text-slate-300"> Email Address </label>

              <input
                v-model="form.email"
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <!-- SUBJECT -->
            <div>
              <label class="mb-3 block text-sm font-medium text-slate-300"> Subject </label>

              <input
                v-model="form.subject"
                type="text"
                placeholder="Enter subject"
                class="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <!-- MESSAGE -->
            <div>
              <label class="mb-3 block text-sm font-medium text-slate-300"> Message </label>

              <textarea
                v-model="form.message"
                rows="6"
                placeholder="Write your message..."
                class="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
              ></textarea>
            </div>

            <!-- BUTTON -->
            <button
              type="submit"
              class="w-full rounded-2xl bg-cyan-500 px-6 py-4 font-medium text-white transition hover:bg-cyan-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-28 rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur-xl"
      >
        <h2 class="text-4xl font-bold text-white">Ready To Build Something Amazing?</h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Let's create modern, scalable and beautiful web applications together.
        </p>

        <button
          class="mt-10 rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white transition hover:bg-cyan-600"
        >
          Start Project
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  console.log('Form Submitted:', form)

  alert('Message sent successfully!')

  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>
