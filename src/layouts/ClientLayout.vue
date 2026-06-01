<template>
  <div class="app-layout">
    <AppNavbar />

    <main>
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/common/AppNavbar.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>
