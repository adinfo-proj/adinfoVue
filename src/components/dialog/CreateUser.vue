<template>
  <div id="singPopUp">
    <h2>애드인포 회원가입</h2>
    <div class="adGradeBox">
      <input type="radio" name="adGradeCd" id="adGradeCd02" v-model="adGradeCd" value="02" checked>
      <label for="adGradeCd02">
        <span>
          <img class="singOff" src="../../assets/images/signIcon/icon_003.png" alt="signIcon1">
          <img class="singOn" src="../../assets/images/signIcon/icon_003_1.png" alt="signIcon1">
        </span>
        회원사
      </label>
      <input type="radio" name="adGradeCd" id="adGradeCd03" v-model="adGradeCd" value="03">
      <label for="adGradeCd03">
        <span>
          <img class="singOff" src="../../assets/images/signIcon/icon_002.png" alt="signIcon1">
          <img class="singOn" src="../../assets/images/signIcon/icon_002_1.png" alt="signIcon1">
        </span>
        광고주
      </label>
      <input type="radio" name="adGradeCd" id="adGradeCd04" v-model="adGradeCd" value="04">
      <label for="adGradeCd04">
        <span>
          <img class="singOff" src="../../assets/images/signIcon/icon_001.png" alt="signIcon1">
          <img class="singOn" src="../../assets/images/signIcon/icon_001_1.png" alt="signIcon1">
        </span>
        마케터
      </label>
    </div>
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
      </p>
    </div>
    <div class="radioBox">
      <input type="radio" name="termsYn" id="termsY" v-model="termsYn" value="Y"><label for="termsY" >동의합니다.</label> 
      <input type="radio" name="termsYn" id="termsN" v-model="termsYn" value="N"><label for="termsN">동의하지 않습니다.</label>
    </div>
    <h3> 개인정보취급방침</h3>
    <div class="termsBox">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sint, reprehenderit suscipit ratione, aperiam ipsam vel consequatur similique dolorem, vero nesciunt! Ad natus ab illum, deserunt blanditiis quas quos sint?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quidem modi, dignissimos ipsa assumenda dolor unde ab veritatis, ad expedita enim quae! Consectetur delectus animi quod numquam harum quibusdam rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis iste voluptatibus perferendis laborum illum ipsam quas? Unde aliquam qui pariatur voluptatum, nisi incidunt laboriosam maxime ipsa possimus reiciendis saepe. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquam ab perspiciatis, quidem necessitatibus earum. Rem beatae quasi voluptates minus eaque neque non, iusto, animi cum similique nihil, recusandae tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam exercitationem doloremque quo vitae architecto blanditiis quod laboriosam non harum magnam fugit possimus libero voluptatum accusantium et, eius aspernatur unde! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque totam debitis culpa! Cupiditate architecto ea corporis molestiae culpa voluptatem quo et, exercitationem tempore ipsam odit aut nostrum praesentium nemo ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum repudiandae culpa labore? Officia delectus aut laborum illo, nobis doloremque a placeat, deleniti, veniam omnis nam libero corporis! Praesentium, hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum tempora voluptatem blanditiis accusantium? Debitis odit impedit maxime expedita quidem illo, quis ea architecto voluptas quia numquam quae eos. Quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati temporibus alias voluptatibus natus. Explicabo vitae voluptas magnam, in illum et, adipisci ad quia nobis optio modi dolores? Tempora, iusto dolore?
      </p>
    </div>
    <div class="radioBox">
      <input type="radio" name="policyYn" id="policyY" v-model="policyYn" value="Y"><label for="policyY">동의합니다.</label> 
      <input type="radio" name="policyYn" id="policyN" v-model="policyYn" value="N"><label for="policyN">동의하지 않습니다.</label>
    </div>
    <h3>정보입력</h3>
    <div class="tableBox">
      <table>
        <tr>
          <th>이메일(아이디)</th>
          <td class="tableWi">
            <input type="text" placeholder="abc@abd.co.kr" v-model="emailId">
          </td>
          <th>이름/회사명</th>
          <td>
            <input type="text" class="wMax">
          </td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td colspan="3">
            <input type="password" name="userPw" id="userPw" v-model="userPass">
            <label for="userPw">* 영문 / 숫자 (특수문자 ~!@#$%^-* 만 사용 가능)를 조합하여 최소 8자 이상 13자 이내</label>
          </td>
        </tr>
        <tr>
          <th>비밀번호 확인</th>
          <td colspan="3">
            <input type="password" name="userPwCon" id="userPwCon" v-model="userPassConf">
            <label for="userPwCon">* 비밀번호 확인을 위해 다시 한번 입력 해 주세요. </label>
          </td>
        </tr>
        <tr>
          <th>휴대전화번호</th>
          <td colspan="3">
            <input type="tel" name="phoneNum" id="phoneNum" v-model="clntSubsNo">
            <button>
              본인확인
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="signBtnBox">
      <button class="signCancleBtn"
        @click="SignMadalCancle()">
        취소하기
      </button>
      <button class="signBtn"
        @click="SignPost()"
      >
        가입하기
      </button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import $ from 'jquery';
  
  export default {
    data() {
      return {
          emailId: ''           // 이메일 주소
        , userPass: ''           // 패스워드
        , userPassConf: ''       // 패스워드 확인
        , userName: ''          // 가입자 이름(혹은 회사명)
        , clntSubsNo: ''        // 휴대폰번호 
        , adGradeCd: '02'         // 고객등급
        , termsYn: ''           // 서비스이용약관 YN
        , policyYn: ''         // 개인정보취급 방침 YN
      }
    },
    methods: {
      //******************************************************************************
      // 회원가입 취소닫기 함수
      //******************************************************************************
      SignMadalCancle() {
        $("#singPopUp").css({display: "none"})
      }
      //******************************************************************************
      // 회원가입 데이터 전송함수
      //******************************************************************************
      , SignPost() {


        if(this.termsYn == 'N' || this.termsYn == '') {
          alert('동의해랏! 1')
          return;
        }

        if(this.policyYn == 'N' || this.policyYn == '') {
          alert('동의해랏! 2')
          return;
        }

        if(this.emailId == null || this.emailId == '') {
          alert('이메일주소 입력')
          this.emailId.
          return;
        }

        if(this.userName == null || this.userName == '') {
          alert('동의해랏! 2')
          return;
        }

        if(this.userPass == null || this.userPass == '') {
          alert('동의해랏! 2')
          return;
        }

        if(this.clntSubsNo == null || this.clntSubsNo == '') {
          alert('동의해랏! 2')
          return;
        }

        if(this.userPass != this.userPassConf) {
          alert('동의해랏! 2')
          return;
        }

        //------------------------------------------------------------------------------
        // 정보 보내기
        //------------------------------------------------------------------------------
        var data = {
            emailId: this.emailId
          , userPass: this.userPass
          , userName: this.userName
          , clntSubsNo: this.clntSubsNo
          , adGradeCd: this.adGradeCd
        };

        const frm = new FormData();
        frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));		

        axios.post("http://api.adinfo.co.kr:30000/addmember", frm)
        .then(response => {
          console.log(response);

          if( response.data.status == true ) {
            $("#singPopUp").css({display: "none"})

            this.loginView = false;
            this.$store.state.emailId = response.data.emailId
            this.$store.state.jwtAuthToken = response.data.jwtAuthToken
            this.$store.state.adGradeCd = response.data.adGradeCd

            // 토큰값을 LocalStorage에 저장한다.
            localStorage.setItem("email", this.$store.state.emailId);
            localStorage.setItem("token", this.$store.state.jwtAuthToken);
            localStorage.setItem("grade", this.$store.state.adGradeCd);

            alert("회원가입이 완료되었습니다. DashBoard로 넘어갑니다.")

            // this.$router.push({ path : "MENU_0000" })
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
    z-index: 999999;
  }

  #singPopUp h2 {
    text-align: center;
    font-size: 24px;
    letter-spacing: 0.84;
    color: #444;
    margin-bottom: 22px;
  }


  #singPopUp .adGradeBox{
    margin-bottom: 20px;
    height: 60px;
  }

  #singPopUp .adGradeBox input[type="radio"]{
    display: none;
  }

  #singPopUp .adGradeBox input[type="radio"] + label{
    display: flex;
    float: left;
    width: 33.333%;
    height: 100%;
    text-align: center;
    padding: 16px 107px;
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


  #singPopUp .adGradeBox label span{
    display: inline-block;
    height: 25px;
  }



  #singPopUp .adGradeBox label span img {
    height: 25px;
  }


  #singPopUp .adGradeBox label span .singOn {
    display: none;
  }


  #singPopUp .adGradeBox input[type="radio"]:checked + label {
    background: #fff;
    border: 1px solid #000;
    border-bottom: none;
    color: #e25b45;
  }



  #singPopUp .adGradeBox input[type="radio"]:checked + label .singOn {
    display: inline;

  }

  #singPopUp .adGradeBox input[type="radio"]:checked + label .singOff {
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
    display: none;
  }

  #singPopUp .radioBox input[type="radio"] + label {
    padding-left: 26.8px;
    position: relative;
  }

  #singPopUp .radioBox input[type="radio"] + label:before {
    clear: both;
    position: absolute;
    width: 11px;
    height: 11px;
    border: 1px solid #cbcbcb;
    background: #f6f6f6;
    left: 5.8px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 2px;
  }

  #singPopUp .radioBox input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    display: block;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 7px;
    left: 7px;
    top: 1px;
    color: #e25b45;
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

  #singPopUp table td input[type="text"] {
    margin: 0 4px;
  }

  #singPopUp table td input[type="text"].wMax {
    width: 98%;
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
</style>