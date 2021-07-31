import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/css/main.css'
import VIcon from 'vue-tailwind-icons';

Vue.config.productionTip = false
Vue.use(VIcon)
Vue.use(VIcon, { set: 'outline' })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

