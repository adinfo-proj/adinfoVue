import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';



// 프로그래스 바 1
import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)


// 프로그래스 바 2
import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
