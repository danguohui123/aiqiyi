import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import type from '@/pages/type/Type.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/type',
      name: 'type',
      component: type
    }
  ]
})
