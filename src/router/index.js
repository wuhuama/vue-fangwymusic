import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'cpnts/recommend/recommend'
Vue.use(Router)

const Recommend = (resolve) => {
  import('cpnts/recommend/recommend').then((module) => {
  resolve(module)
})}

const Rank = (resolve) => {
  import('cpnts/rank/rank').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import ('cpnts/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },{
      path: '/recommend',
      component: Recommend
    }, {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    }
  ]
})
