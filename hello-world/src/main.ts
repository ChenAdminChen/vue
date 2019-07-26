import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';



import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/theme/default.css';


import axios from 'axios';

Vue.use(VueMaterial);

// axios url: https://github.com/axios/axios?source=post_page

Vue.prototype.Axios = axios;

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
