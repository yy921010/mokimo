import Vue from 'vue'
import App from './App.vue'
import vineoUI from './index'

Vue.config.productionTip = false
Vue.use(vineoUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
