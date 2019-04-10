import Button from './Button'
import Input from './Input'
import Icon from './Icon'
import Time from './Time'
import Progress from './Progress'
import Poster from './Poster'
import MokDrag from '../directives/drag'
import { installModule } from '../core'

const setGlobalOption = (Vue, opts) => {
  let { unit } = opts
  Vue.prototype.$unitName = 'rem'
  Vue.prototype.$unitSize = 1
  if (unit) {
    Vue.prototype.$unitName = unit.name || 'rem'
    Vue.prototype.$unitSize = unit.size || 1
  }
}

const module = {
  components: [
    Button,
    Input,
    Icon,
    Time,
    Progress,
    Poster
  ],
  directives: [
    MokDrag
  ],
  filters: []
}
export default {
  name: 'mokimo',
  version: '0.0.1',
  Button,
  Input,
  Icon,
  Time,
  Progress,
  Poster,
  install (Vue, opts = {}) {
    installModule(Vue, module)
    setGlobalOption(Vue, opts)
  }
}
