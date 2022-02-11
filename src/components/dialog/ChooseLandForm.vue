<template>
  <div class="landForm landBox" >
    <h2>
      폼 꾸미기<span>(수집 항목은 캠페인에서 지정 바랍니다.)</span>
      <i class="icon-x_btn" @click="DelLandForm()"></i>
      <i class="icon-arrow" @click="FormUpPage()" ></i>
    </h2>
    <div class="upPage">
      <div class="btnDesignBox btnName">
        <h6 class="leftBox">버튼 이름</h6>
        <input type="text" v-model="sumBtn" id="sumBtn">
      </div>
      <div class="btnDesignBox btnShape">
        <h6>신청버튼 모양 선택</h6>
        <div>
          <input type="radio" v-model="subShape" :id="'btn01_'+this.indexNum" value="0"   ><label :for="'btn01_'+this.indexNum"><img src="../../assets/images/menu08302/btnShape01.png"></label>
          <input type="radio" v-model="subShape" :id="'btn02_'+this.indexNum" value="10px"><label :for="'btn02_'+this.indexNum"><img src="../../assets/images/menu08302/btnShape02.png"></label>
          <input type="radio" v-model="subShape" :id="'btn03_'+this.indexNum" value="50px"><label :for="'btn03_'+this.indexNum"><img src="../../assets/images/menu08302/btnShape03.png"></label>
        </div>
      </div>
      <div class="btnDesignBox btnColor">
        <table>
          <tr>
            <td class="leftNone">
              <h6 class="leftBox">버튼 텍스트 색상</h6>
              <input type="radio" v-model="textColor" :id="'btn_fff_'+this.indexNum" class="btn_fff" value="#fff">
              <label :for="'btn_fff_'+this.indexNum"></label>
              <input type="radio" v-model="textColor" :id="'btn_000_'+this.indexNum" class="btn_000" value="#000">
              <label :for="'btn_000_'+this.indexNum"></label>
            </td>
            <td class="rightNone">
              <h6 class="leftBox">버튼 색상 선택</h6>
              <input type="color" v-model="subColor">
            </td>
          </tr>
          <tr>
            <td class="leftNone">
              <h6 class="leftBox">폼 테두리 굵기</h6>
              <input type="text" id="boxLine" v-model="borderLine"><label for="#">px</label>
            </td>
            <td class="rightNone">
              <h6 class="leftBox">폼 테두리 색상</h6>
              <input type="color" v-model="lineColor">
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
        , sumBtn     : '신청하기' // 버튼내용
        , agreeTitle : this.$store.state.lendchooseObj[this.indexNum].formDesc.priNm
        , agreeCon   : this.$store.state.lendchooseObj[this.indexNum].formDesc.priCon
        , subShape   : ''
        , subColor   : ''
        , textColor  : '#fff'
        , borderLine : 0
        , lineColor : ''
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
        this.agreeCon += " : 고객DB, 개인정보 수집, 보관/휴대폰 문자발송/민원처리<br>`"
        this.agreeCon += " $('.agreeBox div').slideUp(0);"
      },
      //******************************************************************************
      // 폼 적용되는 함수
      //******************************************************************************
      FormApp() {
        let formviewObj = {
            tp        : '03'
          , fileNm    : ''
          , descript  : ''
          , landImgNm : ''
          , formDesc: {
              inputBox  : this.$store.state.inputObj
            , priNm     : this.agreeTitle
            , priCon    : this.agreeCon
            , btnNm     : this.sumBtn
            , btnShape  : this.subShape
            , textColor : this.textColor
            , btnColor  : this.subColor
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

  .landForm table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }

  .landForm td,
  .landForm th {
    height: 41px;
  }

  .landForm td {
    padding: 6px 3px 0 3px;
  }

  .landForm .formNum,
  .landForm .formCh,
  .landForm .formDel {
    width: 7.65%;
  }

  .landForm .formNm {
    width: 20.05%;		
  }

  .landForm .formType { 
    width: 52%;
  }

  .landForm td.formType {
    text-align: left;
  }

  .landForm thead {
    background: #fafafa;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #5c5c5c;
  }

  .landForm thead th {
    position: relative;  
  }

  .landForm thead th:after {
    clear: both;
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .landForm thead th:last-child:after {
    display: none;
  }

  .landForm input,
  .landForm select {
    padding: 7px 10px;
    border: 1px solid #e5e5e5;
  }

  .landForm .formNm input {
    width: 100%;
  }

  .landForm .formType input {
    width: 61.215%;
  }

  .landForm select {
    width: 37%;
    margin-right: 1.785%;
  }

  .landForm .formDel i {
    font-size: 15px;
  }

  .landForm button {
    width: 100px;
    height: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background: #f0f0f0;
    text-align: center;
    margin-bottom: 10px;
  }

  .landForm button i {
    font-size: 14px;
    color: #e25b45;
    font-weight: 700;
    margin-right: -7px;
    vertical-align: middle;
  }

  .landForm .agreeBox {
    padding: 4px 21px;
    color: #fff;
  }

  .landForm .btnDesignBox {
    padding: 8px 0 8px 21px;
  }

  .landForm .btnName {
    padding: 4px 21px;
  }

  .landForm .agreeBox,
  .landForm .btnDesignBox {
    border-top: 1px solid #e5e5e5;
  }

  .landForm .agreeBox h6,
  .landForm .btnDesignBox h6 {
    font-size: 14px;
    color: #222;
  }

  .landForm .btnDesignBox .leftBox {
    float: left;
  }

  .landForm .agreeBox h6{
    margin-bottom: 10px;
  }

  .landForm .btnName h6 {
    padding: 7px 6px 0 0;
  }

  .landForm .agreeBox label {
    font-size: 14px;
  }

  .landForm .agreeBox input[type="text"] {
    width: 100%;
  }

  .landForm .btnName input {
    width: 388px;
  }

  .landForm .agreeBox div{
    clear: both;
    width: 100%;
    padding-top: 5px;
    text-align: center;
  }
  .landForm .agreeBox div button{
    width: auto;
    padding: 5px 10px;
    margin-top: 5px;
  }

  .landForm .agreeBox div textarea {
    margin-top: 10px;
    width: 100%;
    height: 130px;
    resize: none;
    padding: 10px;
  }

  .landForm .btnShape div {
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
  }

  .landForm input[type="color"] {
    display: inline-block;
    padding: 0;
    background:none;
    border: none;
    width: 70px;
    height: 30px;
  }

  .landForm .btnShape div input[type="radio"] + label {
    padding: 0 29px 0 25px;
  }

  .landForm table input[type="checkbox"] + label{
    display: inline-block;
    transform: translate(-5px, -9px);
  }

  .landForm table input[type="checkbox"],
  .landForm .btnShape input[type="radio"] {
    display: none;
  } 

  .landForm table input[type="checkbox"] + label,
  .landForm .btnShape input[type="radio"] + label {
    position: relative;
  }

  .landForm table input[type="checkbox"] + label:before,
  .landForm .btnShape input[type="radio"] + label:before {
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
  .landForm .btnShape input[type="radio"]:checked + label:after {
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

  .landForm .btnShape input[type="radio"] + label:before,
  .landForm .btnShape input[type="radio"]:checked + label:after{
    transform: translateY(50%);
  }

  .landForm .btnColor {
    padding: 0;
    border-top: none;
  }

  .landForm .btnColor h6 {
    padding: 6px 7px 0 0 ;
  }

  .landForm .btnColor td {
    width: 50%;
    text-align: left;
    border: solid 1px #e5e5e5;
    padding: 11px 20px;
  }

  .landForm .btnColor .leftNone {
    border-left: none;
  }

    .landForm .btnColor .rightNone {
    border-right: none;
  }

  .landForm .btnColor #boxLine {
    width: 100px;
  }

  .landForm .btnColor #boxLine + label {
    padding-left: 10px;
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

  .landForm .formSub {
    text-align: center;
    padding: 20px;
  }
</style>