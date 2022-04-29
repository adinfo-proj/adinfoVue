<template>
  <div id="campBg">
    <div class="campModal">
      <h2>
        캠페인 등록방법 
        <i class="icon-error_outline"></i>
        <i class="icon-close" @click="CampNotView()"></i>
      </h2>
      <div class="space">
        <div class="campImg" :style="{maxHeight:maxHigh}">
          <img src="../../assets/images/manual/SetCamp.png" alt="">
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import $                  from 'jquery';
  export default {
    data() {
      return {
        maxHigh: ''
      }
    },
    methods:{
      SetTabSubHeight() {
        let maxH = window.innerHeight;
        maxH = maxH * 0.

        this.maxHigh = maxH - 128 + 'px'

        console.log(this.maxHigh)
      },
      CampNotView(){
        $('#campBg').css({display: 'none'})
      }, 

    },
    created(){
      this.SetTabSubHeight();
    }
    
  }
</script>

<style scoped>
  #campBg{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #00000058;
    z-index: 9999;
    display: none;
  }
  #campBg .campModal{
    position: absolute;
    left: 320px;
    top: 100px;
    background: #fff;
    width: 1100px;
    height: 70%;
    max-height: 800px;
    border-radius: 10px;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid #8f8f8f;
  }
  #campBg .campModal h2{
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 700;
    background: #e25b45;
    color: #fff;
    border-radius: 10px
  }
  #campBg .campModal h2 i{
    color: #fff;
    display: inline-block;
    font-size: 16px;
    margin-top: -2px;
    transform: translateY(2px);
  }
  #campBg .campModal h2 .icon-close{
    float: right;
    cursor: pointer;
  } 
  #campBg .campModal .space{
    padding: 42px 40px;
  }
  #campBg .campModal .campImg{
    overflow-y: auto;
    padding-right: 10px;
  }
  #campBg .campModal .campImg img{
    width: 100%;
  }
</style>