import Vue from 'vue'
import iconSymbol from 'remixicon/fonts/remixicon.symbol.svg'
export function unit (sizeNumber) {
  switch (Vue.prototype.$unitName) {
    case 'rem':
      return sizeNumber / Vue.prototype.$unitSize + Vue.prototype.$unitName
    case 'px':
      return sizeNumber + Vue.prototype.$unitName
  }
}

export function getIcon (iconName, iconType) {
  return `${iconSymbol}#remixicon-${iconName}-${iconType}`
}
