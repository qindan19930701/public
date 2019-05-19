<template>
  <div>
    <p>我是com组件</p>
    <button @click="fn1">按钮点击传值</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count:100
    }
  },
  methods: {
    fn1() {
      // 自定义事件  子传父
      this.$emit('cusEvent',300)
    }
  }

}
</script>

<style>

</style>
