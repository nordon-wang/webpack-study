// 将VUE项目中的库抽取成DLL
import Vue from 'vue/dist/vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeComponent = {
  template:'<h3>homeComponent page....</h3>'
}

const newsComponent = {
  template:'<h3>newsComponent page....</h3>'
}

const router = new VueRouter({
  routes:[
    {
      path:"/home",
      component:homeComponent
    },
    {
      path:"/news",
      component:newsComponent
    }
  ]
})


new Vue({
  el:'#app',
  data(){
    return {
      msg:'vue msg'
    }
  },
  router
})