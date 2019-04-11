import Button from './Button'
import Input from './Input'
import Icon from './Icon'
import Time from './Time'
import Progress from './Progress'
import Poster from './Poster'
import MokDrag from '../directives/drag'
import { model } from '../core'

export default {
  name: 'mokimo',
  version: '0.0.1',
  Button,
  Input,
  Icon,
  Time,
  Progress,
  Poster,
  install (Vue, config = {}) {
    model(Vue, {
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
      config
    })
  }
}
