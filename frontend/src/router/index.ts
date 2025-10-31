import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posting/:id',
      name: 'posting-detail',
      component: () => import('../views/PostingDetailView.vue')
    },
    {
      path: '/create',
      name: 'posting-create',
      component: () => import('../views/PostingCreateView.vue')
    }
  ]
})

export default router