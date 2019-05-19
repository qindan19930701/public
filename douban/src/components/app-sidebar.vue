<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <!-- <li class="active"><a href="#">正在热播</a></li>
      <li><a href="#">即将上映</a></li>
      <li><a href="#">Top250</a></li>-->
      <router-link to="/in_theaters" tag="li">
        <a>正在热映</a>
      </router-link>
      <router-link to="/coming_soon" tag="li">
        <a>即将上映</a>
      </router-link>
      <router-link to="/top250" tag="li">
        <a>Top250</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
