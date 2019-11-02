<template>
  <div class="slide" ref="slide">
    <div class="slide-group" ref="slideGroup">
      <slot name="default">
      </slot>
    </div>
    <div v-if="showDot">
      <slot name="dots" :dots="dots">
        <div class="dots">
          <span class="dot" @click="slide.goToPage(index, 0, 400)" :class="{active: item }" :key="index" v-for="(item, index) in dots"></span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
const COMPONENT_NAME = 'slide'
export default {
  name: COMPONENT_NAME,
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 2000
    },
    showDot: {
      type: Boolean,
      default: true
    },
    click: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0,
      slide: null
    }
  },
  mounted () {
    // setTimeout(() => {
    this.$nextTick(() => {
      this._setSlideWidth()
      if (this.showDot) {
        this._initDots()
      }
      this._initSlide()
      if (this.autoPlay) {
        this._play()
      }
    })
    // }, 20)
    window.addEventListener('resize', () => {
      if (!this.slide || !this.slide.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  },
  activated () {
    if (!this.slide) {
      return
    }
    this.slide.enable()
    let pageIndex = this.slide.getCurrentPage().pageX
    // if (pageIndex > this.dots.length) {
    //   pageIndex = pageIndex % this.dots.length
    // }
    this.slide.goToPage(pageIndex, 0, 0)
    // if (this.loop) {
    //   pageIndex -= 1
    // }
    this.currentPageIndex = pageIndex
    if (this.autoPlay) {
      this._play()
    }
  },
  deactivated () {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy () {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  watch: {
    currentPageIndex: {
      handler (n) {
        this.dots = this.dots.map(x => false)
        this.dots[n] = true
      }
    }
  },
  methods: {
    refresh () {
      this._setSlideWidth(true)
      this.slide.refresh()
    },
    _setSlideWidth (isResize) {
      this.children = this.$refs.slideGroup.children
      let width = 0
      let slideWidth = this.$refs.slide.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        // addClass(child, 'slide-item')
        child.classList.add('slide-item')
        child.style.width = slideWidth + 'px'
        width += slideWidth
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth
      }
      this.$refs.slideGroup.style.width = width + 'px'
    },
    _initSlide () {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        eventPassthrough: 'vertical',
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        click: this.click
      })
      this.slide.on('scrollEnd', this._onScrollEnd)
      this.slide.on('touchend', () => {
        if (this.autoPlay) {
          this._play()
        }
      })
      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    _onScrollEnd () {
      console.log('_onScrollEnd')
      let pageIndex = this.slide.getCurrentPage().pageX
      console.log(pageIndex)
      // if (this.loop) {
      // pageIndex -= 1
      // }
      this.currentPageIndex = pageIndex

      if (this.autoPlay) {
        this._play()
      }
    },
    _initDots () {
      const dotsArr = new Array(this.children.length).fill(false)
      dotsArr[this.currentPageIndex] = true
      this.dots = dotsArr
    },
    _play () {
      console.log()
      // let pageIndex = this.slide.getCurrentPage().pageX + 1
      // if (this.loop) {
      //   // pageIndex += 1
      //   console.log('play', pageIndex)
      // } else {
      //   if (pageIndex >= this.dots.length) {
      //     pageIndex = 0
      //   }
      // }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        // this.slide.goToPage(pageIndex, 0, 400)
        this.slide.next()
      }, this.interval)
    }
  }
}
</script>
<style scoped>

.slide {
  min-height: 1px;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.slide .slide-group {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.slide .slide-group .slide-item {
  float: left;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
}
.slide .slide-group .slide-item a {
  display: block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
}
.slide .slide-group .slide-item img {
  display: block;
  width: 100%;
}
.slide .dots {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 24px;
  transform: translateZ(1px);
  text-align: center;
  font-size: 0;
}
.slide .dots .dot,.ignore {
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #666666;
}
.slide .dots .dot.active,.ignore {
  width: 20px;
  border-radius: 5px;
  background: #ffffff;
}

</style>
