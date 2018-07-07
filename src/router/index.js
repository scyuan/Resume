import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import mhome from '@/views/m/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/m/',
      name: 'mhome',
      component: mhome
    }
  ]
})
