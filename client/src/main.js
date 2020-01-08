import Vue from 'vue';
import App from './App.vue'; 

import Routes from './routes.js';
import Store from './store.js';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: Routes,
  store: Store,
  vuetify
}).$mount('#app')
