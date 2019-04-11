import Vue from 'vue'
import App from './App.vue'
import mokimo from '@/components'
import '@/assets/styles/index.scss'
Vue.config.productionTip = false
Vue.use(mokimo)

new Vue({
  render: h => h(App)
}).$mount('#app')
