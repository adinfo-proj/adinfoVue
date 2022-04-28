<template>
  <div class="landVideo landBox">
    <h2>
      유투브 등록
      <span>
        <i class="icon-error_outline"></i>
        <img src="../../assets/images/menu08302/video.png" alt="">  
      </span>
      <span>'https://www.youtube.com/watch?v=' 뒤에 주소만 입력해주세요. </span>
      <i class="icon-x_btn" @click="DelLandImg()"></i>
      <i class="icon-arrow on"></i>
    </h2>
    <div class="upPage">
      <input type="text" :id="'video'+this.indexNum" v-model="videoUrl">
      <button @click="UploadVideo()">동영상 추가하기 <i class="icon-plus1"></i></button>
    </div>
  </div>

</template>

<script>
  // import axios from "axios";
  import $ from 'jquery';

  export default {
    data(){
      return{
        videoUrl: ''
      }
    },
    props: {
      indexNum: Number
    },
    mounted(){
      $(".landVideo .icon-arrow").click(function(){
        $(this).toggleClass("on");
        $(this).parent().parent().find(".upPage").stop().slideToggle(300);
      })
      $(".landVideo h2 span i").hover(
        function(){
          $(this).parent().find("img").fadeIn(200)
        },
        function(){
          $(".landVideo h2 span img").fadeOut(200)
        })
    },
    methods: {
      //******************************************************************************
      // 파일 업로드 시 text박스의 값 및 미리보기로 보여지기
      //******************************************************************************
      UploadVideo(){
        let VideoFiles = {
            tp: '04'
          , fileNm: ''
          , fileNmOrg: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        }
        VideoFiles.descript = "https://www.youtube.com/embed/"+this.videoUrl+"?autoplay=1&mute=1";
        this.$set(this.$store.state.lendchooseObj, this.indexNum, VideoFiles);

      },
      DelLandImg(){
        this.$store.state.lendchooseObj.splice(this.indexNum, 1);
      },

    }

    
  }
</script>

<style scoped>

  .landVideo {
    padding: 21px 18px;
    position: relative;
  }

  .landVideo h2 {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
    margin-bottom: 14px;
  }

  
  .landVideo h2 span {
    letter-spacing: -0.3px;
    color: #e25b45;
    position: relative;
  }

  .landVideo h2 span i {
    display: inline-block;
    color: #636363;
    margin-right: 11px;
    transform: translateY(3px);
    font-size: 16px;
    cursor: pointer;
    
  }

  .landVideo h2 span img{
    position: absolute;
    left: -20px;
    top: -235px;
    display: none;
    z-index: 99;
  }

  .landVideo h2 .icon-x_btn {
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

  .landVideo h2 .icon-arrow {
    font-size: 9px;
    float: right;
    transform: translateY(3px);
    transition: 0.3s;
  }

  .landVideo h2 .icon-arrow.on {
    transform: rotate(180deg);
  }

  .landVideo input[type="text"]{
    width: 345px;
    height: 30px;
    margin-right: 10px;
    padding-left: 10px;
    border: 1px solid #e5e5e5;
  }
  
  .landVideo button {
    width: 120px;
    height: 30px;
    text-align: left;
    border-radius: 10px;
    background-color: #f0f0f0;
    color: #000;
    padding: 0 10px;
    font-weight: 700;
    letter-spacing: -0.3px;
    cursor: pointer;
    border: 1px solid #e5e5e5;
    position: relative;
  }

  .landVideo button > i {
    position: absolute;
    font-size: 18px;
    color: #e25b45;
    font-weight: 700;
    right: 10px;
    top: 5px;
  }




</style>