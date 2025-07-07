import Vue from 'vue'
import i18n from './i18n' //国际语言配置早点引入，同步执行，导致报错
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import locale from 'element-ui/lib/locale'
// 或其他语言：
import lang from 'element-ui/lib/locale/lang/en'  // 英文

// 配置语言
locale.use(lang)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
