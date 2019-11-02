<template>
  <div>
    otherb
    <van-pull-refresh
      @refresh="onRefresh"
      v-model="isLoading"
    >
      <p>刷新次数: {{ count }}</p>
      <van-list
        :finished="finished"
        @load="onLoad"
        finished-text="没有更多了"
        v-model="loading"
      >
        <!-- <van-cell
        :key="item"
        :title="item"
        v-for="item in list"
        />-->
        <div
          :key="index"
          class="item"
          v-for="(item,index) in list"
        >
          <div></div>
          <div class="content" v-html="item.content"></div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getList } from '@/api/article'
export default {
  name: 'otherb',
  props: {},
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      count: 0,
      isLoading: false,
      listQuery: {
        limit: 15,
        page: 1
      },
      total: 0
    }
  },
  created () {
    // getList(this.listQuery)
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  mounted () {},
  methods: {
    getList () {
      return getList(this.listQuery)
        .then(res => {
          this.listQuery.page++
          this.list = this.list.concat(res.data.items)

          this.loading = false

          if (res.data.items.length < this.listQuery.limit) {
            this.finished = true
          }
          return Promise.resolve('update')
        })
    },
    onLoad () {
      // 异步更新数据
      this.getList()
    },
    onRefresh () {
      // setTimeout(() => {
      //   this.$toast('刷新成功')
      //   this.isLoading = false
      //   this.count++
      // }, 2000)
      this.listQuery.page = 1
      this.list = []
      this.getList()
        .then(res => {
          console.log(res)
          this.$toast('刷新成功')
          this.isLoading = false
          this.count++
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  // height: 100px;
  // text-align: center;
  // line-height: 100px;
}
</style>
