import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

// 날짜 계산용 라이브러리
import DateCalc from "./plugins/DateCalc"
Vue.use(DateCalc)

// ckeditor
import CKEditor from 'ckeditor4-vue';
Vue.use( CKEditor );

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
