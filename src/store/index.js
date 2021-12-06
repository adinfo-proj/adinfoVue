import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      mbId: 'MB_001'
    , operId: 'db@dbfactory.kr'
    , adGradeCd: '01'

    , headerTopTitle: "데이터 센터"
    , headerMidTitle: "신규 캠페인 등록"
  },
  mutations: {},
  actions: {},
  modules: {},
});
