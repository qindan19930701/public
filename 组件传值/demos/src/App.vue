<template>
  <div id="app">
    <p>{{a}}</p>
    <com-a @cusEvent="fn2"></com-a>

  </div>
</template>

<script>
import comA from './comA'
export default {
  components: {
    comA
  },
  name: 'app',
  data () {
    return {
      a:1
    }
  },
  methods: {
    fn2(argv) {
      console.log(argv)
      this.a = argv
      console.log('fn2+++')
    }
  }
}
</script>

<style>

</style>
