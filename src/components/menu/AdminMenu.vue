<template>
  <div>
    <div class="headerLogo">
      <router-link to="/">관리자<img src="" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li>
          <router-link to="MENU_0000">
            <i class="icon-layers"></i>
            광고 실시간 현황
          </router-link>
        </li>
        <li>
          <a href="#none" v-on:click.stop.prevent>
            <i class="icon-layers"></i>
            데이터 센터
          </a>
          <ul>
            <li>
              <router-link  to="MENU_0101">- 일자별 통계</router-link>
            </li>
            <li>
              <router-link  to="MENU_0102">- 캠페인별 통계</router-link>
            </li>
            <li>
              <router-link  to="MENU_0103">- 그룹별 통계</router-link>
            </li>
            <li>
              <router-link  to="MENU_0104">- 마케터별 통계</router-link>
            </li>
          </ul>
        </li>
        <li class="on">
          <a href="#none" v-on:click.stop.prevent>
            <i class="icon-layers"></i>
            캠페인 관리
          </a>
          <ul>
            <li>
              <router-link to="MENU_0201">- 캠페인 목록</router-link>
            </li>
            <li class="on">
              <router-link to="MENU_0202">- 신규 캠페인 등록</router-link>
            </li>
            <li>
              <router-link to="MENU_0203">- 캠페인 변경 내역</router-link>
            </li>
            <li>
              <router-link to="MENU_0204">- 자동 충전</router-link>
            </li>
            <li>
              <router-link to="MENU_0205">- 문자 발송 서비스</router-link>
            </li>
            <li>
              <router-link to="MENU_0206">- 캠페인 홍보자료 관리</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" v-on:click.stop.prevent>
            <i class="icon-layers"></i>
            POSTBACK 관리
          </a>
          <ul>
            <li>
              <router-link to="MENU_0301">- POSTBACK 등록 현황</router-link>
            </li>
            <li>
              <router-link to="MENU_0302">- POSTBACK 등록 처리</router-link>
            </li>
            <li>
              <router-link to="MENU_0303">- POSTBACK 데이터 조회</router-link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" v-on:click.stop.prevent>
            <i class="icon-layers"></i>
            광고비 관리
          </a>
        </li>
        <li>
          <a href="#none" v-on:click.stop.prevent>
            <i class="icon-layers"></i>
            광고주 관리
          </a>
        </li>
        <li>
          <a href="#none" v-on:click.stop.prevent>
            <i class="icon-layers"></i>
            마케터 관리
          </a>
        </li>
        <li>
          <router-link to="TEST_etc.vue">test</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>