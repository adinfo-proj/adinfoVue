<template>
  <div class="container menu0804">
    <div class="landPrev">

      <!-- 랜딩페이지 미리보기  -->
      <div v-for="(screenList, index) in $store.state.screenObj" :key="index">
        <div v-if="$store.state.screenObj[index].tp == '01'">
          <img :src="$store.state.screenObj[index].fileNm" alt="">
        </div>
        <div v-if="screenList.tp == '02'" v-html="screenList.descript">
        </div>
      </div>
      <div class="formPrev">
        <form method="post">
          <input type="text" name="value01" placeholder="이름을 입력하세요.">
          <input type="text" name="value03" placeholder="나이">				
          <input type="text" name="value02" placeholder="연락처 '-'없이 입력해주세요.">
          <div class="checkLine">
            <input type="radio" name="value04" value="male" id="male"><label for="male">남자</label>
            <input type="radio" name="value04" value="female" id="female"><label for="female">여자</label>
          </div>
          <textarea class="textBox" name="value05" placeholder="문의 내용을 입력해주세요."></textarea>
          <input type="checkbox" name="agree01" id="agree01">
          <label for="agree01">개인정보 수집 동의<a href="javascript:void(0)">[보러가기]</a></label>
          <div class="centerBox">
            <button>신청하기</button>
          </div>
        </form>
      </div>
    </div>    
    <div class="landChoice">
      <div class="basicInfo landBox">
        <h2>랜딩페이지 기본정보</h2>
        <table>
          <tr>
            <th>
              캠페인 명
            </th>
            <td>
              <select name="campDis" id="campDis">
                <option value="none">분류를 선택해 주세요.</option>
                <option value="value1">test1</option>
                <option value="value2">test2</option>
                <option value="value3">test3</option>
                <option value="value4">test4</option>
              </select>
            </td>
            <th>
              회사명
            </th>
            <td>
              <input type="text" class="" name="company">
            </td>
          </tr>
        </table>
      </div>
      <div class="landScr landBox">
        <p>
          스크립트 삽입
          <input type="checkbox" name="landScr" id="landScr" v-model="scriptInput" @change="ScriptOn()"
          :checked="scriptInput">
          <label for="landScr"></label>
          <i class="icon-chevron-down1 on" @click="ScriptUp()"></i>
        </p>
        <div class="landScrChecked">
          <textarea class=""></textarea>
        </div>
      </div>

      <!------------------------------------------------------------------------------------------------------------------
       이곳부터 for 루프안에서 이미지/텍스트/폼의 경우를 위해 콤포넌트를 처리한다.
      ------------------------------------------------------------------------------------------------------------------->
      <div v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index">
        <!-- 이미지 -->
        <div v-if="$store.state.lendchooseObj[index].tp == '01'">
          <ChooseLandImg></ChooseLandImg>
        </div>
        <!-- 텍스트 -->
        <div v-if="$store.state.lendchooseObj[index].tp == '02'">
          <ChooseLandText></ChooseLandText>
        </div>
        <div v-if="$store.state.lendchooseObj[index].tp == '03'">
          <ChooseLandForm></ChooseLandForm>
        </div>
        <!-- 폼 -->
        <!--
        <div v-if="$store.state.lendchooseObj[index].tp == '03'">
          <ChooseLandImg v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index" v-bind:is="lendchoose"></ChooseLandImg>
        </div>
        -->
      </div>









      <!-- 랜딩페이지 추가되는 내용  -->
      <!-- <div v-for="(lendchoose, index) in lendchooseObj" :key="index">
        <div :v-html="lendchooseObj[index]">
        </div>
   
      </div> -->

      
      
      
































      <!-- <div class="landImg landBox">
          <h2>이미지 등록 <span>(가로사이즈 800px 필수, 용량 3MB 이하)</span><i class="icon-x1"></i></h2>
          <input class="upload_name" disabled="disabled" v-bind:placeholder="landImgNm01">
          <input type="file" accept="image/*" id="landImg01" class="upload_hidden" ref="upImage01" @change="UploadImg()">
          <label for="landImg01">이미지 찾기 <i class="icon-plus1"></i></label>
      </div>



      <div class="landText landBox">
        <h2>텍스트 등록 <i class="icon-x1"></i></h2>
        <ckeditor v-model="viewText" ref="substance" :config="editorConfig"></ckeditor>
        <button id="upBtn1" @click="UploadText()">입력하기</button>
        <button id="modifyBtn1" class="modifyBtn" @click="UploadText()">수정하기</button>
      </div>











      <div class="landForm landBox">
        <h2>폼 꾸미기<span>(최대10개항목)</span><i class="icon-x1"></i></h2>
        <table>
          <thead>
            <tr>
              <th class="formNum">번호</th>
              <th class="formNm">항목</th>
              <th class="formType">유형</th>
              <th class="formCh">필수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="formNum">01</td>
              <td class="formNm"><input type="text" value="이름" disabled></td>
              <td class="formType">
                <select name="formTypeSel" disabled>
                  <option value="textForm" selected>입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary01" checked><label for="necessary01"></label></td>
            </tr>
            <tr>
              <td class="formNum">02</td>
              <td class="formNm"><input type="text" value="연락처" disabled></td>
              <td class="formType">
                <select name="formTypeSel" disabled>
                  <option value="textForm" selected>입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02" checked><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox01">
              <td class="formNum">03</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox02">
              <td class="formNum">04</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox03">
              <td class="formNum">05</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox04">
              <td class="formNum">06</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox05">
              <td class="formNum">07</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox06">
              <td class="formNum">08</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox07">
              <td class="formNum">09</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
            <tr class="disNone hiddenBox08">
              <td class="formNum">10</td>
              <td class="formNm"><input type="text"></td>
              <td class="formType">
                <select name="formTypeSel">
                  <option value="textForm">입력박스</option>
                  <option value="radioForm">체크박스</option>
                  <option value="checkForm">다중체크박스</option>
                  <option value="selForm">선택박스</option>
                </select>
                <input type="text" disabled>
              </td>
              <td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">
                <button>입력항목 <i class="icon-plus1"></i></button>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="agreeBox">
          <input type="checkbox" id="chAgree01">
          <label for="chAgree01">이용약관 표시</label>
        </div>
        <div class="agreeBox">
          <input type="checkbox" id="chAgree02" checked>
          <label for="chAgree02">개인 정보 수집 동의 표시
            <span>(개인정보 수집 동의는 필수입니다.)</span>
          </label>
        </div>
        <div class="agreeBox">
          <input type="checkbox" id="chAgree03">
          <label for="chAgree03">광고성 정보 수신동의 표시</label>
        </div>
        <div class="agreeBox">
          <input type="checkbox" id="chAgree04">
          <label for="chAgree04">개인 정보 제3자 제공 동의 표시</label>
        </div>
        <div class="agreeBox">
          <input type="checkbox" id="chAgree05">
          <label for="chAgree05">‘전체동의’자동 표시 <span class="colGray">(2개 이상의 동의 표시인 경우)</span> </label>
        </div>
        <div class="btnDesignBox btnName">
          <h6 class="leftBox">신청 버튼 이름</h6>
          <input type="text" name="sumBtn" id="sumBtn">
        </div>
        <div class="btnDesignBox btnShape">
          <h6>신청버튼 모양 선택</h6>
          <div>
            <input type="radio" name="btnShape" id="btn01"><label for="btn01"><img src="../../assets/images/menu0802/btnShape01.png"></label>
            <input type="radio" name="btnShape" id="btn02"><label for="btn02"><img src="../../assets/images/menu0802/btnShape02.png"></label>
            <input type="radio" name="btnShape" id="btn03"><label for="btn03"><img src="../../assets/images/menu0802/btnShape03.png"></label>
          </div>
        </div>
        <div class="btnDesignBox btnColor">
          <h6 class="leftBox">신청버튼 모양 선택</h6>
          <input type="radio" name="btnColor" id="btn_e50000">
          <label for="btn_e50000"></label>
          <input type="radio" name="btnColor" id="btn_e56e00">
          <label for="btn_e56e00"></label>
          <input type="radio" name="btnColor" id="btn_0077e5">
          <label for="btn_0077e5"></label>
          <input type="radio" name="btnColor" id="btn_aa00e5">
          <label for="btn_aa00e5"></label>
          <input type="radio" name="btnColor" id="btn_350101">
          <label for="btn_350101"></label>
          <input type="radio" name="btnColor" id="btn_291d4b">
          <label for="btn_291d4b"></label>
          <input type="radio" name="btnColor" id="btn_a37300">
          <label for="btn_a37300"></label>
          <input type="radio" name="btnColor" id="btn_2a4c05">
          <label for="btn_2a4c05"></label>
          <input type="radio" name="btnColor" id="btn_4e4e4e">
          <label for="btn_4e4e4e"></label>
          <input type="radio" name="btnColor" id="btn_000000">
          <label for="btn_000000"></label>
        </div>			
      </div> -->
      <div class="btnBox">
        <button class="saveBtn">미리보기</button>
        <button class="imgBtn" @click="ImgChooseBtn()">이미지 추가</button>
        <button class="textBtn" @click="TextChooseBtn()">텍스트 추가</button>
        <button class="formBtn" @click="FormChooseBtn()">폼 추가</button>
      </div>
      <!-- 수정 사항 -->
      *미리보기 클릭 시 새로운 창에서 보여집니다.
      

    </div>
  </div>
</template>

<script>

  // import axios from "axios";
  import $ from 'jquery';
  import ChooseLandImg from '../../components/dialog/ChooseLandImg.vue'
  import ChooseLandText from '../../components/dialog/ChooseLandText.vue'
  import ChooseLandForm from '../../components/dialog/ChooseLandForm.vue'
    
  export default {
    components: {
        ChooseLandImg
      , ChooseLandText
      , ChooseLandForm
    },
    data() {
      return {
        editorConfig: {        
          toolbarGroups: [
            { name: 'forms' },
            { name: 'basicstyles', groups: [ 'basicstyles'] },
            { name: 'links' },
            { name: 'styles' },
            { name: 'colors' }
          ]
          , height: '150px'
          , language: 'ko'
          , resize_enabled: false
        }
        , scriptInput: false


      }
    },
    methods: {


      //******************************************************************************
      // 스크립트 추가 시 텍스트박스 보이는 함수
      //******************************************************************************
      ScriptOn() {
        if(this.scriptInput == true) {
          $(".landScr .landScrChecked").slideDown(300);
          $(".landScr .icon-chevron-down1").removeClass("on");
        }else{
          $(".landScr .landScrChecked").slideUp(300);
          $(".landScr .icon-chevron-down1").addClass("on");
        }
      },

      //******************************************************************************
      // 스크립트 접는 함수
      //******************************************************************************
      ScriptUp() {
        if(this.scriptInput == false) {
          return;
        }

        $(".landScr .landScrChecked").slideToggle(300);
        $(".landScr .icon-chevron-down1").toggleClass("on");

      },
      //******************************************************************************
      // 이미지 추가 함수
      //******************************************************************************
      ImgChooseBtn() {

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }

        let plusObj={};

        plusObj.tp = '01'
        plusObj.Nm = ChooseLandImg
        

        this.$store.state.lendchooseObj.push(plusObj)


        console.log(this.$store.state.lendchooseObj)
      },
      //******************************************************************************
      // 텍스트 추가 함수
      //******************************************************************************
      TextChooseBtn() {

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }

        let plusObj={};

        plusObj.tp = '02'
        plusObj.Nm = ChooseLandText
        

        this.$store.state.lendchooseObj.push(plusObj)


        console.log(this.$store.state.lendchooseObj)
      },
      //******************************************************************************
      // 폼 추가 함수
      //******************************************************************************
      FormChooseBtn() {

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }

        let plusObj={};

        plusObj.tp = '03'
        plusObj.Nm = ChooseLandForm
        

        this.$store.state.lendchooseObj.push(plusObj)


        console.log(this.$store.state.lendchooseObj)
      },

    },
    created() {

      this.$store.state.headerTopTitle = "DBMASTER";
      this.$store.state.headerMidTitle = "랜딩페이지 제작";

    }
  }
</script>

<style scoped>
  .menu0804 {
    display: flex;
    justify-content: space-between;
  }

  .menu0804 .landPrev {
    width: 820px;
    padding-right: 20px;
  }

  .menu0804 .landPrev img {
    width: 100%;
  }

  .menu0804 .landPrev .formPrev {
    width: 100%;
    border: 30px solid #3e3e3e;
    padding: 50px;
  }

  .menu0804 .landPrev .formPrev input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 12px 16px;
  }

  .menu0804 .landPrev .formPrev	.checkLine input[type="radio"],
  .menu0804 .landPrev .formPrev	input[type="checkbox"] {
    display: none;
  }

  .menu0804 .landPrev .formPrev	.checkLine label {
    font-size: 16px;
    display: inline-block;
    width: 76px;
    margin: 15px 15px 25px 0px ;
    position: relative;
    text-align: right;
    padding-right: 10px;
    font-weight: 700;
  }

  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
    font-size: 16px;
    display: inline-block;
    margin-bottom: 38px;
    font-weight: 700;
    position: relative;
    padding-left: 35px;
  }

  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label a {
    font-size: 16px;
    margin-left: 5px;
  }

  .menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #cbcbcb;
    background: #f6f6f6;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 2px;
  }

  .menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after,
  .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
    clear: both;
    position: absolute;
    display: block;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 15px;
    left: 7px;
    top: 2px;
    color: #e25b45;
  }

  .menu0804 .landPrev .formPrev	.textBox {
    width: 100%;
    height: 120px;
    resize: none;
    margin-bottom: 16px;
    padding: 10px;
    font-size: 16px;
  }

  .menu0804 .landPrev .formPrev .centerBox {
    text-align: center;
  }

  .menu0804 .landPrev .formPrev .centerBox button {
    width: 50%;
    background: #aa00e5;
    color: #fff;
    border: none;
    padding: 25px;
    font-size: 28px;
    border-radius: 100px;
    font-weight: 700;
  }

  .menu0804 .landChoice {
    width: 525px;
  }

  .menu0804 .landChoice .landBox {
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  .landChoice .landBox {
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  .menu0804 .landChoice .basicInfo h2,
  .menu0804 .landChoice .landScr p {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
  }

  .menu0804 .landChoice .basicInfo h2 {
    padding: 14px 20px;
    border-bottom: 1px solid #e5e5e5;
  }

  .menu0804 .landChoice .basicInfo table {
    padding: 5px 20px 21px;
    width: 100%;
  }

  .menu0804 .landChoice .basicInfo table td {
    text-align: left;
  }

  .menu0804 .landChoice .basicInfo table th {
    width: 64px;
    letter-spacing: -0.36px;
    padding: 8.5px 0;
    vertical-align: top;
    color: #222;
    text-align: center;
  }

  .menu0804 .landChoice .basicInfo table td input,
  .menu0804 .landChoice .basicInfo table td select {
    border: 1px solid #e5e5e5;
    padding: 7px 10px;
    margin: 2px 0;
    width: 100%;
    height: 100%;
  }

  .menu0804 .landChoice .landScr {
    padding: 21px 18px;
  }

  .menu0804 .landChoice .landScr p i {
    float: right;
    font-size: 18px;
    transition: 0.3s;
  }

  .menu0804 .landChoice .landScr p i.on {
    transform: rotate(180deg);
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] {
    display: none;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] + label {
    display: inline-block;
    width: 60px;
    height: 25px;
    border-radius: 25px;
    background: #ebebeb;
    margin: -15px 0 0 10px;
    transform: translateY(8px);
    transition: 0.3s;
    position: relative;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    color: #a5a5a5;
    left: 30px;
    top: 5.5px;
    content: "OFF";
    font-weight: 700;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] + label:after {
    clear: both;
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    background: #fff;
    left: 2px;
    top: 2px;
    content: "";
    transition: 0.3s;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label {
    background: #e25b45;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label:before {
    left: 9px;
    content: "ON";
    color: #fff;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label:after {
    left: 37px;
    top: 2px;
  }


  .menu0804 .landChoice .landScr .landScrChecked { 
    width: 487px;
    display: none;
  }

  .menu0804 .landChoice .landScr .landScrChecked textarea {
    width: 487px;
    height: 100px;
    resize: none;
    padding: 10px;
    font-size: 16px;
    margin-top: 20px;
  }

  .menu0804 .landChoice .btnBox {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }

  .menu0804 .landChoice .btnBox button {
    padding: 13px 26px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 700;
  }

  .menu0804 .landChoice .btnBox .saveBtn {
    background: #e25b45;
  }

  .menu0804 .landChoice .btnBox .imgBtn {
    border: 1px solid #e25b45;
    color: #e25b45;
  }

  .menu0804 .landChoice .btnBox .textBtn {
    background: #868686;
  }

  .menu0804 .landChoice .btnBox .formBtn {
    background: #393939;
  }


  
  









  



  /*************************************************/
  /*            모바일 참조 용으로 만든 것           */
  /*************************************************/

  @media (max-width: 960px) {
    .menu0804 .landPrev .formPrev input[type="text"] {
      font-size: 28px;
    }

    .menu0804 .landPrev .formPrev	.checkLine label {
      font-size: 32px;
      margin: 15px 27px 25px 0px ;
      padding: 0;
      width: 104px;
    }
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
      font-size: 24px;
      display: inline-block;
      padding-left: 45px;
    }

    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label a {
      font-size: 24px;
    }
    
    .menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
      width: 20px;
      height: 20px;
    }

    .menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after {
      font-size: 20px;
      top: 7px;
    }

    .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
      font-size: 20px;
      top: 3px;
    }

    .menu0804 .landPrev .formPrev	.textBox {
      font-size: 32px;
    }

    .menu0804 .landPrev .formPrev .centerBox button {
      width: 100%;
      font-size: 40px;
    }



  }

</style>