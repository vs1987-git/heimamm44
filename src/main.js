import Vue from 'vue'
import App from './App.vue'
//导入接收路由
import router from './router/router.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载
  router //router: router
}).$mount('#app')
