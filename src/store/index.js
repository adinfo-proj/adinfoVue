import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //----------------------------------------------------------------------------------
    // 접속자 정보
    //----------------------------------------------------------------------------------
      mbId: '20000'
    , adGradeCd: '02'                       // 회원 레벨
    , jwtAuthToken: ''                    // 접속자가 로그인 후 수신받은 TOKEN, (로그인 유효시간)
    , emailId: ''                         // 로그인 아이디

    , headerTopTitle: "데이터 센터"
    , headerMidTitle: "신규 캠페인 등록"

    //----------------------------------------------------------------------------------
    // 지역설정 변수 (지역추가용)
    //----------------------------------------------------------------------------------
    , addAreaListObj: []
    , removeAreaListObj: []

  },
  getters: {
    jwtAuthValid: function() {
      console.log("jwtAuthValid : [" + this.jwtAuthToken + "]")
      if ( (this.jwtAuthToken !== "") && (this.jwtAuthToken !== null) && (this.jwtAuthToken !== 'undefined')) {
        console.log("jwtAuthValid is true")
        return true
      }
      else {
        console.log("jwtAuthValid is false")
        return false
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
