<template>
  <div class="layout">
    <transition :name="transitionName">
      <keep-alive exclude="redirect,login">
        <router-view class="router" :key="key"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data () {
    return {
    }
  },
  name: 'Layout',
  computed: {
    key () {
      return this.$route.path
    },
    transitionName () {
      return this.$store.state.app.direction
    }
  },
  components: {
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
