<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">姓名</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="请输入姓名"
          v-model="formdata.name"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="请输入性别"
          v-model="formdata.gender"
        >
      </div>

      <button type="submit" class="btn btn-success" @click.prevrent="addHero()">添加英雄</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    addHero() {
      // 发送请求
      this.axios.post("heroes/", this.formdata).then(res => {
        // console.log(res)
        if (res.status === 201) {
          this.$router.push({
            name: "list"
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
