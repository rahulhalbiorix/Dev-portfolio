import { createRouter, createWebHistory } from 'vue-router'
import { clientRoutes } from './clientRoute'

const routes = [...clientRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
