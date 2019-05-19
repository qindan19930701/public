import jsonp from 'jsonp'
export default {
  state: {
    // 声明数据
    title: '',
    subjects: []
  },
  mutations: {
    setData(state, payload) {
      state.title = payload.title
      state.subjects = payload.subjects
    }
  },
  actions: {
    getData(context, payload) {
      // 发异步请求
      jsonp(`http://api.douban.com/v2/movie/in_theaters`, (res,data) => {
        console.log(data)
      })
    }
  }
}