import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/custom.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'animate.css';
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue,IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
