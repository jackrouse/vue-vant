import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/styles/mixins/mixins.scss'
import vueFeedback from 'vue-feedback'

Vue.use(Vant)
Vue.use(vueFeedback)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
