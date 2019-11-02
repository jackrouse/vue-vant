<template>
  <div>
    other
    <div class="banner-wrapper">
      <slide-banner ref="bannerslide">
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
  name: 'Other',
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
</style>
