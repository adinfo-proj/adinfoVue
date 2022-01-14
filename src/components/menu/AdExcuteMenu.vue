<template>
  <div>
    <div class="headerLogo">
      <router-link to="/">회원사<img src="" alt=""></router-link>
    </div>
    <div class="headerNav">
      <ul>
        <li @click="MenuBar(0)" v-bind:class="{on : 0 == menuSelect}">
          <router-link to="MENU_0000">
            <i class="icon-sphere"></i>
            DASHBOARD
          </router-link>
        </li>
        <li v-bind:class="{on : 1 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(1)" >
            <i class="icon-layers"></i>
            데이터 센터
          </a>
          <ul>
            <li @click="SubMenu('0101')"  v-bind:class="{subOn : '0101' == subMenuSelect}" >
              <router-link  to="MENU_0101">DB 집계 정보</router-link>
            </li>
            <li  @click="SubMenu('0102')"  v-bind:class="{subOn : '0102' == subMenuSelect}" >
              <router-link  to="MENU_0102">DB 통계 정보</router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 2 == menuSelect}">
          <a href="#javascript:void(0)" @click="MenuBar(2)" >
            <i class="icon-layers"></i>
            캠페인 관리
          </a>
          <ul>
            <li @click="SubMenu('0201')"  v-bind:class="{subOn : '0201' == subMenuSelect}" >
              <router-link to="MENU_0201">캠페인 목록</router-link>
            </li>
            <li @click="SubMenu('0202')"  v-bind:class="{subOn : '0202' == subMenuSelect}" >
              <router-link to="MENU_0202">신규 캠페인 등록</router-link>
            </li>
            <li @click="SubMenu('0203')"  v-bind:class="{subOn : '0203' == subMenuSelect}" >
              <router-link to="MENU_0203">캠페인 변경 내역</router-link>
            </li>
            <li @click="SubMenu('0204')"  v-bind:class="{subOn : '0204' == subMenuSelect}" >
              <router-link to="MENU_0204">자동 충전</router-link>
            </li>
            <li @click="SubMenu('0205')"  v-bind:class="{subOn : '0205' == subMenuSelect}" >
              <router-link to="MENU_0205">문자 발송 서비스</router-link>
            </li>
            <li @click="SubMenu('0206')"  v-bind:class="{subOn : '0206' == subMenuSelect}" >
              <router-link to="MENU_0206">캠페인 홍보자료 관리</router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 3 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(3)">
            <i class="icon-layers"></i>
            POSTBACK 관리
          </a>
          <ul>
            <li @click="SubMenu('0301')"  v-bind:class="{subOn : '0301' == subMenuSelect}" >
              <router-link to="MENU_0301">POSTBACK 등록 현황</router-link>
            </li>
            <li @click="SubMenu('0302')"  v-bind:class="{subOn : '0302' == subMenuSelect}" >
              <router-link to="MENU_0302">POSTBACK 등록 처리</router-link>
            </li>
            <li @click="SubMenu('0303')"  v-bind:class="{subOn : '0303' == subMenuSelect}" >
              <router-link to="MENU_0303">POSTBACK 데이터 조회</router-link>
            </li>
          </ul>
        </li>
        <li v-bind:class="{on : 4 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(4)">
            <i class="icon-layers"></i>
            광고비 관리
          </a>
          <!-- <ul>
            <li><router-link to="MENU_0401">사용 내역</router-link></li>
            <li><router-link to="MENU_0402">현금/카드 내역</router-link></li>
            <li><router-link to="MENU_0403">후불 정산 내역</router-link></li>
            <li><router-link to="MENU_0404">결제 계좌 / 카드 관리</router-link></li>
            <li><router-link to="MENU_0405">CPS 정산 관리</router-link></li>
            <li><router-link to="MENU_0406">환불 신청/취소</router-link></li>
          </ul> -->
        </li>
        <li v-bind:class="{on : 5 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(5)">
            <i class="icon-layers"></i>
            광고주 관리
          </a>
          <ul>
            <li @click="SubMenu('0501')"  v-bind:class="{subOn : '0501' == subMenuSelect}" >
              <router-link to="MENU_0501">광고주 권한 설정</router-link>
              </li>
            <li @click="SubMenu('0502')"  v-bind:class="{subOn : '0502' == subMenuSelect}" >
              <router-link to="MENU_0502">광고주 페이지 설정</router-link>
              </li>
            <li @click="SubMenu('0503')"  v-bind:class="{subOn : '0503' == subMenuSelect}" >
              <router-link to="MENU_0503">광고주 항목 설정</router-link>
              </li>
            <li @click="SubMenu('0504')"  v-bind:class="{subOn : '0504' == subMenuSelect}" >
              <router-link to="MENU_0504">광고주 연동 설정</router-link>
              </li>
          </ul>
        </li>
        <li v-bind:class="{on : 6 == menuSelect}">
          <a href="javascript:void(0)" @click="MenuBar(6)">
            <i class="icon-layers"></i>
            마케터 관리
          </a>
        </li>
        <li v-bind:class="{on : 7 == menuSelect}" >
          <a href="javascript:void(0)" @click="MenuBar(7)">
            <i class="icon-layers"></i>
            캠페인 그룹 관리
          </a>
        </li>
        <li>
          <router-link to="TEST_etc.vue">test</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          menuSelect : 0
        , subMenuSelect: ''
      }
    },
    methods:{
        MenuBar(pos) {
        this.menuSelect = pos;
        if(this.menuSelect == 0) {
          this.subMenuSelect = ''
        }
        else if(this.menuSelect >= 1){
          this.subMenuSelect = `0${pos}01`
          let page = "MENU_"+ this.subMenuSelect
          this.$router.push({ path : page })

        }
      }
      , SubMenu(pos) {
        this.subMenuSelect = pos;
      }
    }
  }
</script>