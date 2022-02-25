import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //----------------------------------------------------------------------------------
    // 접속자 정보
    //----------------------------------------------------------------------------------
      clntId: ''                               // 로그인 아이디
    , clntNm: ''
    , nickNm: ''
    , mbId: 0
    , adId: 0
    , caId: 0
    , mkId: 0
    , pgId: 0
    , mkCd: ''

    , adGradeCd: sessionStorage.getItem("grade")  // 회원 레벨
    , jwtAuthToken: ''                          // 접속자가 로그인 후 수신받은 TOKEN, (로그인 유효시간)    

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
    , landImg: '' // 이미지 파일
    , landImgNm: '' // 이미지 이름 
    , lendchooseObj: []
    , lendchoose: ''

    //----------------------------------------------------------------------------------
    // 랜딩페이지 제작(0802) - 폼 추가 전역변수 
    //----------------------------------------------------------------------------------
    , inputObj: []  //
    , secForm: null
    , company: ''   // 회사명
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
