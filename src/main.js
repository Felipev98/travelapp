import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue,IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
