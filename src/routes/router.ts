import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./landing-page/LandingPage.vue'),
      name: 'LandingPage',
    },
    {
      path: '/demo',
      component: () => import('./demo/Demo.vue'),
      name: 'Demo',
    },
    {
      path: '/layout',
      component: () => import('./layout/Layout.vue'),
      name: 'Layout',
    },
  ],
})
