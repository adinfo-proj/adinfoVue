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
    
  }
</script>