import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home'
import Slots from '@/components/pages/Slots'
import Bonuses from '@/components/pages/Bonuses'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/slots',
    name: 'slots',
    component: Slots
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/bonuses',
    name: 'bonuses',
    component: Bonuses
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
