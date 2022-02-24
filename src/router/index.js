import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios';

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
import MENU_0302 from "../views/agency/MENU_0302.vue";
import MENU_0303 from "../views/agency/MENU_0303.vue";
import MENU_0601 from "../views/agency/MENU_0601.vue";
import MENU_0701 from "../views/agency/MENU_0701.vue";
import MENU_08101 from "../views/agency/MENU_08101.vue";
import MENU_08102 from "../views/agency/MENU_08102.vue";
import MENU_08103 from "../views/agency/MENU_08103.vue";
import MENU_08104 from "../views/agency/MENU_08104.vue";
import MENU_08201 from "../views/agency/MENU_08201.vue";
import MENU_08301 from "../views/agency/MENU_08301.vue";
import MENU_08302 from "../views/agency/MENU_08302.vue";
import MENU_08303 from "../views/agency/MENU_08303.vue";
import MENU_08304 from "../views/agency/MENU_08304.vue";
import MENU_08401 from "../views/agency/MENU_08401.vue";
import MENU_08402 from "../views/agency/MENU_08402.vue";
import MENU_08403 from "../views/agency/MENU_08403.vue";
import MENU_08404 from "../views/agency/MENU_08404.vue";
import MENU_08501 from "../views/agency/MENU_08501.vue";
import MENU_08601 from "../views/agency/MENU_08601.vue";
import MENU_08701 from "../views/agency/MENU_08701.vue";
import MENU_08701_2 from "../views/agency/MENU_08701_2.vue";
import MENU_08701_3 from "../views/agency/MENU_08701_3.vue";
import MENU_08701_4 from "../views/agency/MENU_08701_4.vue";
import MENU_08702 from "../views/agency/MENU_08702.vue";
import MENU_08702_2 from "../views/agency/MENU_08702_2.vue";
import MENU_08702_3 from "../views/agency/MENU_08702_3.vue";
import MENU_08703 from "../views/agency/MENU_08703.vue";
import MENU_08703_2 from "../views/agency/MENU_08703_2.vue";
import MENU_08703_3 from "../views/agency/MENU_08703_3.vue";
import MENU_08901 from "../views/agency/MENU_08901.vue";
import MENU_08999 from "../views/agency/MENU_08999.vue";
import MENU_0807 from "../views/agency/MENU_0807.vue";


import AdminLogin from "../views/customer/AdminLogin";


import TEST_etc from "../views/agency/TEST_etc.vue";

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
    component: MENU_08201,
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
  {// 마케터관리
      path: "/MENU_0601",
      name: "MENU_0601",
      component: MENU_0601,
      meta: { requiresAuth: true }
  },
  {// 캠페인 그룹관리
      path: "/MENU_0701",
      name: "MENU_0701",
      component: MENU_0701,
      meta: { requiresAuth: true }
  },
  {// 캠페인 목록
    path: "/MENU_08101",
    name: "MENU_08101",
    component: MENU_08101,
    meta: { requiresAuth: true },
    // 
    props: true
  },
  {// 캠페인 등록
    path: "/MENU_08102",
    name: "MENU_08102",
    component: MENU_08102,
    meta: { requiresAuth: true }
  },
  {// 캠페인 수정
    path: "/MENU_08103",
    name: "MENU_08103",
    component: MENU_08103,
    meta: { requiresAuth: true }
  },
  {// 캠페인 보기
    path: "/MENU_08104",
    name: "MENU_08104",
    component: MENU_08104,
    meta: { requiresAuth: true }
  },
  {// DB확인
    path: "/MENU_08201",
    name: "MENU_08201",
    component: MENU_08201,
    meta: { requiresAuth: true }
  },
  {// 랜딩페이지 목록
    path: "/MENU_08301",
    name: "MENU_08301",
    component: MENU_08301,
    meta: { requiresAuth: true }
  },
  {// 랜딩페이지 제작
    path: "/MENU_08302",
    name: "MENU_08302",
    component: MENU_08302,
    meta: { requiresAuth: true }
  },
  {// 외부 어드민 계정 설정
    path: "/MENU_08303",
    name: "MENU_08303",
    component: MENU_08303,
    meta: { requiresAuth: true }
  },
  {// 외부 도메인 연결 설정
    path: "/MENU_08304",
    name: "MENU_08304",
    component: MENU_08304,
    meta: { requiresAuth: true }
  },
  {// 포스트백 목록
    path: "/MENU_08401",
    name: "MENU_08401",
    component: MENU_08401,
    meta: { requiresAuth: true }
  },
  {// 포스트백 제작
    path: "/MENU_08402",
    name: "MENU_08402",
    component: MENU_08402,
    meta: { requiresAuth: true }
  },
  {// 포스트백 수정
    path: "/MENU_08403",
    name: "MENU_08403",
    component: MENU_08403,
    meta: { requiresAuth: true }
  },
  {// 포스트백 결과조회
    path: "/MENU_08404",
    name: "MENU_08404",
    component: MENU_08404,
    meta: { requiresAuth: true }
  },
  {// 랜딩페이지 샘플
    path: "/MENU_08501",
    name: "MENU_08501",
    component: MENU_08501,
    meta: { requiresAuth: true }
  },
  {// 랜딩페이지 샘플
    path: "/MENU_08601",
    name: "MENU_08601",
    component: MENU_08601,
    meta: { requiresAuth: true }
  },
  {// 공지사항
    path: "/MENU_08701",
    name: "MENU_08701",
    component: MENU_08701,
    meta: { requiresAuth: true }
  },
  {// 공지사항 내용보기
    path: "/MENU_08701_2",
    name: "MENU_08701_2",
    component: MENU_08701_2,
    meta: { requiresAuth: true }
  },
  {// 공지사항 글쓰기
    path: "/MENU_08701_3",
    name: "MENU_08701_3",
    component: MENU_08701_3,
    meta: { requiresAuth: true }
  },
  {// 공지사항 수정하기
    path: "/MENU_08701_4",
    name: "MENU_08701_4",
    component: MENU_08701_4,
    meta: { requiresAuth: true }
  },
  {// 문의하기
    path: "/MENU_08702",
    name: "MENU_08702",
    component: MENU_08702,
    meta: { requiresAuth: true }
  },
  {// 문의하기 내용보기
    path: "/MENU_08702_2",
    name: "MENU_08702_2",
    component: MENU_08702_2,
    meta: { requiresAuth: true }
  },
  {// 문의하기 글쓰기
    path: "/MENU_08702_3",
    name: "MENU_08702_3",
    component: MENU_08702_3,
    meta: { requiresAuth: true }
  },
  {// 기능 개선 요청하기
    path: "/MENU_08703",
    name: "MENU_08703",
    component: MENU_08703,
    meta: { requiresAuth: true }
  },
  {// 기능 개선 내용보기
    path: "/MENU_08703_2",
    name: "MENU_08703_2",
    component: MENU_08703_2,
    meta: { requiresAuth: true }
  },
  {// 기능 개선 요청 글쓰기
    path: "/MENU_08703_3",
    name: "MENU_08703_3",
    component: MENU_08703_3,
    meta: { requiresAuth: true }
  },
  {// 내정보
    path: "/MENU_08901",
    name: "MENU_08901",
    component: MENU_08901,
    meta: { requiresAuth: true }
  },
  {// 요금제
    path: "/MENU_08999",
    name: "MENU_08999",
    component: MENU_08999,
    meta: { requiresAuth: true }
  },
  {// test
    path: "/MENU_0807",
    name: "MENU_0807",
    component: MENU_0807,
    meta: { requiresAuth: true }
  },
  {// POSTBACK 등록 현황
    path: "/TEST_etc",
    name: "TEST_etc",
    component: TEST_etc,
    meta: { requiresAuth: true }
  },
  {// 어드민로그인페이지
    path: "/AdminLogin",
    name: "AdminLogin",
    component: AdminLogin
  },
];

const router = new VueRouter({
  //  mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 이 라우트는 인증이 필요하며 로그인 한 경우 확인하십시오.
    // 그렇지 않은 경우 로그인 페이지로 리디렉션하십시오.
    if (sessionStorage.getItem("token") == null || sessionStorage.getItem("token") == '') {
      next('/login')
    } else {
      // api call 후 유효시간 확인
      axios.get("http://api.adinfo.co.kr:30000/vaildauth",
      {
        params: {
          token: sessionStorage.getItem("token")
        }
      })
      .then(response => {
        if(response.data.status == false) {
          sessionStorage.clear();
          next('/login');
        }
      })
      .catch(error => {
        console.log(error);

        sessionStorage.clear();
        next('/login');
      })

      next();
    }
  } else {
    next() // 반드시 next()를 호출하십시오!
  }
})
export default router;