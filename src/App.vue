<template>
  <div id="app">


    <div id="navPage">
      <div id="nav">
        <admin-menu     v-if="$store.state.adGradeCd == '01'">1</admin-menu>
        <ad-excute-menu v-if="$store.state.adGradeCd == '02'">2</ad-excute-menu>
        <sponser-menu   v-if="$store.state.adGradeCd == '03'">3</sponser-menu>
        <marketer-menu  v-if="$store.state.adGradeCd == '04'">4</marketer-menu>
      </div>
      <div id="sectionHeader">
        <div class="menuPage">
          {{ this.$store.state.headerTopTitle }} <span> > {{ this.$store.state.headerMidTitle }}</span>
        </div>
        <div class="dataInNow">

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
  // import $ from 'jquery';

  import AdminMenu from './components/menu/AdminMenu'
  import AdExcuteMenu from './components/menu/AdExcuteMenu'
  import SponserMenu from './components/menu/SponserMenu'
  import MarketerMenu from './components/menu/MarketerMenu'

  export default {
    components: {
      
        AdminMenu
      , AdExcuteMenu
      , SponserMenu
      , MarketerMenu
    

    },
    data() {
      return {
          emailId: ''                         // 로그인 아이디
        , emailPw: ''                         // 로그인 패스워드
      }
    },
    methods: {


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
    z-index: 99;
  }

  .headerLogo {
    width: 100%;
    height: 98px;
    text-align: center;
    padding: 28.2px;
    border-bottom: solid 1px #e5e5e5;
  }

  .headerLogo a {
    font-size: 32.9px;
    color: #fff;
  }

  .headerNav {
    padding: 15px 0 0 0;
  }
/*
  .headerNav > ul > li {
    padding: 10px 20px 17px 20px;
  }*/

  .headerNav > ul > li.on{
    background: #393939;
  }

  .headerNav > ul > li > ul {
    padding: 5px 0 5px 50px ;
    /* display: none; */
  }

  .headerNav > ul > li > ul > li {
    padding-top: 12px;
  }

  .headerNav > ul > li > a {
    display: block;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    padding: 10px 20px 17px 20px;
    position: relative;
  }

  .headerNav > ul > li > ul > li > a {
    color: #fff;
    letter-spacing: -0.3px;
    font-weight: 700;
  }

  .headerNav > ul > li.on > a {
    background: #e25b45;
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

  .headerNav > ul > li > ul > li.on > a {
    color: #e25b45;
    
  }

  .headerNav > ul > li.on > ul {
    display: block;
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

  #sectionHeader{
    padding: 24px 20px 17px;
    border-bottom: solid 1px #e5e5e5;
  }

  #sectionHeader .menuPage {
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    width: 250px;
  }

  #sectionHeader .menuPage span {
    font-weight: normal;
    margin-left: 5px;
  }

  .container {
    height: 100%;
    background: #F6F6F6;
    padding: 20px;
    border-bottom: solid 1px #e5e5e5;
  }
</style>