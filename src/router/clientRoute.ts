export const clientRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/client//HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/client/AboutView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/client/ProjectsView.vue'),
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('@/views/client/ExperienceView.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/client/ContactView.vue'),
  },
]
