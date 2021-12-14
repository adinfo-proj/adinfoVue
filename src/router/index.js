import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import LOGIN from "../views/customer/Login";

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
import TEST_etc from "../views/agency/TEST_etc.vue";

// import MENU_0205 from "../views/agency/MENU_0205.vue";
// import MENU_0205 from "../views/agency/MENU_0205.vue";
// import MENU_0205 from "../views/agency/MENU_0205.vue";
// import MENU_0205 from "../views/agency/MENU_0205.vue";


Vue.use(VueRouter);

const routes = [ // 권한에 상관없이 모두 추가할 것, 추후 권한에 따른 display: block으로 변경 예정
  {// 로그인페이지
    path: "/login",
    name: "Login",
    component: LOGIN
  },
  {// 메인페이지
    path: "/",
    name: "HOME",
    component: MENU_0000,
    meta: { requiresAuth: true }
  },
  {// 메인페이지
    path: "/MENU_0000",
    name: "MENU_0000",
    component: MENU_0000,
    meta: { requiresAuth: true }
  },
  {// 일자별 통계
    path: "/MENU_0101",
    name: "MENU_0101",
    component: MENU_0101,
    meta: { requiresAuth: true }
  },
  {// 캠페인별 통계
    path: "/MENU_0102",
    name: "MENU_0102",
    component: MENU_0102,
    meta: { requiresAuth: true }
  },
  {// 그룹별 통계
    path: "/MENU_0103",
    name: "MENU_0103",
    component: MENU_0103,
    meta: { requiresAuth: true }
  },
  {// 마케터별 통계
    path: "/MENU_0104",
    name: "MENU_0104",
    component: MENU_0104,
    meta: { requiresAuth: true }
  },
  {// 캠페인 목록
    path: "/MENU_0201",
    name: "MENU_0201",
    component: MENU_0201,
    meta: { requiresAuth: true }
  },
  { // 캠페인 등록
    path: "/MENU_0202",
    name: "MENU_0202",
    component: MENU_0202,
    meta: { requiresAuth: true }
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/agency/MENU_0202.vue"),
  },
  {// 캠페인 변경 내역
    path: "/MENU_0203",
    name: "MENU_0203",
    component: MENU_0203,
    meta: { requiresAuth: true }
  },
  {// 자동 충전
    path: "/MENU_0204",
    name: "MENU_0204",
    component: MENU_0204,
    meta: { requiresAuth: true }
  },
  {// 문자 발송 서비스
    path: "/MENU_0205",
    name: "MENU_0205",
    component: MENU_0205,
    meta: { requiresAuth: true }
  },
  {// 캠페인 홍보자료 관리
    path: "/MENU_0206",
    name: "MENU_0206",
    component: MENU_0206,
    meta: { requiresAuth: true }
  },
  {// POSTBACK 등록 현황
    path: "/MENU_0301",
    name: "MENU_0301",
    component: MENU_0301,
    meta: { requiresAuth: true }
  },
  {// POSTBACK 등록 현황
    path: "/MENU_0302",
    name: "MENU_0302",
    component: MENU_0302,
    meta: { requiresAuth: true }
  },
  {// POSTBACK 등록 현황
    path: "/MENU_0303",
    name: "MENU_0303",
    component: MENU_0303,
    meta: { requiresAuth: true }
  },
  {// POSTBACK 등록 현황
    path: "/TEST_etc",
    name: "TEST_etc",
    component: TEST_etc,
    meta: { requiresAuth: true }
  },
];

const router = new VueRouter({
//  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Step 1 : [" + to.matched + "]")
  if (to.matched.some(record => record.meta.requiresAuth)) {

    console.log("Step 2 : [" + store.state.jwtAuthToken + "]")
    
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (localStorage.getItem("token") == null || localStorage.getItem("token") == '') {
      next('/login')
    } else {
      next()
    }
  } else {
    next() // 반드시 next()를 호출하십시오!
  }
})
export default router;
