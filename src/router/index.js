import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'cpnts/recommend/recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Recommend
    },{
      path: '/recommend',
      component: Recommend
    }
  ]
})
