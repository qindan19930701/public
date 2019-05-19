import Vue from 'vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'

Vue.prototype.axios = axios

import App from './App.vue'


// 引入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
