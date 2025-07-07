const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // config.plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{}])
  },

  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        additionalData: `
            @import "~@/styles/variables.scss";
        `
      }
    }
  }
}
