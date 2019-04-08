import Vue from 'vue'
import App from './App.vue'
import vineoUI from '@packages'

Vue.config.productionTip = false
Vue.use(vineoUI, {
  unitName: 'rem',
  unitSize: 16
})

new Vue({
  render: h => h(App)
}).$mount('#app')
