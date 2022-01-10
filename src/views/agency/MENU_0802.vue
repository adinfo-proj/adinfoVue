<template>
  <div class="container menu0804">
    <div class="landPrev">

      <!-- 랜딩페이지 미리보기  -->
      <div v-for="(lendchoose, index) in $store.state.lendchooseObj" :key="index">
        <div v-if="$store.state.lendchooseObj[index].tp == '01'">
          <img :src="$store.state.lendchooseObj[index].fileNm" alt="">
        </div>
        <div v-if="lendchoose.tp == '02'" v-html="$store.state.lendchooseObj[index].descript">
        </div>

        <div class="formPrev" v-if="lendchoose.tp == '03'" v-bind="$store.state.lendchooseObj[index].formDesc">
              <input type="text" name="value01" placeholder="이름을 입력하세요.">
              <input type="text" name="value02" placeholder="연락처 '-'없이 입력해주세요.">
              <div v-for="(inObj, index) in $store.state.inputObj" :key="index">
                <input v-if="inObj.value == 'textForm'" type="text" :placeholder="inObj.name">
                <input v-if="inObj.value == 'radioForm'" type="radio" >
                <input v-if="inObj.value == 'checkForm'" type="chechbox" >
                <select v-if="inObj.value == 'selForm'"></select>
              </div>




              


              <!-- <input type="checkbox" name="agree01" id="agree01"> -->


              <!-- <label for="agree01">개인정보 수집 동의<a href="javascript:void(0)">[보러가기]</a></label> -->


              <div class="centerBox">
                <button>신청하기</button>
              </div>












        </div>
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
              <input type="text" class="" name="company">
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
        <button class="saveBtn">미리보기</button>
        <button class="imgBtn" @click="ImgChooseBtn()">이미지 추가</button>
        <button class="textBtn" @click="TextChooseBtn()">텍스트 추가</button>
        <button class="formBtn" @click="FormChooseBtn()">폼 추가</button>
      </div>
      <!-- 수정 사항 -->

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

        this.$store.state.lendchooseObj.push(plusObj)

        console.log(this.$store.state.lendchooseObj)
        
      },




    },
    mounted: function() {
      this.$watch('this.$store.state.inputObj', function(newVal, oldVal) {
        console.log("this?");
        console.log(newVal);
        console.log(oldVal);
      })
    },
    created() {

      this.$store.state.headerTopTitle = "DBMASTER";
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
  }

  .menu0804 .landPrev img {
    width: 100%;
  }

  .menu0804 .landPrev .formPrev {
    width: 100%;
    border: 30px solid #3e3e3e;
    padding: 50px;
  }

  .menu0804 .landPrev .formPrev input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    padding: 12px 16px;
  }

  .menu0804 .landPrev .formPrev	.checkLine input[type="radio"],
  .menu0804 .landPrev .formPrev	input[type="checkbox"] {
    display: none;
  }

  .menu0804 .landPrev .formPrev	.checkLine label {
    font-size: 16px;
    display: inline-block;
    width: 76px;
    margin: 15px 15px 25px 0px ;
    position: relative;
    text-align: right;
    padding-right: 10px;
    font-weight: 700;
  }

  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
    font-size: 16px;
    display: inline-block;
    margin-bottom: 38px;
    font-weight: 700;
    position: relative;
    padding-left: 35px;
  }

  .menu0804 .landPrev .formPrev	input[type="checkbox"] + label a {
    font-size: 16px;
    margin-left: 5px;
  }

  .menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
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

  .menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after,
  .menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
    clear: both;
    position: absolute;
    display: block;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 15px;
    left: 7px;
    top: 2px;
    color: #e25b45;
  }

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
  }

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
    padding-top: 10px;
  }

  .menu0804 .landChoice .btnBox button {
    padding: 13px 26px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    color: #fff;
    font-weight: 700;
  }

  .menu0804 .landChoice .btnBox .saveBtn {
    background: #e25b45;
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