<template>
  <div id="searchModar">
    <div class="searchBox">
      <h2>회원 아이디 / 비밀번호 찾기</h2>
      <div class="searchTap">
        <span
          @click="SearchFunc(0)" v-bind:class="{on : 0 == searchSelect}"
        >
          아이디 찾기
        </span>
        <span
          @click="SearchFunc(1)" v-bind:class="{on : 1 == searchSelect}"
        >
          비밀번호 찾기
        </span>
      </div>
      <div class="searchTapBox">
        <div class="searchTapSub">
          <div class="searchId"
            v-if="searchSelect == 0"
          >
            <div class="serachSubBox1">
              <p>{{message}}<span>{{message1}}<br>{{message2}}</span></p>
              <table>
                <tr>
                  <th>
                    이 름
                  </th>
                  <td>
                    <input type="text" id="serchIdname" v-model="userName" ref="serchIdname">
                  </td>
                </tr>
                <tr>
                  <th>
                    핸드폰 번호
                  </th>
                  <td>
                    <input type="text" id="serchIdPhone" v-model="clntSubsNo" placeholder="회원가입 시 입력한 연락처" ref="clntSubsNo">
                  </td>
                </tr>
              </table>
            </div>
            <div class="serachSubBox2">
              <p>회원님의 아이디 찾기가 완료되었습니다.<br>
                등록하신 아이디는 <span>{{retUeserId}}</span>입니다.</p>
            </div>
          </div>
          <div class="searchPw"
            v-if="searchSelect == 1">
            <div class="serachSubBox1">
              <p>{{message3}}<span>{{message1}}<br>{{message2}}</span></p>
              <table>
                <tr>
                  <th>
                    아이디
                  </th>
                  <td>
                    <input type="text" id="upPassWd" ref="upPassWd" v-model="userId">
                  </td>
                </tr>
                <tr>
                  <th>
                    핸드폰번호
                  </th>
                  <td>
                    <input type="text" id="upPassWdHp" v-model="pwClntSubsNo" placeholder="회원가입 시 입력한 연락처" ref="pwClntSubsNo">
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
        <button class="searchCheckBtn"
        @click="SearchUeser()">확인</button>
        <button class="searchBtn"
        @click="SearchIdModalCancle()">로그인 하기</button>
      </div>
      <button class="searchCancleBtn"
        @click="SearchIdModalCancle();">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13">
          <image id="X" width="13" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAFVJREFUKFOt0kkKACAIAED9/6NLCsXcDwndmnLDRQEASGcaC6+BKTz3GE2gPKxRBZ9MLIqgSz1CGoa1Zqis8dtPNqW2pmxeafe6Abs5dYBXTDZiCgRula4/5XLvrFUAAAAASUVORK5CYII="/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import $ from 'jquery';

   export default {
 
    data() {
      return {
          searchSelect : 0                      // 아이디 찾기 탭버튼
        , userName     : ''
        , clntSubsNo   : ''
        , pwClntSubsNo : ''
        , userId       : ''
        , retUeserId   : ''
        , message      : '회원가입시 등록한 이름, 핸드폰 번호를 입력해주세요.'
        , message1     : ''
        , message2     : ''
        , message3     : '임시 비밀번호를 생성하여 SMS로 보내드립니다'
      }
    },
    methods: {
      //******************************************************************************
      // 아이디 찾기, 임시 비밀번호 전송 함수
      //******************************************************************************      
      SearchUeser() {
        //------------------------------------------------------------------------------
        // 아이디 찾기
        //------------------------------------------------------------------------------
        if( this.searchSelect == 0) {
          if(this.userName == null || this.userName == '') {
            alert('이름 혹은 회사명을 입력해주세요');
            this.$refs.userName.focus();
            return;
          }

          if(this.clntSubsNo == null || this.clntSubsNo == '') {
            alert('연락처를 입력해주세요.');
            this.$refs.clntSubsNo.focus();
            return;
          }

          //------------------------------------------------------------------------------
          // 정보 보내기
          //------------------------------------------------------------------------------
          var data = {
              userName   : this.userName
            , clntSubsNo : this.clntSubsNo
          };

          const frm = new FormData();
          frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));		

          axios.post("http://api.adinfo.co.kr:30000/FindUserId", frm)
          .then(response => {
            if( response.data.status == true ) {
              console.log(response.data)
              $(".searchId .serachSubBox1").css({display: "none"})
              $(".searchId .serachSubBox2").css({display: "block"})
              $("#searchModar .searchBox .searchTapBox .searchCheckBtn").css({display: "none"})
              $("#searchModar .searchBox .searchTapBox .searchBtn").css({display: "inline"})

              this.retUeserId = response.data.message;
            //   $("#singPopUp").css({display: "none"})
            } else {
              this.message  = '';
              this.message1 = "요청하신 고객정보가 존재하지 않습니다.";
              this.message2 = "다시 입력바랍니다.";
              return;
            }
          })
          .catch(error => {
            console.log(error);
          })
        }
        //------------------------------------------------------------------------------
        // 임시 비밀번호 전송
        //------------------------------------------------------------------------------
        else {
          if(this.userId == null || this.userId == '') {
            alert('이름 혹은 회사명을 입력해주세요');
            this.$refs.userId.focus();
            return;
          }

          if(this.pwClntSubsNo == null || this.pwClntSubsNo == '') {
            alert('연락처를 입력해주세요.');
            this.$refs.pwClntSubsNo.focus();
            return;
          }

          //------------------------------------------------------------------------------
          // 정보 보내기
          //------------------------------------------------------------------------------
          var data1 = {
              userId: this.userId
            , clntSubsNo: this.pwClntSubsNo
          };

          const frm = new FormData();
          frm.append("dataObj", new Blob([JSON.stringify(data1)] , {type: "application/json"}));		

          axios.post("http://api.adinfo.co.kr:30000/UpdateUserPw", frm)
          .then(response => {
            if( response.data.status == true ) {
              $(".searchPw .serachSubBox1").css({display: "none"})
              $(".searchPw .serachSubBox2").css({display: "block"})
              $("#searchModar .searchBox .searchTapBox .searchCheckBtn").css({display: "none"})
              $("#searchModar .searchBox .searchTapBox .searchBtn").css({display: "inline"})

              //this.retUeserId = response.data.message;
            //   $("#singPopUp").css({display: "none"})
            } else {
              this.message  = '';
              this.message1 = response.data.message;
              this.message2 = "[1533-3757] 고객센터로 문의주세요.";
              this.message3  = '';
              return;
            }
          })
          .catch(error => {
            console.log(error);
          })
        }
      }
      //******************************************************************************
      // 아이디 / 비밀번호 취소 함수
      //******************************************************************************
      , SearchIdModalCancle() {
        this.searchSelect = 0;
        this.userName     = '';
        this.clntSubsNo   = ''
        this.pwClntSubsNo = ''
        this.userId       = ''
        this.retUeserId   = ''
        this.message      = '회원가입시 등록한 이름, 핸드폰 번호를 입력해주세요.'
        this.message1     = ''
        this.message2     = ''
        this.message3     = '임시 비밀번호를 생성하여 SMS로 보내드립니다'
        $(".serachSubBox1").css({display: "block"})
        $(".serachSubBox2").css({display: "none"})
        $("#searchModar .searchBox .searchTapBox .searchCheckBtn").css({display: "inline"})
        $("#searchModar .searchBox .searchTapBox .searchBtn").css({display: "none"})
        $("#searchModar").css({display: "none"})
      }
      //******************************************************************************
      // 아이디 / 비밀번호 탭버튼
      //******************************************************************************
      , SearchFunc(pos) {
        this.searchSelect = pos;
        $(".serachSubBox1").css({display: "block"})
        $(".serachSubBox2").css({display: "none"})

        this.userName   = ''
        this.clntSubsNo = ''
        this.pwClntSubsNo = ''
        this.retUeserId = ''
        this.message    = '회원가입시 등록한 이름, 핸드폰 번호를 입력해주세요.'
        this.message1   = ''
        this.message2   = ''
        this.message3   = '임시 비밀번호를 생성하여 SMS로 보내드립니다'
        $("#searchModar .searchBox .searchTapBox .searchCheckBtn").css({display: "inline"})
        $("#searchModar .searchBox .searchTapBox .searchBtn").css({display: "none"})


        
      }
    }
  }
</script>

<style scoped>
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

  #searchModar .searchBox .searchTap span {
    display: block;
    float: left;
    width: 50%;
    height: 100%;
    padding: 14px;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }

  #searchModar .searchBox .searchTap span.on {
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
  
  #searchModar .searchBox .searchTapBox table {
    width: 100%;
  }

  #searchModar .searchBox .searchTapBox th {
    text-align: left;
    width: 70px;
  }

  #searchModar .searchBox .searchTapBox td {
    padding: 5px;
  }

  #searchModar .searchBox .searchTapBox td input {
    width: 100%;
    height: 31px;
    border: 1px solid #e5e5e5;
    padding: 2px 10px;
  }

  #searchModar .searchBox .searchTapBox .serachSubBox1 p {
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .serachSubBox2 {
    display: none;
    width: 100%;
    height: 100%;
    padding: 60px 0;
    line-height: 1.5;
  }

  /* #searchModar .searchBox .searchTapBox .searchPw .serachSubBox1 p {
    margin-top: 15px;
  } */

  /* #searchModar .searchBox .searchTapBox .searchPw .serachSubBox1 table{
    margin-top: 15px;
  } */

  #searchModar .searchBox .searchTapBox span {
    color: #e25b45;
    font-weight: 700;
  }

  #searchModar .searchBox .searchTapBox button {
    width: 170px;
    height: 48px;
    border: none;
    border-radius: 20px;
    background: #e25b45;
    color: #fff;
    font-size: 16px;
  }

  #searchModar .searchBox .searchTapBox .searchBtn {
    display: none;
  }
</style>