const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // config.plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{}])
  }
}
