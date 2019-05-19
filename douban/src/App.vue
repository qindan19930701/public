<template>
  <div id="app">
    <!-- 头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏组件 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppHeader from './components/app-header'
import AppSidebar from './components/app-sidebar'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
</style>
