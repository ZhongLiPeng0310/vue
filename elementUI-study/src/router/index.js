import Vue from 'vue'
import Router from 'vue-router'
import Main from "../views/Main";
import login from "../views/login";
Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/main',
      component:Main
    },
    {
      path:'/login',
      component:login
    },
  ]
})
