<template>
  <div class="container menu0804">
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
        <div class="formPrev" v-if="lendchoose.tp == '03'" v-bind="$store.state.lendchooseObj[index].formDesc">
          <input type="text" name="value01" placeholder="이름을 입력하세요.">
          <input type="text" name="value02" placeholder="연락처 '-'없이 입력해주세요.">
          <!-- <div v-for="(inObj, index) in $store.state.inputObj" :key="index"> -->
          <div v-for="(inObj, index) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="index">
            <input v-if="inObj.values == 'textForm'" type="text" :placeholder="inObj.names">

            <!-- 라디오 버튼 -->
            <div v-if="inObj.values == 'radioForm'" class="formInput">
              <span class="fornInputName">{{inObj.names}}</span>
              <span v-for="index in inObj.lab" :key="index">
                <input :id="index" :name="inObj.names" type="radio" >
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
            <button v-bind:style="{borderRadius:lendchoose.formDesc.btmShape, background:lendchoose.formDesc.btnColor}">{{lendchoose.formDesc.btnNm}}</button>
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
        <button class="saveBtn">랜딩페이지 저장하기</button>
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
                <option v-for="(adIndex, index) in campaignList"
                  :key="index" 
                  :value="adIndex.adId"
                  >{{ adIndex.name }}
                </option>
              </select>
            </td>
            <th>
              회사명
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
              <input type="text" class="" v-model="lendName">
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
        <button class="imgBtn" @click="ImgChooseBtn()">이미지 추가</button>
        <button class="textBtn" @click="TextChooseBtn()">텍스트 추가</button>
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
        , scriptInput: false
        , campaignSelect: ''
        , campaignList: ''
        , lendName: ''
      }
    },
    methods: {
      //******************************************************************************
      // 캠페인 분류(대분류)
      //******************************************************************************
      getCampaignAllList() { // 캠페인 분류(대분류)
        axios.get("http://api.adinfo.co.kr:30000/CampaignAllList")
        .then(response => {
          console.log(response);
          this.campaignSelect = response.data[0].adId;
          this.campaignList   = response.data;
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
        }else{
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
          , Nm: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };

        plusObj.tp        = '01';
        plusObj.Nm        = ChooseLandImg;

        this.$store.state.lendchooseObj.push(plusObj);

        console.log(this.$store.state.lendchooseObj)
      },
      //******************************************************************************
      // 텍스트 추가 함수
      //******************************************************************************
      TextChooseBtn() {

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }

        let plusObj = {
            tp: ''
          , Nm: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };

        plusObj.tp = '02'
        plusObj.Nm = ChooseLandText
        

        this.$store.state.lendchooseObj.push(plusObj)


        console.log(this.$store.state.lendchooseObj)
      },
      //******************************************************************************
      // 폼 추가 함수
      //******************************************************************************
      FormChooseBtn() {

        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }


        let plusObj = {
            tp: ''
          , Nm: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };

        plusObj.tp = '03'
        plusObj.Nm = ChooseLandForm
        
        let tpLength = this.$store.state.lendchooseObj.filter(tpValue => tpValue.tp == '03').length
        if(tpLength == 1){
          if(confirm('상단 폼의 입력항목 및 동의항목을 정확히 입력하셨습니까? 추후 입력항목 및 동의항목은 수정이 불가하오니 정확히 입력해주시기 바랍니다.') == false) {
            return;
          }
        }

        this.$store.state.lendchooseObj.push(plusObj)
        //------------------------------------------------------------------------------
        // tp가 03인 것이 2개 이상일 때 폼 항목이 보여지지 않게 하는 함수
        //------------------------------------------------------------------------------
        tpLength = this.$store.state.lendchooseObj.filter(tpValue => tpValue.tp == '03').length

        for( let i = 0 ; i < this.$store.state.lendchooseObj.length ; i++) {
            //------------------------------------------------------------------------------
          // tp가 03인 것이 1개일때 
          //------------------------------------------------------------------------------
          if(this.$store.state.lendchooseObj[i].tp == '03') {
            if(tpLength == 1) {
              return;
            }

            let n = this.$store.state.lendchooseObj.length - 1

            this.$store.state.secForm = n;


            this.$store.state.lendchooseObj[n].formDesc = this.$store.state.lendchooseObj[i].formDesc
          }
        }
        
        
      },
      //******************************************************************************
      // 폼 안에 개인정보 모달 박스 팝업
      //******************************************************************************
      PriModal() {
        $(".menu0804 .landPrev .formPrev .priBox").css({display:'block'})
        $(".menu0804 .landPrev .bgColor").css({display:'block'})
      },
      //******************************************************************************
      // 폼 안에 개인정보 모달 박스 닫기
      //******************************************************************************
      PriCancle() {
        $(".menu0804 .landPrev .formPrev .priBox").css({display:'none'})
        $(".menu0804 .landPrev .bgColor").css({display:'none'})
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

    }
  }
</script>

<style scoped>
  .menu0804 {
    display: flex;
    justify-content: space-between;
  }

  .menu0804 .landPrev {
    width: 820px;
    padding-right: 20px;
    position: relative;
  }

  .menu0804 .landPrev img {
    width: 100%;
  }
  .menu0804 .landPrev .noLength {
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }

  .menu0804 .landPrev .noLength img {
    width: auto;
  }

  .menu0804 .landPrev .formPrev {
    width: 100%;
    border: 30px solid #3e3e3e;
    padding: 50px;
    position: relative;
  }

  .menu0804 .landPrev .formPrev input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 12px 16px;
  }

  .menu0804 .landPrev .formPrev  .formInput {
    margin-bottom: 25px;
  }

  .menu0804 .landPrev .formPrev .fornInputName {
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

  .menu0804 .landPrev .formPrev .fornInputName:before {
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




  .menu0804 .landPrev .formPrev select{
    padding: 12px 16px;
    margin-bottom: 10px;
    width: 100%;
    margin-top: 10px;
  }

  .menu0804 .landPrev .formPrev input[type="radio"],
  .menu0804 .landPrev .formPrev	input[type="checkbox"] {
    display: none;
  }

  .menu0804 .landPrev .formPrev label {
    font-size: 16px;
    display: inline-block;
    margin: 10px 10px 0px 0px ;
    position: relative;
    text-align: right;
    padding: 0 10px 0 35px;
    font-weight: 600;
  }

  .menu0804 .landPrev .formPrev label span{
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
  }

  /* .menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
    font-size: 16px;
    display: inline-block;
    margin-bottom: 38px;
    position: relative;
    padding-left: 35px;
  } */

  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label a {
    font-size: 16px;
    margin-left: 5px;
  }

  .menu0804 .landPrev .formPrev input[type="radio"] + label:before,
  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
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

  .menu0804 .landPrev .formPrev input[type="radio"] + label:before {
    border-radius: 50%;
  }


  .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after,
  .menu0804 .landPrev .formPrev input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    display: block;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 15px;
    left: 6.5px;
    top: 2px;
    color: #4b4b4b;
  }

  /* .menu0804 .landPrev .formPrev input[type="radio"]:checked + label:after {
    clear: both;
    position: absolute;
    width: 12px;
    height: 12px;
    content: "";
    border-radius: 50%;
    display: block;
    left: 7.49px;
    top: 4px;
    background: #858585;
  } */

  .menu0804 .landPrev .formPrev	.textBox {
    width: 100%;
    height: 120px;
    resize: none;
    margin-bottom: 16px;
    padding: 10px;
    font-size: 16px;
  }

  .menu0804 .landPrev .formPrev .centerBox {
    text-align: center;
  }

  .menu0804 .landPrev .formPrev .centerBox button {
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

  .menu0804 .landPrev .formPrev .priBox {
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

  .menu0804 .landPrev .formPrev .priBox h6 {
    font-size: 24px;
    margin-bottom: 16px;
    letter-spacing: -0.72px;
    color: #000;
  }

  .menu0804 .landPrev .formPrev .priBox div {
    padding: 5px;
    width: 100%;
    height: 180px;
    overflow-y: scroll;
    border: 1px solid #e5e5e5;
  }

  .menu0804 .landPrev .formPrev .priBox button {
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

  .menu0804 .landPrev .bgColor {
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

  .menu0804 .landPrev .subBox {
    text-align: center;
    margin-top: 10px;
  }
  .menu0804 .landPrev .saveBtn {
    padding: 13px 33px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 700;
    background: #e25b45;
  }
  /* 랜딩페이지 저장 버튼 */


  .menu0804 .landChoice {
    width: 525px;
  }

  .menu0804 .landChoice .landBox {
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

  .menu0804 .landChoice .basicInfo h2,
  .menu0804 .landChoice .landScr p {
    font-size: 14px; 
    font-weight: bold;
    color: #222;
  }

  .menu0804 .landChoice .basicInfo h2 {
    padding: 14px 20px;
    border-bottom: 1px solid #e5e5e5;
  }

  .menu0804 .landChoice .basicInfo table {
    padding: 5px 20px 21px;
    width: 100%;
  }

  .menu0804 .landChoice .basicInfo table td {
    text-align: left;
  }

  .menu0804 .landChoice .basicInfo table th {
    width: 64px;
    letter-spacing: -0.36px;
    padding: 8.5px 0;
    vertical-align: top;
    color: #222;
    text-align: center;
  }

  .menu0804 .landChoice .basicInfo table td input,
  .menu0804 .landChoice .basicInfo table td select {
    border: 1px solid #e5e5e5;
    padding: 7px 10px;
    margin: 2px 0;
    width: 100%;
    height: 100%;
  }

  .menu0804 .landChoice .landScr {
    padding: 21px 18px;
  }

  .menu0804 .landChoice .landScr p .icon-arrow {
    float: right;
    font-size: 9px;
    transition: 0.3s;
    transform: translateY(3px);
  }

  .menu0804 .landChoice .landScr p .icon-arrow.on {
    transform: rotate(180deg);
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] {
    display: none;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] + label {
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

  .menu0804 .landChoice .landScr input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    color: #a5a5a5;
    left: 30px;
    top: 5.5px;
    content: "OFF";
    font-weight: 700;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"] + label:after {
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

  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label {
    background: #e25b45;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label:before {
    left: 9px;
    content: "ON";
    color: #fff;
  }

  .menu0804 .landChoice .landScr input[type="checkbox"]:checked + label:after {
    left: 37px;
    top: 2px;
  }


  .menu0804 .landChoice .landScr .landScrChecked { 
    width: 487px;
    display: none;
  }

  .menu0804 .landChoice .landScr .landScrChecked textarea {
    width: 487px;
    height: 100px;
    resize: none;
    padding: 10px;
    font-size: 16px;
    margin-top: 20px;
  }

  .menu0804 .landChoice .btnBox {
    display: flex;
    justify-content: space-between;
    padding: 10px 66px 0 66px;
  }

  .menu0804 .landChoice .btnBox button {
    padding: 13px 26px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 700;
  }

  .menu0804 .landChoice .btnBox .imgBtn {
    border: 1px solid #e25b45;
    color: #e25b45;
  }

  .menu0804 .landChoice .btnBox .textBtn {
    background: #868686;
  }

  .menu0804 .landChoice .btnBox .formBtn {
    background: #393939;
  }


  
  









  



  /*************************************************/
  /*            모바일 참조 용으로 만든 것           */
  /*************************************************/

  @media (max-width: 960px) {
    .menu0804 .landPrev .formPrev input[type="text"] {
      font-size: 28px;
    }

    .menu0804 .landPrev .formPrev	.checkLine label {
      font-size: 32px;
      margin: 15px 27px 25px 0px ;
      padding: 0;
      width: 104px;
    }
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
      font-size: 24px;
      display: inline-block;
      padding-left: 45px;
    }

    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label a {
      font-size: 24px;
    }
    
    .menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
    .menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
      width: 20px;
      height: 20px;
    }

    .menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after {
      font-size: 20px;
      top: 7px;
    }

    .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
      font-size: 20px;
      top: 3px;
    }

    .menu0804 .landPrev .formPrev	.textBox {
      font-size: 32px;
    }

    .menu0804 .landPrev .formPrev .centerBox button {
      width: 100%;
      font-size: 40px;
    }



  }

</style>