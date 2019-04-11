const listExit = function (list) {
  return list && list.length > 0
}

export function model (vue, options = {}) {
  let { components, directives, config } = options

  if (listExit(components)) {
    components.forEach(component => {
      vue.component(component.name, component)
    })
  }

  if (listExit(directives)) {
    directives.forEach(directive => {
      vue.directive(directive.name, directive)
    })
  }

  if (config) {
    vue.prototype.$unitName = config.unitName || 'px'
    vue.prototype.$unitSize = config.unitSize || 1
  }
}

export function install (vue, options = {}) {

}
