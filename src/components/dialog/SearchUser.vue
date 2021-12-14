<template>
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
</template>

<script>
  // import axios from "axios";
  import $ from 'jquery';

   export default {
 
    data() {
      return {
          searchSelect: 0                      // 아이디 찾기 탭버튼
      }
    },
    methods: {
      

 

    //   //******************************************************************************
    //   // 회원가입 데이터 전송함수
    //   //******************************************************************************
    //   , SignPost() {
    //     // axios.post()


    //     alert("회원가입이 완료되었습니다.")
    //     $("#singPopUp").css({display: "none"})

    //   }



      //******************************************************************************
      // 아이디 / 비밀번호 취소 함수
      //******************************************************************************
      SearchIdModalCancle() {
        $("#searchModar").css({display: "none"})
      }

      , SearchFunc(pos) {
        this.searchSelect = pos;
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
  }

  #searchModar .searchBox .searchTapBox .serachSubBox1 {
    
  }

  #searchModar .searchBox .searchTapBox .serachSubBox1 p {
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #searchModar .searchBox .searchTapBox .serachSubBox2 {
    display: none;
    width: 100%;
    height: 100%;
    padding: 60px 0;
    line-height: 1.5;
  }

  #searchModar .searchBox .searchTapBox .searchPw .serachSubBox1 p {
    margin-top: 15px;
  }

  #searchModar .searchBox .searchTapBox .searchPw .serachSubBox1 table{
    margin-top: 15px;
  }

  #searchModar .searchBox .searchTapBox span {
    color: #e25b45;
    font-weight: 700;
  }

  #searchModar > .searchBox > .searchTapBox > button {
    width: 170px;
    height: 48px;
    border: none;
    border-radius: 20px;
    background: #e25b45;
    color: #fff;
    font-size: 16px;
  }
</style>