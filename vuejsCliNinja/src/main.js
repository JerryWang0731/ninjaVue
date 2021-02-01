import Vue from 'vue'
import App from './App.vue'
import Ninja from './Ninja.vue'

Vue.component('ninja', Ninja)


new Vue({
  el: '#app',
  render: h => h(App)
})
