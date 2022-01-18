<template>
  <div class="container"> 
    <div class="tableBox">
      <table>
				<tr>
					<th>
						캠페인 목적
					</th>
					<td>
						<select class="camAim" v-model="adPurpose">
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
						<select class="camParcel01" v-model="adTopKind" @change="firstComboChg(adTopKind);">
							<option v-for="(adIndex, index) in adTopKindObj"
								:key="index" 
								:value="adIndex.code"
								>{{ adIndex.codeNm }}
							</option>
						</select>
						<select class="camParcel02" v-model="adMiddleKind">2차 분류를 선택
							<option v-for="(adIndex, index) in adMiddleKindObj"
								:key="index"
								:value="adIndex.subCode"
								>{{ adIndex.codeDescr }}
							</option>
						</select>
					</td>
				</tr>
        <tr>
          <th>캠페인 명<span class="necItem"> *</span></th>
          <td><input type="text" class="camName" v-model="adName" autofocus></td>
          <th>캠페인 상태</th>
          <td>
            <div>
              <input type="radio" id="dd"> <label for="dd">dd</label>
            </div>
          </td>
        </tr>
        <tr class="notice">
          <th>캠페인 내용<span class="necItem"> *</span></th>
          <td colspan="3">
            <ckeditor id="camContents" v-model="adComment" :config="editorConfig"></ckeditor>
          </td>
          <!-- cols="30" rows="10" -->
        </tr>
        <tr>
          <th>광고주 단가<span class="necItem"> *</span></th>
          <td><input type="text" name="" id="" v-model="adPrice"></td>
          <th>마케터 단가</th>
          <td><input type="text" name="" id="" v-model="adMaketerPrice"></td>
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
    <div class="submitBtn">
      <button @click="createCampaign()"> 수정하기 </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import $ from 'jquery';

export default {
  props: {
    caId: String
  },
  data() {
    return {
			editorConfig: {
					height: '200px'
        , language: 'ko'
        , resize_enabled: false
      }
			, adPurpose: ''          // 캠페인 목적
      , adPurposeObj: ''       // 캠페인 목적 객체
      , adTopKind: ''          // 캠페인 1차 분류 
      , adMiddleKind: ''       // 캠페인 2차 분류
      , adTopKindObj: ''       // 캠페인 1차 분류 객체
      , adMiddleKindObj: ''    // 캠페인 2차 분류 객체

      , adName: ''             // 캠페인 명
      , adComment: ''          // 캠페인 내용

      , smsYn: 'N'             // DB 접수 시 SMS 수신 여부 Y
      , smsNo: ''              // DB 접수 시 SMS 수신 여부
      , adPrice: ''            // 광고주 단가
			, adMaketerPrice: '0'    // 마케터 단가 단가
    }
  },
  methods: {
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
          this.adPurpose = response.data[0].code;
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
          console.log("0005");
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
    firstComboChg(code) { // 캼패인 분류(소분류)
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonCodeByCode", 
      {
        params: {
          tp: '0001',
          code: code
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          this.adMiddleKind = response.data[0].subCode;
          this.adMiddleKindObj = response.data;
        }
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 최종 등록하기 버튼 선택
    //******************************************************************************
    createCampaign() {
      //------------------------------------------------------------------------------
      // input validation check
      //------------------------------------------------------------------------------
      if(this.adName == null || this.adName == '') {
        alert("캠페인명을 입력해주세요.");
        this.$refs.adName.focus(); ///$refs
        return;
      }

      if(this.adComment == null || this.adComment == '') {
        alert("캠페인 내용을 입력해주세요.");
        this.$refs.adComment.focus();
        return;
      }

      if(this.adPrice == null || this.adPrice == '') {
        alert("광고주 단가를 입력해주세요.");
        this.$refs.adComment.focus();
        return;
      }

			if(this.adMaketerPrice == null || this.adMaketerPrice == '') {
        alert("마케터 단가를 입력해주세요.");
        this.$refs.adMaketerPrice.focus();
        return;
      }
      //------------------------------------------------------------------------------
      // 정보 보내기
      //------------------------------------------------------------------------------
      var data = {
          gradeCd           : this.$store.state.adGradeCd
        , mbId              : this.$store.state.mbId
        , adId              : this.$store.state.adId
        , clntId            : this.$store.state.clntId
        , adPurpose         : this.adPurpose
        , adTopKind         : this.adTopKind
        , adMiddleKind      : this.adMiddleKind
        , adSrtDt           : this.$DateAdd(0)
        , adSrtTm           : '235959'
        , adName            : this.adName
        , adComment         : this.adComment
        , adPrice           : this.adPrice
        , adMaketerPrice    : this.adMaketerPrice
        , smsYn             : this.smsYn
        , smsNo             : this.smsNo
      };

      const frm = new FormData();
      frm.append("dataObj", new Blob([JSON.stringify(data)], {type: "application/json"}));

      axios.post("http://api.adinfo.co.kr:30000/newcampaign", frm, {
        headers: {'Content-Type': 'multipart/form-data'}    
      })
      .then(response => {
        alert(response.data.resultMessage);
        if( response.data.result == 'success') {
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
    }
  },
  created() {
    //alert(this.caId);
    alert(this.$route.params.caId);
    this.$store.state.headerTopTitle = "캠페인";
    this.$store.state.headerMidTitle = "캠페인 등록";

    this.getCommonByTp("0000");
    this.getCommonByTp0005();
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
    color: red;
    transform: translateY(-2px);
    font-size: 13px;
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
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 7px;
    left: 7px;
    top: 1px;
    color: #e25b45;
  }

  .container .submitBtn {
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