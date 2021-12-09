import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    //----------------------------------------------------------------------------------
    // 접속자 정보
    //----------------------------------------------------------------------------------
      mbId: 'MB_001'
    , mbNm: ''                            // 회원사 명
    , userLevel: '02'
    , adGradeCd: '01'                     // 회원 레벨
    , token: ''                           // 접속자가 로그인 후 수신받은 TOKEN    
    , adId: ''                            // 광고주 ID
    , operId: 'db@dbfactory.kr'           // 로그인 아이디

    , headerTopTitle: "데이터 센터"
    , headerMidTitle: "신규 캠페인 등록"


    //----------------------------------------------------------------------------------
    // 지역설정 변수 (지역추가용)
    //----------------------------------------------------------------------------------
    , addAreaListObj: []
    , removeAreaListObj: []

  },
  mutations: {},
  actions: {},
  modules: {},
});
