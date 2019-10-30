import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import FastClick from 'fastclick'
import './registerServiceWorker'
import './plugins/index'
import vueFeedback from 'vue-feedback'
import './icons' // icon
import './permission' // permission control
import './importTest' // 异步引入测试
import '@/styles/common.scss'

const defaultSettings = {
  vconsole: false
}

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

// import { mockXHR } from '../mock'

// if (process.env.NODE_ENV === 'development') {
//   const mockXHR = require('../mock').mockXHR
//   mockXHR()
// }

// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

FastClick.attach(document.body)
// Vue.use(Vant)
Vue.use(vueFeedback)

if (process.env.NODE_ENV === 'development' && defaultSettings.vconsole) {
  const VConsole = require('vconsole')
  // eslint-disable-next-line
  new VConsole()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
