import Poster from './src/main'
/* istanbul ignore next */
Poster.install = function (Vue) {
  Vue.component(Poster.name, Poster)
}

export default Poster
