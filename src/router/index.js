import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/gallery-on-vuetify/',
    component: () => import('@/views/pages/MainPage.vue'),
  },
  {
    path: '/gallery-on-vuetify/photos',
    component: () => import('@/views/pages/PhotosPage.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
