<template>
  <div class="tree-container">
    <ul class="tree-list-main" v-for="(item,index) in data" :key="index">
      <tree-item :data="item" v-bind="$attrs"></tree-item>
    </ul>
  </div>
</template>

<script>
import treeItem from './tree-item'
export default {
  componentName: 'TreeList',
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  data () {
    return {
      allClose: true
    }
  },
  provide () {
    return {
      rootMenu: this
    }
  },
  components: {
    treeItem
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.tree-container{
  // width: 450px;
}
</style>
