<template>
  <div class="container"> 
    <!-- 1400*1140 -->
    <div class="tap" > <!-- 추후 각 a태그 별 변수 지정-->
      <a class="cpa on" href="javascript:void(0)"><img src="../../assets/images/icon01.png" alt="icon01">CPA광고</a> 
      <a class="cps" href="javascript:void(0)"><img src="../../assets/images/icon02.png" alt="icon02">CPS광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpp" href="javascript:void(0)"><img src="../../assets/images/icon03.png" alt="icon03">CPP광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpm" href="javascript:void(0)"><img src="../../assets/images/icon04.png" alt="icon04">CPM광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpv" href="javascript:void(0)"><img src="../../assets/images/icon05.png" alt="icon05">CPV광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
      <a class="cpi" href="javascript:void(0)"><img src="../../assets/images/icon06.png" alt="icon06">CPI광고 <img src="../../assets/images/readyIcon.png" alt="readyIcon" class="readyIcon"></a>
    </div>
    <div class="choose">
      <div class="chooseArea">
        <p>광고지역 설정 <span>(중복 선택 가능)</span></p>
        <span class="chooseAreaDeta">서울특별시 전체</span>
        <span class="chooseAreaDeta">수원시</span>
        <span class="chooseAreaDeta">부천시</span>
        <span class="chooseAreaDeta">인천광역시</span>
        <span class="chooseAreaDeta">동두천시</span>
        <!-- 다시 작성 할 부분 -->
        <div class="chooseBtn">
          <button>추가하기 <i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="chooseExcept">
        <p>광고제외지역 설정</p>
        <span class="chooseAreaDeta">동두천시 소요동</span>
        <span class="chooseAreaDeta">인천시 강화군</span>
        <div class="chooseBtn">
          <button>추가하기 <i class="fas fa-plus"></i></button>
        </div>
      </div>
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
    </div>
    <div class="campaign tableBox">
      <table>
        <tr>
          <th>캠페인 명</th>
          <td><input type="text" class="camName" v-model="adName" autofocus></td>
        </tr>
        <tr>
          <th>캠페인 배너</th>
          <td>
            <input class="upload_name" value="" disabled="disabled">
            <label for="myFile">이미지 등록하기 <i class="fas fa-plus"></i></label> 
            <input type="file" accept=".jpg, .png, .gif" id="myFile" class="upload_hidden">
          </td>
        </tr>
        <tr class="notice">
          <th>캠페인 내용</th>
          <td><textarea name="" id="camContents" v-model="adComment"></textarea></td>
          <!-- cols="30" rows="10" -->
        </tr>
        <tr>
          <th>광고 USP 설정</th>
          <td><input type="text" name="" id="" v-model="adUsp"></td>
        </tr>
        <tr>
          <th>SMS 수신 여부</th>
          <td>
            DB접수 시 SMS를 수신합니다. 
            <input type="radio" name="sms" id="smsY" v-model="smsYn" value="Y"><label for="smsY">예</label>
            <input type="text" id="phoneNum" placeholder="연락처를 입력해주세요." maxlength="11" v-model="smsNo">
            <input type="radio" name="sms" id="smsN" v-model="smsYn" value="N" ><label for="smsN">아니오</label> 
          </td>
        </tr>
      </table>
    </div>
    <div class="promotion tableBox">
      <table>
        <tr>
          <td class="tableHead">캠페인 단가</td>
          <td><input type="text" name="" id="" v-model="adPrice"></td>
          <td class="tableHead">캠페인 프로모션 단가</td>
          <td><input type="text" name="" id="" v-model="adPromotionPrice"></td>
        </tr>
        <tr>
          <td class="tableHead">DB 진행 수량</td>
          <td><input type="text" name="" id="" v-model="adMinQty" placeholder="최소 수량 100건 이상"></td>
          <td class="tableHead">승인률</td>
          <td><input type="text" name="" id="" v-model="approval"></td>
        </tr>
        <tr>
          <td class="tableHead">일별 DB 접수 제한</td>
          <td><input type="text" name="" id="" v-model="dayLimit"></td>
          <td class="tableHead">연령 타겟</td>
          <td>
            <input type="radio" name="tagetAge" id="tagetAgeY" v-model="ageTarget" value="N"><label for="tagetAgeY">나이제한 없음</label>
            <input type="radio" name="tagetAge" id="tagetAgeN" v-model="ageTarget" value="Y"><label for="tagetAgeN">나이제한 있음</label>
            <input type="text" name="tagetAge" class="tagetAge" id="fromAge" v-model="ageTargetFrom"> ~ 
            <input type="text" name="tagetAge" class="tagetAge" id="toAge" v-model="ageTargetTo">
          </td>
        </tr>
        <tr>
          <td class="tableHead">필수 키워드</td>
          <td colspan="3"><input type="text" name="" id="" v-model="reqWordCond"></td>
        </tr>
        <tr>
          <td class="tableHead">진행(선호) 채널</td>
          <td colspan="3" class="chooseCheck">



          <div class="checkingBox">
            <input type="checkbox" id="prohibitAll"
            :checked="banChannelAll"
            @click="BanChannelAll()"><label for="prohibitAll">전체</label>
          </div>

          <div class="checkingBox"
            v-for="(banChannel, index) in banChannelObj"
            :key="index"
            @click="BanChannelOne(index)"
          >

            <input 
              type="checkbox" 
              :checked="banChannel.flag"
            ><label for="">{{ banChannel.codeNm }}</label>            
          </div>




          </td>
        </tr>
        <tr>
          <td class="tableHead">금지 채널</td>
          <td colspan="3" class="chooseCheck">

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
          <td class="tableHead">금지 이미지</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">금지 키워드</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>



          <!-- 무효조건 관련-->

          <td class="tableHead">무효 조건</td>
          <td colspan="3">

            <div class="checkingBox nullify"
              v-for="(nullifyCond, index) in nullifyCondObj"
              :key="index"
            >

              <input
                type="checkbox" 
                name ="cancleCond"
              ><label for="cancleCond">{{ nullifyCond.codeNm }}</label>            
            </div>
            <input type="text" id="cancleCondEtc">
            
          </td>












        </tr>
        <tr>
          <td class="tableHead">취소 조건</td>
          <td><input type="text" name="" id="" v-model="cancelCond"></td>
          <td class="tableHead">자동화 확정 일수</td>
          <td>
            <input type="radio" name="confirmDate" id="date7" v-model="autoConfirm" value="day7"><label for="date7">7일</label>
            <input type="radio" name="confirmDate" id="date15" v-model="autoConfirm" value="day15"><label for="date15">15일</label>
            <input type="radio" name="confirmDate" id="dateETC" v-model="autoConfirm" value="dayEtc"><label for="dateETC">기타(협의 필요) <input type="text" name="" id="dateETC2"></label>
          </td>
        </tr>
        <tr>
          <td class="tableHead">외부 입력 사용</td>
          <td>
            <input type="radio" name="cpa" id="cpaY"><label for="cpaY">예</label>
            <input type="radio" name="cpa" id="cpaN"><label for="cpaN">아니오</label>
          </td>
          <td class="tableHead">기타자료</td>
          <td>기타자료는 홍보자료실에 등록 바랍니다</td>
        </tr>
        <tr>
          <td class="tableHead">기타</td>
            <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
      </table>
    </div>
    
    <p class="lendLabel">랜딩페이지 보유 여부</p>
    <input type="radio" name="lendPage" id="lendPageY"><label for="lendPageY">페이지 보유</label>
    <input type="radio" name="lendPage" id="lendPageN"><label for="lendPageN">페이지 미보유</label>
    <div class="lend tableBox">
      <table>
        <tr class="lendOwn">
          <td class="tableHead" rowspan="2">랜딩페이지 보유</td>
          <td class="tableMiddleRight">랜딩 URL</td>
          <td class="tableMiddleLeft" colspan="2">
            <input type="text" name="" id=""> 
          </td>
        </tr>
        <tr class="lendOwn">
          <td colspan="2">외부입력 폼 제공
            <input type="radio" name="" id=""><label for="">예</label>
            <input type="radio" name="" id=""><label for="">아니오</label>
          </td>
          <td class="gideBtn">
            <button id="popUP01">픽셀,스크립트 설치 가이드 보기</button>
            <button id="popUP02">랜딩 픽셀,스크립트 설치 요청하기</button>
          </td>
        </tr>
        <tr class="lendNotOwn">
          <td class="tableHead" rowspan="4">랜딩페이지 미보유</td>
          <td class="tableMiddleRight">참고 URL</td>
          <td class="tableMiddleLeft" colspan="2">
            <input type="text" name="" id="">
          </td>
        </tr>
        <tr class="lendNotOwn">
          <td class="tableMiddleRight">참고이미지</td>
          <td class="tableMiddleLeft" colspan="2">
            <input id="etcImages" class="upload_name" value="" disabled="disabled">
            <label for="referFile">이미지 등록하기 <i class="fas fa-plus"></i></label> 
            <input type="file" accept="" id="referFile" class="upload_hidden">
          </td>
        </tr>
        <tr class="obscured lendNotOwn">
          <td colspan="3"></td>
        </tr>
        <tr class="lendNotOwn">
          <td colspan="3" class="tableMiddle" d>
            <input type="checkbox" name="" id=""><label for="">이름</label>
            <input type="checkbox" name="" id=""><label for="">전화번호</label>
          </td>
        </tr>
      </table>
    </div>
    <div class="submitBtn">
      <button @click="createCampaign()"> 등록하기 </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  // 
  data() {
    return {
      adKind: '',             // 캠페인 종류
      adArea: '',             // 광고지역
      adAreaEtc: '',          // 기타지역
      adSrtDt: new Date().toISOString().substr(0, 10),            // YYYYMMDD
      adSrtTm: '',            // HHMMSS
      adEndDt: new Date().toISOString().substr(0, 10),            // YYYYMMDD
      adEndTm: '',            // HHMMSS
      adPurpose: '',          // 캠페인 목적
      adPurposeObj: '',       // 캠페인 목적 객체
      adTopKind: '',          // 캠페인 1차 분류 
      adMiddleKind: '',       // 캠페인 2차 분류
      adTopKindObj: '',       // 캠페인 1차 분류 객체
      adMiddleKindObj: '',    // 캠페인 2차 분류 객체

      adName: '',             // 캠페인 명
      adComment: '',          // 캠페인 내용
      adUsp: '',              // 광고 이벤트설정
      smsYn: '',             // DB 접수 시 SMS 수신 여부 Y
      smsNo: '',              // DB 접수 시 SMS 수신 여부
      adPrice: '',            // 캠페인 단가
      adPromotionPrice: '',   // 캠페인 프로모션 단가
      adMinQty: '',           // 캠페인 최소 수량
      dayLimit: '',           // 일별 DB 접수 제한 건수
      approval: '',           // 승인률
      ageTarget: '',          // 연령 타겟 {from:"", to: ""}
      ageTargetFrom: '',      // from
      ageTargetTo: '',        // to
      reqWordCond: '',        // 필수 키워드
      
      banChannel: '',         // 선호채널
      banChannelObj: '',      // 선호채널 객체
      banChannelAll: true,        // 전체선택체크박스
      banExChannel: '',       // 금지채널
      banExChannelObj: '',    // 금지채널
      banWordCond: '',        // 금지단어
      
      nullifyCond:'',         // 무효조건
      nullifyCondObj:'',      // 무효조건 객체
      cancelCond: '',         // 취소조건
      autoConfirm: '',        // 자동확정일수





      landingPageTitle: '',   // DB 접수 시 SMS 수신 번호
      landingUrl: '',         // 캠페인 단가

      apdText1: String,
      apdText2: String,
      apdText3: String,
    }
  },
  methods: {
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
          this.banChannelObj = response.data;
        }
        else {
          this.banExChannelObj = response.data;

          for(let i = 0 ; i < this.banExChannelObj.length; i++) {
            this.banExChannelObj[i].flag = false;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })
    },

    getCommonByTp0017() {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
      {
        params: {
          tp: '0017'
        }
      })
      .then(response => {
        if(response.data.length > 0) {
          for( let i = 0 ; i < this.nullifyCondObj.length ; i++) {
            this.nullifyCondObj = response.data;
          }
        }
        
      })
      .catch(error => {
        console.log(error);
      })
    },

    BanChannelAll() { // 전체 선택 함수
      if(this.banChannelAll == true) {
        
        for( let i = 0 ; i < this.banChannelObj.length ; i++) {
          this.banChannelObj[i].flag = false;
        }

        this.banChannelAll = false;

      }
      else {
        for( let i = 0 ; i < this.banChannelObj.length ; i++) {
          this.banChannelObj[i].flag = true;
          this.banExChannelObj[i].flag = false;
        }

        this.banChannelAll = true;
      }
    },
    BanChannelOne(index) { // 개별 선택 시 전체선택 값에 대한 함수
      if(this.banChannelObj[index].flag == true) {
        this.banChannelObj[index].flag = false;
        this.banChannelAll = false;        
      }
      else {
        let bFlag = true;
        this.banChannelObj[index].flag = true;

        for( let i = 0 ; i < this.banChannelObj.length ; i++) {
          if( this.banChannelObj[i].flag == false) {
            bFlag = false;
          }
        }

        if( bFlag == true) {
          this.banChannelAll = true;
        }        
      }

      if( this.banChannelObj[index].flag == true) {
        this.banExChannelObj[index].flag = false;
      }
    },
    BanExChannelOne(index) {
      this.banExChannelObj[index].flag == false 
      ? this.banExChannelObj[index].flag = true 
      : this.banExChannelObj[index].flag = false;

      if( this.banExChannelObj[index].flag == true ) {
        this.banChannelObj[index].flag = false;
        this.banChannelAll = false;
      }    
    },














    createCampaign() {
      //------------------------------------------------------------------------------
      // 날짜에서 2021-12-03 에서 '-'를 제거한다. 예) 2021-12-03 -> 20211203
      //------------------------------------------------------------------------------
      this.adSrtDt = this.adSrtDt.replace(/-/gi,"", (match) => {
        return '' + match + '';
      });
      this.adEndDt = this.adEndDt.replace(/-/gi,"", (match) => {
        return '' + match + '';
      });

      //------------------------------------------------------------------------------
      // 진행(선호)채널에서 선택한 코드만 Array로 담아 전송.
      //------------------------------------------------------------------------------
      console.log("Step 00");
      for(let i = 0 ; i < this.banChannelObj.length; i++) {
        console.log("Step 01");
        if( this.banChannelObj[i].flag == true) {
          console.log("banChannelObj["+i+"].flag : [" + this.banChannelObj[i].flag + "]");
        }
        console.log("Step 02");
      }
      console.log("Step 03");

    
/*
      let arr3 = this.banChannelObj.map((currValue) => {
        if( currValue.flag == true){
          return currValue.code;
        }
      })
*/
      const arr3 = this.banChannelObj.filter((currValue) => {
          return currValue.flag == true
      })

      console.log("arr3 : " + JSON.stringify(arr3));
      console.log("arr3 : " +arr3[0].code);

  




      axios.get("http://api.adinfo.co.kr:30000/manage/newcampaign", {
        params: {
              adKind: 'CPA'
            , adArea: '00000'
            , adSrtDt: this.adSrtDt
            , adSrtTm: this.adSrtTm
            , adEndDt: this.adEndDt
            , adEndTm: this.adEndTm
            , adPurpose: this.adPurpose
            , adMiddleKind: this.adMiddleKind
            , adName: this.adName           
            , adComment: this.adComment     
            , adUsp: this.adUsp         
            , smsYn: this.smsYn         
            , smsNo: this.smsNo         
            , adPrice: this.adPrice     
            , adPromotionPrice: this.adPromotionPrice 
            , adMinQty: this.adMinQty                
            , dayLimit: this.dayLimit         
            , approval: this.approval         
            , ageTarget: this.ageTarget       
            , ageTargetFrom: this.ageTargetFrom
            , ageTargetTo: this.ageTargetTo
            , reqWordCon: this.reqWordCond    
            , banChannel: this.banChannel     
            , banExChannel: this.banExChannel 
            , banWordCond: this.banWordCond   
            , nullifyCond: this.nullifyCond   
            , cancelCond: this.cancelCond     
            , autoConfirm: this.autoConfirm   
        }
      })
      .then(response => {
        console.log(response);        
      })
      .catch(error => {
        console.log(error);
      })
    },
















  },
  watch: {

  },
  created() {
    this.getCommonByTp0000();
    this.getCommonByTp0005();
    this.getCommonByTp0015(1);
    this.getCommonByTp0015(2);
    this.getCommonByTp0017();
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
    height: 182px;
    background: #fff;
    padding: 19px;
    border-radius: 10px;
    border: solid 1px #e5e5e5;
  }

  .chooseArea,
  .chooseExcept,
  .chooseDate  {
    float: left;
  }

  .chooseArea P,
  .chooseExcept p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 11px;
    color: #444;
  }

  .chooseArea,
  .chooseExcept {
    margin-right: 2%;
    width: 26%;
    height: 100%;
  }

  .chooseArea p span {
    color: #666;
  }
  
  /* 지역 추가하기 버튼 */

  .chooseArea>span,
  .chooseExcept>span{
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid #e5e5e5;
    margin: 0 6px 6px 0;
    border-radius: 20px;
  }

  .chooseBtn button{
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
    margin-top: 7px;
  }

  .chooseDate input[type="date"] {
    width: 57%;
  }

  .chooseDate #startDate2,
  .chooseDate #closeDate2{
      width: 37%;
  }

  .camBox {
    width: 30%;
    margin-right: 2%;
  }

  .chooseDate select option{
    padding: 5px 10px;
    border-radius: 10px;
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
    color: #444;

  }


  .container .notice td {
    height: 183px;
  }

  .container .tableBox input[type="text"],
  #camContents {
    width: 100%;
    height: 100%;
    padding: 5px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }

  #camContents {
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


  .container .tableBox .upload_name + label >i {
    font-size: 12px;
    color: #e25b45;
    vertical-align: middle;
  }

  .container .tableBox .upload_name + label:hover {
    background: #eb8e80;
    color: #fff;
  }

  /* 이미지 등록하기 버튼  끝*/
  .container .tableBox input[type="radio"] {
    width: 10px;
    height: 10px;
    margin: 0 5px 0 15px;
    transform: translateY(1px);
  }

  .promotion table td:nth-child(2) {
    width: 530px;
  }

  .container .tableBox input[type="text"]#phoneNum
   {
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



  .container .tableBox input[type="text"].tagetAge,
  .container .tableBox input[type="text"]#dateETC2   {
    width: 80px;
    height: 100%;
    margin: 0 15px;
    text-align: right;
    padding: 0 10px;
  }


  .container .tableBox input[type="text"]#dateETC2 {
    width: 60px;
  }

  .container .tableBox .nullify{
    transform: translateY(6px);
  }

  .container .tableBox input[type="text"]#cancleCondEtc
  {
    width: 150px;
    height: 100%;
    margin: 0 5px;
    padding: 0 10px;
  }

  .container .tableBox .checkingBox{
    float: left;
  }

  .container .tableBox input[type="checkbox"] {
    margin: 0 5px;
    transform: translateY(2px);
  }

  .container .tableBox input[type="checkbox"] + label {
    margin-right: 10px;
  }

  .container .tableBox .obscured{
    display: none;
  }

  .gideBtn {
    width: 410px;
  }
  .container .tableBox .tableMiddleRight {
    width: 83px;
    border-right: none;
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

  .container .submitBtn{
    text-align: center;
  }

  .container .submitBtn button{
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
