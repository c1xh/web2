import Vue from 'vue'
import App from "./App"
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import components from './components/'//加载公共组件
import Mint from 'mint-ui';
import axios from 'axios'
Vue.use(Mint);
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase()) //首字母大写
  Vue.component(`v${name}`, components[key])
  console.log(components[key])
})

const router = new VueRouter({
  mode: 'history',
 routes
})
router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

    if (auth && !isLogin && path !== '/login') {
        return next({ path: '/login' })
    }
    next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
