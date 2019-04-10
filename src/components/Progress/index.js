import Process from './src/main'
/* istanbul ignore next */
Process.install = function (Vue) {
  Vue.component(Process.name, Process)
}

export default Process
