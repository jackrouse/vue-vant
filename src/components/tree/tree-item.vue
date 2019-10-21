<template>
    <li class="tree-item">
        <div class="tree-name" @click="toggle" v-fb="{cls:'is-hover'}" :class="{'is-active':isActive}" :style="[paddingStyle]">
            <!-- <span v-if="hasChild" >{{isOpen ? '🌚' : '🌝'}}</span> -->
            <van-icon v-if="hasChild" :name="isOpen?'arrow-down':'arrow'" />
            <span class="tree-span" v-if="hasChild">{{ data[treeProps.label] }}</span>

            <!-- 末节点 -->
            <span v-else  class="tree-span" :style="{'padding-left':treeProps.itemPaddingLeft+treeProps.unit}">{{ data[treeProps.label] }}</span>
        </div>
        <collapse-transition>
          <!-- <ul class="tree-list-sub" :class="{'is-open':isOpen}" v-if="hasChild">
              <tree-item v-for="(item, index) in data[treeProps.children]" :data="item" :key="index" :treeProps="treeProps" ></tree-item>
          </ul> -->
          <ul class="tree-list-sub" v-show="isOpen" v-if="hasChild">
              <tree-item v-for="(item, index) in data[treeProps.children]" :data="item" :key="index" :treeProps="treeProps" ></tree-item>
          </ul>
        </collapse-transition>
    </li>
</template>

<script>
import collapseTransition from '../collapse-transition/index'
export default {
  name: 'TreeItem', // 递归组件必须有name
  componentName: 'TreeItem',
  inject: ['rootMenu'],
  components: { collapseTransition },
  props: {
    data: {
      type: [Object, Array], // 多个可能的类型
      required: true

    },
    // label、children 默认值
    treeProps: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label',
        itemPaddingLeft: 20,
        unit: 'px'
      })
    }
  },
  data () {
    return {
      isOpen: false,
      isActive: false
    }
  },
  computed: {
    // 判断当前级别是否还有children
    hasChild () {
      return this.data[this.treeProps.children] && this.data[this.treeProps.children].length
    },
    paddingStyle () {
      let padding = this.treeProps.itemPaddingLeft
      let parent = this.$parent

      while (parent && parent.$options.componentName !== 'TreeList') {
        if (parent.$options.componentName === 'TreeItem') {
          padding += this.treeProps.itemPaddingLeft
        }
        parent = parent.$parent
      }

      return { paddingLeft: padding + this.treeProps.unit }
    }
  },
  methods: {
    // 点击子菜单也要判断是否有children，有就展开
    toggle () {
      console.log(this.rootMenu)
      // this.rootMenu.$children.forEach(x => {
      //   x.close()
      // })
      console.log()
      if (this.hasChild) {
        this.isOpen = !this.isOpen
      } else {
        // this.isActive = true
      }
    },
    close () {
      this.isOpen = false
    },
    open () {
      this.isOpen = true
    }
    // silibingsClose () {
    //   let parent = this.$parent
    //   while (parent && parent.$options.componentName !== 'TreeList') {
    //     debugger
    //     if (parent.$options.componentName === 'TreeItem') {
    //       parent = parent.$parent
    //     }
    //   }
    //   console.log(parent)
    // }
  },
  created () {
    // debugger
    let parent = this.$parent
    this.isActive = this.$route.meta.name === this.data.title
    while (parent && parent.$options.componentName !== 'TreeList') {
      if (parent.$options.componentName === 'TreeItem') {
        if (this.isActive) {
          parent.open()
        } else {
          // parent.close()
        }
        parent = parent.$parent
      }
    }
  },
  mounted () {
    console.log()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/mixins.scss';

.tree-item{
  text-align: left;
}
.tree-name{
  display: flex;
  color: #323233;
  font-size: 16px;
  height: 40px;
  font-weight: bold;
  align-items: center;
  padding-right: 20px;
  &.is-hover{
    background-color: #ecf5ff;
  }
  &.is-active{
    color:#409eff;
    background-color: #ecf5ff;
  }
}
.tree-span{
  @include ellipsis(1);
}
.tree-list-sub{
  // padding-left: 20px;
  // overflow: hidden;
  // max-height: 0;
  // -webkit-transition: max-height .3s;
  // transition: max-height .3s;
  // &.is-open{
  //   max-height: 1000px;
  //   -webkit-transition: max-height .5s;
  //   transition: max-height .5s
  // }
}
/* ul {
    list-style: none;
    margin: 10px 0;
    padding-left: 20px;
}
li {
      color: #000;
}
li > span {
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
} */
</style>
