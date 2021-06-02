import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store'
import socket from './utils/socket'

import '@/assets/css/yuri.css';

socket.on('connet',()=>{
  console.log('출입')
})
socket.on('disconnect',()=>{
  console.log('퇴장')
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
