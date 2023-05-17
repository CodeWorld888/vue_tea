import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import '@/assets/css/common.css'
import '@/assets/js/flexible' 
import '@/assets/css/iconfont.css'

//引入ly-tab插件
import LyTab from 'ly-tab'
Vue.use(LyTab)

//引入mint-ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')