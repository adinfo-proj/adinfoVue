<template>
  <div id="landBg">
    <div class="landModal">
      <h2>
        제작툴 사용방법 확인하기
        <i class="icon-error_outline"></i>
        <i class="icon-close" @click="LandNotView()"></i>
      </h2>
      <div class="landTab">
        <ul>
          <li @click="LandPos(0)"  v-bind:class="{on : 0 == pos}">
            <h6>랜딩페이지 정보 입력 방법</h6>
            <span :style="{maxHeight:maxHigh}">
              <img src="../../assets/images/manual/inputLand.png" alt="">
            </span>
          </li>
          <li @click="LandPos(1)"  v-bind:class="{on : 1 == pos}">
            <h6>랜딩페이지 꾸미는 방법</h6>
            <span :style="{maxHeight:maxHigh}">
              <img src="../../assets/images/manual/decoLand.png" alt="">
            </span>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
  import $                  from 'jquery';
  export default {
    data() {
      return {
        pos: 0,
        maxHigh: ''
      }
    },
    methods:{
      LandPos(nm) {
        this.pos = nm
      },
      SetTabSubHeight() {
        let maxH = window.innerHeight;
        maxH = maxH * 0.7
        this.maxHigh = maxH - 200 + 'px'
        
      },
      LandNotView(){
        $('#landBg').css({display: 'none'})
      }, 

    },
    created() {
      this.SetTabSubHeight();
    }

    
  }
</script>

<style scoped>
  #landBg{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background: #00000058;
    z-index: 9999;
    display: none;
  }
  #landBg .landModal{
    position: absolute;
    left: 320px;
    top: 160px;
    background: #fff;
    width: 1100px;
    height: 70%;
    border-radius: 10px;
    border-top-left-radius: 11px;
    border-top-right-radius: 11px;
    border: 1px solid #8f8f8f;
  }
  #landBg .landModal h2{
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 700;
    background: #e25b45;
    color: #fff;
    border-radius: 10px
  }
  #landBg .landModal h2 i{
    color: #fff;
    font-size: 14px;
  }

  #landBg .landModal h2 .icon-close{
    float: right;
    cursor: pointer;
  }
  #landBg .landModal .landTab{
    padding: 13px 40px;
  }
  #landBg .landModal .landTab ul{
    position: relative;
  }
  #landBg .landModal .landTab ul li{
    float: left;
    width: 50%;
  }
  #landBg .landModal .landTab ul li h6{
    border: 1px solid #e2e2e2;
    background: #efefef;
    cursor: pointer;
    text-align: center;
    color: #9b9b9b;
    padding: 22px;
    font-size: 16px;
    letter-spacing: -0.4px;
  }
  #landBg .landModal .landTab ul li.on h6{
    background: #fff;
    color: #e25b45;
  }
  #landBg .landModal .landTab ul li span{
    position: absolute;
    left: 0;
    top: 110px;
    display: none;
    padding: 0px 15px;
    overflow-y: auto;
  }
  #landBg .landModal .landTab ul li.on span{
    display: block;
  }
  #landBg .landModal .landTab ul li span img{
    width: 100%;
  }
</style>