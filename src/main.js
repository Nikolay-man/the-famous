import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/styles/styles.scss'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
    store,
}).$mount('#app')
