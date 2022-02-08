<template>
  <tr class="disTable" @change="inputTypeVal()">
    <td class="formNum">{{this.formConNm+3}}</td>
    <td class="formNm"><input type="text" v-model="formName"></td>
    <td class="formType"> 
      <select v-model="selectVal">
        <option value="textForm">입력박스</option>
        <option value="radioForm">라디오박스</option>
        <option value="checkForm">체크박스</option>
        <option value="selForm">셀렉트박스</option>
      </select>
      <input type="text" :disabled="disableForm" :placeholder="splText" v-model="formLabel">
    </td>
    <td class="formCh"><input type="checkbox" :id="'necessary'+this.formConNm"><label :for="'necessary'+this.formConNm"></label></td>
    <td  class="formDel"><i class="icon-x1" @click="delInput()"></i></td>
  </tr>
</template>
<script>


  // import $ from 'jquery';

  export default {
    data() {
      return{
          formObj     : {}
        , formName    : this.$store.state.inputObj[this.formConNm].names
        , selectVal   : this.$store.state.inputObj[this.formConNm].values
        , formLabel   : this.$store.state.inputObj[this.formConNm].lab
        , disableForm : false // input type="text" 활성화 여부
        , splText     : '' //input type="text" 활성화 시 들어갈 내용
      }
    },
    props: {
      formConNm: Number
    },
    methods: {
      //******************************************************************************
      // 폼 변경 시 적용되는
      //******************************************************************************
      inputTypeVal() {
        if(this.selectVal == 'textForm') {
          this.disableForm = true;
          this.splText = "";
        } else {
          this.disableForm = false;
          this.splText = "구분은 ','로만 가능합니다.";
          //this.formLabel = this.formLabel.split(',');
          // this.formLabel = this.formLabel;
        }

        this.formObj.names  = this.formName;
        this.formObj.values = this.selectVal;
        this.formObj.lab    = this.formLabel;

        this.$store.state.inputObj[this.formConNm] = this.formObj;
      },
      //******************************************************************************
      // 폼 입력항목 제거 함수
      //******************************************************************************
      delInput() {
        this.$store.state.inputObj.splice(this.formConNm, 1);
      }
    },
    watch: {
      //******************************************************************************
      // 입력 값에 정규표현식 문자 및 "," 표시
      //******************************************************************************
      formLabel : function() { 
        return this.formLabel = this.formLabel.replace(/[^a-z0-9ㄱ-ㅎ가-힣,]/gi, '');
      },
    }, 
  }
</script>

<style>
  .disTable td,
  .disTable th {
    height: 41px;
  }

  .disTable td {
    padding: 6px 3px 0 3px;
    
  }

  .disTable .formNum,
  .disTable .formCh,
  .disTable .formDel {
    width: 7.65%;
  }

  .disTable .formNm {
    width: 20.05%;		
  }

  .disTable .formType { 
    width: 52%;
  }

  .disTable td.formType {
    text-align: left;
  }

  .disTable input,
  .disTable select {
    padding: 7px 10px;
    border: 1px solid #e5e5e5;
  }

  .disTable .formNm input {
    width: 100%;
  }

  .disTable .formType input {
    width: 61.215%;
  }

  .disTable select {
    width: 37%;
    margin-right: 1.785%;
  }

  .disTable .formDel i {
    font-size: 15px;
    cursor: pointer;
  }

  .disTable input[type="checkbox"] {
    display: none;
  } 

  .disTable input[type="checkbox"] + label{
    display: inline-block;
    transform: translate(-5px, -9px);
    position: relative;
  }

  .disTable input[type="checkbox"] + label:before {
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

  .disTable input[type="checkbox"]:checked + label:after {
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
</style>