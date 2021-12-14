<template>
  <div id="logIn">
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
            <li><a href="javascript:void(0)"
            @click="SignMadal();">회원가입</a></li>
            <li><a href="javascript:void(0)"
            @click="SearchIdModal();">아이디 / 비밀번호 찾기</a></li>
        </ul>
      </div>
      
      <div class="socialBox">
        <p>소셜계정 로그인</p>
        <div class="socialBox2">
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/NaverIcon.png" alt="네이버">네이버</a>
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/KakaoIcon.png" alt="카카오톡">카카오톡</a>
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/GoogleIcon.png" alt="구글">구글</a>
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/FaceBookIcon.png" alt="페이스북">페이스북</a>
          
        </div>
      </div>
    </div>
    <CreateUser></CreateUser>
    <SearchUser></SearchUser>
    
  



  </div>
</template>

<script>

import axios from "axios";
import $ from 'jquery';
import CreateUser from "../../components/dialog/CreateUser"
import SearchUser from "../../components/dialog/SearchUser"

export default {
  components: {
      CreateUser
    , SearchUser
  },
  data() {
    return {
          emailId: ''
        , emailPw: ''
    }
  },
  methods: {
    LogIn() {
      axios.post("http://api.adinfo.co.kr:30000/login", {
        emailId: this.emailId,
        emailPw: this.emailPw
      })
      .then(response => {
        console.log(response);
        let logStatus = response.data.status

        if( logStatus == "0" ) {
          this.loginView = false;
          this.$store.state.emailId = response.data.emailId
          this.$store.state.jwtAuthToken = response.data.authToken
          this.$store.state.adGradeCd = response.data.gradeCd

          // 토큰값을 LocalStorage에 저장한다.
          localStorage.setItem("email", this.$store.state.emailId);
          localStorage.setItem("token", this.$store.state.jwtAuthToken);
          localStorage.setItem("grade", this.$store.state.adGradeCd);

          this.$router.push({ path : "MENU_0000" })
        } else {
          alert(response.data.message)
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
    //******************************************************************************
    // 회원가입 팝업 함수
    //******************************************************************************
    , SignMadal() {
      $("#singPopUp").css({display: "block"})
    }

    //******************************************************************************
    // 아이디 / 비밀번호 팝업 함수
    //******************************************************************************
    , SearchIdModal() {
      $("#searchModar").css({display: "block"})
    }
  }

}
</script>

<style scoped>
  /* 로그인 페이지 CSS */

  #logIn {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: url(../../assets/images/loginBg.svg);
    background-size: cover;
    z-index: 99999;
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

  #logIn > .logInBox > h1,
  #logIn > .logInBox > p {
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

  #logIn > .logInBox > p {
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

  #logIn .logInBox .logSerch {
    clear: both;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
  }

  #logIn .logInBox .logSerch input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-top: -9px;
    transform: translateY(6px);
  }

  #logIn .logInBox .logSerch label {
    color: #444;
    font-weight: 700;
    margin: 6px;
  }

  #logIn .logInBox .logSerch ul {
    float: right;
  }

  #logIn .logInBox .logSerch ul li {
    float: left;
    padding: 0 11px;
    position: relative;
  }

  #logIn .logInBox .logSerch ul li:before {
    clear: both;
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #e5e5e5;
  }

  #logIn .logInBox .logSerch ul li:first-child:before {
    display: none;
  }

  #logIn .logInBox .socialBox p {
    padding: 19px 0;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.42px;
    color: #444;
  }

  #logIn .logInBox .socialBox .socialBox2 {
    display: flex;
    justify-content: space-between;
  }

  #logIn .logInBox .socialBox .socialBox2 a {
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

  /* 로그인 페이지 CSS  끝 */
</style>