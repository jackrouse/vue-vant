<template>
  <div class="dashboard">
    <van-nav-bar title="首页" @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="left" size="2em" />
    </van-nav-bar>
    <van-popup v-model="show" position="left" :style="{ height: '100%',width:'70%'}">
      <trees class="menu-container" :data="treeData" :treeProps="propsxxx"></trees>
    </van-popup>
    <div>
      <router-link to="/about">234</router-link>
      <svg-icon icon-class="password" class-name="bing"/>
      <div class="ellipsis cccccccc">sdfsadddddddddddddddddddsdfsadddddddddddddddddddsdfsadddddddddddddddddddsdfsaddddddddddddddddddd</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import trees from '@/components/tree'
import { menu } from '@/api/menu.mock.js'
export default {
  name: 'Dashboard',
  data () {
    return {
      show: false,
      propsxxx: {
        children: 'children',
        label: 'title',
        itemPaddingLeft: 4,
        unit: 'vw'
      },
      treeData: menu
    }
  },
  components: {
    trees
  },
  methods: {
    onClickLeft () {
      this.show = true
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.ellipsis{
  width: 100px;
  @include ellipsis()
}
.menu-container {
  padding-top: 20px;
}
.content {
  width: 375px;
  height: 100%;
  background: red;
}

</style>
