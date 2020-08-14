import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueResource from "vue-resource"
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueResource);
Vue.use(VueClipboard)

