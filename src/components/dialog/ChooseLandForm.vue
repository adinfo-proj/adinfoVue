<template>
  <div class="landForm landBox" >
    <h2>
      폼 꾸미기<span> (수집 항목은 캠페인에서 지정 바랍니다.)</span>
      <i class="icon-x_btn" @click="DelLandForm()"></i>
      <i class="icon-arrow" @click="FormUpPage()" ></i>
    </h2>
    <div class="upPage">
      <div class="formStyle category">
        <h6>폼 유형 선택</h6>
        <div class="flex">
          <input type="radio" :name="formType+this.indexNum"  v-model="formType" :id="'form01_'+this.indexNum" value="01">
          <label :for="'form01_'+this.indexNum">
            <img src="../../assets/images/menu08302/ex01.jpg" alt="">
          </label>
          <input type="radio" :name="formType+this.indexNum"  v-model="formType" :id="'form02_'+this.indexNum" value="02">
          <label :for="'form02_'+this.indexNum">
            <img src="../../assets/images/menu08302/ex02.jpg" alt="">
          </label>
          <input type="radio" :name="formType+this.indexNum"  v-model="formType" :id="'form03_'+this.indexNum" value="03">
          <label :for="'form03_'+this.indexNum">
            <img src="../../assets/images/menu08302/ex03.jpg" alt="">
          </label>
          <input type="radio" :name="formType+this.indexNum"  v-model="formType" :id="'form04_'+this.indexNum" value="04">
          <label :for="'form04_'+this.indexNum">
            <img src="../../assets/images/menu08302/ex04.png" alt="">
          </label>
        </div>
      </div>
      <div class="formStyle formTitle">
        <h6 class="leftBox"> 폼 타이틀</h6>
        <input type="text" v-model="formTitle" id="formTitle" placeholder="폼 상단에 타이틀 문구를 삽입할 수 있습니다. 필요시 작성하세요. (10자 내외)">
      </div>
      <div class="formStyle formTitleColor">
        <h6 class="leftBox"> 폼 타이틀 폰트 색상</h6>
        <input type="color" v-model="formTitleColor">
        <span>*폼 타이틀을 추가하신 경우에만 선택해 주세요.</span>
      </div>
      <div class="formStyle fontStyle">
        <h6>타이틀 및 버튼 폰트 선택</h6>
        <div class="flex">
          <input type="radio" v-model="fontType" :name="fontType+this.indexNum" :id="'font01_'+this.indexNum" value="Nanum Gothic" class="nanum">
          <label :for="'font01_'+this.indexNum">
            나눔고딕
          </label>
          <input type="radio" v-model="fontType" :name="fontType+this.indexNum" :id="'font02_'+this.indexNum" value="TmonMonsori" class="tmon">
          <label :for="'font02_'+this.indexNum">
            티몬체
          </label>
          <input type="radio" v-model="fontType" :name="fontType+this.indexNum" :id="'font03_'+this.indexNum" value="BMJUA" class="jua">
          <label :for="'font03_'+this.indexNum">
            배민 주아체
          </label>
          <input type="radio" v-model="fontType" :name="fontType+this.indexNum" :id="'font04_'+this.indexNum" value="BMDOHYEON" class="dohyeon">
          <label :for="'font04_'+this.indexNum">
            배민 도현체
          </label>
        </div>
      </div>
      <div class="formStyle btnName">
        <h6 class="leftBox">버튼 이름</h6>
        <input type="text" v-model="btnNm" id="btnNm">
      </div>
      <div class="formStyle btnShape">
        <h6>버튼 모양 선택</h6>
        <div class="flex">
          <input type="radio" v-model="btnShape" :name="btnShape+this.indexNum" :id="'btn01_'+this.indexNum" value="0"   ><label :for="'btn01_'+this.indexNum">신청버튼</label>
          <input type="radio" v-model="btnShape" :name="btnShape+this.indexNum" class="btn02" :id="'btn02_'+this.indexNum" value="10px"><label :for="'btn02_'+this.indexNum">신청버튼</label>
          <input type="radio" v-model="btnShape" :name="btnShape+this.indexNum" class="btn03" :id="'btn03_'+this.indexNum" value="50px"><label :for="'btn03_'+this.indexNum">신청버튼</label>
        </div>
      </div>

      <div class="formStyle formTable">
        <table>
          <tr>
            <td class="left">
              <h6 class="leftBox">버튼 텍스트 색상</h6>
              <input type="color" v-model="textColor">
            </td>
            <td class="right">
              <h6 class="leftBox">버튼 색상 선택</h6>
              <input type="color" v-model="btnColor">
            </td>
          </tr>
          <tr>
            <td class="left line">
              <h6 class="leftBox">폼 테두리 굵기</h6>
              <input type="text" id="boxLine" v-model="borderLine"><label for="#"><span>px</span></label>
            </td>
            <td class="right">
              <h6 class="leftBox">폼 테두리 색상</h6>
              <input type="color" v-model="lineColor">
            </td>
          </tr>
          <tr>
            <td class="left">
              <h6 class="leftBox">폼 배경 색상</h6>
              <input type="color" v-model="bgColor">
            </td>
            <td class="right">
              <h6 class="leftBox">약관 텍스트 색상</h6>
              <input type="color" v-model="agreeColor">
            </td>
          </tr>
        </table>
        
      </div>
      <div class="formSub">
        <button @click="FormApp()">폼 적용하기</button>
      </div>	
    </div>
  </div>
</template>

<script>
  // import axios from "axios";
  import $ from 'jquery';
  // import InputForm from '../../components/dialog/InputForm.vue';
  export default {
    props: {
        indexNum: Number
    },
    components:{
      // InputForm
    },
    data() {
      return{
          inputForm  : ''
        , btnNm     : '신청하기' // 버튼내용
        , agreeTitle : this.$store.state.lendchooseObj[this.indexNum].formDesc.priNm
        , agreeCon   : this.$store.state.lendchooseObj[this.indexNum].formDesc.priCon
        , btnShape   : '0'
        , btnColor   : ''
        , textColor  : '#fff'
        , borderLine : 0
        , lineColor : ''
        , formType : '01'
        , fontType : 'Nanum Gothic'
      }
    },
    methods: {
      //******************************************************************************
      // 폼 입력항목(input) 추가 함수
      //******************************************************************************
      FormContents() {
        if(this.$store.state.inputObj.length > 7 ){
          alert('입력항목은 총 10개까지 가능합니다.')
          return
        }
        // this.$store.state.inputObj.push(InputForm)
      },
      //******************************************************************************
      // 폼 접는 함수
      //******************************************************************************
      FormUpPage() {
        $(".landForm .upPage").slideToggle(300);
        $(".landForm .icon-arrow").toggleClass("on");
      },
      //******************************************************************************
      // 폼 삭제 함수
      //******************************************************************************
      DelLandForm(){
        this.$store.state.lendchooseObj.splice(this.indexNum, 1);
      },
      PrivacyText() {
        this.agreeCon = "<b>[개인정보 수집 및 이용안내]</b><br>"
        this.agreeCon += " 개인정보 수집주체 : " 
        this.agreeCon += this.store.state.company 
        this.agreeCon += "<br>"
        this.agreeCon += " 개인정보 수집항목 : 성명, 휴대폰, 이메일, IP등을 포함한 고객이 입력한 정보<br>"
        this.agreeCon += " 개인정보 수집 이용목적 : 전화, SMS를 통한 상품안내 및 상담<br>"
        this.agreeCon += " 개인정보보유/이용기간 : 수집일로부터 1년(고객동의 철회시 지체없이 파기)<br><br>"
        this.agreeCon += "<b>[개인정보의 취급 위탁]</b><br>"
        this.agreeCon += " 당사는 서비스 이행 및 향상을 위해 개인정보 취급업무를 전문업체에 위탁 운영하고 있습니다."
        this.agreeCon += " 또한 개인정보를 안전하게 처리하기 위하여 필요한 사항등을 명확히 규정하고 있으며,"
        this.agreeCon += " 당해 계약 내용을 서면 또는 전자적으로 보관하고 있습니다.<br>"
        this.agreeCon += " 위탁업체 및 위탁업무내용<br>"
        this.agreeCon += " " 
        this.agreeCon += this.$store.state.company 
        this.agreeCon += " : 고객DB, 개인정보 수집, 보관/휴대폰 문자발송/민원처리<br>"
        this.agreeCon += " $('.agreeBox div').slideUp(0);"
      },
      //******************************************************************************
      // 폼 적용되는 함수
      //******************************************************************************
      FormApp() {
        console.log(this.$store.state.inputObj);
        let formviewObj = {
            tp        : '03'
          , fileNm    : ''
          , descript  : ''
          , landImgNm : ''
          , formDesc: {
//              inputBox  : this.$store.state.inputObj
              inputBox  : this.$store.state.lendchooseObj[this.indexNum].formDesc.inputBox
            , priNm     : this.agreeTitle
            , priCon    : this.agreeCon
            , btnNm     : this.btnNm
            , btnShape  : this.btnShape
            , textColor : this.textColor
            , btnColor  : this.btnColor
            , borderLine: this.borderLine + 'px'
            , lineColor : this.lineColor
          }
        }
        this.$set(this.$store.state.lendchooseObj, this.indexNum, formviewObj);
      }
    }
  }
</script>

<style scoped>
  .landForm .secondeForm {
    visibility: hidden;
    height: 0px;
    padding: 0;
    margin: 0;
  }

  .landForm h2 {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
    position: relative;
    /* border-color: ; */
    /* border-width: ; */
  }
  .landForm h2 {
    padding: 21px 18px 15px 18px;
  }
  .landForm h2 .icon-arrow {
    font-size: 9px;
    float: right;
    transform: translateY(3px);
    transition: 0.3s;
  }
  .landForm h2 .icon-arrow.on {
    transform: rotate(180deg);
  }
  .landForm h2 .icon-x_btn {
    font-size: 18px;
    margin: 0 10px;
    display: inline-block;
    position: absolute;
    left: -20px;
    top:  0;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
  }
  .landForm input {
    padding: 7px 10px;
    border: 1px solid #e5e5e5;
  }
  .landForm .formStyle {
    padding: 8px 21px;
  }
  .landForm .formStyle {
    border-top: 1px solid #e5e5e5;
  }
  .landForm .formStyle h6 {
    font-size: 14px;
    color: #222;
  }
  .landForm .formStyle .leftBox {
    float: left;
    padding: 7px 10px 0 0;
  }
  .landForm input[type="color"] {
    display: inline-block;
    padding: 0;
    background-color:none;
    border: none;
    transform: translateY(2px);
  }

  .landForm .formStyle input[type="radio"] {
    display: none;
  }

  .landForm .category input[type="radio"] + label{
    position: relative;
  }

  .landForm .btnShape div,
  .landForm .formStyle .flex {
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
  }

  .landForm .formStyle .flex {
    justify-content: space-between;
    padding: 14px 0 12px;
  }

  .landForm .category input[type="radio"]:checked + label::after {
    clear: both;
    content: "";
    position: absolute;
    width: 111px;
    height: 97px;
    border: 4px solid #e25b45;
    left: 0;
    top: 0;
    z-index: 9;
    box-sizing: border-box;
  }

  .landForm .formTitle input[type="text"] {
    width: 414px;
  }

  .landForm .formTitleColor span {
    transform: translateY(-3px);
    display: inline-block;
    padding-left: 9px;
    font-weight: 700;
  }

  .landForm .fontStyle .flex {
    padding: 14px 17px 12px;
  }

  .landForm .fontStyle input[type="radio"] + label {
    padding-left: 20px;
    position: relative;
    font-size: 14px;
  }

  .landForm .fontStyle input[type="radio"].nanum + label{
    font-weight: 700;
  }

  .landForm .fontStyle input[type="radio"].tmon + label{
    font-weight: 700;
    font-family: 'TmonMonsori';
  }

  .landForm .fontStyle input[type="radio"].jua + label{
    font-family: 'BMJUA';
  }

  .landForm .fontStyle input[type="radio"].dohyeon + label{
    font-family: 'BMDOHYEON';
  }
  
  .landForm .fontStyle input[type="radio"] + label::before {
    clear: both;
    position: absolute;
    content: "";
    width: 11px;
    height: 11px;
    background: #f6f6f6;
    border: 1px solid #cbcbcb;
    border-radius: 2px;
    transform: translateY(-50%);
    left: 0;
    top: 50%;
  }

  .landForm .fontStyle input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 13px;
    color: #e25b45;
    transform: translateY(-50%);
    left: 0;
    top: 50%;
  }

  .landForm .btnName input[type="text"] {
    width: 414px;
  }

  .landForm .btnShape .flex {
    padding: 14px 20px 12px;
  }

  .landForm .btnShape input[type="radio"] + label {
    display: block;
    padding: 7.5px 29px;
    background: #5c5c5c;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    box-sizing: border-box;
  }


  .landForm .btnShape input[type="radio"].btn02 + label {
    border-radius: 4px;
  }

  .landForm .btnShape input[type="radio"].btn03 + label {
    border-radius: 20px;
  }

  .landForm .btnShape input[type="radio"]:checked + label {
    border: 4px solid #e25b45;
    padding: 3.5px 25px;
  }

  .landForm .formTable {
    padding: 0;
  }

  .landForm table {
    border-collapse: collapse;
    width: 100%;
  }

  .landForm .formTable .leftBox {
    padding-top: 3px;
    width: 107px;
    letter-spacing: -0.35px;
  }

  .landForm table td {
    width: 50%; 
    border: 1px solid #e5e5e5;
    padding:  11px 20px; 
  }
  

  .landForm table tr:first-child td {
    border-top: none;
  }

  .landForm table .left{
    border-left: none;
  }

  .landForm table .right{
    border-right: none;
  }

  .landForm table input[type="color"] {
    margin-top: -4px;
  }

  .landForm table td.line {
    padding: 8px 20px;
  }

  .landForm .formTable td.line .leftBox {
    padding-top: 6px;
  }

  .landForm table input[type="text"] {
    width: 70px;
  }
  .landForm table input[type="text"] + label span {
    padding-left: 9px;
    font-weight: 700;
  }




   /* .landForm table td */



/* 
  .landForm .btnShape input[type="radio"] + label,
  .landForm .fontStyle input[type="radio"] + label {
    padding: 0 29px 0 25px;
  }
  .landForm table input[type="checkbox"] + label,
  .landForm .btnShape input[type="radio"] + label,
  .landForm .fontStyle input[type="radio"] + label {
    position: relative;
  }
  .landForm table input[type="checkbox"] + label::before,
  .landForm .fontStyle input[type="radio"] + label::before {
    clear: both;
    position: absolute;
    content: "";
    width: 11px;
    height: 11px;
    background: #f6f6f6;
    border: 1px solid #cbcbcb;
    border-radius: 2px;
    transform: translateY(-2px);
    left: 0;
    top: 0;
  }
  .landForm table input[type="checkbox"]:checked + label:after,
  .landForm .fontStyle input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 13px;
    color: #e25b45;
    transform: translateY(-2px);
    left: 0;
    top: 0px;
  }

  .landForm .btnColor input[type="radio"] {
    display: none;
  }
  .landForm .btnColor input[type="radio"] + label,
  .landForm .btnColor input[type="checkbox"] + label {
    display: inline-block;
    width: 27px;
    height: 27px;
    margin-right: 10px;
    position: relative;
    transition: 0.3s;
    border: 1px solid #000;
  }
  .landForm .btnColor .btn_fff + label{
    background: #fff;
  }
  .landForm .btnColor .btn_000 + label{
    background: #000;
  }
  .landForm .btnColor input:checked + label:before {
    clear: both;
    content: "";
    width: 23px;
    height: 23px;
    border: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
  }
  .landForm .btnColor input:checked + label:after {
    clear: both;
    content: "";
    width: 21px;
    height: 21px;
    border: 1px solid #000;
    position: absolute;
    left: 1px;
    top: 1px;
  }
  */
  .landForm .formSub {
    text-align: center;
    padding: 20px;
  } 
  .landForm .formSub button {
    width: 100px;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background: #f0f0f0;
    text-align: center;
  }

</style>