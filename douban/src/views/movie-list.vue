<template>
<div>
    <h1 class="page-header">{{title}}</h1>

    <div class="media">
        <div class="media-left">
            <img src="" alt="海报点击链接">
      </div>
            <div class="media-body">
                <h4 class="media-heading">标题</h4>
                详情
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  created () {
    this.getData()
  },
  computed: {
    ...mapState(['title'])
  },
  methods: {
    ...mapActions(['getData'])
  }

}
</script>

<style>

</style>
