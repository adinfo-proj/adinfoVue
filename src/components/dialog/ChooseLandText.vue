<template>
  <div class="landText landBox" @change="ddddddddddddd(indexNum)">
    <h2>텍스트 등록
      <i class="icon-x_btn" @click="DelLandText()"></i>
      <i class="icon-arrow on"></i>
    </h2>
    <div class="upPage">
      <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
      <button :id="this.indexNum" @click="UploadText()">입력하기</button>
      <button :id="'modifyBtn'+this.indexNum" class="modifyBtn" @click="UploadText()">수정하기</button>
    </div>
  </div>
</template>

<script>

  import $ from 'jquery';

  export default {
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
        , editorData : this.$store.state.lendchooseObj[this.indexNum].descript
          
      }
    },
    props: {
      indexNum: Number
    },
    mounted() {
      $(".landText .icon-arrow").click(function(){
        $(this).toggleClass("on");
        $(this).parent().parent().find(".upPage").stop().slideToggle(300);
      })
    },
    methods: {
      //******************************************************************************
      // 에디터에서 전송 시 미리보기창에 내용 추가 및 
      //******************************************************************************
      UploadText() {
        //------------------------------------------------------------------------------
        // 텍스트 미리보기창에 보여지기
        //------------------------------------------------------------------------------

        let textBox =  {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        }

        textBox.tp = '02';
        textBox.fileNm = '';
        textBox.descript = this.editorData;
        textBox.formDesc = '';
        textBox.landImgNm = '';

        this.$set(this.$store.state.lendchooseObj, this.indexNum, textBox);

        let btn1 =  "#" + this.indexNum;
        let btn2 =  "#modifyBtn" + this.indexNum;

        $(btn1).css({display:"none"});
        $(btn2).css({display:"inline"});
      },
      DelLandText(){
        this.$store.state.lendchooseObj.splice(this.indexNum, 1);
      },

      
    },
    created() {


    }
  }
</script>

<style scoped>
  .landText {
    padding: 21px 18px;
    text-align: center;
    position: relative;
  }

  .landText h2{
    font-size: 14px; 
    font-weight: bold;
    color: #222;
    margin-bottom: 14px;
    text-align: left;
  }

  .landText h2 .icon-arrow {
    font-size: 9px;
    float: right;
    transform: translateY(3px);
    transition: 0.3s;
  }

  .landText h2 .icon-arrow.on {
    transform: rotate(180deg);
  }


  .landText h2 .icon-x_btn {
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

  .landText button {
    margin-top: 9px;
    width: 100px;
    height: 31px;
    border: 1px solid #e5e5e5;
    background: #393939;
    color: #fff;
    border-radius: 10px;
    font-weight: 700;
  }
  
  .landText .modifyBtn{
    display: none;
  }

</style>