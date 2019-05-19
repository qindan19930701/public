<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
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

      <button type="submit" class="btn btn-success"
       @click.prevrent="editHero()">编辑英雄</button>
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
  mounted() {
    // 验证id
    // console.log(this.$route.params.id)
    this.getHeroById();
  },
  methods: {
    // 编辑成功，提交数据
    editHero() {
      this.axios.put('heroes/'+ this.$route.params.id,this.formdata)
      .then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.$router.push({
            name: 'list'
          })
        }
      })
    },
    getHeroById() {
      this.axios
        .get("heroes/" + this.$route.params.id)
        .then(res => {
          // console.log(res)
          if (res.status === 200) {
            this.formdata = res.data;
          }
        });
    }
  }
};
</script>

<style>
</style>
