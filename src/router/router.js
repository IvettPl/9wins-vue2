import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/pages/Home'
import Slots from '@/components/pages/Slots'
import Casino from '@/components/pages/Casino'
import Games from '@/components/pages/Games'
import Bonuses from '@/components/pages/Bonuses'
import Cashier from '@/components/pages/Cashier'

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
    path: '/casino',
    name: 'casino',
    component: Casino
  },
  {
    path: '/games',
    name: 'games',
    component: Games
  },

  {
    path: '/bonuses',
    name: 'bonuses',
    component: Bonuses
  },

  {
    path: '/cashier',
    name: 'cashier',
    component: Cashier
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
