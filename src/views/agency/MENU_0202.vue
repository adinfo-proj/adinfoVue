<template>
  <div class="container"> 
    <!-- 1400*1140 -->
    <div class="tap"> <!-- 추후 각 a태그 별 변수 지정-->
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
            <input type="date" id="startDate1" v-model="theDate">
            <select name="" id="startDate2">
              <option value="time00">00</option>
              <option value="time01">01</option>
              <option value="time02">02</option>
              <option value="time03">03</option>
              <option value="time04">04</option>
              <option value="time05">05</option>
              <option value="time06">06</option>
              <option value="time07">07</option>
              <option value="time08">08</option>
              <option value="time09">09</option>
              <option value="time10">10</option>
              <option value="time11">11</option>
              <option value="time12">12</option>
              <option value="time13">13</option>
              <option value="time14">14</option>
              <option value="time15">15</option>
              <option value="time16">16</option>
              <option value="time17">17</option>
              <option value="time18">18</option>
              <option value="time19">19</option>
              <option value="time20">20</option>
              <option value="time21">21</option>
              <option value="time22">22</option>
              <option value="time23">23</option>
            </select>
          </div>
          <div>
            <label for="closeDate">광고 종료일시<br></label>
            <input type="date" id="closeDate1" v-model="theDate">
            <select name="" id="closeDate2">
              <option value="time00">00</option>
              <option value="time01">01</option>
              <option value="time02">02</option>
              <option value="time03">03</option>
              <option value="time04">04</option>
              <option value="time05">05</option>
              <option value="time06">06</option>
              <option value="time07">07</option>
              <option value="time08">08</option>
              <option value="time09">09</option>
              <option value="time10">10</option>
              <option value="time11">11</option>
              <option value="time12">12</option>
              <option value="time13">13</option>
              <option value="time14">14</option>
              <option value="time15">15</option>
              <option value="time16">16</option>
              <option value="time17">17</option>
              <option value="time18">18</option>
              <option value="time19">19</option>
              <option value="time20">20</option>
              <option value="time21">21</option>
              <option value="time22">22</option>
              <option value="time23">23</option>
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
                  :value="adIndex.code"
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
          <td><input type="text" class="camName"></td>
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
          <td><textarea name="" id="camContents"></textarea></td>
          <!-- cols="30" rows="10" -->
        </tr>
        <tr>
          <th>광고 USP 설정</th>
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
    <div class="promotion tableBox">
      <table>
        <tr>
          <td class="tableHead">캠페인 단가</td>
          <td><input type="text" name="" id=""></td>
          <td class="tableHead">캠페인 프로모션 단가</td>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">수량</td>
          <td><input type="text" name="" id=""></td>
          <td class="tableHead">승인률</td>
          <td><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">일별 DB 접수 제한</td>
          <td><input type="text" name="" id=""></td>
          <td class="tableHead">연령 타겟</td>
          <td>
            <input type="radio" name="tagetAge" id="tagetAgeY"><label for="tagetAgeY">나이제한 없음</label>
            <input type="radio" name="tagetAge" id="tagetAgeN"><label for="tagetAgeN">나이제한 있음</label>
            <input type="text" name="tagetAge" class="tagetAge" id="fromAge"> ~ 
            <input type="text" name="tagetAge" class="tagetAge" id="toAge">
          </td>
        </tr>
        <tr>
          <td class="tableHead">필수 키워드</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">금지 채널</td>
          <td colspan="3" class="chooseCheck">
            <input type="checkbox" name="naverSearch" id="naverSearch" ><label for="naverSearch">네이버 검색</label>
            <input type="checkbox" name="naverCafe" id="naverCafe"><label for="naverCafe">네이버 카페</label>
            <input type="checkbox" name="naverBand" id="naverBand" ><label for="naverBand">네이버 밴드</label>
            <input type="checkbox" name="naverGfa" id="naverGfa" ><label for="naverGfa">네이버 GFA</label>
            <input type="checkbox" name="googleGdn" id="googleGdn" ><label for="googleGdn">구글 GDN</label>
            <input type="checkbox" name="mediaPress" id="mediaPress" ><label for="mediaPress">언론미디어</label>
            <input type="checkbox" name="blog" id="blog" ><label for="blog">블로그</label>
            <input type="checkbox" name="daumCafe" id="daumCafe" ><label for="daumCafe">다음 카페</label>
            <input type="checkbox" name="facebook" id="facebook" ><label for="facebook">페이스북</label>
            <input type="checkbox" name="insta" id="insta" ><label for="insta">인스타그램</label>
            <input type="checkbox" name="kakao" id="kakao" ><label for="kakao">카카오</label>
          </td>
        </tr>
        <tr>
          <td class="tableHead">금지 이미지</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">금지 단어</td>
          <td colspan="3"><input type="text" name="" id=""></td>
        </tr>
        <tr>
          <td class="tableHead">무효 조건</td>
          <td colspan="3">
            <input type="checkbox" name="cancle01" id="cancle01" ><label for="cancle01">결번</label>
            <input type="checkbox" name="cancle02" id="cancle02"><label for="cancle02">중복</label>
            <input type="checkbox" name="cancle03" id="cancle03" ><label for="cancle03">외국인</label>
            <input type="checkbox" name="cancle04" id="cancle04" ><label for="cancle04">미성년자</label>
          </td>
        </tr>
        <tr>
          <td class="tableHead">취소 조건</td>
          <td><input type="text" name="" id=""></td>
          <td class="tableHead">자동화 확정 일수</td>
          <td>
            <input type="radio" name="confirmDate" id="date7"><label for="date7">7일</label>
            <input type="radio" name="confirmDate" id="date15"><label for="date15">15일</label>
            <input type="radio" name="confirmDate" id="dateETC"><label for="dateETC">기타(협의 필요) <input type="text" name="" id="dateETC2"></label>
          </td>
        </tr>
        <tr>
          <td class="tableHead">외부 입력 사용</td>
          <td>
            <input type="radio" name="cpa" id="cpaY"><label for="cpaY">네</label>
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
    <div class="lend tableBox">
      <table>
        <tr>
          <td class="tableHead" rowspan="2">랜딩페이지 보유</td>
          <td class="tableMiddle">랜딩 URL</td>
          <td colspan="2">
            <input type="text" name="" id="">
          </td>
        </tr>
        <tr>
          <td colspan="2">외부입력 폼 제공
            <input type="radio" name="" id=""><label for="">예</label>
            <input type="radio" name="" id=""><label for="">아니오</label>
          </td>
          <td class="gideBtn">
            <button id="popUP01">픽셀,스크립트 설치 가이드 보기</button>
            <button id="popUP02">랜딩 픽셀,스크립트 설치 요청하기</button>
          </td>
        </tr>
        <tr>
          <td class="tableHead" rowspan="4">랜딩페이지 미보유</td>
          <td class="tableMiddle">참고 URL</td>
          <td colspan="2">
            <input type="text" name="" id="">
          </td>
        </tr>
        <tr>
          <td class="tableMiddle">참고이미지</td>
          <td colspan="2">
            <input id="etcImages" class="upload_name" value="" disabled="disabled">
            <label for="referFile">이미지 등록하기 <i class="fas fa-plus"></i></label> 
            <input type="file" accept="" id="referFile" class="upload_hidden">
          </td>
        </tr>
        <tr class="obscured">
          <td colspan="3"></td>
        </tr>
        <tr>
          <td colspan="3" class="tableMiddle" d>
            <input type="checkbox" name="" id=""><label for="">이름</label>
            <input type="checkbox" name="" id=""><label for="">전화번호</label>
          </td>
        </tr>
      </table>
    </div>
    <div class="submitBtn">
      <button > 등록하기 </button>
    </div>

  </div>
</template>

<script>
import axios from "axios";


export default {
  // 
  data() {
    return {
      adKind: String,             // 캠페인 종류
      adArea: Object,             // 광고지역
      adAreaEtc: String,          // 기타지역
      theDate: new Date().toISOString().substr(0, 10), // 오늘날짜 표기
      adSrtDt: String,            // YYYYMMDD
      adSrtTm: String,            // HHMMSS
      adEndDt: String,            // YYYYMMDD
      adEndTm: String,            // HHMMSS
      adPurpose: String,          // 캠페인 목적
      adPurposeObj: Object,       // 캠페인 목적 객체
      adTopKind: String,          // 캠페인 1차 분류 
      adMiddleKind: String,       // 캠페인 2차 분류
      adTopKindObj: Object,       // 캠페인 1차 분류 객체
      adMiddleKindObj: Object,    // 캠페인 2차 분류 객체
      adName: String,             // 캠페인 명
      adComment: String,          // 캠페인 내용
      adUsp: String,              // 광고 이벤트설정
      smsYn: Boolean,             // DB 접수 시 SMS 수신 여부 Y
      smsNo: String,              // DB 접수 시 SMS 수신 여부
      landingPageTitle: String,   // DB 접수 시 SMS 수신 번호
      landingUrl: String,         // 캠페인 단가
      adPrice: String,            // 캠페인 프로모션 단가
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
    getPurposeByTp () { // 캠페인 목적
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
    getCommonByTp () { // 캠페인 분류
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
    firstComboChg(code) {
      axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonCodeByCode", 
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
    }
  },
  created() {
    this.getCommonByTp();
    this.getPurposeByTp();
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

  .container .tableBox input[type="text"].tagetAge,
  .container .tableBox input[type="text"]#dateETC2 {
    width: 80px;
    height: 100%;
    margin: 0 15px;
    text-align: right;
    padding: 0 10px;
  }

  .container .tableBox input[type="text"]#dateETC2 {
    width: 60px;
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

  .container .tableBox td.tableMiddle {
    width: 83px;
    border-right: none;
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
    border: none;
  }


</style>
