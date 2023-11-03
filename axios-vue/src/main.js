import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//配置全局http
// Vue.prototype.$http = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
