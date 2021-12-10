<template>
  <div id="app">
    <div id="logIn" v-if="$store.state.jwtAuthToken == ''">
      <div class="logInBox">
        <h1><span>HELLO</span> AD.INFO</h1>
        <p>통합 광고 시스템, 애드인포</p>
        <div class="inputBox">
          <div class="leftInput">
              <input type="text" placeholder="이메일을 입력하세요."
              v-model="emailId">
              <input type="password" placeholder="비밀번호를 입력하세요"
              v-model="emailPw">
          </div>
          <div class="loginBtn">
              <button
                @click="LogIn();"
              >
              로그인
              </button>
          </div>
        </div>
        <div class="logSerch">
          <input type="checkbox" name="stayLog" id="stayLog"><label for="stayLog"> 로그인 유지</label>
          <ul>
            <li><a href="javascript:void(0)">회원가입</a></li>
            <li><a href="javascript:void(0)">아이디 찾기</a></li>
            <li><a href="javascript:void(0)">비밀번호 찾기</a></li>
          </ul>
        </div>
        <div class="socialBox">
          <p>소셜계정 로그인</p>
          <div class="socialBox2">
            <a class="socialLog" href="javascript:void(0)"><img src="./assets/images/socialIcon/NaverIcon.png" alt="네이버">네이버</a>
            <a class="socialLog" href="javascript:void(0)"><img src="./assets/images/socialIcon/KakaoIcon.png" alt="카카오톡">카카오톡</a>
            <a class="socialLog" href="javascript:void(0)"><img src="./assets/images/socialIcon/GoogleIcon.png" alt="구글">구글</a>
            <a class="socialLog" href="javascript:void(0)"><img src="./assets/images/socialIcon/FaceBookIcon.png" alt="페이스북">페이스북</a>
            
          </div>
        </div>
      </div>
      <!-- 회원가입 창 -->
      <div id="singPopUp">

      </div>

    </div>


    <div id="navPage" v-if="$store.state.jwtAuthToken != ''">
      <div id="nav">
        <admin-menu     v-if="this.$store.state.adGradeCd == '01'">1</admin-menu>
        <ad-excute-menu v-if="this.$store.state.adGradeCd == '02'">2</ad-excute-menu>
        <sponser-menu   v-if="this.$store.state.adGradeCd == '03'">3</sponser-menu>
        <marketer-menu  v-if="this.$store.state.adGradeCd == '04'">4</marketer-menu>
      </div>
      <div id="sectionHeader">
        {{ this.$store.state.headerTopTitle }} <span> > {{ this.$store.state.headerMidTitle }}</span>
      </div>
      <div id="sectionBody">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";

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
      LogIn() {
        axios.get("http://api.adinfo.co.kr:30000/login", {
          params: {
              // Store 정보
              emailId: this.emailId
            , emailPw: this.emailPw
          }
      })
      .then(response => {
        console.log(response);
        let logStatus = response.data.status

        if( logStatus == "0" ) {
          this.$store.state.emailId = response.data.emailId
          this.$store.state.jwtAuthToken = response.data.authToken
          this.$store.state.adGradeCd = response.data.gradeCd
          this.$router.push({ path : "MENU_0000" })
        } else {
          alert(response.data.message)
        }
      })
      .catch(error => {
        console.log(error);
      })
      }
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


  /* 로그인 페이지 CSS */

  #logIn {
    width: 100vw;
    height: 100vh;
    background: url(./assets/images/loginBg.svg);
    background-size: cover;
  }

  #logIn .logInBox {
    position: absolute;
    width: 660px;
    height: 511px;
    padding: 56px 78px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
  }

  #logIn>.logInBox>h1,
  #logIn>.logInBox>p {
    text-align: center;
  }

  #logIn .logInBox h1 {
    font-size: 30px;
    color: #e25b45;
    letter-spacing: -1.05px;
    margin-bottom: 10px;
  }

  #logIn .logInBox h1 span {
    font-size: 30px;
    color: #262626;
  }

  #logIn>.logInBox>p {
    font-size: 14px;
    letter-spacing: -0.49px;
    color: #949494;
    margin-bottom: 56px;
  }

  #logIn .logInBox .inputBox {
    margin-bottom: 20px;
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    height: 100px;
  }


  #logIn .logInBox .inputBox .leftInput input {
    width: 365px;
    height: 45px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 16px 20px;
  }

  #logIn .logInBox .inputBox .leftInput input[type="text"] {
    margin-bottom: 10px;
  }

   #logIn .logInBox .inputBox .loginBtn button {
     width: 120px;
     height: 100%;
     border-radius: 20px;
     background: #262626;
     color: #fff;
     font-size: 18px;
     border: none;
     font-weight: 700;
   }

  #logIn .logInBox .logSerch{
    clear: both;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
  }

  #logIn .logInBox .logSerch input[type="checkbox"]{
    width: 20px;
    height: 20px;
    margin-top: -9px;
    transform: translateY(6px);
  }

  #logIn .logInBox .logSerch label{
    color: #444;
    font-weight: 700;
    margin: 6px;
  }

  #logIn .logInBox .logSerch ul{
    float: right;
  }

  #logIn .logInBox .logSerch ul li{
    float: left;
    padding: 0 11px;
    position: relative;
  }

  #logIn .logInBox .logSerch ul li:before{
    clear: both;
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #e5e5e5;
  }

  #logIn .logInBox .logSerch ul li:first-child:before{
    display: none;
  }

  #logIn .logInBox .socialBox p {
    padding: 19px 0;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.42px;
    color: #444;
  }

  #logIn .logInBox .socialBox .socialBox2{
    display: flex;
    justify-content: space-between;
  }

  #logIn .logInBox .socialBox .socialBox2 a{
    display: flex;
    width: 120px;
    height: 40px;
    border: 1px solid #eee;
    border-radius: 15.5px;
    padding: 0 18px;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
    color: #666;
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

  #sectionHeader {
    padding: 24px 20px 17px;
    font-size: 16px;
    letter-spacing: -0.4px;
    font-weight: 700;
    border-bottom: solid 1px #e5e5e5;
  }

  #sectionHeader span {
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