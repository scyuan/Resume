import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import mhome from '@/views/m/home'

Vue.use(Router);

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,

    },
    {
      path: '/m/',
      name: 'mhome',
      component: mhome
    }
  ]
})

router.afterEach((to, from) => {

  var isPhone = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)? true:false;

  if(isPhone){
    router.push('/m/')

  }else{
    router.push('/')
  }

})

export default router;
