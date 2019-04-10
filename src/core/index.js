export function installModule (vue, options = {}) {
  let { components, directives } = options
  components.forEach(component => {
    vue.component(component.name, component)
  })
  directives.forEach(directive => {
    vue.directive(directive.name, directive)
  })
}
