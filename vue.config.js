const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        // 全局引入变量和 mixin
        prependData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
  }
}
