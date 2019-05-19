import Vue from 'vue'
import Router from 'vue-router'

import MovieList from '../views/movie-list.vue'
import MovieDetail from '../views/movie-detail.vue'

Vue.use(Router)

export default new Router({
  // 统一设置激活状态的link样式
  linkExactActiveClass: 'active',
  routes: [{
      name: 'in_theaters',
      path: '/in_theaters',
      component: MovieList
    },
    {
      name: 'coming_soon',
      path: '/coming_soon',
      component: MovieList
    },
    {
      name: 'top250',
      path: '/top250',
      component: MovieList
    },
    {
      name: 'moviedetail',
      path: '/movie/:id',
      component: MovieDetail
    }
  ]
})