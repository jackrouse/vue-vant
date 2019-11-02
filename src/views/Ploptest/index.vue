<template>
  <div class="page">
    <div class="slide-banner">
      <div class="banner-wrapper">

          <slide-banner ref="bannerslide">
            <div class="slide-item page1">page 1</div>
            <div class="slide-item page2">page 2</div>
            <div class="slide-item page3">page 3</div>
            <div class="slide-item page4">page 4</div>
            <template #dots="{dots}">
              <div class="dots-wrap">
                <span v-for="(item,index) in dots" :key="index">{{item?'o':'x'}}</span>
              </div>
            </template>
          </slide-banner>

      </div>
      <div class="btn-wrap">
        <button
          @click="nextPage"
          class="next"
        >nextPage</button>
        <button
          @click="prePage"
          class="prev"
        >prePage</button>
      </div>
    </div>

    <section
      class="scroll_container"
      id="scroll_section"
    >
      <div class="markdown">
        <h3 id="q1-">Q1: 怎么获得红包？</h3>
        <ul>
          <li>通过邀请好友获得</li>
          <li>在下单返红包的商家下单获得</li>
          <li>抢微信朋友分享的红包获得</li>
        </ul>
        <h3 id="q2-">Q2: 红包可以做什么？</h3>
        <p>可以抵扣在线支付时的实际支付金额。</p>
        <h3 id="q3-">Q3: 红包的门槛金额按照什么金额计算？</h3>
        <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
        <h3 id="q4-">Q4: 一个红包能拆开多次使用吗？</h3>
        <p>不能，一个红包只能一次性使用，不能分开使用。</p>
        <h3 id="q5-">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3>
        <p>会的，订单无效后红包会自动返还到您的账户里。</p>
        <h3 id="q6-">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
        <p>在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。</p>
        <h3 id="q7-">Q7: 邀请好友了，为什么没获得红包？</h3>
        <p>先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
        <h3 id="q8-">Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</h3>
        <ul>
          <li>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</li>
          <li>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</li>
        </ul>
        <h3 id="q9-">Q9: 互斥红包怎么使用？</h3>
        <ul>
          <li>互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</li>
        </ul>
        <h3 id="q10-">Q10: 返红包活动， 红包领取规则是什么?</h3>
        <ul>
          <li>同一个手机号一天限领取三个。</li>
          <li>同一注册用户一天限领取三个。</li>
          <li>注册用户红包直接发送至用户账户里。</li>
          <li>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</li>
          <li>红包的使用周期为1周，自红包发放的第2天开始计算。</li>
          <li>同一个手机号一天最多使用两个红包。</li>
          <li>未收到红包短信的用户注意查看手机里的拦截短信。</li>
          <li>有任何问题请拨打客服电话：10105757。</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-new */
import BScroll from 'better-scroll'
import slideBanner from '@/components/banner'
export default {
  name: 'Ploptest',
  props: {},
  data () {
    return {}
  },
  components: {
    slideBanner
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      new BScroll('#scroll_section', {
        deceleration: 0.001,
        bounce: true,
        swipeTime: 1800,
        click: true
      })
    })
  },
  methods: {
    nextPage () {
      this.$refs.bannerslide.slide.next()
    },
    prePage () {
      this.$refs.bannerslide.slide.prev()
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  // position: fixed;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  // padding-top: 80px;
  // z-index: 203;
  // background-color: #fff;
  // p,
  // span {
  //   font-family: Helvetica Neue, Tahoma, Arial;
  // }
}

.dots-wrap{
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.slide-banner-scroll{
  height: 600px;
  overflow:hidden;

}
.slide-banner-wrapper{
  height: 100%;
  width: 2000px;
  white-space:nowrap;
  font-size:0;
}
.slide-item{
  display: inline-block;
  height: 100%;
  width: 100%;
  line-height: 200px;
  text-align: center;
  font-size: 26px;
  transform: translate3d(0,0,0);
  backface-visibility: hidden;
  &.page1{
    background-color: #95B8D1;
  }
  &.page2{
    background-color: #DDA789;
  }
  &.page3{
    background-color: #C3D899;

  }
  &.page4{
    background-color: #F2D4A7;
  }
}
.scroll_container {
  width: 100%;
  height: 800px;
  overflow: hidden;
}
.markdown {
  padding-bottom: 20px;
  font-size: 28px;
  color: #666666;
  padding: 0 20px 20px;
  h3 {
    line-height: 40px;
  }
  p,
  li {
    font-size: 28px;
    color: #666666;
    line-height: 36px;
  }
}
</style>
