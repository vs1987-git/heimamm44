import Vue from 'vue'
import App from './App.vue'
//导入接收路由
import router from './router/router.js'

// 导入elementUi
import ElementUI from 'element-ui'
// 导入elementUI 样式
import 'element-ui/lib/theme-chalk/index.css';

//注册一下
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载
  router //router: router
}).$mount('#app')
