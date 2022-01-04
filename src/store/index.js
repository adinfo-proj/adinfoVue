import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //----------------------------------------------------------------------------------
    // 접속자 정보
    //----------------------------------------------------------------------------------
      mbId: 20000
    , adId: 2000
    , adGradeCd: localStorage.getItem("grade")  // 회원 레벨
    , jwtAuthToken: ''                          // 접속자가 로그인 후 수신받은 TOKEN, (로그인 유효시간)
    , emailId: ''                               // 로그인 아이디

    , headerTopTitle: "데이터 센터"
    , headerMidTitle: "신규 캠페인 등록"

    //----------------------------------------------------------------------------------
    // 지역설정 변수 (지역추가용)
    //----------------------------------------------------------------------------------
    , addAreaListObj: []
    , removeAreaListObj: []

    //----------------------------------------------------------------------------------
    // 랜딩페이지 제작(0802) - 이미지 추가 전역변수 
    //----------------------------------------------------------------------------------
    , screenObj: ['','','','','','','','','','']      // 화면 전체 ...
    , screenList: '' //
    , landImg01: '' // 이미지 파일
    , landImgNm01: '' // 이미지 이름 
    , lendchooseObj: []
    , lendchoose: ''
    , viewText: ''  //// 텍스트 내용 추가 시 태그 저장 변수


  },
  getters: {
    jwtAuthValid: function() {
      if ( (this.jwtAuthToken !== "") && (this.jwtAuthToken !== null) && (this.jwtAuthToken !== 'undefined')) {
        return true
      }
      else {
        return false
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
