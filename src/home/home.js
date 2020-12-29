import Vue from 'vue'
import App2 from '../App2.vue'
import router from '../router/home'
import store from '../store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '../axios'
Vue.prototype.$axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App2)
}).$mount('#app2')