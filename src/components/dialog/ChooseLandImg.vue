<template>
  <div class="landImg landBox">
    <h2>이미지 등록 <span>(가로사이즈 800px 필수, 용량 3MB 이하)</span><i class="icon-x1"></i></h2>
    <input class="upload_name" disabled="disabled" v-bind:placeholder="landImgNm01">
    <input type="file" accept="image/*" id="landImg" class="upload_hidden" ref="upImage" @change="UploadImg()">
    <label for="landImg">이미지 찾기 <i class="icon-plus1"></i></label>
  </div>

</template>

<script>
  export default {

    methods: {
      //******************************************************************************
      // 파일 업로드 시 text박스의 값 및 미리보기로 보여지기
      //******************************************************************************
      UploadImg(){
        let imgFiles = {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
        }


        //------------------------------------------------------------------------------
        // 이미지 이름 불러오기
        //------------------------------------------------------------------------------
        this.landImg01 = this.$refs.upImage01.files;
        this.landImgNm01 = this.landImg01[0].name;

        //------------------------------------------------------------------------------
        // 이미지 미리보기에 보여지기
        //------------------------------------------------------------------------------

        imgFiles.tp = '01';
        imgFiles.fileNm = URL.createObjectURL(this.$refs.upImage01.files[0]);
        imgFiles.descript = '';
        imgFiles.formDesc = '';

        this.$store.state.screenObj[1] = imgFiles;

      },
    }

    
  }
</script>

<style scoped>

  .landImg {
    padding: 21px 18px;
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

  .menu0804 .landChoice .landImg h2 i {
    float: right;
    font-size: 13px;
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