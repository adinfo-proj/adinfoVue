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
          <span class="dataInNow">
            {{todayDt}}
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
              <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(-68.765 -30.211)">
                <g id="그룹_35" data-name="그룹 35">
                  <circle id="타원_10" data-name="타원 10" cx="10.5" cy="10.5" r="10.5" transform="translate(68.765 30.211)" fill="#f0f0f0"/>
                  <path id="패스_94" data-name="패스 94" d="M79.265,45.964a5.253,5.253,0,1,1,0-10.506v1.75a3.5,3.5,0,1,0,3.5,3.5h1.75A5.259,5.259,0,0,1,79.265,45.964Z" fill="#3d3d3d"/>
                  <path id="패스_95" data-name="패스 95" d="M78.592,34.13l3.191,2.261-3.191,2.261Z" fill="#3d3d3d"/>
                </g>
              </g>
            </svg>
          </span>
        </div>
        <div class="userNamePage">
          <span>{{ this.$store.state.clntNm }} ({{ this.$store.state.nickNm }}) 님 </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="31.44" height="31" viewBox="0 0 31.44 31">
            <ellipse id="Ellipse_2" data-name="Ellipse 2" cx="15.72" cy="15.5" rx="15.72" ry="15.5" fill="#eaebec"/>
            <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(-346.159 -154.88)" opacity="0.8">
              <ellipse id="타원_9" data-name="타원 9" cx="3.787" cy="3.877" rx="3.787" ry="3.877" transform="translate(358.372 162.365)" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="0.958"/>
              <path id="패스_91" data-name="패스 91" d="M369.734,176.667a8.7,8.7,0,0,0-1.293-1.971,8.276,8.276,0,0,0-12.285-.305,8.7,8.7,0,0,0-1.572,2.276" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="0.958"/>
            </g>
          </svg>
          <a class="userNotice">
            <svg  xmlns="http://www.w3.org/2000/svg" width="31.44" height="31" viewBox="0 0 31.44 31">
              <ellipse id="Ellipse_2_copy_2" data-name="Ellipse 2 copy 2" cx="15.72" cy="15.5" rx="15.72" ry="15.5" fill="#eaebec"/>
              <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(-141.56 -347.353)" opacity="0.8">
                <path id="패스_92" data-name="패스 92" d="M151.715,366.925a1.253,1.253,0,0,1-1.057-.553h0a1,1,0,0,1,.2-1.315l1.1-.944V360.3a5.533,5.533,0,0,1,11.066,0v3.816l1.1.944a1,1,0,0,1,.2,1.315h0a1.253,1.253,0,0,1-1.057.553Z" fill="none" stroke="#222" stroke-linejoin="round" stroke-width="0.97"/>
                <path id="패스_93" data-name="패스 93" d="M160.56,366.984a3.064,3.064,0,0,1-6.12,0Z" fill="#e6e6e6" stroke="#222" stroke-linejoin="round" stroke-width="0.97"/>
              </g>
            </svg>
          </a>
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