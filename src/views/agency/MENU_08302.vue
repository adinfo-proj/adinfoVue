<!--  랜딩페이지 제작 -->
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
          <p v-if="$store.state.lendchooseObj[index].fileNm == null || $store.state.lendchooseObj[index].fileNm == ''" style="text-align:  center; padding: 20px; background-color: #fff">
            이미지를 선택해주세요.
          </p>

          <img v-else :src="$store.state.lendchooseObj[index].fileNm" alt="">
        </div>
        <!-- 텍스트 -->
        <div v-if="lendchoose.tp == '02'" v-html="$store.state.lendchooseObj[index].descript">
        </div>
        <!-- 폼 -->
        <div class="formPrev" 
          v-if="lendchoose.tp == '03'" 
          v-bind="$store.state.lendchooseObj[index].formDesc" 
          :style="{borderColor:lendchoose.formDesc.lineColor, borderWidth:lendchoose.formDesc.borderLine} ">
          <!-- <div v-for="(inObj, index) in $store.state.inputObj" :key="index"> -->
          <div v-for="(inObj, index) in $store.state.lendchooseObj[index].formDesc.inputBox" :key="index">
            <!-- 텍스트 박스 -->
            <div v-if="inObj.values == 'textForm'" class="formInput">
              <span class="formInputName">{{inObj.names}}</span>
              <input type="text" :placeholder="inObj.names">
            </div>
            <!-- 라디오 버튼 -->
            <div v-if="inObj.values == 'radioForm'" class="formInput">
              <span class="formInputName">{{inObj.names}}</span>
              <span v-for="index in inObj.lab" :key="index">
                <input :id="index" :name="inObj.lab[index]" type="radio" >
                <label :for="index">{{index}}</label>
              </span>
            </div>
            <!-- 체크박스 -->
            <div v-if="inObj.values == 'checkForm'" class="formInput">
              <span class="formInputName">{{inObj.names}}</span>
              <span v-for="index in inObj.lab" :key="index">
                <input :id="index" type="checkbox" >
                <label :for="index">{{index}}</label>
              </span>
            </div>
            <!-- 셀렉트박스 -->
            <div v-if="inObj.values == 'selForm'" class="formInput">
              <span class="formInputName">{{inObj.names}}</span>
              <select>
                <option v-for="index in inObj.lab" :key="index" :value="index">
                  {{index}}
                </option>
              </select>  
            </div>
            <!-- 메모장 -->
            <div v-if="inObj.values == 'textArea'" class="textArea">
              <span class="formInputName">{{inObj.names}}</span>
              <textarea></textarea> 
            </div>
          </div>
          <div class="agreeBox">
            <input type="checkbox" name="agree01" id="agree01">
            <label for="agree01">{{formView.stipulationTitle}}</label>
            <span @click="PriModal()">[보러가기]</span>
          </div>
          <div class="centerBox">
            <button v-bind:style="{borderRadius:lendchoose.formDesc.btnShape, background:lendchoose.formDesc.btnColor, color:lendchoose.formDesc.textColor}">{{lendchoose.formDesc.btnNm}}</button>
          </div>
          <!-- 개인정보 동의 모달 팝업 내용 -->
          <div class="priBox">
            <h6>개인정보 취급방침</h6>
            <div v-html="formView.stipulationDesc"></div>
            <button @click="PriCancle()">확인</button>
          </div>
        </div>
      </div>
      <div class="bgColor">
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
              <select class="campDis" id="campDis" v-model="campaignSelect" @change="getCampaignSelect(campaignSelect);">
                <option value="0" disabled>캠페인을 선택하세요</option>
                <option v-for="(adIndex, index) in campaignListObj"
                  :key="index" 
                  :value="adIndex.caId"
                  >{{ adIndex.name }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              랜딩페이지 대체
            </th>
            <td>
              <input type="checkbox" id="landrep" v-model="landReplace" @change="Replace()">
              <label for="landrep"></label>
            </td>
          </tr>
          <tr>
            <th>
              페이지 명
            </th>
            <td v-if="landReplace == false">
              <input type="text" class="" v-model="landName">
            </td>
            <td v-if="landReplace == true">
              <select v-model="landPgId">
                <option value="0" disabled>선택</option>
                <option v-for="(landingData, index) in landingDataObj"
                  :key="index" 
                  :value="landingData.pgId"
                  >{{ landingData.name }}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              타이틀 명
            </th>
            <td>
              <input type="text" class="" v-model="titleName">
            </td>
          </tr>
          <!-- <tr>
            <th>
              메모
            </th>
            <td>
              <textarea v-model="memo" ></textarea>
            </td>
          </tr> -->
        </table>
      </div>
      <div class="landScr landScr01 landBox">
        <p>
          헤더 스크립트 삽입
          <input type="checkbox" id="landScrBtn01" v-model="scriptHeader" @change="ScriptOn(1)"
          :checked="scriptHeader">
          <label for="landScrBtn01"></label>
          <i class="icon-arrow on" @click="ScriptUp(1)"></i>
        </p>
        <div class="landScrChecked">
          <textarea v-model="addScr"></textarea>
        </div>
      </div>
      <div class="landScr landScr02 landBox">
        <p>
          폼 스크립트 삽입
          <input type="checkbox" id="landScrBtn02" v-model="scriptForm" @change="ScriptOn(2)"
          :checked="scriptForm">
          <label for="landScrBtn02"></label>
          <i class="icon-arrow on" @click="ScriptUp(2)"></i>
        </p>
        <div class="landScrChecked">
          <textarea v-model="innerAddScr"></textarea>
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
        <button class="firstBtn"  @click="ImgChooseBtn()" >이미지 추가</button>
        <!-- <button class="textBtn" @click="TextChooseBtn()">텍스트 추가</button> -->
        <button class="firstBtn" @click="FormChooseBtn()">폼 추가</button>
        <button class="iniBtn" @click="InitForm()">초기화</button>
        <button class="saveBtn" @click="PreviewSend()">랜딩 생성하기</button>
      </div>
      <div class="subBox">
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
          scriptHeader    : false
        , scriptForm      : false
        , campaignSelect  : '0'
        , campaignListObj : ''
        
        , addScr          : ''
        , innerAddScr     : ''

        , landName        : ''
        , landReplace     : false
        , titleName       : ''
        , memo            : ''
        , landPgId        : 0

        , landingDataObj  : '' 
        , campData: {
            gradeCd           : ''
          , mbId              : ''
          , mkId              : ''
          , adId              : ''
          , clntId            : ''
          , adPurpose         : ''
          , adTopKind         : ''
          , adMiddleKind      : ''
          , adSrtDt           : ''
          , adSrtTm           : ''
          , adName            : ''
          , adComment         : ''
          , adPrice           : ''
          , adMaketerPrice    : ''
          , smsYn             : ''
          , smsNo             : ''
          , status            : ''
          , stipulationTitle  : ''
          , stipulationDesc   : ''
        }
        , formView: {
            no   : ''
          , names: ''
          , types: ''
          , desc : ''
          , useYn: ''
        }
      }
    },
    methods: {
      //******************************************************************************
      // 랜딩페이지 초기화
      //******************************************************************************
      InitForm() {
        for(let i = 0 ; i < 10 ; i++) {
          this.$store.state.lendchooseObj.splice(0, 1);
        }
      },      
      //******************************************************************************
      // Open Event
      //******************************************************************************
      getCampaignSelect(index) { // 캠페인 분류(대분류)
        axios.get("http://api.adinfo.co.kr:30000/GetCampInfo",
        {
          params: {
              mbId   : this.$store.state.mbId
						, adId   : this.$store.state.adId
            , mkId   : this.$store.state.mkId
            , caId   : this.campaignSelect
            //, caId   : index
          }
        })
        .then(response => {
          if(response.data[0].status == true) {
            this.campData = response.data[1];
            this.formView = response.data[2];

            for(let i = 0 ; i < 10; i++) {
              var arrS = [];

              
              switch(i) {
                case 0 : if(this.formView.type01 == '02' || 
                            this.formView.type01 == '03' || 
                            this.formView.type01 == '04')
                            {
                              arrS =  this.formView.page01.split(",")
                              this.formView.page01 = arrS

                            }
                         break;
                case 1 : if(this.formView.type02 == '02' || 
                            this.formView.type02 == '03' || 
                            this.formView.type02 == '04')
                            {
                              arrS =  this.formView.page02.split(",")
                              this.formView.page02 = arrS

                            }
                         break;
                case 2 : if(this.formView.type03 == '02' || 
                            this.formView.type03 == '03' || 
                            this.formView.type03 == '04')
                            {
                              arrS =  this.formView.page03.split(",")
                              this.formView.page03 = arrS

                            }
                         break;
                case 3 : if(this.formView.type04 == '02' || 
                            this.formView.type04 == '03' || 
                            this.formView.type04 == '04')
                            {
                              arrS =  this.formView.page04.split(",")
                              this.formView.page04 = arrS

                            }
                         break;
                case 4 : if(this.formView.type05 == '02' || 
                            this.formView.type05 == '03' || 
                            this.formView.type05 == '04')
                            {
                              arrS =  this.formView.page05.split(",")
                              this.formView.page05 = arrS

                            }
                         break;
                case 5 : if(this.formView.type06 == '02' || 
                            this.formView.type06 == '03' || 
                            this.formView.type06 == '04')
                            {
                              arrS =  this.formView.page06.split(",")
                              this.formView.page06 = arrS

                            }
                         break;
                case 6 : if(this.formView.type07 == '02' || 
                            this.formView.type07 == '03' || 
                            this.formView.type07 == '04')
                            {
                              arrS =  this.formView.page07.split(",")
                              this.formView.page07 = arrS

                            }
                         break;
                case 7 : if(this.formView.type08 == '02' || 
                            this.formView.type08 == '03' || 
                            this.formView.type08 == '04')
                            {
                              arrS =  this.formView.page08.split(",")
                              this.formView.page08 = arrS

                            }
                         break;
                case 8 : if(this.formView.type09 == '02' || 
                            this.formView.type09 == '03' || 
                            this.formView.type09 == '04')
                            {
                              arrS =  this.formView.page09.split(",")
                              this.formView.page09 = arrS

                            }
                         break;
                case 9 : if(this.formView.type10 == '02' || 
                            this.formView.type10 == '03' || 
                            this.formView.type10 == '04')
                            {
                              arrS =  this.formView.page10.split(",")
                              this.formView.page10 = arrS

                            }
                         break;
              }
            }
          }
          this.campaignSelect =index;
          this.ReplacePage();
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 미리보기를 서버에 전달한다.
      //******************************************************************************
      PreviewSend() {
        if(this.landName == "" || this.landName == null) {
          alert("페이지명을 입력해주세요.");
          return;
        }
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
        let formData = [];
        this.$store.state.lendchooseObj.forEach(element => {
          if( element.tp == "03") {
            let forms = {
                btnShape  : element.formDesc.btnShape
              , btnColor  : element.formDesc.btnColor
              , btnNm     : element.formDesc.btnNm
              , inputBox  : element.formDesc.inputBox
              , priCon    : element.formDesc.priCon
              , priNm     : element.formDesc.priNm
              , lineColor : element.formDesc.lineColor
              , textColor : element.formDesc.textColor
              , borderLine: element.formDesc.borderLine
            };
            formData.push(forms);
          }
        });
        let scriptAdd = '';
        if(this.scriptInput == false) {
          scriptAdd = this.scriptComment;
        }
        let sAddScr = '';
        let sInnerAddScr = '';
        if( this.scriptHeader == true) {
          sAddScr = this.addScr;
        }
        if( this.scriptForm == true) {
          sInnerAddScr = this.innerAddScr;
        }
        let data = {
            mbId        : this.$store.state.mbId
          , adId        : this.$store.state.adId
          , caId        : this.campaignSelect
          , mkId        : this.$store.state.adId
          , pgId        : this.landPgId
          , clntId      : this.$store.state.clntId
          , scriptHeader : sAddScr
          , scriptForm   : sInnerAddScr
          , processMode : 'C'       // (C:신규, M:수정, R:삭제)
          , formCount   : this.$store.state.lendchooseObj.length
          , campanyNm   : this.company
          , landingNm   : this.landName
          , campaignId  : this.campaignSelect
          , landReplace : this.landReplace
          , formType    : formType
          , scriptAdd   : scriptAdd
          , textData    : textData
          , formData    : formData
          , stipulationTitle : this.formView.stipulationTitle
          , stipulationDesc  : this.formView.stipulationDesc
          , titleName   : this.titleName
          , memo        : this.memo
        };

        const frm = new FormData();
        for(let i = 0 ; i < this.$store.state.lendchooseObj.length ; i++) {
          if(this.$store.state.lendchooseObj[i].tp == '01') {
            if(this.$store.state.lendchooseObj[i].fileNm == null || this.$store.state.lendchooseObj[i].fileNm == '') {
              alert("이미지 등록 항목에 파일등록이 되어있지 않습니다.");
              return;
            }

            frm.append("upFile" , this.$store.state.lendchooseObj[i].fileNmOrg);
          }
          if(this.$store.state.lendchooseObj[i].tp == '03') {
            if(this.$store.state.lendchooseObj[i].formDesc.borderLine == 'undefinedpx') {
              alert("추가된 폼항목에서 '폼 적용하기'를 누르지 않으셨습니다.");
              return;
            }
          }
        }
        frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));
        axios.post("http://api.adinfo.co.kr:30000/newlandingpage", frm, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          alert(response.data.message);
          if( response.data.status == true) {
            window.open(response.data.landingUrl);
            this.InitForm();
            this.$router.push({ path : "MENU_08301" });
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
          this.campaignListObj = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 캠페인 대체 여부 변경 시 
      //******************************************************************************
      Replace(){
        this.landName = '';
        
        if( this.landReplace == true){
          this.landName = '0';
        }
      },
      //******************************************************************************
      // 캠페인 대체 시 
      //******************************************************************************
      ReplacePage(){
        axios.get("http://api.adinfo.co.kr:30000/GetLandingListForMbAdCaCode",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , mkId: this.$store.state.mbId
            , caId: this.campaignSelect
            , useTp: '00'
          }
        })
        .then(response => {
          this.landingDataObj = response.data;
        })
        .catch(error => {
          console.log(error);
        })
      },
      //******************************************************************************
      // 스크립트 추가 시 텍스트박스 보이는 함수
      //******************************************************************************
      ScriptOn(num) {
        if(num == 1){
          if(this.scriptHeader == true) {
            $(".landScr01 .landScrChecked").slideDown(300);
            $(".landScr01 .icon-arrow").removeClass("on");
          } else {
            $(".landScr01 .landScrChecked").slideUp(300);
            $(".landScr01 .icon-arrow").addClass("on");
          }
        }
        else if(num == 2){
          if(this.scriptForm == true) {
            $(".landScr02 .landScrChecked").slideDown(300);
            $(".landScr02 .icon-arrow").removeClass("on");
          } else {
            $(".landScr02 .landScrChecked").slideUp(300);
            $(".landScr02 .icon-arrow").addClass("on");
          }
        }
      },
      //******************************************************************************
      // 스크립트 접는 함수
      //******************************************************************************
      ScriptUp(num) {
        if(num == 1){
          if(this.scriptHeader == false) {
            return;
          }
          $(".landScr01 .landScrChecked").slideToggle(300);
          $(".landScr01 .icon-arrow").toggleClass("on");
        }else if(num == 2) {
          if(this.scriptForm == false) {
            return;
          }
          $(".landScr02 .landScrChecked").slideToggle(300);
          $(".landScr02 .icon-arrow").toggleClass("on");
        }
      },
      //******************************************************************************
      // 이미지 추가 함수
      //******************************************************************************
      ImgChooseBtn() {
        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 텍스트, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }
        if(this.campData.caId == null || this.campData.caId == '') {
          alert("캠페인명을 선택해주세요.");
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
      //******************************************************************************
      // 텍스트 추가 함수
      //******************************************************************************
      TextChooseBtn() {
        if(this.$store.state.lendchooseObj.length > 9) {
          alert("이미지, 폼은 10개 까지만 등록 가능합니다.")
          return;
        }
        let plusObj = {
            tp: ''
          , fileNm: ''
          , descript: ''
          , formDesc: ''
          , landImgNm: ''
        };
        plusObj.tp = '02';
        this.$store.state.lendchooseObj.push(plusObj);
      },
      //******************************************************************************
      // 폼 추가 함수
      //******************************************************************************
      FormChooseBtn() {
        if(this.campData.caId == null || this.campData.caId == '') {
          alert("캠페인명을 선택해주세요.");
          return;
        }
        let inputBoxObj = [];
        for(let i = 0 ; i < 10; i++) {
          let inputBox = {
              value01 : ''
            , values  : ''
            , names   : ''
            , lab     : ''
          };
          switch(i) {
            case 0 : 
              if     (this.formView.type01 == '00') {
                continue;
              }
              else if(this.formView.type01 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names   = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else if(this.formView.type01 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value01;
                inputBox.lab     = this.formView.page01;
              }
              break;
            case 1 : 
              if     (this.formView.type02 == '00') {
                continue;
              }
              else if(this.formView.type02 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value02;
                inputBox.lab  = this.formView.page02;
              }
              else if(this.formView.type02 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value02;
                inputBox.lab  = this.formView.page02;
              }
              else if(this.formView.type02 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value02;
                inputBox.lab  = this.formView.page02;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value02;
                inputBox.lab  = this.formView.page02;
              }
              break;
            case 2 : 
              if     (this.formView.type03 == '00') {
                continue;
              }
              else if(this.formView.type03 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value03;
                inputBox.lab  = this.formView.page03;
              }
              else if(this.formView.type03 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value03;
                inputBox.lab  = this.formView.page03;
              }
              else if(this.formView.type03 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value03;
                inputBox.lab  = this.formView.page03;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value03;
                inputBox.lab  = this.formView.page03;
              }
              break;
            case 3 : 
              if     (this.formView.type04 == '00') {
                continue;
              }
              else if(this.formView.type04 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value04;
                inputBox.lab  = this.formView.page04;
              }
              else if(this.formView.type04 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value04;
                inputBox.lab  = this.formView.page04;
              }
              else if(this.formView.type04 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value04;
                inputBox.lab  = this.formView.page04;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value04;
                inputBox.lab  = this.formView.page04;
              }
              break;
            case 4 : 
              if     (this.formView.type05 == '00') {
                continue;
              }
              else if(this.formView.type05 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value05;
                inputBox.lab  = this.formView.page05;
              }
              else if(this.formView.type05 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value05;
                inputBox.lab  = this.formView.page05;
              }
              else if(this.formView.type05 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value05;
                inputBox.lab  = this.formView.page05;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value05;
                inputBox.lab  = this.formView.page05;
              }
              break;
            case 5 : 
              if     (this.formView.type06 == '00') {
                continue;
              }
              else if(this.formView.type06 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value06;
                inputBox.lab  = this.formView.page06;
              }
              else if(this.formView.type06 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value06;
                inputBox.lab  = this.formView.page06;
              }
              else if(this.formView.type06 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value06;
                inputBox.lab  = this.formView.page06;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value06;
                inputBox.lab  = this.formView.page06;
              }
              break;
            case 6 : 
              if     (this.formView.type07 == '00') {
                continue;
              }
              else if(this.formView.type07 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value07;
                inputBox.lab  = this.formView.page07;
              }
              else if(this.formView.type07 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value07;
                inputBox.lab  = this.formView.page07;
              }
              else if(this.formView.type07 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value07;
                inputBox.lab  = this.formView.page07;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value07;
                inputBox.lab  = this.formView.page07;
              }
              break;
            case 7 : 
              if     (this.formView.type08 == '00') {
                continue;
              }
              else if(this.formView.type08 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value08;
                inputBox.lab  = this.formView.page08;
              }
              else if(this.formView.type08 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value08;
                inputBox.lab  = this.formView.page08;
              }
              else if(this.formView.type08 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value08;
                inputBox.lab  = this.formView.page08;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value08;
                inputBox.lab  = this.formView.page08;
              }
              break;
            case 8 : 
              if     (this.formView.type09 == '00') {
                continue;
              }
              else if(this.formView.type09 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value09;
                inputBox.lab  = this.formView.page09;
              }
              else if(this.formView.type09 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value09;
                inputBox.lab  = this.formView.page09;
              }
              else if(this.formView.type09 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value09;
                inputBox.lab  = this.formView.page09;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value09;
                inputBox.lab  = this.formView.page09;
              }
              break;
            case 9 : 
              if     (this.formView.type10 == '00') {
                continue;
              }
              else if(this.formView.type10 == '01') {
                inputBox.values  = 'textForm';
                inputBox.names = this.formView.value10;
                inputBox.lab  = this.formView.page10;
              }
              else if(this.formView.type10 == '02') {
                inputBox.values  = 'radioForm';
                inputBox.names = this.formView.value10;
                inputBox.lab  = this.formView.page10;
              }
              else if(this.formView.type10 == '03') {
                inputBox.values  = 'checkForm';
                inputBox.names = this.formView.value10;
                inputBox.lab  = this.formView.page10;
              }
              else {
                inputBox.values  = 'selForm';
                inputBox.names = this.formView.value10;
                inputBox.lab  = this.formView.page10;
              }
              break;
          }
          inputBoxObj.push(inputBox);
        }
        let plusObj = {
            tp        : '03'
          , fileNm    : ''
          , descript  : ''
          , landImgNm : ''
          , formDesc: {
              inputBox  : inputBoxObj
            , priNm     : this.agreeTitle
            , priCon    : this.agreeCon
            , btnNm     : this.btnNm
            , btnShape  : this.btnShape
            , textColor : this.textColor
            , btnColor  : this.btnColor
            , borderLine: this.borderLine + 'px'
            , lineColor : this.lineColor
          }
        };
        this.$store.state.lendchooseObj.push(plusObj);
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
    // mounted: function() {
    //   this.$watch('this.$store.state.inputObj', function(newVal, oldVal) {
    //     console.log("this?");
    //     console.log(newVal);
    //     console.log(oldVal);
    //   })
    // },
    created() {
      this.InitForm();
      this.$store.state.headerTopTitle = "랜딩페이지";
      this.$store.state.headerMidTitle = "랜딩페이지 제작";
      this.getCampaignAllList();
    },
  }
</script>

<style scoped>

  @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

  .nanumgothic * {
    font-family: 'Nanum Gothic', sans-serif;
  }

  @font-face {
    font-family: 'TmonMonsori';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }


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
    display: block;
  }
  .menu0804 .landPrev .noLength {
    height: 400px;
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
    background: #fff;
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
  .menu0804 .landPrev .formPrev .formInputName {
    display: block;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    width: 20%;
    height: 100%;
    margin: 10px 0;
    padding-left: 10px;
    position: relative;
  }
  .menu0804 .landPrev .formPrev .formInputName:before {
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
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 15px;
    left: 6.5px;
    top: 2px;
    color: #4b4b4b;
  }
  .menu0804 .landPrev .formPrev .agreeBox label {
    margin: 10px 0 0 0;
    padding-right: 0;
  }
 .menu0804 .landPrev .formPrev .agreeBox span{
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
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
    padding: 5px 20px 10px;
    width: 100%;
  }
  .menu0804 .landChoice .basicInfo table td {
    text-align: left;
  }
  .menu0804 .landChoice .basicInfo table th {
    height: 36px;
    width: 100px;
    letter-spacing: -0.36px;
    padding: 10.5px 0;
    vertical-align: top;
    color: #222;
    text-align: left;
  }
  .menu0804 .landChoice .basicInfo table td input,
  .menu0804 .landChoice .basicInfo table td select,
  .menu0804 .landChoice .basicInfo table td textarea {
    border: 1px solid #e5e5e5;
    padding: 7px 10px;
    margin: 2px 0;
    width: 100%;
    height: 32px;
  }
  .menu0804 .landChoice .basicInfo table td textarea {
    height: 200px;
    resize: none;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] {
    display: none;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] + label{
    display: inline-block;
    width: 45px;
    height: 20px;
    border-radius: 25px;
    background: #ebebeb;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] + label::after {
    clear: both;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #fff;
    left: 2px;
    top: 2px;
    content: "";
    transition: 0.3s;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"] + label::before {
    clear: both;
    position: absolute;
    color: #a5a5a5;
    left: 21px;
    top: 5px;
    content: "OFF";
    font-size: 10px;
    font-weight: 700;
    /* font-size: 16px; */
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"]:checked + label {
      background: #e25b45;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"]:checked + label::before {
    left: 6px;
    content: "ON";
    color: #fff;
  }
  .menu0804 .landChoice .basicInfo table td input[type="checkbox"]:checked + label::after {
    left: 28px;
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
    /* display: flex; */
    text-align: center;
    /* justify-content: space-between; */
    /* padding: 10px 66px 0 66px; */
  }
  .menu0804 .landChoice .btnBox button {
    /* padding: 13px 26px; */
    min-width: 100px;
    height: 40px;
    font-size: 16px;
    border-radius: 40px;
    border: none;
    font-weight: 700;
  }


  .menu0804 .landChoice .btnBox .firstBtn {
    border: 1px solid #e25b45;
    color: #e25b45;
    background: #fff;
    margin-right: 10px;
  }

  .menu0804 .landChoice .btnBox .iniBtn {
    background: #262626;
    margin-right: 10px;
    color: #fff;
  }
  .menu0804 .landChoice .btnBox .saveBtn {
    float: right;
    width: 183px;
    height: 100px;
    font-size: 16px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-weight: 700;
    background: #e25b45;
  }
  /* 랜딩페이지 저장 버튼 */

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