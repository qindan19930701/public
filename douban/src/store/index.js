// 仓库的入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import movielist from './movielist'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movielist
  }
})

export default store