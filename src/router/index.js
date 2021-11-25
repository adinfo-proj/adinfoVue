import Vue from "vue";
import VueRouter from "vue-router";
import MENU_0000 from "../views/agency/MENU_0000.vue";
import MENU_0101 from "../views/agency/MENU_0101.vue";
import MENU_0102 from "../views/agency/MENU_0102.vue";
import MENU_0103 from "../views/agency/MENU_0103.vue";
import MENU_0104 from "../views/agency/MENU_0104.vue";
import MENU_0201 from "../views/agency/MENU_0201.vue";
import MENU_0202 from "../views/agency/MENU_0202.vue";
import MENU_0203 from "../views/agency/MENU_0203.vue";
import MENU_0204 from "../views/agency/MENU_0204.vue";
import MENU_0205 from "../views/agency/MENU_0205.vue";
import MENU_0206 from "../views/agency/MENU_0206.vue";
import MENU_0301 from "../views/agency/MENU_0301.vue";
import MENU_0302 from "../views/agency/MENU_0303.vue";
import MENU_0303 from "../views/agency/MENU_0302.vue";

// import MENU_0205 from "../views/agency/MENU_0205.vue";
// import MENU_0205 from "../views/agency/MENU_0205.vue";
// import MENU_0205 from "../views/agency/MENU_0205.vue";
// import MENU_0205 from "../views/agency/MENU_0205.vue";


Vue.use(VueRouter);

const routes = [ // 권한에 상관없이 모두 추가할 것, 추후 권한에 따른 display: block으로 변경 예정
  {// 메인페이지
    path: "/",
    name: "MENU_0000",
    component: MENU_0000,
  },
  {// 메인페이지
    path: "/MENU_0000",
    name: "MENU_0000",
    component: MENU_0000,
  },
  {// 일자별 통계
    path: "/MENU_0101",
    name: "MENU_0101",
    component: MENU_0101,
  },
  {// 캠페인별 통계
    path: "/MENU_0102",
    name: "MENU_0102",
    component: MENU_0102,
  },
  {// 그룹별 통계
    path: "/MENU_0103",
    name: "MENU_0103",
    component: MENU_0103,
  },
  {// 마케터별 통계
    path: "/MENU_0104",
    name: "MENU_0104",
    component: MENU_0104,
  },
  {// 캠페인 목록
    path: "/MENU_0201",
    name: "MENU_0201",
    component: MENU_0201,
  },
  { // 캠페인 등록
    path: "/MENU_0202",
    name: "MENU_0202",
    component: MENU_0202,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/agency/MENU_0202.vue"),
  },
  {// 캠페인 변경 내역
    path: "/MENU_0203",
    name: "MENU_0203",
    component: MENU_0203,
  },
  {// 자동 충전
    path: "/MENU_0204",
    name: "MENU_0204",
    component: MENU_0204,
  },
  {// 문자 발송 서비스
    path: "/MENU_0205",
    name: "MENU_0205",
    component: MENU_0205,
  },
  {// 캠페인 홍보자료 관리
    path: "/MENU_0206",
    name: "MENU_0206",
    component: MENU_0206,
  },
  {// POSTBACK 등록 현황
    path: "/MENU_0301",
    name: "MENU_0301",
    component: MENU_0301,
  },
  {// POSTBACK 등록 현황
    path: "/MENU_0302",
    name: "MENU_0302",
    component: MENU_0302,
  },
  {// POSTBACK 등록 현황
    path: "/MENU_0303",
    name: "MENU_0303",
    component: MENU_0303,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
