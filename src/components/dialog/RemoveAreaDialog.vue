<template>
  <div id="modalRemoveArea">
    <h1>광고제외지역 설정</h1>
    <div class="xBtnBox">
      <button class="xBtn" @click="ModalCancle();">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13" viewBox="0 0 13 13">
          <image id="X_copy" data-name="X copy" width="13" height="13" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAFVJREFUKFOt0kkKACAIAED9/6NLCsXcDwndmnLDRQEASGcaC6+BKTz3GE2gPKxRBZ9MLIqgSz1CGoa1Zqis8dtPNqW2pmxeafe6Abs5dYBXTDZiCgRula4/5XLvrFUAAAAASUVORK5CYII="/>
        </svg>
      </button>
    </div>
    <div class="popUpArea">
      <div class="areaTop">
        <div class="areaCity">
          <div class="popUpTitle">
            광역시 / 도
          </div>
          <div class="popUpAreaList">
            <ul>
              <li
                v-for="(adAreaCity, index) in adAreaCityObj"
                :key="index" 
                :value="adAreaCity.code"
                :v-model="adAreaCity"
                @click="areaComboChg(adAreaCity.code);"
                v-bind:class="{active : adAreaCity.code == befAdAreaCityCode}"
                >{{ adAreaCity.codeNm }}
              </li>
            </ul>
          </div>
        </div>
        <div class="areaZone">
          <div class="popUpTitle">
            시 / 군 / 구
          </div>
          <div class="popUpAreaList">
            <ul>
              <li class="areaCheck"
                v-for="(adAreaSubCity, index) in adAreaSubCityObj"
              :key="index"
              :value="adAreaSubCity.subCode"
              @click="AddAreaList(index)"
              >{{ adAreaSubCity.codeDescr }} </li>
            </ul>
          </div>
        </div>
        <div class="areaChooseZone">
          <div class="popUpTitle">
            최대 10개까지 선택 가능합니다.
          </div>
          <div class="popUpAreaListChoose">
            <span class="chooseAreaDeta"
            v-for="(areaList, index) in removeAreaListObj"
            :key="index"
            >{{ areaList.codeNm }} {{ areaList.codeDescr }}<i class="fas fa-times xBtn"
            @click="delAreaList(areaList.subCode);"
            ></i>
            </span>
          </div>
        </div>
      </div>
      <div class="areaBottom">
        <button class="areaSub" @click="MadalSubmit();">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';

export default {
  data() {
    return {
        adAreaCity: ''         // 특별시/도 선택 목록 
      , adAreaCityObj: ''      // 특별시/도 선택 목록 객체
      , adAreaSubCity: ''      // 시/구/군 선택 목록 
      , adAreaSubCityObj: ''   // 시/구/군 선택 목록 객체

      , befAdAreaCityCode: ''    // 주소값 대분류 현재값
      , areaList: ''
      , removeAreaListObj: this.$store.state.removeAreaListObj
      , addAreaListObj: this.$store.state.addAreaListObj
    }
  },
  methods: {
    //******************************************************************************
    // 지역선택 목록
    //******************************************************************************
    getCommonByTp0022 () { // 캠페인 분류(대분류)
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
        {
          params: {
            tp: '0022'
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adAreaCity = response.data[0].code;
          this.adAreaCityObj = response.data;
          this.areaComboChg(this.adAreaCity);
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 지역 세부선택 목록
    //******************************************************************************
    areaComboChg(code) { // 캼패안 분류(소분류)
      this.befAdAreaCityCode = code;
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonCodeByCode", 
        {
          params: {
            tp: '0019',
            code: code
        }
      })
      .then(response => {
        this.divSelect = code;
        if(response.data.length > 0) {
          this.adAreaSubCityObj = response.data;
          for(let i = 0 ; i < this.adAreaSubCityObj.length; i++) {
            this.adAreaSubCityObj[i].flag = false;
          }
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 모달팝업 추가 함수
    //******************************************************************************

    AddAreaList(index) {
      let addSubList = new Object;

      if( this.removeAreaListObj.length >= 10 ){
        alert("지역 선택은 10개까지만 가능합니다.");
        return;
      }

      for( let i = 0 ; i < this.removeAreaListObj.length ; i++ ){
        if( this.removeAreaListObj[i].subCode == this.adAreaSubCityObj[index].subCode ){
          return;
        }
      }

      //------------------------------------------------------------------------------
      // 제외지역 중복선택 브레이크 걸기
      //------------------------------------------------------------------------------

      for(let i = 0 ; i < this.addAreaListObj.length ; i++){
        if(this.adAreaSubCityObj[index].subCode == this.addAreaListObj[i].subCode){
          alert("광고지역으로 선택된 지역입니다.")
          return;
        }
      }

      //------------------------------------------------------------------------------
      // 전체선택 시 나머지 지역 선택불가 걸기
      //------------------------------------------------------------------------------

      let cityAll = Number(this.adAreaSubCityObj[index].code + '000')
      
      for(let i = 0 ; i < this.removeAreaListObj.length ; i++ ){
        if(this.removeAreaListObj[i].subCode == cityAll){
          alert("전체지역 선택 시 세부지역 선택이 불가합니다.")
         return; 
        }
      }

      
      addSubList.code = this.adAreaSubCityObj[index].code;
      addSubList.codeNm = this.adAreaSubCityObj[index].codeNm;
      addSubList.subCode = this.adAreaSubCityObj[index].subCode;
      addSubList.codeDescr = this.adAreaSubCityObj[index].codeDescr;

      this.removeAreaListObj.push(addSubList)
    },

    
    //******************************************************************************
    // 모달팝업 지우기 함수
    //******************************************************************************

    delAreaList(subCode){
      for(let i = 0 ; i < this.removeAreaListObj.length ; i++) {
        if(this.removeAreaListObj[i].subCode == subCode){
          this.removeAreaListObj.splice(i, 1);
        }
      }
    },
    //******************************************************************************
    // 모달팝업 닫기
    //******************************************************************************
    MadalSubmit() {
      this.$store.state.removeAreaListObj = this.removeAreaListObj;
      $("#modalRemoveArea").css({display:"none"})
    },
    ModalCancle() {
      $("#modalRemoveArea").css({display:"none"})
    },
  },
  created() {
    this.getCommonByTp0022();
  },

}
</script>

<style>

  #modalRemoveArea {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vw;
    background: rgba(0,0,0,0.5);
  }

  #modalRemoveArea h1 {
    position: absolute;
    top: 150px;
    left: 550px;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
  }

  #modalRemoveArea .xBtnBox {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 1205px;
    top: 210px;
  }

  #modalRemoveArea .xBtnBox .xBtn { 
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 33px;
    height: 33px;
    background: rgb(0, 0, 0);
    font-size: 16px;
  }

  #modalRemoveArea .popUpArea {
    width: 655px;
    height: 390px;
    padding-bottom: 20px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    left: 550px;
    top: 200px;
    overflow: hidden;
  }

  #modalRemoveArea .popUpArea .areaTop {
    width: 100%;
    height: 310px;
  }

  #modalRemoveArea .popUpArea .areaTop .areaCity,
  #modalRemoveArea .popUpArea .areaTop .areaZone,
  #modalRemoveArea .popUpArea .areaTop .areaChooseZone {
    float: left;
    height: 100%;
  }

  #modalRemoveArea .popUpArea .areaTop .areaCity {
    width: 154px;
  }

  #modalRemoveArea .popUpArea .areaTop .areaZone {
    width: 214px;
  }

  #modalRemoveArea .popUpArea .areaTop .areaChooseZone {
    width: 287px;
    border-bottom: 1px solid #e5e5e5;
  }

  #modalRemoveArea .popUpArea .areaTop .areaCity,
  #modalRemoveArea .popUpArea .areaTop .areaZone {
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }

  #modalRemoveArea .popUpArea .areaTop .popUpTitle {
    border-bottom: 1px solid #e5e5e5;
    background: #f6f6f6;
    padding: 17px 0 14px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #444;
  }
  #modalRemoveArea .popUpArea .areaTop .popUpAreaList {
    height: 261px;
    overflow-y: scroll;
    font-weight: 700;
    color: #444;
  }

  #modalRemoveArea .popUpArea .areaTop .popUpAreaList li {
    height: 34px;
    padding: 9px 21px;
    cursor: pointer;
  }

  #modalRemoveArea .popUpArea .areaTop .popUpAreaList li:hover {
    background: #e25b45;
    color: #fff;
  }

  #modalRemoveArea .popUpArea .areaTop .popUpAreaList li.active {
    background: #e25b45;
    color: #fff;
  }

  #modalRemoveArea .popUpArea .areaTop .popUpAreaList .areaCheck {
    width: 50%;
    float: left;
    text-align: center;
    padding: 10px 0;
  }

  #modalRemoveArea .popUpArea .areaTop .areaChooseZone .popUpAreaListChoose {
    padding: 15px;
  }

  #modalRemoveArea .popUpArea .areaTop .areaChooseZone span {
    display: inline-block;
    padding: 5px 8px;
    border: 1px solid #e5e5e5;;
    margin: 0 10px 10px 0;
    border-radius: 20px;
  }

  #modalRemoveArea .popUpArea .areaTop .areaChooseZone span i {
    margin: 0 2px 0 4px;
    transform: translateY(1px);
  }

  #modalRemoveArea .areaBottom {
    text-align: center;
    padding: 21px;
  }

  #modalRemoveArea .areaBottom button {
    width: 137px;
    height: 40px;
    text-align: center;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  #modalRemoveArea .areaBottom .areaCan {
    background: #8d8d8d;
    margin-right: 11px;
  }

  #modalRemoveArea .areaBottom .areaSub {
    background: #e25b45;
  }
</style>
