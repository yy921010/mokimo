import Button from './packages/Button'
import Input from './packages/Input'
import Icon from './packages/Icon'
import Time from './packages/Time'
import Process from './packages/Process'
/**
 * theme
 */
import '@/assets/theme/index.scss'
import 'remixicon/fonts/remixicon.css'
const components = [
  Button,
  Input,
  Icon,
  Time,
  Process
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  name: 'mokimo',
  version: '0.0.1',
  Button,
  Input,
  install
}
