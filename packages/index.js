import Button from './Button'
import Input from './Input'
import Icon from './Icon'
import Time from './Time'
import Progress from './Progress'
import MokDrag from './directive/drag'
const components = [
  Button,
  Input,
  Icon,
  Time,
  Progress
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$unitName = opts.unitName || 'rem'
  Vue.prototype.$unitSize = opts.unitSize || 1
  Vue.directive('mokdrag', MokDrag)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  name: 'mokimo',
  version: '0.0.1',
  Button,
  Input,
  install,
  Icon,
  Time,
  Progress
}
