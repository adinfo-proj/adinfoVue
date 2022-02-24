<template>
  <div id="app">
    <div id="navPage">
      <div id="nav">
        <admin-menu     v-if="$store.state.adGradeCd == '01'">1</admin-menu>
        <ad-excute-menu v-if="$store.state.adGradeCd == '02'">2</ad-excute-menu>
        <sponser-menu   v-if="$store.state.adGradeCd == '03'">3</sponser-menu>
        <marketer-menu  v-if="$store.state.adGradeCd == '04'">4</marketer-menu>
        <dbMaster-menu  v-if="$store.state.adGradeCd == '05'">5</dbMaster-menu>
      </div>
      <div id="sectionHeader">
        <div class="menuPage">
          {{ this.$store.state.headerTopTitle }}
          <span> > </span>
          <span class="subMenuName"> {{ this.$store.state.headerMidTitle }}</span>
        </div>
        <div class="userNamePage">
          <span @click="Mypage()">{{ this.$store.state.clntNm }}님</span>
          <span class="rate"> 14일 무료 이용중</span>
          <button class="logOutBtn" @click="LogOut()">로그아웃</button>
        </div>

      </div>
      <div id="sectionBody">
        <router-view v-bind:style="{minHeight:minHigh}" />
      </div>
      <div id="sectionFooter">
        <div class="footerTop">
          <div class="left">
            (주)마케팅디자인<br>
            서울특별시 구로구 디지털로 26길 111, 제이앤케이디지털타워 708호&nbsp;&nbsp;&nbsp;대표자: 유기옥<br>
            민원 담당자 : 김화성&nbsp;&nbsp;&nbsp;&nbsp;대표번호:1533-3757&nbsp;&nbsp;&nbsp;사업자등록번호: 567-87-00066&nbsp;&nbsp;&nbsp;&nbsp;통신판매 신고번호: 제2020-서울구로-2892호
          </div>
          <div class="right">
            <img src="./assets/images/footerIcon01.png" alt="">
            <img src="./assets/images/footerIcon02.png" alt="">
            <img src="./assets/images/footerIcon03.png" alt="">
          </div>

        </div>
        <div class="footerBottom">
          <div class="left">
            COPYRIGHT© 2022 (주)마케팅디자인. ALL RIGHTS RESERVED
          </div>
          <div class="right">
            <a href="javascript:void(0)" @click="PopUpTerms();">이용약관</a>
            <a href="javascript:void(0)" @click="PopUpPrivacy();">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </div>
    <UseTerms></UseTerms>
    <PrivacyPolicy></PrivacyPolicy>
  </div>
</template>
<script>
  // import axios from "axios";
  import $              from 'jquery';
  import AdminMenu      from './components/menu/AdminMenu'
  import AdExcuteMenu   from './components/menu/AdExcuteMenu'
  import SponserMenu    from './components/menu/SponserMenu'
  import MarketerMenu   from './components/menu/MarketerMenu'
  import DbMasterMenu   from './components/menu/DbMasterMenu'
  import UseTerms       from './components/dialog/UseTerms'
  import PrivacyPolicy  from './components/dialog/PrivacyPolicy'

  export default {
    components: {
        AdminMenu
      , AdExcuteMenu
      , SponserMenu
      , MarketerMenu
      , DbMasterMenu
      , UseTerms
      , PrivacyPolicy

    },
    data() {
      return {
          todayDt: this.$DateAdd(0)
        , minHigh: ''
      }
    },
    methods: {
      //******************************************************************************
      // 로그아웃 함수
      //******************************************************************************
      LogOut() {
                // LocalStorage 전체를 지운다.
        sessionStorage.clear();
        this.$router.push({ path : "Login" });
      },
      //******************************************************************************
      // 내정보 보기
      //******************************************************************************
      Mypage() {
        this.$router.push({ path : "MENU_08901" });
      },
      //******************************************************************************
      // 개인정보 처리 방침
      //******************************************************************************
      PopUpPrivacy () {
        $("#privacyPolicy").css({display: "block"})
      },
      //******************************************************************************
      // 이용약관
      //******************************************************************************
      PopUpTerms () {
        $("#useTerms").css({display: "block"})
      },
      //******************************************************************************
      // Height에 최소값 지정
      //******************************************************************************
      setDivHeight() {
        this.minHigh = window.innerHeight - 202 + 'px'
      }
    },
    created() {
      document.title = "디비마스터 플랫폼";
      this.$store.state.clntId       = sessionStorage.getItem("clntId");
      this.$store.state.clntNm       = sessionStorage.getItem("clntNm");
      this.$store.state.nickNm       = sessionStorage.getItem("nickNm");
      this.$store.state.jwtAuthToken = sessionStorage.getItem("token");
      this.$store.state.adGradeCd    = sessionStorage.getItem("grade");
      this.$store.state.mbId         = sessionStorage.getItem("mbId");
      this.$store.state.adId         = sessionStorage.getItem("adId");
      this.$store.state.mkId         = sessionStorage.getItem("mkId");
      this.$store.state.mkCd         = sessionStorage.getItem("mkCd");
      this.setDivHeight();
    }
  }
</script>

<style>
  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: 'Nanum Gothic', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #666;
    font-family: 'Nanum Gothic';
    font-size: 12px;
  }
  
  a {
    text-decoration: none;
    color: #666;
  }

  ul {
    list-style: none;
  }
  
  #app {
    font-family:'NanumBarunGothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 1400px;
    height: 100%;
  }
  
  input::placeholder {
    font-size: 90%;
    opacity: 0.7;
  }
  /* 메뉴 nav CSS */

  #nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 100%;
    border-right: solid 1px #e5e5e5;
    background: #262626;
    z-index: 9999;
  }

  .headerLogo {
    width: 100%;
    height: 120px;
    text-align: center;
    position: relative;
    border-bottom: solid 1px #393939;
  }

  .headerLogo a {
    display: block;
    position: absolute;
    width: 100px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

    .headerLogo a img{
      width: 100%;
    }

  .headerNav > ul > li {
    border-bottom: solid 1px #393939;
  }

  .headerNav > ul > li > a {
    display: block;
    font-weight: 700;
    font-size: 14px;
    color: #999;
    padding: 15px 20px;
    position: relative;
  }

  .headerNav > ul > li > ul {
    padding: 10px 0 10px 50px ;
    display: none;
  }

  .headerNav > ul > li > ul > li {
    padding: 9px 0;
  }

  .headerNav > ul > li > ul > li > a {
    color: #999;
    letter-spacing: -0.3px;
    font-weight: 700;
  }

  .headerNav > ul > li > a > i{
    font-size: 14px;
    display: inline-block;
    transform: translateY(2px);
    margin-right: 2px;
  }


  .headerNav > ul > li.on {
    background: #393939;
  }

  .headerNav > ul > li.on > a {
    background: #e25b45;
    color: #fff;
  }

  .headerNav > ul > li.on > a > i {
    color: #fff;
  }

  .headerNav > ul > li:hover > a {
    background: #e25b45;
    color: #fff;
  }

  .headerNav > ul > li:hover > a > i {
    color: #fff;
  }

  .headerNav > ul > li.on > a:after {
    content: "";
    background: url(./assets/images/TapIcon.png);
    height: 15px;
    width: 7px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .headerNav > ul > li.on > ul {
    display: block;
  }

  .headerNav > ul > li > ul > li.subOn > a {
    color: #e25b45; 
  }

  .headerNav > ul > li > ul > li:hover > a {
    color: #e25b45;
    /* transition: 0.5s; */
  }
  .headerNav svg {
    margin-right: 4px;
  }

  #sectionHeader,
  #sectionBody,
  #sectionFooter {
    margin-left: 200px;
    border-right: solid 1px #e5e5e5;
    width: 1400px;
  }

  #sectionHeader {
    padding: 6px 20px;
    border-bottom: solid 1px #707070;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 999;
  }
  #sectionHeader .menuPage {
    color: #222;
    font-size: 14px;
    padding-right: 10px;
    letter-spacing: -0.4px;
    font-weight: 700;
  }

   #sectionHeader .menuPage .subMenuName {
     position: relative;
     padding-right: 20px;
   }
 
  #sectionHeader .menuPage .subMenuName:after {
    clear: both;
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -5px;
    width: 1px;
    height: 10px;
    background: #707070;
  }

  #sectionHeader .menuPage span {
    font-weight: normal;
    margin-left: 5px;
  }

  #sectionHeader .menuPage .dataInNow {
    margin-left: 20px;
  }

  #sectionHeader .menuPage .dataInNow svg {
    transform: translate(8px, 7px);
  }

  #sectionHeader .userNamePage span {
    display: inline-block;
    margin-right: 9px;; 
    transform: translateY(-2.5px);
    cursor: pointer;
  }

  #sectionHeader .userNamePage .rate {
    font-weight: 700;
    position: relative;
    padding: 8.5px 15px;
    background: #e25b45;
    color: #fff;
    border-radius: 50px;
    transform: translateY(0);
  }
  #sectionHeader .userNamePage .logOutBtn {
    width: 67px;
    height: 31px;
    color: #666;
    border: none;
    background: #eaebec;
    border-radius: 31px;
  }

  #sectionFooter > div {
    border-bottom: solid 1px #e5e5e5;
  }

  #sectionFooter .footerTop {
    padding: 26px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #sectionFooter .footerTop .right img{
    vertical-align: middle;
    margin-left: 20px;
  }

  #sectionFooter .footerBottom {
    padding: 13px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #sectionFooter .footerBottom .right a{
    padding: 0 18px;
  }

  #sectionFooter .footerBottom .right a:last-child {
    padding-right: 0;
    position: relative;
  }

  #sectionFooter .footerBottom .right a:last-child::before {
    clear: both;
    content: "";
    width: 1px;
    height: 10px;
    left: -0.5px;
    top: 50%;
    background: #e0e0e0;
    position: absolute;
    transform: translateY(-50%);
  }

  #sectionFooter .left,
  #sectionFooter .right
  #sectionFooter .right a {
    line-height: 1.5;
    letter-spacing: -0.48px;
    color: #222;
  }
  
  .container {
    height: 100%;
    background: #F6F6F6;
    padding: 20px;
    border-bottom: solid 1px #e5e5e5;
  }

</style>