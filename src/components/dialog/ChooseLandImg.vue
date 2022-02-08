<template>
  <div class="landImg landBox">
    <h2>
      이미지 등록
      <span>(가로사이즈 800px 필수, 용량 3MB 이하)</span>
      <i class="icon-x_btn" @click="DelLandImg()"></i>
      <i class="icon-arrow on"></i>
    </h2>
    <div class="upPage">
      <input class="upload_name" disabled="disabled" v-bind:placeholder="$store.state.lendchooseObj[this.indexNum].landImgNm">
      <input type="file" accept="image/*" :id="this.indexNum" class="upload_hidden" ref="upImage01" @change="UploadImg()">
      <label :for="this.indexNum">이미지 찾기 <i class="icon-plus1"></i></label>
    </div>
  </div>

</template>

<script>
  // import axios from "axios";
  import $ from 'jquery';

  export default {
    props: {
      indexNum: Number
    },
    mounted(){
      $(".landImg .icon-arrow").click(function(){
        $(this).toggleClass("on");
        $(this).parent().parent().find(".upPage").stop().slideToggle(300);
      })
    },
    methods: {
      //******************************************************************************
      // 파일 업로드 시 text박스의 값 및 미리보기로 보여지기
      //******************************************************************************
      UploadImg(){
        let imgFiles = {
            tp: '01'
          , fileNm: ''
          , fileNmOrg: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        }
        //------------------------------------------------------------------------------
        // 이미지 미리보기에 보여지기
        //------------------------------------------------------------------------------
        imgFiles.fileNm = URL.createObjectURL(this.$refs.upImage01.files[0]);
        imgFiles.fileNmOrg = this.$refs.upImage01.files[0]
        //------------------------------------------------------------------------------
        // 이미지 이름 불러오기
        //------------------------------------------------------------------------------
        imgFiles.landImgNm = this.$refs.upImage01.files[0].name;
        this.$set(this.$store.state.lendchooseObj, this.indexNum, imgFiles);
      },
      DelLandImg(){
        this.$store.state.lendchooseObj.splice(this.indexNum, 1);
      },

    }

    
  }
</script>

<style scoped>

  .landImg {
    padding: 21px 18px;
    position: relative;
  }

  .landImg h2 {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
    margin-bottom: 14px;
  }

  
  .landImg h2 span {
    letter-spacing: -0.3px;
    color: #e25b45;
  }

  .landImg h2 .icon-x_btn {
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

  .landImg h2 .icon-arrow {
    font-size: 9px;
    float: right;
    transform: translateY(3px);
    transition: 0.3s;
  }

  .landImg h2 .icon-arrow.on {
    transform: rotate(180deg);
  }

  .landImg .upload_name {
    width: 362px;
    height: 30px;
    margin-right: 10px;
    padding-left: 10px;
  }

  .landImg input[type="file"] {
    display: none;
  }
  
  .landImg input[type="file"] + label {
    display: inline-block;
    width: 110px;
    height: 100%;
    border-radius: 10px;
    background-color: #f0f0f0;
    color: #000;
    padding: 8px 20px;
    font-weight: 700;
    letter-spacing: -0.3px;
    cursor: pointer;
    border: 1px solid #e5e5e5;
    position: relative;
  }

  .landImg input[type="file"] + label > i {
    position: absolute;
    font-size: 18px;
    color: #e25b45;
    font-weight: 700;
    right: 10px;
    top: 7px;
  }




</style>