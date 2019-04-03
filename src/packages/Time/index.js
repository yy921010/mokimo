import Time from './src/main'
/* istanbul ignore next */
Time.install = function (Vue) {
  Vue.component(Time.name, Time)
}

export default Time
