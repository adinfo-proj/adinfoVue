<template>
  <div id="logIn">
    <div class="logInBox">
      <!-- <h1><span>HELLO</span> DB.Master</h1> -->
      <div class="logInLogo">
        <img src="../../assets/images/loginLogo.png" alt="">
      </div>
      <p>정보를 정확하고 가치있게 생각하는 마케터의 성공 파트너</p>

      <!-- <h1><span>마케터의 성공파트너,</span> 디비마스터</h1> -->
      <!-- <p></p> -->
      <div class="inputBox">
        <div class="leftInput">
            <input type="text" placeholder="이메일을 입력하세요."
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
      <div class="logSearch">
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
        <div class="socialBox3">
          로그인서비스 준비중
        </div>
        <div class="socialBox2">
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/NaverIcon.png"    alt="네이버"  >네이버</a>
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/KakaoIcon.png"    alt="카카오톡">카카오톡</a>
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/GoogleIcon.png"   alt="구글"    >구글</a>
          <a class="socialLog" href="javascript:void(0)"><img src="../../assets/images/socialIcon/FaceBookIcon.png" alt="페이스북">페이스북</a>
        </div>
      </div>
    </div>
    <CreateUser></CreateUser>
    <SearchUser></SearchUser>
  </div>
</template>

<script>
import $          from 'jquery';
import axios      from "axios";
import CreateUser from "../../components/dialog/CreateUser";
import SearchUser from "../../components/dialog/SearchUser";

export default {
  components: {
      CreateUser
    , SearchUser
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

  /* #logIn > .logInBox > h1, */
  #logIn > .logInBox > .logInLogo,
  #logIn > .logInBox > p {
    text-align: center;
  }

  #logIn > .logInBox > .logInLogo {
    margin-bottom: 10px;
  }

  /* #logIn .logInBox h1 {
    font-size: 30px;
    color: #e25b45;
    letter-spacing: -1.05px;
    margin-bottom: 10px;
  }

  #logIn .logInBox h1 span {
    font-size: 30px;
    color: #262626;
  } */

  #logIn > .logInBox > p {
    font-size: 14px;
    letter-spacing: -0.49px;
    font-weight: 700;
    color: #222;
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

  #logIn .logInBox .logSearch {
    clear: both;
    height: 35px;
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
  }

  #logIn .logInBox .logSearch input[type="checkbox"] {
    display: none;
  }

  #logIn .logInBox .logSearch input[type="checkbox"] + label {
    color: #444;
    font-weight: 700;
    padding: 6px 6px 6px 26px;
    position: relative;
  }

  #logIn .logInBox .logSearch input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    width: 20px;
    height: 20px;
    content: "\e91c";
    font-family: "icomoon";
    color: #c9c9c9;
    font-weight: 900;
    font-size: 15px;
    border: 2px solid #c9c9c9;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    padding-top: 1px;
    left: 0px;
    top: 3px;
  }

    #logIn .logInBox .logSearch input[type="checkbox"]:checked + label:before {
    color: #e25b45;
    border: 2px solid #e25b45;
  }

  #logIn .logInBox .logSearch ul {
    float: right;
  }

  #logIn .logInBox .logSearch ul li {
    float: left;
    padding: 0 11px;
    position: relative;
  }

  /* #logIn .logInBox .logSearch ul li a{
    font-weight: 800;
    font-size: 14px;
  } */

  #logIn .logInBox .logSearch ul li:before {
    clear: both;
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #e5e5e5;
  }

  #logIn .logInBox .logSearch ul li:first-child:before {
    display: none;
  }

  #logIn .logInBox .socialBox {
    position: relative;
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

  #logIn .logInBox .socialBox .socialBox3{
    position: absolute;
    width: 100%;
    height: 40px;
    border-radius: 15.5px;
    text-align: center;
    font-weight: 700;
    padding: 13px;
    border: 1px solid #eee;
    color: #000;
    background: rgba(255, 255, 255, 0.85);
    text-shadow: 0 0 5px #fff;
  }
</style>