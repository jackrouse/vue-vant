import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/styles/mixins/mixins.scss'
import vueFeedback from 'vue-feedback'
import './icons' // icon
import './permission' // permission control
import './importTest'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'development') {
  mockXHR()
}

Vue.use(Vant)
Vue.use(vueFeedback)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
