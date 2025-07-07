const path = require('path')

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    'lodash',
    [
      'component',
      {
        libraryName: 'element-ui',
        ext: '.scss',
        styleLibrary: {
          name: '~node_modules\\element-ui\\packages\\theme-chalk\\src'.split('\\').join(path.sep), // same with styleLibraryName
          base: true,  // if theme package has a base.css
          path: '[module].scss',  // the style path. e.g. module Alert =>  alert/index.css
          mixin: true  // if theme-package not found css file, then use [libraryName]'s css file
        }
      }
    ]
  ]
}
