<template>
  <div class="landText landBox">
    <h2>텍스트 등록 <i class="icon-x1"></i></h2>
    <ckeditor v-model="viewText" ref="substance" :config="editorConfig"></ckeditor>
    <button id="upBtn1" @click="UploadText()">입력하기</button>
    <button id="modifyBtn1" class="modifyBtn" @click="UploadText()">수정하기</button>
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
      }
    },
    methods: {
      //******************************************************************************
      // 에디터에서 전송 시 미리보기창에 내용 추가 및 
      //******************************************************************************
      UploadText() {
        //------------------------------------------------------------------------------
        // 텍스트 미리보기창에 보여지기
        //------------------------------------------------------------------------------
        console.log(this.viewText)

        let textBox =  {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
        }

        textBox.tp = '02';
        textBox.fileNm = '';
        textBox.descript = this.viewText;
        textBox.formDesc = '';

        this.$set(this.$store.state.screenObj, 0, textBox);
        let n = 1

        let viewBtn = `#modifyBtn${n}`;
        console.log(viewBtn);
        console.log(this.$store.state.screenObj);

        $("#upBtn1").css({display:"none"});
        $(viewBtn).css({display:"inline"});
        n++;

      },
    }
  }
</script>

<style scoped>
  .landText {
    padding: 21px 18px;
    text-align: center;
  }

  .landText h2{
    font-size: 14px; 
    font-weight: bold;
    color: #222;
    margin-bottom: 14px;
    text-align: left;
  }

  .landText h2 i {
    float: right;
    font-size: 13px;
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