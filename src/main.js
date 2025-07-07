import Vue from 'vue'
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
  router,
  store,
  render: h => h(App)
}).$mount('#app')
