<template>
  <div class="container"> 
    <div class="tableBox">
      <table>
				<tr>
					<th>
						캠페인 목적
					</th>
					<td>
						<select class="camAim" v-model="campainData.campaignKind">
							<option v-for="(adIndex, index) in adPurposeObj"
								:key="index" 
								:value="adIndex.code"
								>{{ adIndex.codeNm }}
							</option>
						</select>
					</td>
					<th>
						캠페인 분류
					</th>
					<td>
						<select class="camParcel01" v-model="campainData.topKind" @change="firstComboChg(adTopKind, false);">
							<option v-for="(adIndex, index) in adTopKindObj"
								:key="index" 
								:value="adIndex.code"
								>{{ adIndex.codeNm }}
							</option>
						</select>
							<select class="camParcel02" v-model="campainData.middleKind">2차 분류를 선택
							<option v-for="(adIndex, index) in adMiddleKindObj"
								:key="index"
								:value="adIndex.subCode"
								>{{ adIndex.codeDescr }}
							</option>
						</select>
					</td>
				</tr>
        <tr>
          <th><span class="necItem">* </span>캠페인 명</th>
          <td><input type="text" class="camName" v-model="campainData.name" autofocus></td>
          <th><span class="necItem">* </span>광고주 명</th>
          <td><input type="text" class="camName" v-model="campainData.adName"></td>
				</tr>
        <tr>
          <th>캠페인 상태</th>
          <td colspan="3">
            <div
              v-for="(statusCode, index) in statusCodeObj"
              :key="index"
            > 
              <div v-if=" statusCode.code == '00' ">
                <input type="hidden">
              </div>
              <div class="leftBox" v-else @click="StatusValue(index)">
                <input 
                  v-if="statusCode.code == campainData.status" 
                  type="radio"
                  :name="statusCode.tpNm"
                  :id="statusCode.code"
                  :value="statusCode.code"
                  v-model="campainData.status"
                  checked
                  >
                <input 
                  v-else  
                  type="radio"
                  :name="statusCode.tpNm"
                  :id="statusCode.code"
                  :value="statusCode.code"
                  v-model="campainData.status"
                  >
                <label :for="statusCode.code">{{statusCode.codeNm}}</label>
              </div>
            </div>
          </td>
        </tr>
        <tr class="notice">
          <th><span class="necItem">* </span>캠페인 내용</th>
          <td colspan="3">
            <ckeditor id="camContents" v-model="campainData.comment" :config="editorConfig"></ckeditor>
          </td>
          <!-- cols="30" rows="10" -->
        </tr>
        <tr>
          <th><span class="necItem"> *</span> 광고주 단가</th>
          <td><input type="text" v-model="adPrice"></td>
          <th>마케터 단가</th>
          <td><input type="text" v-model="adMaketerPrice"></td>
        </tr>
        <tr>
          <th>SMS 수신 여부</th>
          <td colspan="3">
            DB접수 시 SMS를 수신합니다. 
            <input type="radio" name="sms" id="smsY" v-model="smsYn" value="Y"><label for="smsY">예</label>
            <input type="tel" id="phoneNum" placeholder="연락처를 입력해주세요." maxlength="11" v-model="smsNo">
            <input type="radio" name="sms" id="smsN" v-model="smsYn" value="N" checked><label for="smsN">아니오</label> 
          </td>
        </tr>
      </table>
    </div>
    <div class="formBox">
      <div class="tableB">
        <h6>폼 설정하기</h6>
        <table>
          <thead>
            <tr>
              <th class="formNum" >번호</th>
              <th class="formNm"  >항목</th>
              <th class="formType">유형</th>
              <th class="formCon" >내용</th>
              <th class="formCh"  >필수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(formIn, index) in formObj" :key="index">
              <td class="formNum">{{formIn.no}}</td>
              <!-- 항목 필터  -->
              <td v-if="formIn.no == 1" class="formNm">
                <select v-model="formIn.value">
                  <option value="이름">이름</option>
                  <option value="성함">성함</option>
                </select>
              </td>
              <td v-else-if="formIn.no == 2" class="formNm">
                <select v-model="formIn.value">
                  <option value="연락처">연락처</option>
                  <option value="전화번호">전화번호</option>
                  <option value="휴대폰번호">휴대폰번호</option>
                </select>
              </td>
              <td v-else class="formNm">
                <input type="text" v-model="formIn.value">
              </td>
              <!-- 항목 필터  -->

              <!-- 유형 필터  -->
              <td v-if="formIn.no == 1 || formIn.no == 2" class="formType">
                <select v-model="formIn.types" disabled>
                  <option value="00">선택</option>
                  <option value="01">입력박스</option>
                  <option value="02">라디오박스</option>
                  <option value="03">체크박스  </option>
                  <option value="04">셀렉트박스</option>
                </select>
              </td>
              <td v-else class="formType">
                <select v-model="formIn.types">
                  <option value="00">선택</option>
                  <option value="01">입력박스</option>
                  <option value="02">라디오박스</option>
                  <option value="03">체크박스  </option>
                  <option value="04">셀렉트박스</option>
                </select>
              </td>
              <!-- 유형 필터  -->
              <td class="formCon">
                <input type="text"  v-model="formIn.desc">
              </td>

              <!-- 필수박스 필터  -->
              <td v-if="formIn.no == 1 || formIn.no == 2" class="formCh">
                <input type="checkbox" :checked="formIn.reqYn" :id="index" disabled>
                <label :for="index" ></label>
              </td>
              <td v-else class="formCh">
                <input type="checkbox" :checked="formIn.reqYn" :id="index">
                <label :for="index"></label>
              </td>
              <!-- 필수박스 필터  -->
            </tr>
          </tbody>
        </table>
      </div>

      <div class="agreeBox tableB">
        <h6>약관 설정하기</h6>
        <div class="agreeSub bot">
          <span>동의항목 명</span>
        <input type="text" id="agreeName" placeholder="동의 항목 제목을 입력해주세요 예) 개인정보 제공 동의"  autocomplete='off' v-model="agreeConNm">
        </div>
        <div class="agreeSub">
          <ckeditor id="agreeTextBox" v-model="agreeCon" :config="editorConfig2"></ckeditor>
          <button @click="PrivacyText()">개인 정보 제공 동의 불러오기</button>
        </div>
      </div>
    </div>
    <div class="submitBtn">
      <button @click="updateCampaign()"> 수정하기 </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import $ from 'jquery';
export default {
  // props: {
  //   caId: String
  // },
  data() {
    return {
      editorConfig: { 
        toolbarGroups: [ 
          { name: 'styles', groups: [ 'styles' ] }, 
          { name: 'colors', groups: [ 'colors' ] }, 
          { name: 'document', groups: [ 'mode', 'document', 'doctools' ] }, 
          { name: 'clipboard', groups: [ 'clipboard', 'undo' ] }, 
          { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }, 
          { name: 'forms', groups: [ 'forms' ] }, 
          { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] }, 
          { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] }, 
          { name: 'links', groups: [ 'links' ] }, 
          { name: 'insert', groups: [ 'insert' ] }, 
          { name: 'others', groups: [ 'others' ] }, 
          { name: 'about', groups: [ 'about' ] }, 
          { name: 'tools', groups: [ 'tools' ] } 
          ] 
        , height: '300px' 
        , language: 'ko' 
        , resize_enabled: false 
        , autoParagraph: false 
        , allowedContent: true 
        , removeButtons: 'Source,Save,NewPage,ExportPdf,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,CopyFormatting,RemoveFormat,CreateDiv,Language,BidiRtl,BidiLtr,Anchor,Image,Smiley,SpecialChar,PageBreak,Iframe,Maximize,About,ShowBlocks,Styles,Format' 
      }
      , editorConfig2: { 
        toolbarGroups: [ 
          // { name: 'styles', groups: [ 'styles' ] }, 
          { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] }
          ] 
        , height: '330px' 
        , language: 'ko' 
        , resize_enabled: false 
        , autoParagraph: false 
        , allowedContent: true 
        , removeButtons: 'Source,Save,NewPage,ExportPdf,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,CopyFormatting,RemoveFormat,CreateDiv,Language,BidiRtl,BidiLtr,Anchor,Image,Smiley,SpecialChar,PageBreak,Iframe,Maximize,About,ShowBlocks,Styles,Format' 
      }
			, adPurpose: ''           // 캠페인 목적
      , adPurposeObj: ''        // 캠페인 목적 객체
      , adTopKind: ''           // 캠페인 1차 분류 
      , adMiddleKind: ''        // 캠페인 2차 분류
      , adTopKindObj: ''        // 캠페인 1차 분류 객체
      , adMiddleKindObj: ''     // 캠페인 2차 분류 객체
      , statusCode: ''          // 캠페인 상태
      , statusCodeObj : ''      // 캠페인 상태 객체
      , statusCodeValue : ''    // 캠페인 상태 값
      , adName: ''              // 캠페인 명
      , adComment: ''           // 캠페인 내용
      , smsYn: ''               // DB 접수 시 SMS 수신 여부 Y
      , smsNo: ''               // DB 접수 시 SMS 수신 여부
      , adPrice: ''             // 광고주 단가
			, adMaketerPrice: ''      // 마케터 단가 단가
      , campainData: ''         //
      , company: ''

      //-----------------------------------
      // 폼 설정하기 / 약관설정하기 변수
      //-----------------------------------
      , formObj     : []
      , agreeCon    : ''
      , agreeConNm  : ''
    }
  },
  methods: {
    //******************************************************************************
    // 선택된 데이터 불러오기
    //******************************************************************************
    getCommonByCampData() {
      axios.get("http://api.adinfo.co.kr:30000/GetCampInfo",
      {
        params: {
            mbId: this.$store.state.mbId
          , adId: this.$store.state.adId
          , mkId: this.$store.state.mbId
          , caId: this.$route.params.caId
        }
      })
      .then(response => {
        this.campainData = response.data[1];

        for(let i = 0 ; i < 10 ; i++) {
          let formView = {
              no    : 0
            , types : ''
            , value : ''
            , desc  : ''
            , reqYn : false
          };

          if(i == 0) {
            formView.no    = i+1;
            formView.types = response.data[2].type01;
            formView.value = response.data[2].value01;
            formView.desc  = response.data[2].page01;
            formView.reqYn = true;
          }
          else if(i == 1) {
            formView.no    = i+1;
            formView.types = response.data[2].type02;
            formView.value = response.data[2].value02;
            formView.desc  = response.data[2].page02;
            formView.reqYn = true;
          }
          else if(i == 2) {
            formView.no    = i+1;
            formView.types = response.data[2].type03;
            formView.value = response.data[2].value03;
            formView.desc  = response.data[2].page03;
            formView.reqYn = false;
          }
          else if(i == 3) {
            formView.no    = i+1;
            formView.types = response.data[2].type04;
            formView.value = response.data[2].value04;
            formView.desc  = response.data[2].page04;
            formView.reqYn = false;
          }
          else if(i == 4) {
            formView.no    = i+1;
            formView.types = response.data[2].type05;
            formView.value = response.data[2].value05;
            formView.desc  = response.data[2].page05;
            formView.reqYn = false;
          }
          else if(i == 5) {
            formView.no    = i+1;
            formView.types = response.data[2].type06;
            formView.value = response.data[2].value06;
            formView.desc  = response.data[2].page06;
            formView.reqYn = false;
          }
          else if(i == 6) {
            formView.no    = i+1;
            formView.types = response.data[2].type07;
            formView.value = response.data[2].value07;
            formView.desc  = response.data[2].page07;
            formView.reqYn = false;
          }
          else if(i == 7) {
            formView.no    = i+1;
            formView.types = response.data[2].type08;
            formView.value = response.data[2].value08;
            formView.desc  = response.data[2].page08;
            formView.reqYn = false;
          }
          else if(i == 8) {
            formView.no    = i+1;
            formView.types = response.data[2].type09;
            formView.value = response.data[2].value09;
            formView.desc  = response.data[2].page09;
            formView.reqYn = false;
          }
          else {
            formView.no    = i+1;
            formView.types = response.data[2].type10;
            formView.value = response.data[2].value10;
            formView.desc  = response.data[2].page10;
            formView.reqYn = false;
          }

          this.formObj.push(formView);
        }

        this.adPurpose       = this.campainData.campaignKind;
        this.adTopKind       = this.campainData.topKind;
        this.smsYn           = this.campainData.smsYn;
        this.statusCodeValue = this.campainData.status;
        this.adPrice         = this.campainData.price.toString();
        this.adMaketerPrice  = this.campainData.marketerPrice.toString();

        this.agreeConNm      = response.data[2].stipulationTitle;
        this.agreeCon        = response.data[2].stipulationDesc;

        this.firstComboChg(this.adTopKind, true);
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 캠페인 목적
    //******************************************************************************
    getCommonByTp0005 () { // 캠페인 목적
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp",
      {
        params: {
          tp: '0005'
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adPurpose    = response.data[0].code;
          this.adPurposeObj = response.data;
        }
      })
      .catch(error => {
        console.log(error);
      })      
    },
    //******************************************************************************
    // 캠페인 분류(대분류)
    //******************************************************************************
    getCommonByTp(code) { // 캠페인 분류(대분류)
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      {
        params: {
          tp: code
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
    //******************************************************************************
    // 캠페인 분류(중분류)
    //******************************************************************************
    firstComboChg(code, status) { // 캼패인 분류(소분류)
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonCodeByCode", 
      {
        params: {
          tp: '0001',
          code: code
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adMiddleKindObj = response.data;
          if( status == false) {
            this.adMiddleKind = response.data[0].subCode;
          }
          else {
            this.adMiddleKind = this.campainData.middleKind;
          }
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 캠페인 상태
    //******************************************************************************
    getCommonByTp0009() {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      {
        params: {
          tp: '0009'
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.statusCode = response.data[0].code;
          this.statusCodeObj = response.data;
        }
      })
      .catch(error => { 
        console.log(error);
      })
    },
    StatusValue(index) {
     this.statusCodeValue = this.statusCodeObj[index].code 
    },
    //******************************************************************************
    // 개인정보제공 동의 불러오기
    //******************************************************************************
    PrivacyText() {
      this.agreeCon = "<b>[개인정보 수집 및 이용안내]</b><br>"
      this.agreeCon += " 개인정보 수집주체 : " 
      this.agreeCon += this.campainData.adName
      this.agreeCon += "<br>"
      this.agreeCon += " 개인정보 수집항목 : 성명, 휴대폰, 이메일, IP등을 포함한 고객이 입력한 정보<br>"
      this.agreeCon += " 개인정보 수집 이용목적 : 전화, SMS를 통한 상품안내 및 상담<br>"
      this.agreeCon += " 개인정보보유/이용기간 : 수집일로부터 1년(고객동의 철회시 지체없이 파기)<br><br>"
      this.agreeCon += "<b>[개인정보의 취급 위탁]</b><br>"
      this.agreeCon += " 당사는 서비스 이행 및 향상을 위해 개인정보 취급업무를 전문업체에 위탁 운영하고 있습니다."
      this.agreeCon += " 또한 개인정보를 안전하게 처리하기 위하여 필요한 사항등을 명확히 규정하고 있으며,"
      this.agreeCon += " 당해 계약 내용을 서면 또는 전자적으로 보관하고 있습니다.<br>"
      this.agreeCon += " 위탁업체 및 위탁업무내용<br>"
      this.agreeCon += " " 
      this.agreeCon += this.campainData.adName
      this.agreeCon += " : 고객DB, 개인정보 수집, 보관/휴대폰 문자발송/민원처리<br>`"
    },














    //****************************************************************************** 
    // 캠페인 상태 수정하기 
    //****************************************************************************** 
     updateCampaign() {

      
      
      //campainData.status
      this.campainData.price            = this.adPrice;
      this.campainData.marketerPrice    = this.adMaketerPrice;
      this.campainData.stipulationTitle = this.agreeConNm;
      this.campainData.stipulationDesc  = this.agreeCon;
      this.campainData.smsNo            = this.smsNo;
      this.campainData.smsYn            = this.smsYn;


      const frm = new FormData();
      frm.append("dataObj", new Blob([JSON.stringify(this.campainData)], {type: "application/json"}));
      frm.append("formObj", new Blob([JSON.stringify(this.formObj    )], {type: "application/json"}));

      axios.post("http://api.adinfo.co.kr:30000/upcampaign", frm, {
        headers: {'Content-Type': 'multipart/form-data'}
      })
      .then(response => {
        alert(response.data.message);
        if( response.data.result == true) {
          this.$router.push({ path : "MENU_08101" })
        } 
      }) 
      .catch(error => { 
        console.log(error);
      })
    },
  },
  watch: {
    //******************************************************************************
    // 입력 값에 정규표현식 숫자만 및 "," 표시
    //******************************************************************************
    // 캠페인 단가
    adPrice : function() {
      return this.adPrice = this.adPrice.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    // 캠페인 프로모션 단가
    adMaketerPrice : function() {
      return this.adMaketerPrice = this.adMaketerPrice.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  created() {
    this.$store.state.headerTopTitle = "캠페인";
    this.$store.state.headerMidTitle = "캠페인 등록";
    this.getCommonByTp("0000");
    this.getCommonByTp0005();
    this.getCommonByTp0009();
    this.getCommonByCampData();
  }
}
</script>

<style scoped>
  button {
    cursor: pointer;
  }
  /* 입력값 */
  .tableBox {
    border: solid 1px #e5e5e5; 
    border-radius: 10px;
		margin-bottom: 20px;
  }
  .container .tableBox table {
    width: 100%;
    border-collapse: collapse;
    border: solid 1px #e5e5e5; 
    width: 100%;
    background: #fff;
    border-radius: 10px;
    border-style: hidden;
  }
  .container .tableBox td {
    height: 46px;
    padding: 8px 7px;
		width: 40%;
  }
  .container .tableBox th,
  .container .tableBox td {
    border: 1px solid #e5e5e5;
  }
  .container .tableBox th{
    font-weight: 700;
    width: 150px;
    padding: 17px 10px 0 20px;
    vertical-align: top;
    text-align: left;
    color: #222;
  }
	.container .tableBox td select {
		padding: 9px 15px ;
		width: 45%;
		border: solid 1px #e5e5e5;
    border-radius: 2px;
		margin-right: 2%;
	}
  .container .tableBox .necItem {
    color: rgb(228, 120, 120);
    transform: translateY(-2px);
    font-size: 13px;
  }
   .container .tableBox .leftBox {
     float: left;
   }
  .container .tableBox input[type="text"] {
    width: 100%;
    height: 100%;
    padding: 5px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }
  .container .tableBox input[type="tel"]#phoneNum{
    width: 0px;
    transition: 0.5s;
    opacity: 0;
    padding: 0 10px;
  }
	.container .tableBox #smsY:checked  ~ #phoneNum {
    width: 200px;
    margin: 0 10px;
    opacity: 1;
  }
  .container .tableBox input[type="text"]#cancleCondEtc {
    width: 150px;
    height: 100%;
    margin: 0 5px;
    padding: 0 10px;
  }
  .container .tableBox input[type="radio"] {
    display: none;
  }
  .container .tableBox input[type="radio"] + label {
    position: relative;
    padding: 0 5px 0 23px;
  }
  .container .tableBox input[type="radio"] + label:before {
    clear: both;
    position: absolute;
    width: 11px;
    height: 11px;
    border: 1px solid #cbcbcb;
    background: #f6f6f6;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 2px;
  } 
  .container .tableBox input[type="radio"]:checked + label:after { 
    clear: both;
    position: absolute;
    display: block;
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 13px;
    left: 6px;
    top: 1px;
    color: #e25b45;
  }
  .container .submitBtn {
    text-align: center;
  }
    .container .formBox {
    display: flex;
    justify-content: space-between;
  }
  .container .formBox .tableB {
    width: 670px;
    background: #fff;
    border: 1px  solid #e5e5e5;
    border-radius: 10px;
  }
  .container .formBox .tableB h6 {
    padding: 15px 21px;
    font-size: 14px;
    border-bottom: 1px solid #e5e5e5;
  }
  .container .formBox .tableB table {
    width: 100%;
    border-collapse: collapse;
  }
  .container .formBox .tableB table thead {
    border-bottom: 1px solid #5c5c5c;
  }
  .container .formBox .tableB table th {
    padding: 9px 10px;
    font-size: 14px;
    background: #fafafa;
    position: relative;
  }
  .container .formBox .tableB table th::after {
		position: absolute;
		content: "";
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	.container .formBox .tableB table th:last-child::after {
		display: none;
	}
  .container .formBox .tableB table td {
    padding: 8px 5px;
    text-align: center;
  }
  .container .formBox .tableB table td input,
  .container .formBox .tableB table td select{
    width: 100%;
    border: 1px solid #e5e5e5;
    padding: 8.5px 11px;
  }
  .container .formBox .tableB table .formNum {
    width: 7.4%;
  }
  .container .formBox .tableB table .formType {
    width: 19.4%;
  }
  .container .formBox .tableB table .formC49{
    width: 49.2%;
  }
  
  .container .formBox .tableB table .formNm {
    width: 15%;
  }
  .container .formBox .tableB table .formCh {
    width: 9%;
  }
  .container .formBox .tableB table input[type="checkbox"] {
    display: none;
  } 
  .container .formBox .tableB table input[type="checkbox"] + label{
    display: inline-block;
    transform: translate(-5px, -9px);
    position: relative;
  }
  .container .formBox .tableB table input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    content: "";
    width: 11px;
    height: 11px;
    background: #f6f6f6;
    border: 1px solid #cbcbcb;
    border-radius: 2px;
    transform: translateY(-2px);
    left: 0;
    top: 0;
  }
  .container .formBox .tableB table input[type="checkbox"]:checked + label:after {
    clear: both;
    position: absolute;
    content: "\e91c";
    font-family: "icomoon";
    font-weight: 900;
    font-size: 13px;
    color: #e25b45;
    transform: translateY(-2px);
    left: 0;
    top: 0px;
  }
  .container .submitBtn {
    text-align: center;
  }
  .container .formBox .tableB .agreeSub {
    padding: 8px 11px;
    text-align: center;
  }
  .container .formBox .tableB .bot {
    border-bottom: 1px solid #e5e5e5;
    
  }
  .container .formBox .tableB input{
    padding: 8.5px 11px;
    border: 1px solid #e5e5e5;
  }
  .container .formBox .tableB .bot span {
    display: inline-block;
    padding: 0 17px 0 10px;
    font-weight: 700;
  }
  .container .formBox .tableB .bot input {
    width: 559px;
  }
  .container .formBox .tableB .agreeTextBox {
    width: 100%;
  }
  .container .formBox .tableB button {
    height: 30px;
    padding: 5px 10px;
    margin: 20px 0 10px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background: #f0f0f0;
    text-align: center;
  }
  .container .submitBtn button {
    width: 140px;
    background: #e25b45;
    border-radius: 50px;
    padding: 11px;
    margin: 10px auto 60px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    border: none   ;
  }
</style>