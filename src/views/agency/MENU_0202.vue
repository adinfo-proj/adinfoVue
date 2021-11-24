<template>
  <div id="container"> 
    <!-- 1400*1140 -->
    <form action="">
      <div class="tap">
        <a href="#none" class="cpa on"><img src="../../assets/images/icon01.png" alt="">CPA광고</a>
        <a href="#none" class="cps"><img src="../../assets/images/icon02.png" alt="">CPS광고</a>
        <a href="#none" class="cpp"><img src="../../assets/images/icon03.png" alt="">CPP광고</a>
        <a href="#none" class="cpm"><img src="../../assets/images/icon04.png" alt="">CPM광고</a>
        <a href="#none" class="cpv"><img src="../../assets/images/icon05.png" alt="">CPV광고</a>
        <a href="#none" class="cpv"><img src="../../assets/images/icon05.png" alt="">CPI광고</a>
      </div>
      <div class="chose">
        <div class="choseArea">
          <p>광고지역 설정 <span>(중복 선택 가능)</span></p>
          <input type="checkbox" name="allArea" id="allArea" checked><label for="allArea">전국</label>
          <input type="checkbox" name="seoul" id="seoul"><label for="seoul">서울</label>
          <input type="checkbox" name="gyeong" id="gyeong"><label for="gyeong">경기</label>
          <input type="checkbox" name="gang_won" id="gang_won"><label for="gangwon">강원</label>
          <input type="checkbox" name="chungnam" id="chungnam"><label for="chungnam">충남</label>
          <input type="checkbox" name="chungbug" id="chungbug"><label for="chungbug">충북</label>
          <input type="checkbox" name="jeonbug" id="jeonbug"><label for="jeonbug">전북</label>
          <input type="checkbox" name="jeonnam" id="jeonnam"><label for="jeonnam">전남</label>
          <input type="checkbox" name="gyeongbug" id="gyeongbug"><label for="gyeongbug">경북</label>
          <input type="checkbox" name="gyeongnam" id="gyeongnam"><label for="gyeongnam">경남</label>
          <input type="checkbox" name="jeju" id="jeju"><label for="jeju">제주</label>
        </div>
        <div class="choseDate">
          <div class="firstBox">
            <div class="startDate">
              <label for="startDate">광고 시작일<br>
                <input type="date" id="startDate1">
                <input type="time" id="startDate2">
              </label>
            </div>
            <div>
              <label for="closeDate">광고 종료일<br>
                <input type="date" id="closeDate1">
                <input type="time" id="closeDate2">
              </label>
            </div>
          </div>
          <div class="secondBox">







            <div class="camObj">
              <label for="">캠페인 목적<br>
                <select class="camParcel02" v-model="adPurpose">
                  <option v-for="(adPurposeOne, index) in adPurposeObj" :key="index" :value="adPurposeOne.code">{{ adPurposeOne.codeNm }}</option>
                </select>
              </label>
            </div>












            <div class="camParcel">
              <label for="">캠페인 분류<br>
                <select class="camParcel01" v-model="adTopKind" @change="firstComboChg(adTopKind);">
                  <option v-for="(adIndex, index) in adTopKindObj"
                    :key="index" 
                    :value="adIndex.code"
                  >{{ adIndex.codeNm }}</option>
                </select>
                <select class="camParcel02" v-model="adMiddleKind">2차 분류를 선택
                  <option v-for="(adIndex, index) in adMiddleKindObj" :key="index" :value="adIndex.code">{{ adIndex.codeDescr }}</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="campaign tableBox">
        <table>
          <tr>
            <th>캠페인 명</th>
            <td><input type="text" class="camName"></td>
          </tr>
          <tr>
            <th>캠페인 배너</th>
            <td>
              <input class="upload-name" value="파일선택" disabled="disabled">
              <label for="myFile">이미지 등록하기 <i class="fas fa-plus"></i></label> 
              <input type="file" accept=".jpg, .png, .gif" id="myFile" class="upload-hidden">
            </td>
          </tr>
          <tr class="notice">
            <th>캠페인 내용</th>
            <td><input type="text" name="" id=""></td>
          </tr>
          <tr>
            <th>광교 USP 설정</th>
            <td><input type="text" name="" id=""></td>
          </tr>
          <tr>
            <th>SMS 수신 여부</th>
            <td>
              DB접수 시 SMS를 수신합니다. 
              <input type="radio" name="sms" id="smsY"><label for="smsY">네</label>
              <input type="radio" name="sms" id="smsN"><label for="smsN">아니오</label>
            </td>
          </tr>
        </table>
      </div>
      <div class="lend tableBox">
        <table>
          <tr>
            <th>랜딩페이지 명</th>
            <td><input type="text" name="" id=""></td>
          </tr>
          <tr>
            <th>랜딩페이지 URL</th>
            <td><input type="text" name="" id=""></td>
          </tr>
          <tr>
            <th>캠페인 내용</th>
            <td>a</td>
          </tr>
          <tr>
            <th>광고 USP 설정</th>
            <td>a</td>
          </tr>
          <tr>
            <th>애드인포 CPA 이용 정책</th>
            <td>
              <input type="radio" name="cpa" id="cpaY"><label for="cpaY">네</label>
              <input type="radio" name="cpa" id="cpaN"><label for="cpaN">아니오</label>
            </td>
          </tr>
        </table>
      </div>
    </form>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      adKind: String,             // 캠페인 종류
      adArea: Object,             // 광고지역
      adAreaEtc: String,          // 기타지역
      adSrtDt: String,            // YYYYMMDD
      adSrtTm: String,            // HHMMSS
      adEndDt: String,            // YYYYMMDD
      adEndTm: String,            // HHMMSS
      adPurpose: String,          //
      adPurposeObj: Object,       //
      adTopKind: String,          //
      adMiddleKind: String,       //
      adTopKindObj: Object,       //
      adMiddleKindObj: Object,    //
      adName: String,
      adComment: String,
      adUsp: String,
      smsYn: Boolean,
      smsNo: String,
      landingPageTitle: String,
      landingUrl: String,
      adPrice: String,
      adPromotionPrice: String,
      dayLimit: String,
      approval: String,
      ageTarget: Object,     // {from:"", to: ""}
      reqWordCond: String,
      banChannelCond: Object,
      banImageCond: String,
      banWordCond: String,
      nullifyCond: Object,
      cancelCond: Object,
      apdText1: String,
      apdText2: String,
      apdText3: String,
    }
  },
  methods: {
    getCommonByTp0000 () {
      axios.get("http://api.adinfo.co.kr:30000/getCommonByTp", 
        {
          params: {
            tp: '0000'
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adTopKind = response.data[0].code;
          this.adTopKindObj = response.data;
          this.firstComboChg(this.adTopKind);
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    firstComboChg(code) {
      axios.get("http://api.adinfo.co.kr:30000/getCommonCodeByCode", 
        {
          params: {
            tp: '0001',
            code: code
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adMiddleKind = response.data[0].code;
          this.adMiddleKindObj = response.data;
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    getCommonByTp0005() {
      axios.get("http://api.adinfo.co.kr:30000/getCommonByTp", 
        {
          params: {
            tp: '0005'
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adPurpose = response.data[0].code;
          this.adPurposeObj = response.data;
          console.log(response.data);
        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  created() {
    this.$store.state.headerTopTitle = "캠페인 관리";
    this.$store.state.headerMidTitle = "신규 캠페인 등록";

    this.getCommonByTp0000();
    this.getCommonByTp0005();
  }
}
</script>

<style>
  .tap,
  .chose,
  .campaign{
    margin-bottom: 20px;
  }

  .tap{
    display: flex;
    justify-content: space-around;
  }

  .tap a,
  .tap a b{
    font-weight: 700;
    font-size: 18px;
  }

  .tap a{
    width: 210px;
    height: 81px;
    padding: 0 38px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #e5e5e5;
  }

  .tap a span{
    font-size: 14px;
  }

  .tap a img{
    height: 47px;
  }
  
  .tap a.on,
  .tap a.on b,
  .tap a.on span{
    background: #e25b45;
    color: #fff;
  }

  .chose{
    width: 100%;
    height: 182px;
    background: #fff;
    padding: 19px;
    border-radius: 10px;
    border: solid 1px #e5e5e5;
  }

  .choseArea,
  .choseDate{
    float: left;
  }

  .choseArea P{
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 11px;
    color: #444;
  }

  .choseArea{
    margin-right: 59px;
    width: 336px;
    height: 100%;
  }

  .choseArea p span{
    color: #666;
  }

  .choseArea input[type="checkbox"]{
    width: 11px;
    height: 11px;
    margin: 0 6px 8px 0;
    border-radius: 2px;
    border: solid 1px #cbcbcb;
    background: #f6f6f6;
  }

  .choseArea label{
    margin: 0 16px 0 0;
  }
  .choseDate{
    width: 924px;
    height: 100%;
  }

  .choseDate div{ 
    height: 58px;
    margin-bottom: 20px;
  }

  .choseDate .firstBox div {
    float: left;
    width: 462px;
  }

  .choseDate .secondBox div {
    float: left;
  }

  .choseDate label{
    font-size: 16px;
    font-weight: 700;
  }

  .choseDate input,
  .choseDate select{
    height: 35px;
    margin: 7px 10px 0 0;
    padding: 9px 15px ;
    border: solid 1px #e5e5e5;
    border-radius: 10px;
    margin-top: 7px;
  }

  .choseDate input[type="date"]{
    width: 266px;
  }

  .choseDate input[type="time"]{
      width: 176px;
  }

  .camObj{
    width: 265px;
    margin-right: 11px;
  }

  .camObj select{
    width: 100%;
  }

  .camParcel {
    width: 648px;
  }

  .choseDate .camParcel select {
    float: left;
    width: 48.3%;
  }

  .choseDate .camParcel select.camParcel01{
    margin-right: 11px;
  }

  .tableBox{
    border: solid 1px #e5e5e5; 
    width: 100%;
    background: #fff;
    border-radius: 10px;
  }

  #container table{
    width: 100%;
    border-collapse: collapse;
    border: solid 1px #e5e5e5; 
    width: 100%;
    background: #fff;
    border-radius: 10px;
    border-style: hidden;
  }

  #container th,
  #container td {
    border: 1px solid #e5e5e5;
  }

  #container th{
    width: 149px;
    padding: 15px 21px;
    vertical-align: top;
    text-align: left;
    color: #444;
  }

  #container td{
    height: 46px;
    padding: 8px 7px 7px;
  }

  #container .notice td{
    height: 183px;
  }

  #container td input{
    width: 100%;
    height: 100%;
    padding: 5px;
    border: solid 1px #e5e5e5;
  }

  #container .camName{
    width: 770px;
  }

  #container .upload-name{
    width: 260px;
    display: block;
    padding: 6px 10px;
    border-bottom-color: #e2e2e2;
    float: left;
  }

  #container input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
  }

  #container .upload-name + label {
    display: block;
    float: left;
    width: 124px;
    height: 31px;
    border-radius: 10px;
    background-color: #f0f0f0;
    margin-left:  10px ;
    text-align: center;
    line-height: 2.5;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: -0.3px;
  }

  #container .upload-name + label >i{
      font-size: 12px;
      color: #e25b45;
      vertical-align: middle;
  }
  #container .tableBox input[type="radio"]{
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }

  #container .tableBox input[type="radio"] + label{
    display: inline-block;
    margin: -5px 20px;
  }
</style>
