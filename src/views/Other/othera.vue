<template>
  <div>
    othera
    <div class="banner-wrapper">
      <slide-banner ref="bannerslide" :interval="5000">
        <div class="slide-item page1">page 1</div>
        <div class="slide-item page2">page 2</div>
        <div class="slide-item page3">page 3</div>
        <div class="slide-item page4">page 4</div>
        <!-- <template v-slot:dots="{dots}">
              <span v-for="(item,index) in dots" :key="index" >{{item?'o':'x'}}</span>
        </template>-->
      </slide-banner>
    </div>
  </div>
</template>

<script>
import slideBanner from '@/components/banner'

export default {
  name: 'Othera',
  props: {},
  data () {
    return {}
  },
  components: {
    slideBanner
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
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
</style>
