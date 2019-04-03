import Button from './packages/Button'
import Input from './packages/Input'
import Icon from './packages/Icon'
import Time from './packages/Time'
const components = [
  Button,
  Input,
  Icon,
  Time
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default {
  name: 'Moko',
  version: '0.0.1',
  Button,
  Input,
  install
}
