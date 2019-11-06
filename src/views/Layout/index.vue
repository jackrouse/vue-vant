<template>
  <div class="layout">
    <van-popup
      :style="{ height: '100%',width:'70%'}"
      position="left"
      :lazy-render="false"
      v-model="show"
    >
      <trees
        v-if="show"
        :data="$store.state.permission.routes"
        :treeProps="propsxxx"
        class="menu-container"
      ></trees>
    </van-popup>
    <transition :name="transitionName">
      <keep-alive exclude="redirect,login">
        <router-view class="router" :key="key"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import trees from '@/components/tree'

export default {
  data () {
    return {
      propsxxx: {
        children: 'children',
        label: 'path',
        itemPaddingLeft: 4,
        unit: 'vw'
      },
      treeData: []

    }
  },
  name: 'Layout',
  computed: {
    show: {
      get () {
        return this.$store.state.app.showMenu
      },
      set (flag) {
        if (flag === this.$store.state.app.showMenu) {
          return
        }
        this.$store.commit('app/toggleSlideMenu')
      }
    },
    key () {
      return this.$route.path
    },
    transitionName () {
      return this.$store.state.app.direction
    }
  },
  components: {
    trees
  },
  methods: {
  },
  watch: {
    // '$route' (to, from) {
    //   debugger
    //   const toDepth = to.path.split('/').length
    //   const fromDepth = from.path.split('/').length
    //   this.transitionName = toDepth < fromDepth ? 'back' : 'forward'
    // }
  }
}
</script>

<style lang="scss" scoped>
.layout{
  position: relative;
  width: 100vw;
  height: 100vh;
}
.router {
  width: 100%;
  // height: 100%;
  // overflow: scroll;
  // position: absolute;
  // overflow: hidden !important;
  // overflow-y: auto !important;
  // -webkit-overflow-scrolling: touch;
  // top: 0;
  // right: 0;
  // bottom: 0;
  // left: 0;
  // background-color: #fff;
}
</style>
