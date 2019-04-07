import Vue from 'vue'
export function unit (sizeNumber) {
  switch (Vue.prototype.$unitName) {
    case 'rem':
      return sizeNumber / Vue.prototype.$unitSize + Vue.prototype.$unitName
    case 'px':
      return sizeNumber + Vue.prototype.$unitName
  }
}
