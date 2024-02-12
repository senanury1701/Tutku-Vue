import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/about.vue')
      },
      {
        path: '/content',
        name: 'content',
        component: () => import('@/pages/content.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import('@/pages/course.vue')
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: () => import('@/pages/gallery.vue')
      },
      {
        path: '/personel',
        name: 'personel',
        component: () => import('@/pages/personel.vue')
      },
      {
        path: '/security',
        name: 'security',
        component: () => import('@/pages/security.vue')
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/pages/notFound.vue'),

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
