import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/button',
      component: () => import('@/example/pages/button.vue')
    },
    {
      path: '/input',
      component: () => import('@/example/pages/input.vue')
    },
    {
      path: '/progress',
      component: () => import('@/example/pages/process.vue')
    },
    {
      path: '/time',
      component: () => import('@/example/pages/time.vue')
    },
    {
      path: '/poster',
      component: () => import('@/example/pages/poster.vue')
    }
  ]
})
