<template>
  <div class="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
    <h2 class="mb-8 text-3xl font-bold text-white">Send Message</h2>

    <form class="space-y-6" @submit.prevent="submitForm">
      <ContactInput v-model="form.name" label="Full Name" placeholder="Enter your name" />

      <ContactInput
        v-model="form.email"
        type="email"
        label="Email Address"
        placeholder="Enter your email"
      />

      <ContactInput v-model="form.subject" label="Subject" placeholder="Enter subject" />

      <ContactTextarea v-model="form.message" label="Message" placeholder="Write your message..." />

      <button
        type="submit"
        class="w-full rounded-2xl bg-cyan-500 px-6 py-4 font-medium text-white transition hover:bg-cyan-600"
      >
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
