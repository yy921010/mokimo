import Vue from 'vue'
import App from './App.vue'
import mokimo from '@/components'
import router from './router'
Vue.config.productionTip = false
Vue.use(mokimo)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
