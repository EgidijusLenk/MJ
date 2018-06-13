// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueAnalytics from 'vue-analytics'
const isProd = process.env.NODE_ENV === 'production'
Vue.use(VueAnalytics, {
  id: 'UA-115863654-2',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})
Vue.use(BootstrapVue)
Vue.use(Meta)
Vue.config.productionTip = false
Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
