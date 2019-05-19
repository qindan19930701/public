<template>
  <div id="app">
    <!-- 使用头部组件 -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 使用侧边栏部分 -->
        <app-slider></app-slider>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

          <!-- 列表组件 -->
          <!-- <app-list></app-list> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './components/appHeader'
import appSlider from './components/appSlider'
import appList from './components/appList'

export default {
  name: "app",
  components: {
    // "HelloWorld":helloWorld
    appHeader,
    appSlider,
    appList
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
