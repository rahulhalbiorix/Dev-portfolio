import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/client/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
