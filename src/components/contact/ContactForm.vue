<template>
  <div
    class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg sm:rounded-[32px] sm:p-6 lg:p-8"
  >
    <!-- HEADER -->
    <div class="mb-8">
      <p class="mb-3 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
        Contact Form
      </p>

      <h2 class="text-3xl font-bold text-white sm:text-4xl">Send Message</h2>

      <p class="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
        Feel free to send me a message regarding projects, collaboration or freelance opportunities.
      </p>
    </div>

    <!-- FORM -->
    <form class="space-y-5 sm:space-y-6" @submit.prevent="submitForm">
      <!-- NAME -->
      <ContactInput v-model="form.name" label="Full Name" placeholder="Enter your name" />

      <!-- EMAIL -->
      <ContactInput
        v-model="form.email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
      />

      <!-- SUBJECT -->
      <ContactInput v-model="form.subject" label="Subject" placeholder="Enter subject" />

      <!-- MESSAGE -->
      <ContactTextarea v-model="form.message" label="Message" placeholder="Write your message..." />

      <!-- BUTTON -->
      <button
        type="submit"
        class="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-600 sm:py-4 sm:text-base"
      >
        <i class="fa-solid fa-paper-plane"></i>

        Send Message
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import ContactInput from './ContactInput.vue'
import ContactTextarea from './ContactTextarea.vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitForm = () => {
  console.log(form)
}
</script>
