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
            <li><a href="javascript:void(0)"
            @click="SignMadal();">회원가입</a></li>
            <li><a href="javascript:void(0)"
            @click="SearchIdModal();">아이디 찾기</a></li>
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
        <h2>애드인포 회원가입</h2>
        <ul>
          <li class="memberType">
            <a href="javascript:void(0)">
              <div>
                <img class="singOff" src="./assets/images/signIcon/icon_001.png" alt="signIcon1">
                <img class="singOn" src="./assets/images/signIcon/icon_001_1.png" alt="signIcon1">
              </div>
              회원사
            </a>
           </li>
          <li>
            <a href="javascript:void(0)">
              <div>
                <img class="singOff" src="./assets/images/signIcon/icon_002.png" alt="signIcon1">
                <img class="singOn" src="./assets/images/signIcon/icon_002_1.png" alt="signIcon1">
              </div>
              광고주
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <div>
                <img class="singOff" src="./assets/images/signIcon/icon_003.png" alt="signIcon1">
                <img class="singOn" src="./assets/images/signIcon/icon_003_1.png" alt="signIcon1">
              </div>
              마케터
            </a>
          </li>
        </ul>
        <h3>서비스 이용약관</h3>
        <div class="termsBox">
          <p>
            제1장 총칙제1조(목적)
            <br><br>
            이 약관은 회원의 권익보호 및 거래관계의 명확화를 위하여 신용카드사(이하 “카드사”라 함)와 신용카드(이하 “카드”라 함)를 이용하고자 하는 회원 간의 필요한 사항을 정함을 목적으로 합니다.
            <br><br>
            제2조(회원)① 회원은 본인회원과 가족회원으로 구분합니다.<br>
            ② 본인회원이란 이 약관을 승인하고 삼성카드(주)에 카드 발급을 신청하여 카드사로부터 카드를 발급받은 분을 말합니다.<br>
            ③ 가족회원이란 본인회원이 지정하고 대금의 지급 및 기타 카드이용에 관한 책임을 본인회원이 부담할 것을 승낙한 분으로서, 이 약관을 승인하고 카드사로부터 카드를 발급받은 분을 말합니다.<br>
            <br>
            조문체계도버튼연혁<br>
            제1조(목적) 이 법은 개인정보의 처리 및 보호에 관한 사항을 정함으로써 개인의 자유와 권리를 보호하고, 나아가 개인의 존엄과 가치를 구현함을 목적으로 한다.  개정 2014. 3. 24.><br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ex ducimus aliquid minus mollitia. Et, incidunt nulla sint aliquam, beatae ullam eum mollitia unde quo iste quibusdam voluptatibus velit corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci quaerat, earum optio quia numquam voluptatum nisi eaque sunt amet labore molestiae, mollitia nihil fugiat minus in rerum consequuntur rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus ducimus id rem magni, blanditiis dolorem eum nemo harum, sapiente laudantium? Nesciunt inventore illum voluptatem esse, possimus aliquid quaerat vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consectetur eveniet asperiores dolorem reiciendis omnis iure, a dolore distinctio, aperiam voluptas, quis fugit autem cum ipsam. Facere perferendis temporibus provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolor provident at quos vitae architecto iure inventore perspiciatis, aut magnam, praesentium, fugit quas suscipit iusto quia alias qui consectetur necessitatibus?


          </p>
        </div>
        <div class="radioBox">
          <input type="radio" name="termsYn" id="termsY"><label for="termsY">동의합니다.</label> 
          <input type="radio" name="termsYn" id="termsN"><label for="termsN">동의하지 않습니다.</label>
        </div>
        <h3> 개인정보취급방침</h3>
        <div class="termsBox">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sint, reprehenderit suscipit ratione, aperiam ipsam vel consequatur similique dolorem, vero nesciunt! Ad natus ab illum, deserunt blanditiis quas quos sint?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem modi, dignissimos ipsa assumenda dolor unde ab veritatis, ad expedita enim quae! Consectetur delectus animi quod numquam harum quibusdam rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis iste voluptatibus perferendis laborum illum ipsam quas? Unde aliquam qui pariatur voluptatum, nisi incidunt laboriosam maxime ipsa possimus reiciendis saepe. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam ab perspiciatis, quidem necessitatibus earum. Rem beatae quasi voluptates minus eaque neque non, iusto, animi cum similique nihil, recusandae tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam exercitationem doloremque quo vitae architecto blanditiis quod laboriosam non harum magnam fugit possimus libero voluptatum accusantium et, eius aspernatur unde! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque totam debitis culpa! Cupiditate architecto ea corporis molestiae culpa voluptatem quo et, exercitationem tempore ipsam odit aut nostrum praesentium nemo ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum repudiandae culpa labore? Officia delectus aut laborum illo, nobis doloremque a placeat, deleniti, veniam omnis nam libero corporis! Praesentium, hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum tempora voluptatem blanditiis accusantium? Debitis odit impedit maxime expedita quidem illo, quis ea architecto voluptas quia numquam quae eos. Quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus alias voluptatibus natus. Explicabo vitae voluptas magnam, in illum et, adipisci ad quia nobis optio modi dolores? Tempora, iusto dolore?
          </p>
        </div>
        <div class="radioBox">
          <input type="radio" name="policyYn" id="policyY"><label for="policyY">동의합니다.</label> 
          <input type="radio" name="policyYn" id="policyN"><label for="policyN">동의하지 않습니다.</label>
        </div>
        <h3>정보입력</h3>
        <div class="tableBox">
          <table>
            <tr>
              <th>이메일(아이디)</th>
              <td class="tableWi">
                <input type="text">
                @
                <input type="text">
                <select name="mailDomain" id="mailDomain">
                  <option value="1">직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="hotmail.com">hotmail.com</option>
                  <option value="nate.com">nate.com</option>
                  <option value="yahoo.co.kr">yahoo.co.     kr</option>
                  <option value="paran.com">paran.com</option>
                  <option value="empas.com">empas.com</option>
                  <option value="dreamwiz.com">dreamwiz.com</option>
                  <option value="freechal.com">freechal.com</option>
                  <option value="lycos.co.kr">lycos.co.kr</option>
                  <option value="korea.com">korea.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hanmir.com">hanmir.com</option>
                </select>  
              </td>
              <th>이름/회사명</th>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td colspan="3">
                <input type="password" name="userPw" id="userPw">
                <label for="userPw">* 영문 / 숫자 (특수문자 ~!@#$%^-* 만 사용 가능)를 조합하여 최소 8자 이상 13자 이내</label>
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td colspan="3">
                <input type="password" name="userPwCon" id="userPwCon">
                <label for="userPwCon">* 비밀번호 확인을 위해 다시 한번 입력 해 주세요. </label>
              </td>
            </tr>
            <tr>
              <th>휴대전화번호</th>
              <td colspan="3">
                <input type="tel" name="phoneNum" id="phoneNum">
                <button>
                  본인확인
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div class="signBtnBox">
          <button class="signCancleBtn"
            @click="SignMadalCancle();">
            취소하기
          </button>
          <button class="signBtn"
            @click="SignPost();"
          >
            가입하기
          </button>
        </div>
      </div>
      <!-- 아이디/ 비밀번호 찾기 창 -->
      <div id="searchModar">
        <div class="searchBox">
          <h2>회원 아이디 / 비밀번호 찾기</h2>
          <div class="searchTap">
            <a href="javascript:void(0)"
              @click="SearchFunc(0)" v-bind:class="{on : 0 == searchSelect}"
            >
              아이디 찾기
            </a>
            <a href="javascript:void(0)"
              @click="SearchFunc(1)" v-bind:class="{on : 1 == searchSelect}"
            >
              비밀번호 찾기
            </a>
          </div>
          <div class="searchTapBox">
            <div class="searchTapSub">
              <div class="searchId"
                v-if="searchSelect == 0"
              >
                <div class="serachSubBox1">
                  <p>회원가입시 등록한 이름, 핸드폰 번호를 입력해주세요.<span></span></p>
                  <table>
                    <tr>
                      <th>
                        이 름
                      </th>
                      <td>
                        <input type="text" name="serchIdname" id="serchIdname">
                      </td>
                    </tr>
                    <tr>
                      <th>
                        핸드폰 번호
                      </th>
                      <td>
                        <input type="text" name="serchIdPhone" id="serchIdPhone">
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="serachSubBox2">
                  <p>회원님의 아이디 찾기가 완료되었습니다.<br>
                    등록하신 아이디는 <span>qwer1234@naver.com</span>입니다.</p>
                </div>
              </div>
              <div class="searchPw"
                v-if="searchSelect == 1">
                <div class="serachSubBox1">
                  <p>임시 비밀번호를 생성하여 SMS로 보내드립니다.</p>
                  <table>
                    <tr>
                      <th>
                        아이디
                      </th>
                      <td>
                        <input type="text" name="serchIdname" id="serchIdname">
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="serachSubBox2">
                  <p>회원님의 휴대폰으로 <span>임시 비밀번호</span>가 전송되었습니다.<br>
                    발급받으신 임시 비밀번호로 로그인 후,<br>
                    새 비밀번호로 변경하여 사용하시기 바랍니다.</p>
                </div>
              </div>
            </div>
            <button>확인</button>
          </div>
          <button class="searchCancleBtn"
           @click="SearchIdModalCancle();">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13">
              <image id="X" width="13" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAFVJREFUKFOt0kkKACAIAED9/6NLCsXcDwndmnLDRQEASGcaC6+BKTz3GE2gPKxRBZ9MLIqgSz1CGoa1Zqis8dtPNqW2pmxeafe6Abs5dYBXTDZiCgRula4/5XLvrFUAAAAASUVORK5CYII="/>
            </svg>
          </button>
        </div>
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
  import axios from "axios";
  import $ from 'jquery';

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
        , searchSelect: 0                      // 아이디 찾기 탭버튼
      }
    },
    methods: {
      //******************************************************************************
      // 로그인 함수
      //******************************************************************************
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
      // 회원가입 취소닫기 함수
      //******************************************************************************
      , SignMadalCancle() {
        $("#singPopUp").css({display: "none"})
      }

      //******************************************************************************
      // 회원가입 데이터 전송함수
      //******************************************************************************
      , SignPost() {
        // axios.post()


        alert("회원가입이 완료되었습니다.")
        $("#singPopUp").css({display: "none"})

      }

      //******************************************************************************
      // 아이디 / 비밀번호 팝업 함수
      //******************************************************************************
      , SearchIdModal() {
        $("#searchModar").css({display: "block"})
      }

      //******************************************************************************
      // 아이디 / 비밀번호 취소 함수
      //******************************************************************************
      , SearchIdModalCancle() {
        $("#searchModar").css({display: "none"})
      }

      , SearchFunc(pos) {
        this.searchSelect = pos;
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
    position: fixed;
    left: 0;
    top: 0;
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



  /* 회원가입 CSS */

  #singPopUp {
    position: absolute;
    display: none;
    width: 1110px;
    height: 800px;
    padding: 30px 46px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: #fff;
  }

  #singPopUp h2 {
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.84;
    color: #444;
    margin-bottom: 22px;
  }

  #singPopUp ul {
    margin-bottom: 20px;
    height: 60px;
  }

  #singPopUp ul li {
    float: left;
    width: 33.333%;
  }
  
  #singPopUp ul li a {
    width: 100%;
    height: 60px;
    display: block;
    text-align: center;
    padding: 16px 107px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid #e6e6e6;
    background: #f1f1f1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #000;
  }

  #singPopUp > ul > li > a > div {
    display: inline-block;
    height: 25px;
  }

  #singPopUp > ul > li > a > div > img {
    height: 25px;
  }

  #singPopUp > ul > li > a > div > .singOn {
    display: none;
  }

  #singPopUp > ul > li.memberType > a {
    background: #fff;
    border: 1px solid #000;
    border-bottom: none;
    color: #e25b45;
  }

  #singPopUp > ul > li.memberType > a > div > .singOn {
    display: inline;

  }

  #singPopUp > ul > li.memberType > a > div > .singOff {
    display: none;
  }

  #singPopUp h3 {
    margin-bottom: 10px;
    font-size: 14px;
    letter-spacing: -0.35px;
    color: #444;
  }

  #singPopUp .termsBox {
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
  }

  #singPopUp .termsBox P {
    height: 120px;
    padding: 10px;
    font-size: 11.8px;
    line-height: 1.5;
    overflow-y: scroll;
  }

  #singPopUp .radioBox {
    text-align: right;
    margin-bottom: 15px;
  }

  #singPopUp .radioBox input[type="radio"] {
    transform: translateY(2px);
    width: 11px;
    height: 11px;
    margin-right: 5.8px;
  }

  #singPopUp table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
    border-style: hidden;
  }

  #singPopUp table td,
  #singPopUp table th {
    border: solid 1px #e5e5e5;
    text-align: left;
  }


  #singPopUp table th {
    width: 119px;
    height: 40px;
    padding-left: 21px;
  }

  #singPopUp table td {
    padding: 6px;
  }

  #singPopUp table .tableWi {
    width: 380px;
  }

  #singPopUp table td input,
  #singPopUp table td select {
    padding: 6px 10px;
    border: solid 1px #e5e5e5;
    width: 270px;
  }

  #singPopUp table .tableWi input[type="text"],
  #singPopUp table .tableWi select {
    width: 108px;
  }
  #singPopUp table td input[type="text"] {
    margin: 0 4px;
  }

  #singPopUp table td select {
    margin-left: 5px;
  }

  #singPopUp table td input[type="password"],
  #singPopUp table td input[type="tel"] {
     margin-right: 10px;
  }

  #singPopUp table td button {
    width: 89px;
    height: 28px;
    border-radius: 10px;
    background: #f0f0f0;
    border: 1px solid #e5e5e5;
    color: 000;
    font-weight: 700;
  }

  #singPopUp table td button.check{
    background: #fff;
    color: #e25b45;
    border-color: #e25b45;
  }

  #singPopUp .signBtnBox {
    text-align: center;
  }

  #singPopUp .signBtnBox button {
    width: 137px;
    height: 35px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 35px;
    border: none;
  }

  #singPopUp .signBtnBox .signCancleBtn {
    background: #8d8d8d;
    margin-right: 11px;
  }

  #singPopUp .signBtnBox .signBtn {
    background: #e25b45;
  }


  /* 회원가입 CSS 끝 */


  /* 아이디 / 비밀번호 찾기 CSS */
  #searchModar {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
  }

  #searchModar .searchBox {
    width: 390px;
    height: 400px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 24px 20px;
    text-align: center;
  }

  #searchModar button.searchCancleBtn {
    position: absolute;
    width: 33px;
    height: 33px;
    background: #000;
    padding: 10px;
    right: -34px;
    top: 12px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  #searchModar .searchBox h2 {
    font-size: 20px;
    font-weight: 400;
    color: #444;
    margin-bottom: 29px;
  }

  #searchModar .searchBox .searchTap {
    height: 49px;
    padding: 3px;
    border-radius: 10px;
    border: 1px solid #e5e5e5; 
    background: #f1f1f1;
    margin-bottom: 10px;
  }

  #searchModar .searchBox .searchTap a {
    display: block;
    float: left;
    width: 50%;
    height: 100%;
    padding: 14px;
    text-align: center;
    border-radius: 10px;
  }

  #searchModar .searchBox .searchTap a.on {
    background: #fff;
    border: 1px solid #e25b45;
    color: #e25b45;
    font-weight: 800;
    padding: 13px;
  }


  #searchModar .searchBox .searchTapBox .searchTapSub {
    width: 100%;
    height: 170px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 0 27px;
    margin-bottom: 15px;
  }

  #searchModar .searchBox .searchTapBox th {
    text-align: left;
    width: 70px;
  }

  #searchModar .searchBox .searchTapBox td {
    padding: 5px;
  }

  #searchModar .searchBox .searchTapBox td input {
    width: 229px;
    height: 31px;
    border: 1px solid #e5e5e5;
  }

  #searchModar .searchBox .searchTapBox .serachSubBox1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #searchModar .searchBox .searchTapBox .serachSubBox2 {
    display: none;
    width: 100%;
    height: 100%;
    padding: 60px 0;
    line-height: 1.5;
  }

  #searchModar .searchBox .searchTapBox .serachSubBox2 span {
    color: #e25b45;
    font-weight: 700;
  }



  /* 아이디 / 비밀번호 찾기 CSS 끝*/


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