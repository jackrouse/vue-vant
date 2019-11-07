// 缓存页面部分元素初始化
export default {
  data () {
    return {
      inThisPage: true
    }
  },
  deactivated () {
    this.inThisPage = false
  },
  activated () {
    this.inThisPage = true
  }
}
