<template>
  <div class="layout">
    <transition name="router-fade" mode="out-in">
      <keep-alive exclude="redirect">
        <router-view :key="key"/>
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
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>
