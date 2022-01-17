import Vue from 'vue'
import App from './App'
import VueMeta from 'vue-meta'


import router from './router'
import './assets/css/app.css'

import VMask from 'v-mask'

Vue.use(VMask)
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({

  router,

  render: h => h(App),
}).$mount('#app')
