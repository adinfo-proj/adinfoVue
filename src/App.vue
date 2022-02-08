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
          <span>></span>
          <span class="subMenuName">{{ this.$store.state.headerMidTitle }}</span>
        </div>
        <div class="userNamePage">
          <span>{{ this.$store.state.clntNm }}님</span>
          <button class="logOutBtn" @click="LogOut()">로그아웃</button>
        </div>




      </div>
      <div id="sectionBody">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
  // import axios from "axios";
  //import $ from 'jquery';

  import AdminMenu from './components/menu/AdminMenu'
  import AdExcuteMenu from './components/menu/AdExcuteMenu'
  import SponserMenu from './components/menu/SponserMenu'
  import MarketerMenu from './components/menu/MarketerMenu'
  import DbMasterMenu from './components/menu/DbMasterMenu'

  export default {
    components: {
        AdminMenu
      , AdExcuteMenu
      , SponserMenu
      , MarketerMenu
      , DbMasterMenu

    },
    data() {
      return {
        todayDt: this.$DateAdd(0)
      }
    },
    methods: {
      //******************************************************************************
      // 로그아웃 함수
      //******************************************************************************
      LogOut() {
                // LocalStorage 전체를 지운다.
        localStorage.clear();
        this.$router.push({ path : "Login" });
      },
    },
    created() {
      document.title = "디비마스터";
      this.$store.state.clntId       = localStorage.getItem("clntId");
      this.$store.state.clntNm       = localStorage.getItem("clntNm");
      this.$store.state.nickNm       = localStorage.getItem("nickNm");
      this.$store.state.jwtAuthToken = localStorage.getItem("token");
      this.$store.state.adGradeCd    = localStorage.getItem("grade");
      this.$store.state.mbId         = localStorage.getItem("mbId");
      this.$store.state.adId         = localStorage.getItem("adId");
      this.$store.state.mkId         = localStorage.getItem("mkId");
      this.$store.state.mkCd         = localStorage.getItem("mkCd");
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
  /* 나중에 지울 거 */
  .headerNav > ul > li > a > svg {
    transform: translateY(2.5px);
  }

  /* 나중에 지울 거 */

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
  #sectionBody {
    margin-left: 200px;
    border-right: solid 1px #e5e5e5;
    width: 1400px;
  }

  #sectionHeader {
    padding: 5px 20px 11px;
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
  }

  #sectionHeader .userNamePage svg {
    margin-right: 9.1px;
    transform: translateY(8px);
  }

  #sectionHeader .userNamePage .userNotice {
    position: relative;
  }

  #sectionHeader .userNamePage .userNotice::after {
    clear: both;
    content: "1";
    position: absolute;
    top: -13px;
    right: 0;
    width: 16px;
    height: 16px;
    text-align: center;
    background: #e25b45;
    border-radius: 50%;
    color: #fff;
    font-size: 10px;
    padding: 2.5px;
    box-sizing: border-box;
  }

  #sectionHeader .userNamePage .logOutBtn {
    width: 67px;
    height: 31px;
    transform: translateY(-4px);
    color: #666;
    border: none;
    background: #eaebec;
    border-radius: 31px;
  }
  

  .container {
    height: 100%;
    background: #F6F6F6;
    padding: 20px;
    border-bottom: solid 1px #e5e5e5;
  }
</style>