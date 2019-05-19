<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link to="/list" tag="li">
        <a>英雄列表</a>
      </router-link>
      <router-link to="/bar" tag="li">
        <a>武器列表</a>
      </router-link>
      <router-link to="/foo" tag="li">
        <a>装备列表</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
