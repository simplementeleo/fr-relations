import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/css/animations.css'
// import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/js/owl.carousel.min.js'
import './assets/js/server.js'

// import './assets/css/cssmap-themes.css'
// import './assets/css/cssmap-france-departments.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
