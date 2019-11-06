<template>
  <div class="login-container">
    <canvas class="canvas"></canvas>
    <div
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <!-- <div prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </div>

        <div prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
      </div>-->

      <van-cell-group>
        <van-field
          @click-right-icon="$toast('question')"
          clearable
          label="用户名"
          placeholder="请输入用户名"
          ref="username"
          required
          right-icon="question-o"
          v-model="$v.loginForm.username.$model"
          :error="$v.loginForm.username.$error"
          :error-message="!$v.loginForm.username.required?
          '请输入用户名':!($v.loginForm.username.minLength && $v.loginForm.username.maxLength)?
          '长度需在5-20之间':''"
        >
          <template slot="left-icon">
            <svg-icon icon-class="user" />
          </template>
        </van-field>

        <van-field
          :key="passwordType"
          :type="passwordType"
          @blur="capsTooltip = false"
          @keyup.enter.native="handleLogin"
          label="密码"
          placeholder="请输入密码"
          ref="password"
          required
          v-model="$v.loginForm.password.$model"
          :error="$v.loginForm.password.$error"
          :error-message="!$v.loginForm.password.required?
          '请输入密码':!($v.loginForm.password.minLength && $v.loginForm.password.maxLength)?
          '长度需在5-20之间':''"
        >
          <template slot="left-icon">
            <svg-icon icon-class="password" />
          </template>
          <span
            @click="showPwd"
            class="show-pwd"
            slot="right-icon"
          >
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </van-field>
      </van-cell-group>
      <div class="login-button">
        <van-button
          :disabled="$v.$invalid"
          :loading="loading"
          @click.prevent="handleLogin"
          block
          type="primary"
        >Login</van-button>
      </div>

      <!-- <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>

        <button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </button>
      </div>-->
    </div>
  </div>
</template>

<script>

import {
  required,
  minLength,
  maxLength } from 'vuelidate/lib/validators'
// import SocialSign from './components/SocialSignin'

export default {
  name: 'Login',
  // components: { SocialSign },
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  validations: {
    loginForm: {
      username: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20)
      },
      password: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20)
      }
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created () {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted () {
    // if (this.$store.state.app.isFirstLogin) {
    //   import('@/assets/js/login-canvas')
    //     .then(() => {
    //       this.$store.commit('app/SET_LOGIN_FIRST', false)
    //     })
    // }

    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed () {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    // checkCapslock ({ shiftKey, key } = {}) {
    //   if (key && key.length === 1) {
    //     if (shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')) {
    //       this.capsTooltip = true
    //     } else {
    //       this.capsTooltip = false
    //     }
    //   }
    //   if (key === 'CapsLock' && this.capsTooltip === true) {
    //     this.capsTooltip = false
    //   }
    // },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin () {
      // console.log('submit!')
      // this.$v.$touch()
      // if (this.$v.$invalid) {
      //   // this.submitStatus = 'ERROR'
      //   this.$toast('请检查表单填写情况')
      //   return
      // }
      this.loading = true
      this.$store.dispatch('user/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
        })
        .catch((err) => {
          console.log(err)
          this.$toast(err.message)
          this.loading = false
        })
    },
    getOtherQuery (query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
}

.login-form {
  // margin-top: 30%;
  position: absolute;
  top: 16%;
  // transform: translateY(-50%);
  width: 100%;
}
.login-button {
  margin-top: 30px;
  display: block;
}
.canvas {
  width: 100%;
  height: 100%;
  position: absolute;
}

.title {
  text-align: center;
  font-size: 40px;
}
</style>
