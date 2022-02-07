import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import VueSession from 'vue-session'
// import axios from 'axios'
// axios.defult.baseURL = "https://192.168.0.57:9999"
var sessionOptions ={
  persist: true
}

Vue.use(VueSession,sessionOptions)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
