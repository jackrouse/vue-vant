<template>
  <div class="dashboard layout-wrap is-page">
    <van-nav-bar
      @click-left="onClickLeft"
      title="首页"
    >
      <van-icon
        name="wap-nav"
        size="2em"
        slot="left"
      />
    </van-nav-bar>

    <div class="content-wrap">
      <router-link to="/about">去详情</router-link>
      <svg-icon
        class-name="bing"
        icon-class="password"
      />

      <svg-icon
        style="width:100px;height:100px;"
        icon-class="tianqi"
      />
      <div
        class="ellipsis cccccccc"
      >sdfsadddddddddddddddddddsdfsadddddddddddddddddddsdfsadddddddddddddddddddsdfsaddddddddddddddddddd</div>
      <div class="now-value">
        <span>当前数值{{$store.state.test.number}}</span>
        <div>
          <!-- <router-link :to="item.path" v-for="(item,index) in $store.state.permission.routes" :key="index">
            {{item.path}}
          </router-link> -->

          <van-button
            v-if="inThisPage"
            v-clickoutside="clickoutside"
            :loading="loading"
            @click="add"
            size="small"
            type="info"
          >异步+1</van-button>

          <van-button
            :loading="loading"
            @click="add2"
            size="small"
            type="info"
          >异步+2</van-button>

          <van-button
            @click="addOne"
            size="small"
            type="primary"
          >+1</van-button>
        </div>
      </div>
      <div>
        12312312
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
      <div>
        aaaaaaaa
        <br />
      </div>
    </div>
    <div class="footer flex is-center" v-fb="{cls:'is-hover'}">我是footer132</div>
  </div>
</template>

<script>
// @ is an alias to /src
import initKeepAlive from '@/mixins/initKeepAlive'
import clickoutside from '@/utils/clickoutside'
import { mapActions, mapMutations, mapState } from 'vuex' // createNamespacedHelpers
// import trees from '@/components/tree'
import { menu } from '@/api/menu.mock.js'
export default {
  name: 'Dashboard',
  mixins: [initKeepAlive],
  data () {
    return {
      value: 1,
      // show: false,
      propsxxx: {
        children: 'children',
        label: 'path',
        itemPaddingLeft: 4,
        unit: 'vw'
      },
      treeData: menu
    }
  },
  directives: {
    clickoutside
  },
  components: {
    // trees
  },
  computed: {
    ...mapState({
      loading: state => state['@@loading'].effects['test/onePlusAsync']
      // show: state => state.app.showMenu
    })
  },
  methods: {
    onClickLeft () {
      // this.show = true
      this.$store.commit('app/toggleSlideMenu')
    },
    add () {
      this.onePlusAsync(this.value)
    },
    add2 () {
      this.onePlusAsync(2)
    },
    addOne () {
      this.onePlus(1)
    },
    // ...mapActions('home', ['initData', 'plusPage', 'initPage']),
    ...mapActions({
      onePlusAsync: 'test/onePlusAsync'
    }),
    ...mapMutations({
      onePlus: 'test/onePlus'
    }),
    clickoutside () {
      this.$toast('outsideclick')
    }
  },
  created () {
    // alert(12334)
  }
}
</script>

<style lang="scss" scoped>
.ellipsis {
  width: 100px;
  @include ellipsis();
}
.menu-container {
  padding-top: 20px;
}
.content {
  width: 375px;
  height: 100%;
  background: red;
}
.footer {
  height: 100px;
  background: red;
  &.is-hover{
    color: blue;
    background: yellow;
  }
}
</style>
