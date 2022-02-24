<template>
  <div id="adminLogIn">
    <div class="adminBg">
      <div class="logInBox">
        <div class="logInLogo">
          <img src="../../assets/images/loginLogo.png" alt="">
        </div>
        <h1>광고주 로그인</h1>

        <div class="inputBox">
          <div class="leftInput">
              <input type="text" placeholder="아이디를 입력하세요."
              v-model="clntId" @keyup.enter="GoFocus();">
              <input type="password" placeholder="비밀번호를 입력하세요"
              v-model="clntPw" ref="clntPw" @keyup.enter="LogIn();">
          </div>
          <div class="loginBtn">
              <button
                @click="LogIn();"
              >
              로그인
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $          from 'jquery';
import axios      from "axios";

export default {
  components: {

  },
  data() {
    return {
        clntId: ''
      , clntPw: ''
    }
  },
  methods: {
    GoFocus() {
      this.$refs.clntPw.focus(); ///$refs
    },
    //******************************************************************************
    // 로그인 함수
    //******************************************************************************    
    LogIn() {
      axios.post("http://api.adinfo.co.kr:30000/login", {
        clntId: this.clntId,
        clntPw: this.clntPw,
        siteCode: '01'
      })
      .then(response => {
        if( response.data.status == "0" ) {
          this.$store.state.clntId       = response.data.clntId
          this.$store.state.clntNm       = response.data.clntNm
          this.$store.state.nickNm       = response.data.nickNm

          this.$store.state.jwtAuthToken = response.data.authToken
          this.$store.state.adGradeCd    = response.data.gradeCd

          this.$store.state.mbId = response.data.mbId
          this.$store.state.adId = response.data.adId
          this.$store.state.mkId = response.data.mkId
          this.$store.state.mkCd = response.data.mkCd

          // 토큰값을 LocalStorage에 저장한다.
          
          sessionStorage.setItem("clntId", this.$store.state.clntId);
          sessionStorage.setItem("clntNm", this.$store.state.clntNm);
          sessionStorage.setItem("nickNm", this.$store.state.nickNm);
          sessionStorage.setItem("token" , this.$store.state.jwtAuthToken);
          sessionStorage.setItem("grade" , this.$store.state.adGradeCd);

          sessionStorage.setItem("mbId"  , this.$store.state.mbId);
          sessionStorage.setItem("adId"  , this.$store.state.adId);
          sessionStorage.setItem("mkId"  , this.$store.state.mkId);
          sessionStorage.setItem("mkCd"  , this.$store.state.mkCd);

          if( this.$store.state.adGradeCd == '05' ){
            this.$router.push({ path : "MENU_08201" })
          } else {
            this.$router.push({ path : "MENU_0000" })
          }
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

<style scoped>
  #adminLogIn {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: url(../../assets/images/loginBg.svg);
    background-size: cover;
    z-index: 99999;
  }
  #adminLogIn .adminBg{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  #adminLogIn .logInBox {
    position: absolute;
    width: 448px;
    height: 393px;
    padding: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    text-align: center;
  }

  #adminLogIn .logInBox img {
    width: 125px;
  }

  #adminLogIn .logInBox h1 {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -1.12;
    color: #222;
    margin: 10px 0 37px;
  }

  #adminLogIn .logInBox input {
    width: 100%;
    margin-bottom: 10px;
    padding: 16px 20px;
    border:  1px solid #e5e5e5;
    border-radius: 10px;
  }

  #adminLogIn .logInBox .loginBtn {
    margin-top: 16px;
  }

  #adminLogIn .logInBox .loginBtn button {
    width: 100%;
    height: 60px;
    border: none;
    background: #000;
    color: #fff;
    border-radius: 20px;
    font-size: 18px;
    letter-spacing: -0.54px;
    font-weight: 700;
  }

  
</style>