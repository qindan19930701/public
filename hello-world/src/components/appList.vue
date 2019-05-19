<template>
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html" @click.prevent="showAdd()">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in list" :key="i">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <a href="edit.html" @click.prevent="showEdit(item.id)">编辑</a> &nbsp;&nbsp;
              <a href="#" @click.prevent="deleteHero(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // 编辑 渲染编辑页面
    showEdit(ID) {
      // 找到编辑组件
      this.$router.push({
        name: "edit",
        // 在路由配置生效时传递id
        params: {id: ID}
      });
    },
    // 添加 渲染添加页面
    showAdd() {
      // 显示新组件
      // 找到add组件
      this.$router.push({
        name: "add"
      });
    },
    // 删除操作
    deleteHero(ID) {
      if (confirm("Sure?")) {
        // 发送删除的请求
        this.axios.delete("heroes/" + ID).then(res => {
          // console.log(res)
          this.getData();
        });
      }
    },
    getData() {
      // 发请求，拿数据
      this.axios.get("heroes").then(res => {
        // console.log(res)
        const { status, data } = res;
        if (status === 200) {
          this.list = data;
        }
      });
    }
  }
};
</script>

<style>
</style>
