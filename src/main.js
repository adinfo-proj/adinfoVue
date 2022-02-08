import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

// 날짜 계산용 라이브러리
import DateCalc from "./plugins/DateCalc"
Vue.use(DateCalc)

// ckeditor
import CKEditor from 'ckeditor4full-vue';
Vue.use( CKEditor );

//
import ChooseLandImg from './components/dialog/ChooseLandImg.vue';
Vue.use( ChooseLandImg );

//import SendSms from 'solapi'
//Vue.use( SendSms );

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
