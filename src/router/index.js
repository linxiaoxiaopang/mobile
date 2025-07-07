import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/',
    redirect: '/demo'
  },
  {
    name: 'demo',
    path: '/demo',
    component: () => import('@/views/demo')
  }
]

export default new Router({
  mode:  'hash',
  scrollBehavior() {
    const scroller = document.querySelector('.app-main-scroller') //滚动到顶部
    if(scroller) {
      scroller.scrollTo(0, 0)
    }
    return {
      x: 0,
      y: 0
    }
  },
  routes
})
