const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ElementUiResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // config.plugin('BundleAnalyzerPlugin')
    //   .use(BundleAnalyzerPlugin, [{}])

    // 添加 ComponentsPlugin
    config.plugin('ComponentsPlugin')
      .use(ComponentsPlugin({
        resolvers: [ElementUiResolver()],
        dirs: ['src/components/base'], // ✅ 你希望自动扫描的目录
        directoryAsNamespace: true,
        deep: true,
        dts: false
      }))
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
