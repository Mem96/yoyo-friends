import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/video/:id/:author/:title',
    name: 'video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/VideoPage.vue'),
    props: true,
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
