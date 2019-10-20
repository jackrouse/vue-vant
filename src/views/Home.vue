<template>
  <div class="home">
    <van-nav-bar title="标题" @click-left="onClickLeft">
      <van-icon name="wap-nav" slot="left" size="2em"/>
    </van-nav-bar>
      <div class="content">111</div>

    <van-popup v-model="show"
    position="left"
    :style="{ height: '100%',width:'70%'}">
      <trees class="menu-container" :data="treeData" :treeProps="propsxxx"></trees>
    </van-popup>
  </div>
</template>

<script>
// @ is an alias to /src
import trees from '@/components/tree'
export default {
  data () {
    return {
      show: false,
      propsxxx: {
        children: 'children',
        label: 'name',
        itemPaddingLeft: 4,
        unit: 'vw'
      },
      treeData: [{
        name: '一级 1',
        children: [{
          name: '二级 1-1',
          children: [{
            name: '三级 1-1-1'
          }]
        }]
      },
      {
        name: '一级 21',
        children: [{
          name: '二级 2-1',
          children: [{
            name: '三级 2-1-1'
          }]
        },
        {
          name: '一级 21323',
          children: [{
            name: '一级 2'
          }]
        }
        ]
      },
      {
        name: '一级 3',
        children: [{
          name: '二级 3-1',
          children: [{
            name: '三级 3-1-1三级 3-1-1三级 3-1-1'
          }]
        },
        {
          name: '二级 3-2',
          children: [{
            name: '三级 3-2-1'
          }]
        }
        ]
      }
      ]
    }
  },
  name: 'home',
  components: {
    trees
  },
  methods: {
    onClickLeft () {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 375px;
  height: 100%;
  background: red;
}
.menu-container{
  padding-top: 20px;
}
</style>
