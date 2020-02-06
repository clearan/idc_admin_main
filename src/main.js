import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import {get, post} from '@/utils/request'
import '@/icons' // icon
import '@/utils/global'//全局
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

//将axios封装加入到Vue 原型里 直接this.$http.get调用
Vue.prototype.$http = {
  get,
  post
}
Vue.prototype.url = '//opercgi.qiqifax.com/cgi'

import {mockXHR} from '../mock'
// if (process.env.NODE_ENV === 'production') {
//   mockXHR()
// }

// set ElementUI lang to EN
//Vue.use(ElementUI, {locale})
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
