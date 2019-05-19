// 路由模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import List from './components/appList.vue'
import Bar from './components/Bar.vue'
import Foo from './components/Foo.vue'
import Add from './components/add.vue'
import Edit from './components/edit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes: [{
    path: '/',
    component: List
  },
  {
    name: 'list',
    path: '/list',
    component: List
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/foo',
    component: Foo
  },
  {
    name: 'add',
    path: '/add',
    component: Add
  },
  {
    name: 'edit',
    // 接收动态参数
    path: '/edit/:id',
    component: Edit
  }]
})

export default router