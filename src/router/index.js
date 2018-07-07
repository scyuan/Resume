import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import mhome from '@/views/m/home'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      beforeEnter: (to, from, next) => {
        next('/m/');
      }
    },
    {
      path: '/m/',
      name: 'mhome',
      component: mhome
    }
  ]
})

// router.beforeEach((to, from, next) => {
  
//   var isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)? true:false;
//   if(isPhone){
   
//     next({path:"/m"});
//   }else{
//     next({path:"/"});
//   }
// })

export default router;