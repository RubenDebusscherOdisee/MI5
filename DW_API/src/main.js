// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import {VueTabs, VTab} from 'vue-nav-tabs'
// import 'vue-nav-tabs/themes/vue-tabs.css'
import App from './App'
import router from './router'
// Vue.use(VueTabs)
import VModal from 'vue-js-modal'
import Spinner from 'vue-spinkit'

Vue.component('Spinner', Spinner)

Vue.use(VModal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
