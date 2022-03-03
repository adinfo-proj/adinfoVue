<template>
  <div class="container"> 
    <div class="tap" > <!-- 추후 input:radio로 변경 예정-->
      <a class="cpa on" href="javascript:void(0)"><img src="../../assets/images/icon01.png" alt="icon01">CPA광고</a> 
      <a class="cps" href="javascript:void(0)"><img src="../../assets/images/icon02.png" alt="icon02">CPS광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpp" href="javascript:void(0)"><img src="../../assets/images/icon03.png" alt="icon03">CPP광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpm" href="javascript:void(0)"><img src="../../assets/images/icon04.png" alt="icon04">CPM광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpv" href="javascript:void(0)"><img src="../../assets/images/icon05.png" alt="icon05">CPV광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpi" href="javascript:void(0)"><img src="../../assets/images/icon06.png" alt="icon06">CPI광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
    </div>
    <div class="choose">
      <div class="chooseDate">
        <div class="firstBox">
          <div class="startDate">
            <label for="startDate">광고 시작일시<br></label>
            <input type="date" id="startDate1" v-model="adSrtDt">
            <select name="" id="startDate2" v-model="adSrtTm">
              <option value="00">00시</option>
              <option value="01">01시</option>
              <option value="02">02시</option>
              <option value="03">03시</option>
              <option value="04">04시</option>
              <option value="05">05시</option>
              <option value="06">06시</option>
              <option value="07">07시</option>
              <option value="08">08시</option>
              <option value="09">09시</option>
              <option value="10">10시</option>
              <option value="11">11시</option>
              <option value="12">12시</option>
              <option value="13">13시</option>
              <option value="14">14시</option>
              <option value="15">15시</option>
              <option value="16">16시</option>
              <option value="17">17시</option>
              <option value="18">18시</option>
              <option value="19">19시</option>
              <option value="20">20시</option>
              <option value="21">21시</option>
              <option value="22">22시</option>
              <option value="23">23시</option>
            </select>
          </div>
          <div>
            <label for="closeDate">광고 종료일시<br></label>
            <input type="date" id="closeDate1" v-model="adEndDt">
            <select name="" id="closeDate2"  v-model="adEndTm">
              <option value="00">00시</option>
              <option value="01">01시</option>
              <option value="02">02시</option>
              <option value="03">03시</option>
              <option value="04">04시</option>
              <option value="05">05시</option>
              <option value="06">06시</option>
              <option value="07">07시</option>
              <option value="08">08시</option>
              <option value="09">09시</option>
              <option value="10">10시</option>
              <option value="11">11시</option>
              <option value="12">12시</option>
              <option value="13">13시</option>
              <option value="14">14시</option>
              <option value="15">15시</option>
              <option value="16">16시</option>
              <option value="17">17시</option>
              <option value="18">18시</option>
              <option value="19">19시</option>
              <option value="20">20시</option>
              <option value="21">21시</option>
              <option value="22">22시</option>
              <option value="23">23시</option>
            </select>
          </div>
        </div>
        <div class="secondBox">
          <div class="camBox">
            <label for="">캠페인 목적<br>
              <select class="camAim" v-model="adPurpose">
                <option v-for="(adIndex, index) in adPurposeObj"
                  :key="index" 
                  :value="adIndex.code"
                  >{{ adIndex.codeNm }}
                </option>
              </select>
            </label>
          </div>
          <div class="camParcel">
            <label for="camParcel01">캠페인 분류<br>
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
            </label>
          </div>
        </div>
      </div>
      <div class="chooseArea">
        <p>광고지역 설정<span>(최대 10개 선택 가능)</span></p>
        <span class="chooseAreaDeta"
          v-for="(adIndex, index) in this.$store.state.addAreaListObj"
          :key="index"
          :value="adIndex.subCode"
        >{{ adIndex.codeNm }} {{ adIndex.codeDescr }}</span>
        <!-- 다시 작성 할 부분 -->
        <div class="chooseBtn">
          <button @click="AddArea();">설정하기 <i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="chooseExcept">
        <p>광고제외지역 설정<span>(최대 10개 선택 가능)</span></p>
        <span class="chooseAreaDeta"
          v-for="(adIndex, index) in this.$store.state.removeAreaListObj"
          :key="index"
          :value="adIndex.subCode"
        >{{ adIndex.codeNm }} {{ adIndex.codeDescr }}</span>
        <div class="chooseBtn">
          <button @click="RemoveArea();">설정하기 <i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
    <div class="campaign tableBox">
      <table>
        <tr>
          <th>캠페인 명<span class="necItem"> *</span></th>
          <td><input type="text" class="camName" v-model="adName" autofocus></td>
        </tr>
        <tr>
          <th>캠페인 배너<span class="necItem"> *</span></th>
          <td>
            <input class="upload_name" id="bannerName"  disabled="disabled" v-bind:placeholder="adBannerName">
            <label for="bannerUpload">이미지 등록하기 <i class="fas fa-plus"></i></label>
            <input type="file" accept="image/*" id="bannerUpload" class="upload_hidden" ref="upImage" @change="uploadBanner()">
          </td>
        </tr>
        <tr class="notice">
          <th>캠페인 내용<span class="necItem"> *</span></th>
          <td>
            <ckeditor id="camContents" v-model="adComment" :config="editorConfig"></ckeditor>
          </td>
          <!-- cols="30" rows="10" -->
        </tr>
        <tr>
          <th>광고 USP 설정</th>
          <td><input type="text" name="" id="" v-model="adUsp"></td>
        </tr>
      </table>
    </div>
    <div class="promotion tableBox">
      <table>
        <tr>
          <td class="tableHead">캠페인 단가<span class="necItem"> *</span></td>
          <td><input type="text" name="" id="" v-model="adPrice"></td>
          <td class="tableHead">캠페인 프로모션 단가</td>
          <td><input type="text" name="" id="" v-model="adPromotionPrice"></td>
        </tr>
        <tr>
          <td class="tableHead">DB 진행 수량<span class="necItem"> *</span></td>
          <td><input type="text" name="" id="" v-model="adMinQty" placeholder="최소 수량 100건 이상"></td>
          <td class="tableHead">승인률</td>
          <td><input type="text" name="" id="" v-model="approval" placeholder="최저 승인율 50%입니다"></td>
        </tr>
        <tr>
          <td class="tableHead">일별 DB 접수 제한</td>
          <td><input type="text" name="" id="" v-model="dayLimit"></td>
          <td class="tableHead">연령 타겟<span class="necItem"> *</span></td>
          <td>
            <input type="radio" name="tagetAge" id="tagetAgeY" v-model="ageTarget" value="N">
            <label for="tagetAgeY">나이제한 없음</label>
            <input type="radio" name="tagetAge" id="tagetAgeN" v-model="ageTarget" value="Y">
            <label for="tagetAgeN">나이제한 있음</label>
            <input type="text" name="tagetAge" class="tagetAge" id="fromAge" v-model="ageTargetFrom">
            <span class="ageIcon">~</span>
            <input type="text" name="tagetAge" class="tagetAge" id="toAge" v-model="ageTargetTo">
          </td>
        </tr>
        <tr>
          <td class="tableHead">필수 키워드</td>
          <td colspan="3"><input type="text" name="" id="" v-model="reqWordCond"></td>
        </tr>
        <tr>
          <td class="tableHead">진행(선호) 채널<span class="necItem"> *</span></td>
          <td colspan="3" class="chooseCheck">
            <div class="checkingBox">
              <input type="checkbox" id="prohibitAll"
              :checked="banExChannelAll"
              @click="BanExChannelAll()"
              >
              <label for="prohibitAll">전체</label>
            </div>
            <div class="checkingBox"
              v-for="(banExChannel, index) in banExChannelObj"
              :key="index"
              @click="BanExChannelOne(index)"
            >
              <input 
                type="checkbox" 
                :checked="banExChannel.flag"
              ><label for="">{{ banExChannel.codeNm }}</label>            
            </div>
          </td>
        </tr>
        <tr>
          <td class="tableHead">금지 채널<span class="necItem"> *</span></td>
          <td colspan="3" class="chooseCheck">
            <div class="checkingBox"
              v-for="(banChannel, index) in banChannelObj"
              :key="index"
              @click="BanChannelOne(index)"
            >
              <input 
                type="checkbox" 
                :checked="banChannel.flag" 
              >
              <label for="">{{ banChannel.codeNm }}</label>            
            </div>
          </td>
        </tr>
        <tr>
          <td class="tableHead">금지 이미지</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">금지 키워드</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <!-- 무효조건 관련-->
          <td class="tableHead">무효 조건<span class="necItem"> *</span></td>
          <td colspan="3">
            <div class="checkingBox nullify"
              v-for="(nullifyCond, index) in nullifyCondObj"
              :key="index"
              @click="nullifyTextBox(index);"
            >
              <input
                type="checkbox" 
                name ="nullifyCond"
                :checked="nullifyCond.flag"
              ><label for="nullifyCond">{{ nullifyCond.codeNm }}</label>
            </div>
            <input type="text" id="nullifyText">
          </td>
        </tr>
        <tr>
          <td class="tableHead">취소 조건<span class="necItem"> *</span></td>
          <td colspan="3">
            <div class="checkingBox cancelBox"
              v-for="(cancelCond, index) in cancelCondObj"
              :key="index"
               @click="cancelTextBox(index);"
            >
              <input
                type="checkbox" 
                name ="cancleCond"
                :checked="cancelCond.flag"
              ><label for="cancleCond">{{ cancelCond.codeNm }}</label>
            </div>
            <input type="text" id="cancelText">
          </td>
        </tr>
        <tr>
          <td class="tableHead">SMS 수신 여부</td>
          <td>
            DB접수 시 SMS를 수신합니다. 
            <input type="radio" name="sms" id="smsY" v-model="smsYn" value="Y"><label for="smsY">예</label>
            <input type="tel" id="phoneNum" placeholder="연락처를 입력해주세요." maxlength="11" v-model="smsNo">
            <input type="radio" name="sms" id="smsN" v-model="smsYn" value="N" checked><label for="smsN">아니오</label> 
          </td>
          <td class="tableHead">자동화 확정 일수</td>
          <td>
            <input type="radio" name="confirmDate" id="date7" v-model="autoConfirm" value="07"><label for="date7">7일</label>
            <input type="radio" name="confirmDate" id="date15" v-model="autoConfirm" value="15"><label for="date15">15일</label>
            <input type="radio" name="confirmDate" id="dateEtc" v-model="autoConfirm" value="99"><label for="dateEtc">기타(협의 필요)</label><input type="text" name="" id="dateEtc2" >
          </td>
        </tr>
        <tr>
          <td class="tableHead">기타</td>
            <td colspan="3"><input type="text" name="" id=""></td>

        </tr>
      </table>
    </div>
    <div>
      <a href="javascript:void(0)" class="lendTapBtn" @click="lendSelectFunc(0)" v-bind:class="{on : 0 == lendSelect}">랜딩페이지 보유</a>
      <a href="javascript:void(0)" class="lendTapBtn" @click="lendSelectFunc(1)" v-bind:class="{on : 1 == lendSelect}">랜딩페이지 미보유</a>
    </div>
    <div class="lend tableBox">
      <table>
        <tr class="lendOwn" v-if="lendSelect == 0">
          <td class="tableHead">랜딩 URL</td>
          <td colspan="2">
            <input type="text" name="" id=""> 
          </td>
        </tr>
        <tr class="lendOwn" v-if="lendSelect == 0">
          <td class="tableHead">외부입력 폼 제공</td>
          <td>
            <input type="radio" name="extForm" id="extFormY" v-model="extFormYn" value="Y"><label for="">예</label>
            <input type="radio" name="extForm" id="extFormN" v-model="extFormYn" value="N"><label for="">아니오</label>
          </td>
          <td class="gideBtn">
            <button id="popUP01">픽셀,스크립트 설치 가이드 보기</button>
            <button id="popUP02">랜딩 픽셀,스크립트 설치 요청하기</button>
          </td>
        </tr>
        <tr class="lendNotOwn" v-if="lendSelect == 1">
          <td class="tableHead">참고 URL</td>
          <td>
            <input type="text" name="" id="">
          </td>
        </tr>
        <tr class="lendNotOwn" v-if="lendSelect == 1">
          <td class="tableHead">참고이미지</td>
          <td>
            <input id="etcImages" class="upload_name" disabled="disabled" v-bind:placeholder="etcImeageName">
            <label for="referFile">이미지 등록하기 <i class="fas fa-plus"></i></label> 
            <input type="file" accept="" id="referFile" class="upload_hidden" ref="etcImage" multiple @change="uploadfile()">
            <!-- multiple  : 여러개의 파일선택 여부-->
          </td>
        </tr>
        <tr class="obscured lendNotOwn">
          <td colspan="2"></td>
        </tr>
        <tr class="lendNotOwn" v-if="lendSelect == 1">
          <td class="tableHead">수집 항목</td>
          <td>
            <div class="checkingBox collection"
              v-for="(landCollection, index) in landCollectionObj"
              :key="index"
              @click="landColTextBox(index);"
            >
              <input
                type="checkbox" 
                name ="landCollection"
                :checked="landCollection.flag"
              ><label for="landCollection">{{ landCollection.codeNm }}</label>
            </div>
            <input type="text" id="landText" placeholder="EX) 지역, 문의사항, 신청사유 등">

          </td>
        </tr>
      </table>
    </div>
    <div class="submitBtn">
      <button @click="createCampaign()"> 등록하기 </button>
    </div>

    <AddAreaDialog></AddAreaDialog>
    <RemoveAreaDialog></RemoveAreaDialog>


















  </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';
import AddAreaDialog from "../../components/dialog/AddAreaDialog"
import RemoveAreaDialog from "../../components/dialog/RemoveAreaDialog"


export default {
  // 
  components: {
      AddAreaDialog
    , RemoveAreaDialog
  },
  data() {
    return {
      editorConfig: {},
      lendSelect: 0,

      
      now: '',
      oneYearAgo: '',
      adKind: '',             // 캠페인 종류
      adArea: '',             // 광고지역
      adAreaEtc: '',          // 기타지역
      adSrtDt: this.$DateAdd(0),            // YYYYMMDD
      adSrtTm: '00',          // HHMMSS
      adEndDt: this.$DateAdd(364),            // YYYYMMDD
      adEndTm: '23',          // HHMMSS
      adPurpose: '',          // 캠페인 목적
      adPurposeObj: '',       // 캠페인 목적 객체
      adTopKind: '',          // 캠페인 1차 분류 
      adMiddleKind: '',       // 캠페인 2차 분류
      adTopKindObj: '',       // 캠페인 1차 분류 객체
      adMiddleKindObj: '',    // 캠페인 2차 분류 객체

      adName: '',             // 캠페인 명

      adBanner: '',           // 캠페인 배너 업로드
      adBannerName:'',        // 캠페인 배너 명
      
      adComment: '',          // 캠페인 내용

      adUsp: '',              // 광고 이벤트설정
      smsYn: 'N',             // DB 접수 시 SMS 수신 여부 Y
      smsNo: '',              // DB 접수 시 SMS 수신 여부
      adPrice: '',            // 캠페인 단가
      adPromotionPrice: '0',   // 캠페인 프로모션 단가
      adMinQty: '',           // 캠페인 최소 수량
      dayLimit: '',           // 일별 DB 접수 제한 건수
      approval: '',           // 승인률
      ageTarget: 'N',      // 연령 타겟 {from:"", to: ""}
      ageTargetFrom: '',      // from
      ageTargetTo: '',        // to
      reqWordCond: '',        // 필수 키워드
      
      banExChannel: '',       // 선호채널
      banExChannelObj: '',    // 선호채널 객체
      banExChannelAll: true,  // 전체선택체크박스
      banChannel: '',         // 금지채널
      banChannelObj: '',      // 금지채널
      banWordCond: '',        // 금지단어
      
      nullifyCond:'',         // 무효조건
      nullifyCondObj:'',      // 무효조건 객체
      cancelCond: '',         // 취소조건
      cancelCondObj: '',      // 취소조건 객체
      autoConfirm: '07',    // 자동확정일수
      cpaYn: 'N',


      landingPageTitle: '',   // DB 접수 시 SMS 수신 번호
      landingUrl: '',         // 캠페인 단가

      extFormYn:'N',   // 랜딩페이지 보유여부
      etcImeageName: '',      //  참고이미지
      landCollection:'',      // 수집항목
      landCollectionObj:'',   // 수집항목 객체
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
    getCommonByTp0000 () { // 캠페인 분류(대분류)
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
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
    //******************************************************************************
    // 캠페인 분류(중분류)
    //******************************************************************************
    firstComboChg(code) { // 캼패안 분류(소분류)
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
    // 캠페인 금지 채널 목록
    //******************************************************************************
    getCommonByTp0015(inPos) {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      // --> 나중에 수정할것 // "http://api.adinfo.co.kr:30000/CommonCode/getCommonCodeByCode", 
      {
        params: {
          tp: '0015'
        } // 실제로 브라우저에서 입력 시 http://127.0.0.1:30000/CommonCode/getCommonByTp?tp=0015 로 자동으로 불러와짐
      })
      .then(response => {
        if(inPos === 1) {
          this.banExChannelObj = response.data;
        }
        else {
          this.banChannelObj = response.data;

          for(let i = 0 ; i < this.banChannelObj.length; i++) {
            this.banChannelObj[i].flag = false;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // DB무효조건 목록
    //******************************************************************************
    getCommonByTp0017() {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      {
        params: {
          tp: '0017'
        }
      })
      .then(response => {

        if(response.data.length > 0) {
          this.nullifyCondObj = response.data;
          for(let i = 0 ; i < this.nullifyCondObj.length; i++) {
            this.nullifyCondObj[i].flag = false;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // DB취소조건 목록
    //******************************************************************************
    getCommonByTp0020() {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      {
        params: {
          tp: '0020'
        }
      })
      .then(response => {

        if(response.data.length > 0) {
          this.cancelCondObj = response.data;
          for(let i = 0 ; i < this.cancelCondObj.length; i++) {
            this.cancelCondObj[i].flag = false;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 수집항목 목록
    //******************************************************************************
    getCommonByTp0021() {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      {
        params: {
          tp: '0021'
        }
      })
      .then(response => {

        if(response.data.length > 0) {
          this.landCollectionObj = response.data;
          for(let i = 0 ; i < this.landCollectionObj.length; i++) {
            this.landCollectionObj[i].flag = false;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })
    },
    //******************************************************************************
    // 광고지역 모달팝업 팝업 함수
    //******************************************************************************

    AddArea() {
      $("#modalChooseArea").css({display:"block"})
    },
    RemoveArea() {
      $("#modalRemoveArea").css({display:"block"})
    },
    //******************************************************************************
    // 진행(선호) 채널 전체 선택 시 처리함수
    //******************************************************************************
    BanExChannelAll() { // 전체 선택 함수
      if(this.banExChannelAll == true) {
        for( let i = 0 ; i < this.banExChannelObj.length ; i++) {
        this.banExChannelObj[i].flag = false;
        }
        
        this.banExChannelAll = false;
        console.log("1")
      }
      else if(this.banExChannelAll == false){
        for( let i = 0 ; i < this.banExChannelObj.length ; i++) {
          this.banExChannelObj[i].flag = true;
          this.banChannelObj[i].flag = false;
        }
        console.log("2")
        this.banExChannelAll = true;
      }
      console.log(this.banExChannelAll)
    },
    //******************************************************************************
    // 진행(선호) 채널 개별 선택 시 처리함수
    //******************************************************************************
    BanExChannelOne(index) { // 개별 선택 시 전체선택 값에 대한 함수
      if(this.banExChannelObj[index].flag == true) {
        this.banExChannelObj[index].flag = false;
        this.banExChannelAll = false;
      }
      else {
        let bFlag = true;
        this.banExChannelObj[index].flag = true;

        for( let i = 0 ; i < this.banExChannelObj.length ; i++) {
          if( this.banExChannelObj[i].flag == false) {
            bFlag = false;
          }
        }

        if( bFlag == true) {
          this.banExChannelAll = true;
        }        
      }

      if( this.banExChannelObj[index].flag == true) {
        this.banChannelObj[index].flag = false;
      }
    },
    //******************************************************************************
    // 금지 채널 개별 선택 시 처리함수
    //******************************************************************************
    BanChannelOne(index) {
      this.banChannelObj[index].flag == false 
      ? this.banChannelObj[index].flag = true 
      : this.banChannelObj[index].flag = false;

      if( this.banChannelObj[index].flag == true ) {
        this.banExChannelObj[index].flag = false;
        this.banExChannelAll = false;
      }    
    },
    //******************************************************************************
    // 배너 업로드 시 text 박스의 값 보여지기
    //******************************************************************************
    uploadBanner(){
      this.adBanner = this.$refs.upImage.files;
      this.adBannerName = this.adBanner[0].name;
    },
    //******************************************************************************
    // 파일 업로드 시 text 박스의 값 보여지기
    //******************************************************************************
    uploadfile(){
      let etcFile = this.$refs.etcImage.files;
      let etcName = [];

      for(let i = 0 ; i<etcFile.length ; i++){
        etcName.push(etcFile[i].name)
        console.log(etcName)
      }

      this.etcImeageName = etcName;
    },
    //******************************************************************************
    // 랜딩페이지 보유 미보유 Tap 기능
    //******************************************************************************
    lendSelectFunc(pos) {
			this.lendSelect = pos;
		},
    //******************************************************************************
    // 무효조건 기타 입력 박스 클래스 추가 함수
    //******************************************************************************
    nullifyTextBox(index) {
      this.nullifyCondObj[index].flag == false 
      ? this.nullifyCondObj[index].flag = true 
      : this.nullifyCondObj[index].flag = false;

      console.log(index + " : "+this.nullifyCondObj[index].flag)
      
      if(this.nullifyCondObj[index].flag == true && this.nullifyCondObj[index].code == 99){
        $("#nullifyText").addClass("active")
      }else if(this.nullifyCondObj[index].code == 99 && this.nullifyCondObj[index].flag == false){
        $("#nullifyText").removeClass("active")
      }
    },
    //******************************************************************************
    // 취소조건 기타 입력 박스 클래스 추가 함수
    //******************************************************************************
    cancelTextBox(index) {
      this.cancelCondObj[index].flag == false 
      ? this.cancelCondObj[index].flag = true 
      : this.cancelCondObj[index].flag = false;

      console.log(index + " : "+this.cancelCondObj[index].flag)

      if(this.cancelCondObj[index].flag == true && this.cancelCondObj[index].code == 99){
        $("#cancelText").addClass("active")
      }else if(this.cancelCondObj[index].code == 99&& this.cancelCondObj[index].flag == false){
        $("#cancelText").removeClass("active")
      }
    },
    //******************************************************************************
    // 수집항목 기타 입력 박스 클래스 추가 함수
    //******************************************************************************
    landColTextBox(index) {
      this.landCollectionObj[index].flag == false 
      ? this.landCollectionObj[index].flag = true 
      : this.landCollectionObj[index].flag = false;

      console.log(index + " : "+this.landCollectionObj[index].flag)

      if(this.landCollectionObj[index].flag == true && this.landCollectionObj[index].code == 99){
        $("#landText").addClass("active")
      }else if(this.landCollectionObj[index].code == 99&& this.landCollectionObj[index].flag == false){
        $("#landText").removeClass("active")
      }
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

      if(this.adComment == null || this.adComment == '') {
        alert("캠페인 내용을 입력해주세요.");
        this.$refs.adComment.focus();
        return;
      }

      //------------------------------------------------------------------------------
      // 날짜에서 2021-12-03 에서 '-'를 제거한다. 예) 2021-12-03 -> 20211203
      //------------------------------------------------------------------------------
      let lAdSrtDt = this.adSrtDt.replace(/-/gi,"", (match) => {
        return '' + match + '';
      });
      let lAdEndDt = this.adEndDt.replace(/-/gi,"", (match) => {
        return '' + match + '';
      });

      //------------------------------------------------------------------------------
      // 진행(선호)채널에서 선택한 코드만 Array로 담아 전송.
      //------------------------------------------------------------------------------
      let banChannelObjLet = this.banChannelObj.filter(curValue => curValue.flag == true) // 먼저 true 인것을 찾음
                                               .map   (curValue => curValue.code)         // true인 object의 code값만 추출
                                               .join  ("|");                              // array 구분으로 '|'를 사용
      //------------------------------------------------------------------------------
      // 금지 채널에서 선택한 코드만 Array로 담아 전송.
      //------------------------------------------------------------------------------
      let banExChannelObjLet = this.banExChannelObj.filter(curValue => curValue.flag == true)
                                                   .map   (curValue => curValue.code)
                                                   .join  ("|");

      //------------------------------------------------------------------------------
      // 정보 보내기
      //------------------------------------------------------------------------------
      //------------------------------------------------------------------------------
      // 정보 보내기
      //------------------------------------------------------------------------------
      var data = {
          mbId: this.$store.state.mbId
        //, operId:  this.$store.state.emailId
        , operId:  'aa'
        , emailId:  '01'
        , emailPw:  '00000'

        , adSrtDt: lAdSrtDt
        , adSrtTm: this.adSrtTm
        , adEndDt: lAdEndDt
        , adEndTm: this.adEndTm
        , adPurpose: this.adPurpose
        , adTopKind: this.adTopKind
        , adMiddleKind: this.adMiddleKind
        , adName: this.adName
        , adComment: this.adComment
        , adUsp: this.adUsp
        , adPrice: this.adPrice
        , adPromotionPrice: this.adPromotionPrice
        , adMinQty: this.adMinQty
        , dayLimit: this.dayLimit
        , approval: this.approval
        , ageTarget: this.ageTarget
        , ageTargetFrom: this.ageTargetFrom
        , ageTargetTo: this.ageTargetTo
        , reqWordCond: this.reqWordCond
        , banChannelCond: banChannelObjLet
        , banExChannelCond: banExChannelObjLet
        , banImageCond: this.banImageCond
        , banWordCond: this.banWordCond
        , nullifyCond: this.nullifyCondObjLet
        , cancelCond: this.cancelCondObjLet
        , smsYn: this.smsYn
        , smsNo: this.smsNo        
        , autoConfirm: this.autoConfirm
      };

      const frm = new FormData();
        frm.append("upFile", this.adBanner[0]);
        frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));		

      axios.post("http://api.adinfo.co.kr:30000/newcampaign", frm, {
        headers: {'Content-Type': 'multipart/form-data'}    
      })
      .then(response => {
        console.log(response);
        if( response.data > 0) {
          alert('정상적으로 캠페인이 등록되어습니다.');
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
    adPromotionPrice : function() {
      return this.adPromotionPrice = this.adPromotionPrice.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
          // DB 진행 수량1
    adMinQty : function() {
      return this.adMinQty = this.adMinQty.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
          // DB승인율
    approval : function() {
      return this.approval = this.approval.replace(/[^0-9]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

  }, 

  created() {
    this.$store.state.headerTopTitle = "캠페인 관리";
    this.$store.state.headerMidTitle = "신규 캠페인 등록";

    this.getCommonByTp0000();
    this.getCommonByTp0005();
    this.getCommonByTp0015(1);
    this.getCommonByTp0015(2);
    this.getCommonByTp0017();
    this.getCommonByTp0020();
    this.getCommonByTp0021();
  }
}
</script>
<style>

  button {
    cursor: pointer;
  }
  .tap,
  .choose,
  .tableBox {
    margin-bottom: 20px;
  }

  .tap {
    display: flex;
    justify-content: space-around;
  }

  .tap a,
  .tap a b {
    font-weight: 700;
    font-size: 18px;
  }

  .tap a {
    width: 210px;
    height: 81px;
    padding: 0 38px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #e5e5e5;
    position: relative;
  }

  .tap a span {
    font-size: 14px;
  }

  .tap a img {
    height: 47px;
  }

  .tap a .readyIcon {
    position: absolute;
    width: 35px;
    height: auto;
    top: -1px;
    right: 10px;
  }
  
  .tap a.on,
  .tap a.on b,
  .tap a.on span {
    background: #e25b45;
    color: #fff;
  }

  .choose {
    width: 100%;
    height: 200px;
    background: #fff;
    padding: 19px 19px 0 19px;
    border-radius: 10px;
    border: solid 1px #e5e5e5;
  }

  .chooseArea,
  .chooseExcept,
  .chooseDate {
    float: left;
  }

  .chooseArea P,
  .chooseExcept p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 11px;
    color: #222;
  }

  .chooseDate,
  .chooseArea {
    margin-right: 2%;
  }

  .chooseArea,
  .chooseExcept {
    width: 26%;
    height: 100%;
  }

  .chooseArea p span {
    color: #666;
  }
  
  /* 지역 추가하기 버튼 */
  .chooseArea > .chooseAreaDeta,
  .chooseExcept > .chooseAreaDeta {
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid #e5e5e5;
    margin: 0 4px 6px 0;
    border-radius: 20px;
  }

  .chooseArea > span > .xBtn,
  .chooseExcept > span > .xBtn {
    /* 추후에 얇은걸로 변경하기!!!!! */
    margin-left: 5px;
    transform: translateY(1px);
    cursor: pointer;
  }

  .chooseBtn button {
    margin-top: 5px;
    padding: 6px 15px;
    border-radius: 10px;
    background: #f0f0f0;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #e5e5e5;
    transition: 0.3s;
  }


  .chooseBtn button i {
    font-size: 12px;
    color: #e25b45;
    vertical-align: middle;
  }


  /* 지역추가 버튼 끝 */

  .chooseDate {
    width: 44%;
    height: 100%;
  }

  .chooseDate div { 
    height: 58px;
    margin-bottom: 20px;
  }

  .chooseDate .firstBox div {
    float: left;
    width: 50%;
  }

  .chooseDate .secondBox div {
    float: left;
  }

  .chooseDate label {
    font-size: 16px;
    font-weight: 700;
  }

  .chooseDate input,
  .chooseDate select {
    height: 35px;
    margin: 7px 3% 0 0;
    padding: 9px 15px ;
    border: solid 1px #e5e5e5;
    border-radius: 10px;
  }

  .chooseDate input[type="date"] {
    width: 57%;
  }

  .chooseDate #startDate2,
  .chooseDate #closeDate2 {
      width: 37%;
  }

  .camBox {
    width: 30%;
    margin-right: 2%;
  }


  .camBox select {
    width: 100%;
  }

  .camParcel {
    width: 68%;
  }

  .chooseDate .camParcel select {
    float: left;
    width: 47%;
  }

  .chooseDate .camParcel select.camParcel02 {
    margin-right: 0;
  }

  /* 입력값 */

  .tableBox {
    border: solid 1px #e5e5e5; 
    border-radius: 10px;
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
  }

  .container .tableBox th,
  .container .tableBox td {
    border: 1px solid #e5e5e5;
  }

  .container .tableBox th,
  .container .tableBox .tableHead {
    font-weight: 700;
    width: 150px;
    padding: 17px 10px 0 20px;
    vertical-align: top;
    text-align: left;
    color: #222;

  }


  .container .notice td {
    height: 183px;
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

  .container .tableBox #camContents {
    width: 100%;
    height: 100%;
    resize: none
  }

  .container .camName {
    width: 770px;
  }

  /* 이미지 등록하기 버튼 */
  .container .tableBox .upload_name {
    width: 260px;
    display: block;
    padding: 6px 10px;
    float: left;
  }

  .container .tableBox input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    transform: translateY(-1px);
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
  }

  .container .tableBox .upload_name + label {
    display: inline-block;
    width: 124px;
    height: 100%;
    border-radius: 10px;
    background-color: #f0f0f0;
    margin-left:  10px ;
    text-align: center;
    line-height: 2.5;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: -0.3px;
    cursor: pointer;
    transition: 0.3s;
    border: 1px solid #e5e5e5
  }


  .container .tableBox .upload_name + label > i {
    font-size: 12px;
    color: #e25b45;
    vertical-align: middle;
  }

  .container .tableBox .upload_name + label:hover {
    background: #eb8e80;
    color: #fff;
  }

  /* 이미지 등록하기 버튼  끝*/


  .promotion table td:nth-child(2) {
    width: 530px;
  }

  .container .tableBox input[type="tel"] {
    height: 100%;
    padding: 5px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }

  .container .tableBox input[type="tel"]#phoneNum,
  .container .tableBox input[type="text"].tagetAge,
  .container .tableBox input[type="text"]#dateEtc2 {
    width: 0px;
    transition: 0.5s;
    opacity: 0;
    padding: 0 10px;
  }

  .container .tableBox #tagetAgeN  ~ .ageIcon {
    opacity: 0;
    transition: 0.5s;
  }

  .container .tableBox #smsY:checked  ~ #phoneNum {
    width: 200px;
    margin: 0 10px;
    opacity: 1;
  }

  .container .tableBox #tagetAgeN:checked  ~ .tagetAge {
    width: 80px;
    height: 100%;
    margin: 0 15px;
    text-align: right;
    padding: 0 10px;
  }

  .container .tableBox #tagetAgeN:checked  ~ .tagetAge,
  .container .tableBox #tagetAgeN:checked  ~ .ageIcon {
    opacity: 1;
  }

  
  .container .tableBox #dateEtc:checked  ~ #dateEtc2 {
    width: 150px;
    margin: 0 15px;
    text-align: right;
    padding: 0 10px;
    opacity: 1;
  }



  .container .tableBox .nullify,
  .container .tableBox .cancelBox,
  .container .tableBox .collection {
    transform: translateY(6px);
  }

  .container .tableBox #nullifyText,
  .container .tableBox #cancelText,
  .container .tableBox #landText {
    width: 100px;
    opacity: 0;
    transform: scaleX(0);
    transition: 0.5s;
    transform-origin: left
  }

  .container .tableBox #landText {
    width: 250px;
  }


  .container .tableBox #nullifyText.active,
  .container .tableBox #cancelText.active,
  .container .tableBox #landText.active {
    opacity: 1;
    transform: scaleX(1);
  }



  .container .tableBox input[type="text"]#cancleCondEtc {
    width: 150px;
    height: 100%;
    margin: 0 5px;
    padding: 0 10px;
  }

  .container .tableBox .checkingBox {
    float: left;
  }

  .container .tableBox input[type="checkbox"],
  .container .tableBox input[type="radio"] {
    display: none;
  }



  .container .tableBox input[type="checkbox"] + label,
  .container .tableBox input[type="radio"] + label {
    position: relative;
    padding: 0 5px 0 23px;
  }

  .container .tableBox input[type="checkbox"] + label:before,
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

  .container .tableBox input[type="checkbox"]:checked + label::after,
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

  .container .lend {
    clear: both;
    border-top-left-radius: 0;
    background: #fff;
  }

  .container .tableBox .obscured {
    display: none;
  }

  .gideBtn {
    width: 410px;
  }

  .container .tableBox .tableMiddleLeft {
    border-left: none;
  }


  .gideBtn button {
    width: 188px;
    text-align: center;
    padding: 7px 0;
    border-radius: 10px;
    font-weight: 700;
  }

  .gideBtn #popUP01 {
    color: #fff;
    border: 1px solid #c1351e;
    background: #e25b45;
    margin-right: 15px;
  }

  .gideBtn #popUP02 {
    color: #000;
    background: #f0f0f0;
    border: 1px solid #e5e5e5;
  }

  .container .tableBox #etcImages {
    width: 960px;
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


  .lendTapBtn {
    display: block;
		width: 151px;
		height: 45px;
		float: left;
		padding: 14px 0;
		text-align: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background: #e7e7e7;
		font-size: 14px;
		font-weight: 700;
    border: 1px solid #e5e5e5;
    border-bottom: none;
  }

  .lendTapBtn.on {
		background: #fff;
		color: #e25b45;
	}
  
  /* 지역선택 모달 팝업 */

</style>
