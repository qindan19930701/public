import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import store from './store/index'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
