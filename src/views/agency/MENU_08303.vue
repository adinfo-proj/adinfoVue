<template>
  <div class="container menu08302">
    <div class="landPrev">
      <div v-if="$store.state.lendchooseObj.length == '0'" class="noLength">
        <img src="../../assets/images/menu08302/NolendData.png" alt="">
      </div>

      <!-- 랜딩페이지 미리보기  -->
      <div v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index">
        <!-- 이미지 -->
        <div v-if="$store.state.lendchooseObj[index].tp == '01'">
          <img :src="$store.state.lendchooseObj[index].fileNm" alt="">
        </div>
        <!-- 텍스트 -->
        <div v-if="lendchoose.tp == '02'" v-html="$store.state.lendchooseObj[index].descript">
        </div>
        <!-- 폼 -->
        <div class="formPrev" v-if="lendchoose.tp == '03'" v-bind="$store.state.lendchooseObj[index].formDesc" :style="{borderColor:lendchoose.formDesc.lineColor, borderWidth:lendchoose.formDesc.borderLine} ">
          <!-- <div v-for="(inObj, index) in $store.state.inputObj" :key="index"> -->
          <div v-for="(inObj, index) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="index">
            <!-- 텍스트 박스 -->
            <div v-if="inObj.values == 'textForm'" class="formInput">
              <span class="fornInputName">{{inObj.names}}</span>
              <input type="text" :placeholder="inObj.names">
            </div>


            <!-- 라디오 버튼 -->
            <div v-if="inObj.values == 'radioForm'" class="formInput">
              <span class="fornInputName">{{inObj.names}}</span>
              <span v-for="index in inObj.lab" :key="index">
                <input :id="index" :name="inObj.lab[index]" type="radio" >
                <label :for="index">{{index}}</label>
              </span>
            </div>
            <!-- 체크박스 -->
            <div v-if="inObj.values == 'checkForm'" class="formInput">
              <span class="fornInputName">{{inObj.names}}</span>
              <span v-for="index in inObj.lab" :key="index">
                <input :id="index" type="checkbox" >
                <label :for="index">{{index}}</label>
              </span>
            </div>
            <!-- 셀렉트박스 -->
            <div v-if="inObj.values == 'selForm'" class="formInput">
              <span class="fornInputName">{{inObj.names}}</span>
              <select>
                <option v-for="index in inObj.lab" :key="index" :value="index">
                  {{index}}
                </option>
              </select>  
            </div>
          </div>
          <input type="checkbox" name="agree01" id="agree01">
          <label for="agree01">{{lendchoose.formDesc.priNm}}<span @click="PriModal()">[보러가기]</span></label>
          <div class="centerBox">
            <button v-bind:style="{borderRadius:lendchoose.formDesc.btnShape, background:lendchoose.formDesc.btnColor}">{{lendchoose.formDesc.btnNm}}</button>
          </div>
          <!-- 개인정보 동의 모달 팝업 내용 -->
          <div class="priBox">
            <h6>개인정보 취급방침</h6>
            <div v-html="lendchoose.formDesc.priCon"></div>
            <button @click="PriCancle()">확인</button>
          </div>
        </div>
      </div>
      <div class="bgColor">
      </div>
      <div class="subBox">
        <button class="saveBtn" @click="PreviewSend()">랜딩페이지 저장하기</button>
      </div>
    </div>
    <div class="landChoice">
      <div class="basicInfo landBox">
        <h2>랜딩페이지 기본정보</h2>
        <table>
          <tr>
            <th>
              캠페인 명
            </th>
            <td>
              <select class="campDis" id="campDis" v-model="campaignSelect">
                <option value="0" disabled>캠페인을 선택하세요</option>
                <option v-for="(adIndex, index) in campaignListObj"
                  :key="index" 
                  :value="adIndex.caId"
                  >{{ adIndex.name }}
                </option>
              </select>
            </td>
            <th>
              광고주 명
            </th>
            <td>
              <input type="text" class="" v-model="$store.state.company">
            </td>
          </tr>
          <tr>
            <th>
              페이지 명
            </th>
            <td colspan="3">
              <input type="text" class="" v-model="landName">
            </td>
          </tr>
        </table>
      </div>
      <div class="landScr landBox">
        <p>
          스크립트 삽입
          <input type="checkbox" name="landScr" id="landScr" v-model="scriptInput" @change="ScriptOn()"
          :checked="scriptInput">
          <label for="landScr"></label>
          <i class="icon-arrow on" @click="ScriptUp()"></i>
        </p>
        <div class="landScrChecked">
          <textarea class=""></textarea>
        </div>
      </div>

      <!------------------------------------------------------------------------------------------------------
       이곳부터 for 루프안에서 이미지/텍스트/폼의 경우를 위해 콤포넌트를 처리한다.
      ------------------------------------------------------------------------------------------------------->
      <div v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index">
        <!-- 이미지 -->
        <div v-if="lendchoose.tp == '01'">
          <ChooseLandImg :indexNum="index"></ChooseLandImg>
        </div>
        <!-- 텍스트 -->
        <div v-if="lendchoose.tp == '02'">
          <ChooseLandText :indexNum="index"></ChooseLandText>
        </div>
        <!-- 폼 -->
        <div v-if="lendchoose.tp == '03'">
          <ChooseLandForm :indexNum="index"></ChooseLandForm>
        </div>
      </div>
      <div class="btnBox">
        <button class="imgBtn"  @click="ImgChooseBtn()" >이미지 추가</button>
        <!-- <button class="textBtn" @click="TextChooseBtn()">텍스트 추가</button> -->
        <button class="formBtn" @click="FormChooseBtn()">폼 추가</button>
      </div>
    </div>
  </div>
</template>

<script>
  import $              from 'jquery';
  import axios          from "axios";
  import ChooseLandImg  from '../../components/dialog/ChooseLandImg.vue';
  import ChooseLandText from '../../components/dialog/ChooseLandText.vue';
  import ChooseLandForm from '../../components/dialog/ChooseLandForm.vue';

  export default {
    components: {
        ChooseLandImg
      , ChooseLandText
      , ChooseLandForm
    },
    data() {
      return {
          scriptInput     : false
        , campaignSelect  : '0'
        , campaignListObj : ''
        , landName        : ''
      }
    },
    methods: {
      //******************************************************************************
      // 미리보기를 서버에 전달한다.
      //******************************************************************************
      PreviewSend() {
        //------------------------------------------------------------------------------
        // 입력 유형을 Array로 구성한다.
        //------------------------------------------------------------------------------
        let formType = [];
        this.$store.state.lendchooseObj.forEach(element => {
          formType.push(element.tp);
        });

        //------------------------------------------------------------------------------
        // 텍스트 추가의 경우 입력된 태그를 Array로 구성한다.
        //------------------------------------------------------------------------------
        let textData = [];
        this.$store.state.lendchooseObj.forEach(element => {
          if( element.descript != "") {
            textData.push(element.descript);
          }
        });

        //------------------------------------------------------------------------------
        // 폼 추가 태그를 Array로 구성한다.
        //------------------------------------------------------------------------------
        console.log(this.$store.state.lendchooseObj);

        let formData = [];
        this.$store.state.lendchooseObj.forEach(element => {
          if( element.tp == "03") {
            let forms = {
                btnShape : element.formDesc.btnShape
              , btnColor : element.formDesc.btnColor
              , btnNm    : element.formDesc.btnNm
              , inputBox : element.formDesc.inputBox
              , priCon   : element.formDesc.priCon
              , priNm    : element.formDesc.priNm
            };
            formData.push(forms);
          }
        });

        let scriptAdd = '';
        if(this.scriptInput == false) {
          scriptAdd = this.scriptComment;
        }

        let data = {
            mbId        : this.$store.state.mbId
          , adId        : this.$store.state.adId
          , caId        : this.campaignSelect
          , mkId        : this.$store.state.adId
          , pgId        : 0
          , clntId      : this.$store.state.clntId
          , processMode : 'C'       // (C:신규, M:수정, R:삭제)
          , formCount   : this.$store.state.lendchooseObj.length
          , campanyNm   : this.company
          , landingNm   : this.landName
          , campaignId  : this.campaignSelect
          , formType    : formType
          , scriptAdd   : scriptAdd
          , textData    : textData
          , formData    : formData
        };

        const frm = new FormData();
        for(let i = 0 ; i < this.$store.state.lendchooseObj.length ; i++) {
          if(this.$store.state.lendchooseObj[i].tp == '01') {
            frm.append("upFile" , this.$store.state.lendchooseObj[i].fileNmOrg);
          }
        }
        frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));

        axios.post("http://api.adinfo.co.kr:30000/newlandingpage", frm, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          if( response.data.status == 'success') {
            alert('정상적으로 캠페인이 등록되어습니다.');
            window.open(response.data.landingUrl);
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 캠페인 분류(대분류)
      //******************************************************************************
      getCampaignAllList() { // 캠페인 분류(대분류)
        axios.get("http://api.adinfo.co.kr:30000/GetCampaignNameLst",
        {
          params: {
              mbId   : this.$store.state.mbId
						, adId   : this.$store.state.adId
          }
        })
        .then(response => {
          // this.campaignSelect = response.data[0].adId;
          this.campaignListObj   = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 스크립트 추가 시 텍스트박스 보이는 함수
      //******************************************************************************
      ScriptOn() {
        if(this.scriptInput == true) {
          $(".landScr .landScrChecked").slideDown(300);
          $(".landScr .icon-arrow").removeClass("on");
        } else {
          $(".landScr .landScrChecked").slideUp(300);
          $(".landScr .icon-arrow").addClass("on");
        }
      },
      //******************************************************************************
      // 스크립트 접는 함수
      //******************************************************************************
      ScriptUp() {
        if(this.scriptInput == false) {
          return;
        }

        $(".landScr .landScrChecked").slideToggle(300);
        $(".landScr .icon-arrow").toggleClass("on");
      },
      //******************************************************************************
      // 이미지 추가 함수
      //******************************************************************************
      ImgChooseBtn() {
        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }

        let plusObj = {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };

        plusObj.tp = '01';
        this.$store.state.lendchooseObj.push(plusObj);
      },
      // //******************************************************************************
      // // 텍스트 추가 함수
      // //******************************************************************************
      // TextChooseBtn() {
      //   if(this.$store.state.lendchooseObj.length > 9) {
      //     alert("이미지, 폼은 10개 까지만 등록 가능합니다.")
      //     return;
      //   }

      //   let plusObj = {
      //       tp: ''
      //     , fileNm: ''
      //     , descript: ''
      //     , formDesc: ''
      //     , landImgNm: ''
      //   };

      //   plusObj.tp = '02';
      //   this.$store.state.lendchooseObj.push(plusObj);
      // },
      //******************************************************************************
      // 폼 추가 함수
      //******************************************************************************
      FormChooseBtn() {
        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }

        let plusObj = {
            tp         : ''
          , fileNm     : ''
          , descript   : ''
          , formDesc   : ''
          , landImgNm  : ''
        };

        plusObj.tp = '03'

        this.$store.state.lendchooseObj.push(plusObj);

      },
      //******************************************************************************
      // 폼 안에 개인정보 모달 박스 팝업
      //******************************************************************************
      PriModal() {
        $(".menu08302 .landPrev .formPrev .priBox").css({display:'block'})
        $(".menu08302 .landPrev .bgColor").css({display:'block'})
      },
      //******************************************************************************
      // 폼 안에 개인정보 모달 박스 닫기
      //******************************************************************************
      PriCancle() {
        $(".menu08302 .landPrev .formPrev .priBox").css({display:'none'})
        $(".menu08302 .landPrev .bgColor").css({display:'none'})
      }
    },
    mounted: function() {
      this.$watch('this.$store.state.inputObj', function(newVal, oldVal) {
        console.log("this?");
        console.log(newVal);
        console.log(oldVal);
      })
    },
    created() {
      this.$store.state.headerTopTitle = "랜딩페이지";
      this.$store.state.headerMidTitle = "랜딩페이지 제작";

      this.getCampaignAllList();
    },
    beforeDestroy() {
     //this.$store.state.lendchooseObj = '';
    }
  }
</script>

<style scoped>
  .menu08302 {
    display: flex;
    justify-content: space-between;
  }

  .menu08302 .landPrev {
    width: 820px;
    padding-right: 20px;
    position: relative;
  }

  .menu08302 .landPrev img {
    width: 100%;
    display: block;
  }

  .menu08302 .landPrev .noLength {
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }

  .menu08302 .landPrev .noLength img {
    width: auto;
  }

  .menu08302 .landPrev .formPrev {
    width: 100%;
    border: 30px solid #3e3e3e;
    padding: 50px;
    position: relative;
  }

  .menu08302 .landPrev .formPrev input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 12px 16px;
  }

  .menu08302 .landPrev .formPrev  .formInput {
    margin-bottom: 25px;
  }

  .menu08302 .landPrev .formPrev .fornInputName {
    display: block;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    width: 20%;
    height: 100%;
    margin-top: 10px;
    padding-left: 10px;
    position: relative;
  }

  .menu08302 .landPrev .formPrev .fornInputName:before {
    clear: both;
    width: 2px;
    height: 70%;
    position: absolute;
    content: "";
    background: #c5c5c5;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .menu08302 .landPrev .formPrev select{
    padding: 12px 16px;
    margin-bottom: 10px;
    width: 100%;
    margin-top: 10px;
  }

  .menu08302 .landPrev .formPrev input[type="radio"],
  .menu08302 .landPrev .formPrev	input[type="checkbox"] {
    display: none;
  }

  .menu08302 .landPrev .formPrev label {
    font-size: 16px;
    display: inline-block;
    margin: 10px 10px 0px 0px ;
    position: relative;
    text-align: right;
    padding: 0 10px 0 35px;
    font-weight: 600;
  }

  .menu08302 .landPrev .formPrev label span{
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
  }

  .menu08302 .landPrev .formPrev	input[type="checkbox"] + label a {
    font-size: 16px;
    margin-left: 5px;
  }

  .menu08302 .landPrev .formPrev input[type="radio"] + label:before,
  .menu08302 .landPrev .formPrev	input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #cbcbcb;
    background: #f6f6f6;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 2px;
  }

  .menu08302 .landPrev .formPrev input[type="radio"] + label:before {
    border-radius: 50%;
  }

  .menu08302 .landPrev .formPrev	input[type="checkbox"]:checked + label:after,
  .menu08302 .landPrev .formPrev input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    display: block;
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 15px;
    left: 6.5px;
    top: 2px;
    color: #4b4b4b;
  }

  .menu08302 .landPrev .formPrev	.textBox {
    width: 100%;
    height: 120px;
    resize: none;
    margin-bottom: 16px;
    padding: 10px;
    font-size: 16px;
  }

  .menu08302 .landPrev .formPrev .centerBox {
    text-align: center;
  }

  .menu08302 .landPrev .formPrev .centerBox button {
    width: 50%;
    background: #aa00e5;
    color: #fff;
    border: none;
    padding: 25px;
    font-size: 28px;
    border-radius: 100px;
    font-weight: 700;
    margin-top: 15px;
  }

  /* 개인정보 수집 동의 항목 */
  .menu08302 .landPrev .formPrev .priBox {
    position: absolute;
    padding: 20px;
    width: 650px;
    height: 300px;
    background: #fff;
    border-radius: 10px ;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    display: none;
    z-index: 9;
  }

  .menu08302 .landPrev .formPrev .priBox h6 {
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: -0.72px;
    color: #000;
  }

  .menu08302 .landPrev .formPrev .priBox div {
    padding: 5px;
    width: 100%;
    height: 180px;
    overflow-y: scroll;
    border: 1px solid #e5e5e5;
  }

  .menu08302 .landPrev .formPrev .priBox button {
    width: 100px;
    height: 35px;
    background: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 35px;
    display: block;
    cursor: pointer;
    margin: 10px auto;
  }

  .menu08302 .landPrev .bgColor {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: none;
  }

  /* 개인정보 수집 동의 항목 */

  /* 랜딩페이지 저장 버튼 */
  .menu08302 .landPrev .subBox {
    text-align: center;
    margin-top: 10px;
  }
  .menu08302 .landPrev .saveBtn {
    padding: 13px 33px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 700;
    background: #e25b45;
  }

  /* 랜딩페이지 저장 버튼 */
  .menu08302 .landChoice {
    width: 525px;
  }

  .menu08302 .landChoice .landBox {
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  .landChoice .landBox {
    width: 100%;
    border: 1px solid #e5e5e5;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  .menu08302 .landChoice .basicInfo h2,
  .menu08302 .landChoice .landScr p {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
  }

  .menu08302 .landChoice .basicInfo h2 {
    padding: 14px 20px;
    border-bottom: 1px solid #e5e5e5;
  }

  .menu08302 .landChoice .basicInfo table {
    padding: 5px 20px 21px;
    width: 100%;
  }

  .menu08302 .landChoice .basicInfo table td {
    text-align: left;
  }

  .menu08302 .landChoice .basicInfo table th {
    width: 64px;
    letter-spacing: -0.36px;
    padding: 8.5px 0;
    vertical-align: top;
    color: #222;
    text-align: center;
  }

  .menu08302 .landChoice .basicInfo table td input,
  .menu08302 .landChoice .basicInfo table td select {
    border: 1px solid #e5e5e5;
    padding: 7px 10px;
    margin: 2px 0;
    width: 100%;
    height: 100%;
  }

  .menu08302 .landChoice .landScr {
    padding: 21px 18px;
  }

  .menu08302 .landChoice .landScr p .icon-arrow {
    float: right;
    font-size: 9px;
    transition: 0.3s;
    transform: translateY(3px);
  }

  .menu08302 .landChoice .landScr p .icon-arrow.on {
    transform: rotate(180deg);
  }

  .menu08302 .landChoice .landScr input[type="checkbox"] {
    display: none;
  }

  .menu08302 .landChoice .landScr input[type="checkbox"] + label {
    display: inline-block;
    width: 60px;
    height: 25px;
    border-radius: 25px;
    background: #ebebeb;
    margin: -15px 0 0 10px;
    transform: translateY(8px);
    transition: 0.3s;
    position: relative;
  }

  .menu08302 .landChoice .landScr input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    color: #a5a5a5;
    left: 30px;
    top: 5.5px;
    content: "OFF";
    font-weight: 700;
  }

  .menu08302 .landChoice .landScr input[type="checkbox"] + label:after {
    clear: both;
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 100%;
    background: #fff;
    left: 2px;
    top: 2px;
    content: "";
    transition: 0.3s;
  }

  .menu08302 .landChoice .landScr input[type="checkbox"]:checked + label {
    background: #e25b45;
  }

  .menu08302 .landChoice .landScr input[type="checkbox"]:checked + label:before {
    left: 9px;
    content: "ON";
    color: #fff;
  }

  .menu08302 .landChoice .landScr input[type="checkbox"]:checked + label:after {
    left: 37px;
    top: 2px;
  }

  .menu08302 .landChoice .landScr .landScrChecked { 
    width: 487px;
    display: none;
  }

  .menu08302 .landChoice .landScr .landScrChecked textarea {
    width: 487px;
    height: 100px;
    resize: none;
    padding: 10px;
    font-size: 16px;
    margin-top: 20px;
  }

  .menu08302 .landChoice .btnBox {
    /* display: flex; */
    text-align: center;
    /* justify-content: space-between; */
    padding: 10px 66px 0 66px;
  }

  .menu08302 .landChoice .btnBox button {
    padding: 13px 26px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 700;
  }

  .menu08302 .landChoice .btnBox .imgBtn {
    border: 1px solid #e25b45;
    color: #e25b45;
    margin-right: 10px;
  }

  .menu08302 .landChoice .btnBox .textBtn {
    background: #868686;
  }

  .menu08302 .landChoice .btnBox .formBtn {
    background: #e25b45;
  }

</style>