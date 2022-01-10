<template>
  <div class="landForm landBox">
    <h2>
      폼 꾸미기<span>(최대10개항목) </span>
      <span> ({{'상단 폼과 동일합니다. 변경불가.'}})</span>
      <i class="icon-x_btn" @click="DelLandForm()"></i>
      <i class="icon-arrow" @click="FormUpPage()"></i>
    </h2>
    <div class="upPage">
      <table>
        <thead>
          <tr>
            <th class="formNum">번호</th>
            <th class="formNm">항목</th>
            <th class="formType">유형</th>
            <th class="formCh">필수</th>
            <th class="formDel">삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="formNum">01</td>
            <td class="formNm"><input type="text" value="이름" disabled></td>
            <td class="formType">
              <select name="formTypeSel" disabled>
                <option value="textForm" selected>입력박스</option>
                <option value="radioForm">라디오박스</option>
                <option value="checkForm">체크박스</option>
                <option value="selForm">셀렉트박스</option>
              </select>
              <input type="text" disabled>
            </td>
            <td class="formCh"><input type="checkbox" id="necessary01" checked><label for="necessary01"></label></td>
            <td  class="formDel"><i class="icon-x1"></i></td>
          </tr>
          <tr>
            <td class="formNum">02</td>
            <td class="formNm"><input type="text" value="연락처" disabled></td>
            <td class="formType">
              <select name="formTypeSel" disabled>
                <option value="textForm" selected>입력박스</option>
                <option value="radioForm">라디오박스</option>
                <option value="checkForm">체크박스</option>
                <option value="selForm">셀렉트박스</option>
              </select>
              <input type="text" disabled>
            </td>
            <td class="formCh"><input type="checkbox" id="necessary02" checked><label for="necessary02"></label></td>
            <td  class="formDel"><i class="icon-x1"></i></td>
          </tr>
          <div>
            dtdtd
            
          </div>

        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">
              <button @click="FormContents()">입력항목 <i class="icon-plus1"></i></button>
            </td>
          </tr>
        </tfoot>
      </table>

      <div class="agreeBox">
        <input type="checkbox" id="chAgree02" checked>
        <label for="chAgree02">개인 정보 수집 동의 표시
          <span>(개인정보 수집 동의는 필수입니다.)</span>
        </label>
      </div>
      <div class="agreeBox">
        <input type="checkbox" id="chAgree01">
        <label for="chAgree01">이용약관 표시</label>
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
        <h6 class="leftBox">신청버튼 색상 선택</h6>
        <input type="radio" name="btnColor" class="btn_e50000" v-model="btnColor01">
        <label for="btn_e50000"></label>
        <input type="radio" name="btnColor" class="btn_e56e00" v-model="btnColor02">
        <label for="btn_e56e00"></label>
        <input type="radio" name="btnColor" class="btn_0077e5" v-model="btnColor03">
        <label for="btn_0077e5"></label>
        <input type="radio" name="btnColor" class="btn_aa00e5" v-model="btnColor04">
        <label for="btn_aa00e5"></label>
        <input type="radio" name="btnColor" class="btn_350101" v-model="btnColor05">
        <label for="btn_350101"></label>
        <input type="radio" name="btnColor" class="btn_291d4b" v-model="btnColor06">
        <label for="btn_291d4b"></label>
        <input type="radio" name="btnColor" class="btn_a37300" v-model="btnColor07">
        <label for="btn_a37300"></label>
        <input type="radio" name="btnColor" class="btn_2a4c05" v-model="btnColor08">
        <label for="btn_2a4c05"></label>
        <input type="radio" name="btnColor" class="btn_4e4e4e" v-model="btnColor09">
        <label for="btn_4e4e4e"></label>
        <input type="radio" name="btnColor" class="btn_000000" v-model="btnColor10">
        <label for="btn_000000"></label>
      </div>			
    </div>
    </div>
</template>

<script>
  // import axios from "axios";
  import $ from 'jquery';

  export default {
    data() {
      return{
          btnColor01: '#e50000'
        , btnColor02: '#e56e00'
        , btnColor03: '#0077e5'
        , btnColor04: '#aa00e5'
        , btnColor05: '#350101'
        , btnColor06: '#291d4b'
        , btnColor07: '#a37300'
        , btnColor08: '#2a4c05'
        , btnColor09: '#4e4e4e'
        , btnColor10: '#000000'
        , formConNm: 1
      }
    },
    methods: {
      //******************************************************************************
      // 폼 입력항목 추가 함수
      //******************************************************************************
      FormContents() {
        if(this.formConNm > 8 ){
          alert('입력항목은 총 10개까지 가능합니다.')
          return
        }

        $(`.hiddenBox0${this.formConNm}`).css({display:"table-row"});
        
        this.formConNm++;
      },
      FormUpPage() {
        $(".landForm .upPage").slideToggle(300);
        $(".landForm .icon-arrow").toggleClass("on");
      },
      DelLandForm(){
        this.$store.state.lendchooseObj.splice(this.indexNum, 1);
      },
    }
  }
</script>

<style scoped>
  .landForm h2 {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
  }

  .landForm h2 {
    padding: 16px 18px 15px 26px;
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
    font-size: 14px;
    margin: 0 10px;
    display: inline-block;
    transform: translateY(2px);
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

  .landForm .disNone {
    display: none;
  }

  .landForm .agreeBox {
    padding: 12px 21px;
    color: #fff;
    letter-spacing: -0.3px;
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

  .landForm .agreeBox input[type="checkbox"] {
    transform: translateY(3px);
  }

  .landForm .agreeBox input[type="checkbox"] + label {
    font-weight: 700;
    color: #444;
    padding-left: 23px;
  }

  .landForm .agreeBox input[type="checkbox"] + label span {
    color: #e25b45;
  }

  .landForm .agreeBox input[type="checkbox"] + label span.colGray {	
    color: #acacac;
  }

  .landForm .btnDesignBox h6 {
    font-size: 14px;
    color: #222;
  }

  .landForm .btnDesignBox .leftBox {
    float: left;
  }

  .landForm .btnName h6 {
    padding: 7px 6px 0 0;
  }

  .landForm .btnName input {
    width: 388px;
  }

  .landForm .btnShape div {
    padding: 10px 0 0 0;
    display: flex;
    align-items: center;
  }

  .landForm .btnShape div input[type="radio"] + label {
    padding: 0 29px 0 25px;
  }

  .landForm table input[type="checkbox"] + label{
    display: inline-block;
    transform: translate(-5px, -9px);
  }


  .landForm table input[type="checkbox"],
  .landForm .agreeBox input[type="checkbox"],
  .landForm .btnShape input[type="radio"] {
    display: none;
  } 

  .landForm table input[type="checkbox"] + label,
  .landForm .agreeBox input[type="checkbox"] + label,
  .landForm .btnShape input[type="radio"] + label {
    position: relative;
  }

  .landForm table input[type="checkbox"] + label:before,
  .landForm .agreeBox input[type="checkbox"] + label:before,
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
  .landForm .agreeBox input[type="checkbox"]:checked + label:after,
  .landForm .btnShape input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
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

  .landForm .btnColor h6 {
    padding: 6px 7px 0 0 ;
  }

  .landForm .btnColor input {
    display: none;
  }

  .landForm .btnColor input + label {
    display: inline-block;
    width: 27px;
    height: 27px;
    margin-right: 10px;
    position: relative;
  }

  .landForm .btnColor .btn_e50000 + label{
    background: #e50000;
  }

  .landForm .btnColor .btn_e56e00 + label{
    background: #e56e00;
  }

  .landForm .btnColor .btn_0077e5 + label{
    background: #0077e5;
  }

  .landForm .btnColor .btn_aa00e5 + label{
    background: #aa00e5;
  }

  .landForm .btnColor .btn_350101 + label{
    background: #350101;
  }

  .landForm .btnColor .btn_291d4b + label{
    background: #291d4b;
  }

  .landForm .btnColor .btn_a37300 + label{
    background: #a37300;
  }

  .landForm .btnColor .btn_2a4c05 + label{
    background: #2a4c05;
  }

  .landForm .btnColor .btn_4e4e4e + label{
    background: #4e4e4e;
  }

  .landForm .btnColor .btn_000000 + label{
    background: #000000;
  }

  .landForm .btnColor input:checked + label{
    border: 1px solid #000;
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

</style>