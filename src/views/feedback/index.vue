<template>
  <div class="feedback layout-wrap is-page">
    <van-nav-bar
      title="feedback"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1) || $router.push('/')"
    />

    <div class="content-wrap">

      <div class="form-label required">请选择问题类型</div>

      <div class="btn-item" @click="handleClick(item)" v-fb="{cls:'is-hover'}" :class="{'is-checked':item.checked}" v-for="item in qaList" :key="item.value">
        {{item.label}}
      </div>

      <div class="form-label required">问题描述</div>

      <div class="textarea-wrap">
        <textarea class="textarea" name="" id="" rows="6" placeholder="请填写你们的宝贵意见">

        </textarea>
      </div>

      <div class="btn-submit" v-fb="{cls:'is-hover'}">提交</div>

      <div class="btn-submit plain" v-fb="{cls:'is-hover'}">联系客服</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
  props: {},
  data () {
    return {
      qaList: [
        {
          label: '眼镜少出或未出',
          value: 1
        },
        {
          label: '已归还，订单未结束',
          value: 2
        },
        {
          label: '取镜异常，无法使用',
          value: 3
        }, {
          label: '其他问题',
          value: 4
        }

      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleClick (item) {
      this.qaList = this.qaList.map(x => {
        x.checked = false
        return x
      })
      this.$set(item, 'checked', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.form-label{
  height: 60px;
  margin-top:20px;
  color: #333333;
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 32px;
  &.required{
    &::before{
      content:'*';
      flex:none;
      color: rgb(224, 7, 7);
      padding-right: 5px;
    }
  }
}
.btn-item{
  box-shadow:1px 1px 9px #e8e8e8;
  margin: 20px 20px 0;
  text-align: center;
  background: #ffffff;
  line-height: 30px;
  padding: 20px;
  color: #666666;
  border-radius: 10px;
  font-size: 28px;
  border: 1px solid transparent;
  &.is-hover{
    opacity: 0.8;
  }
  &:first-child{
    // margin-top:0;
  }
  &.is-checked{
    color: #4b9aff;
    border: 1px solid #4b9aff;
  }
}
.btn-submit{
  // background:linear-gradient(to right, #0de4d2 0%,#08c1e5 100%);
  background:linear-gradient(to right, #7bb3fc 0%,#008ef0 100%);
  height: 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 32px;
  color: #ffffff;
  margin: 40px 20px 0;
  &.is-hover{
    // background:linear-gradient(to right, #0cc3b4 0%,#07a3c2 100%);
    opacity: 0.8;
  }
  &.plain{
    border:1px solid #4b9aff;
    color: #4b9aff;
    background: #ebf1f9;
  }
}
.textarea{
  &-wrap{
    margin: 20px;
    box-shadow:1px 1px 9px #e8e8e8;
    padding: 20px;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 20px;
  }
  resize:none;
  background: #ffffff;
  margin: 0;
  padding: 0;
  display: block;
  outline: 0;
  border: 0;
  width: 100%;
  // padding: 20px;
  font-size: 28px;
  line-height: 38px;
}
</style>
