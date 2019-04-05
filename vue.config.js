const path = require('path')
// 拼接路径
function resolve (dir) {
  return path.join(__dirname, dir)
}

const baseUrl = '/'

module.exports = {
  publicPath: baseUrl,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `@import '~@/assets/theme-forest/src/index.scss';`
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
