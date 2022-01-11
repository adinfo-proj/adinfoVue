<template>
	<div class="container">
		<div class="campanignSearch">
			<select name="camName" id="camName" v-model="campSelect" @change="campaignListChange(campSelect)">
				<option v-for="(campaignNameList, index) in campaignNameListObj"
					:key="index" 
					:value="campaignNameList.caId"
					>{{ campaignNameList.name }}
				</option>
			</select>
      <input type="radio" name="searchDay" id="searchToday"     class="searchSubDate" @click="ChangeDateRange(1)" checked> <label for="searchToday">오늘</label>
      <input type="radio" name="searchDay" id="searchYesterday" class="searchSubDate" @click="ChangeDateRange(2)"> <label for="searchYesterday">어제</label>
      <input type="radio" name="searchDay" id="searchThreeDay"  class="searchSubDate" @click="ChangeDateRange(3)"> <label for="searchThreeDay">3일</label>
      <input type="radio" name="searchDay" id="searchSevenDay"  class="searchSubDate" @click="ChangeDateRange(4)"> <label for="searchSevenDay">7일</label>
			<input type="radio" name="searchDay" id="searchthirtyDay" class="searchSubDate" @click="ChangeDateRange(5)"> <label for="searchthirtyDay">30일</label>
      <input type="radio" name="searchDay" id="searchYear"      class="searchSubDate" @click="ChangeDateRange(0)"> <label for="searchYear">1년</label>
			조회기간
      <input type="date" id="searchStartDate1" v-model="serchDataFromDt"> ~ 
      <input type="date" id="searchEndDate1"   v-model="serchDataToDt">
			<button class="searchDateBtn" @click="getCampaignFullData(1, true)">조회</button>
		</div>
		<div class="dailyDataBox">
			<div class="dailyDataMiddle"><h2 class="dataEm">{{topArrayListObj.maketerCount  }} 3    </h2><p>랜딩페이지 수</p></div>
			<div class="dailyDataMiddle"><h2>               {{topArrayListObj.todayDbCount  }} 122건</h2><p>DB 접수 건수</p></div>
			<div class="dailyDataMiddle"><h2 class="dataEm">{{topArrayListObj.validDbCount  }} 325건</h2><p>DB 노출 건수</p></div>
			<div class="dailyDataMiddle"><h2               >{{topArrayListObj.invalidDbCount}} 135건</h2><p>클릭 건수</p></div>
      <div class="dailyDataMiddle"><h2 class="dataEm">{{topArrayListObj.allDupDBCount }} 35%  </h2><p>광고주 단가 (합계)</p></div>
			<div class="dailyDataMiddle"><h2               >{{topArrayListObj.clickPer      }} 15초 </h2><p>마케터 단가 (합계)</p></div>
		</div>
		<div class="dailyDataSub">
      <div class="dailyDataTop">
        <div class="dailyTab">
          <div class="dailyTabBtn" v-bind:class="{on : 0 == divSelect}">DB 유입 정보</div>
        </div>
        <div class="dailyEx">
          <button @click="makeExcel">
            엑셀 다운로드
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="12" viewBox="0 0 11 12">
              <image id="icon" width="11" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAABHNCSVQICAgIfAhkiAAAAGxJREFUKFNj/P//PwM6eBzjBhJklF2yC0WKcSgrhnoK5CFGIAZ7EEozAD0KYjPAPQhUDOJjBg1EE0gDhmJ0DWCFGIpBAlDTYRrgJsI0MD6Kdv0PcxNMMchKZDbUoP8oitFMh1uPohgjvnEIAACmsll1nvDKAQAAAABJRU5ErkJggg=="/>
            </svg>
          </button>
          <select name="" id="" v-model="selectRowCount" @change="getCampaignFullData(1, true)">
            <option value="10" >10개</option>
            <option value="20" >20개</option>
            <option value="30" >30개</option>
            <option value="50" >50개</option>
            <option value="100">100개</option>
          </select>
        </div>
      </div>
			<div class="dailySub">
				<table class="dailySubTable" v-bind:class="{on : 0 == divSelect}">
					<thead>
						<tr>
							<th class="dailyNum"   >번호</th>
							<th class="dailyName"  >캠페인명</th>
							<th class="maketerCode">랜딩페이지명</th>
							<th class="inTime"     >유입 시간</th>
							<th class="inIP"       >접수 IP</th>
							<th class="dbState"    >광고주단가</th>
							<th class="dbPrice"    >마케터단가</th>
							<th class="inData"     >메모</th>
						</tr>
					</thead>
					<tbody v-for="(campaignFullData, index) in campaignFullDataObj"
						:key="index"
          >
						<tr class="viewTr" @click="DbData(index)" v-bind:class="{dbSelect : index == dbSelectData}">
							<th class="dailyNum"   >{{ campaignFullData.seqNo   }}</th>
							<td class="dailyName"  >{{ campaignFullData.caName  }}</td>
							<td class="maketerCode">{{ campaignFullData.mkId    }}</td>
							<td class="inTime"     >{{ campaignFullData.insDt   }} {{campaignFullData.insTm}}</td>
							<td class="inIP"       >{{ campaignFullData.regIp   }}</td>
							<td class="dbPrice"    >{{ campaignFullData.price   }} 원</td>
							<td class="dbPrice"    >{{ campaignFullData.mkPrice }} 원</td>
							<td class="inData"     >승인 대기중
                <i class="fas fa-chevron-down"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : index == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>입력 데이터</h6>
                    <div>
                      <table>
                        <tr>
                          <th>{{ askList[0] }}</th>
                          <td>{{ campaignFullData.value01 }}</td>
                          <th>{{ askList[1] }}</th>
                          <td>{{ campaignFullData.value02 }}</td>
                          <th>{{ askList[2] }} </th>
                          <td colspan="3">{{ campaignFullData.value03 }}</td>
                        </tr>
                        <tr>
                          <th>{{ askList[3] }}</th>
                          <td>{{ campaignFullData.value04 }}</td>
                          <th>{{ askList[4] }}</th>
                          <td>{{ campaignFullData.value05 }}</td>
                          <th>{{ askList[5] }} </th>
                          <td colspan="3">{{ campaignFullData.value06 }}</td>
                        </tr>
                        <tr>
                          <th>{{ askList[6] }}</th>
                          <td>{{ campaignFullData.value07 }}</td>
                          <th>{{ askList[7] }}</th>
                          <td>{{ campaignFullData.value08 }}</td>
                          <th>{{ askList[8] }} </th>
                          <td colspan="3">{{ campaignFullData.value09 }}</td>
                        </tr>
                        <tr>
                          <th>{{ askList[9] }}</th>
                          <td>{{ campaignFullData.value10 }}</td>
                          <th>메모 </th>
                          <td colspan="3">{{ campaignFullData.value07 }}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div class="payData">
                    <h6>고객 추가정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>유입채널</th>
                          <td>••••</td>
                          <th>접수지역</th>
                          <td>••••</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">•••••</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">•••••</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">••••{••••}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
					</tbody>
          <tfoot>
            <tr>
              <td class="dataBtn" colspan="8">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getCampaignFullData(curPage - 1, false)"><i class="fas fa-angle-left"></i></span>
                <div class="pageNum">
                  <ul>
                    <li class="pageBtn" 
                      v-bind:class="{on : (indexPage) == curPage}" 
                      v-for="(indexPage, index) in pageCount" :key="index" 
                      @click="getCampaignFullData(pageCount[0] + index, false)"
                    >
                      {{indexPage}}
                    </li>
                  </ul>
                </div>
                <span class="pageright" v-if="pageCount.length > 0" @click="getCampaignFullData(curPage + 1, false)"><i class="fas fa-angle-right"></i></span>
              </td>
            </tr>
          </tfoot>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import XLSX  from 'xlsx';

	export default {
		data() {
			return {
					serchDataFromDt: this.$DateAdd(0) 
				, serchDataToDt: this.$DateAdd(0)
				, topArrayListObj: ''
				, selectRowCount: 10
				, pageCount: []
				, curPage: 0
				, divSelect: 0
				, dbSelectData: null
				, campaignNameListObj: ''
				, campaignFullDataObj: ''
				, campSelect: 1000
        , roundCount: 0
        , curRunTotalPages: 100000000
				, askList: ''
			}
		},
		methods: {
			//******************************************************************************
			// 
			//******************************************************************************
			DbData(pos) {
				if(this.dbSelectData == pos) {
					this.dbSelectData = null;
					return;
				}

				this.dbSelectData = pos;
			},
			//******************************************************************************
			// 수집항목 목록
			//******************************************************************************
			getCampaignNameLst() {
				axios.get("http://api.adinfo.co.kr:30000/GetCampaignNameLst", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
					}
				})
				.then(response => {
					this.campSelect = response.data[0].caId;
					this.campaignNameListObj = response.data;
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 상단 합산 정보 조회
			//******************************************************************************
			getCampaignTopLst() {
        // axios.get("http://api.adinfo.co.kr:30000/DataCenter/TopSummary", 
        // {
        //   params: {
        //       mbId: this.$store.state.mbId
        //     , adId: this.$store.state.adId
        //     , caId: this.campSelect
        //     , endDt: this.serchDataToDt
        //   }
        // })
        // .then(response => {
        //   this.topArrayListObj = response.data;
        // })
        // .catch(error => {
        //   console.log(error);
        // })
			},
			//******************************************************************************
			// 수집항목 목록
			//******************************************************************************
			getCampaignFullData(selectPage, firstSel) {
        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.dbSelectData = null;
				this.curPage = selectPage;

				axios.get("http://api.adinfo.co.kr:30000/GetCpaDataForAll",
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
						, caId: this.campSelect
						, mkId: 0
						, srtDt: this.serchDataFromDt
						, endDt: this.serchDataToDt
						, curPage: selectPage
						, rowCount: this.selectRowCount
					}
				})
				.then(response => {
          // 참고해야 할 곳!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
					this.askList = response.data[0][0].askList.split(',');
					this.campaignFullDataObj = response.data[1];

					//------------------------------------------------------------------------------
					// 페이지 정보 조회
					//------------------------------------------------------------------------------
					axios.get("http://api.adinfo.co.kr:30000/GetCpaDataForAllPageCount", 
					{
						params: {
								mbId: this.$store.state.mbId
							, adId: this.$store.state.adId
							, caId: this.campSelect
							, mkId: 0
							, srtDt: this.serchDataFromDt
							, endDt: this.serchDataToDt
							, curPage: selectPage
							, rowCount: this.selectRowCount
						}
					})
					.then(response => {
            let arrGab = [];
            let pageUpPage = 0;

            // 전체 페이지의 수를 확인한다.
            this.curRunTotalPages = Math.ceil(response.data.rowTotalCount / this.selectRowCount);

            // 페이지가 10개 이하이면...
            if( this.curRunTotalPages < 10) {
              for(let i = 0; i < this.curRunTotalPages; i++) {
                arrGab.push(i+1);
              }
              this.pageCount = arrGab;
              return;
            }

            //--------------------------------------------------------------------
            // 10페이지 이하면 10으로 나눴을때 0이 되어 따로 처리함.
            //--------------------------------------------------------------------
            let pageCut = Math.floor((selectPage) / 10) * 10;

            if( (selectPage % 10) == 0 ) {
              return;
            }

            let nLoop = 0;
            for(let i = pageCut; i < this.curRunTotalPages; i++) {
              if( (nLoop+pageUpPage) >= 10 + pageUpPage)
                break;
              arrGab.push(i+1);
              nLoop++;
            }

            this.pageCount = arrGab;
					})
					.catch(error => {
						console.log(error);
					})
				})
				.catch(error => {
					console.log(error);
				})
			},
			campaignListChange(index) {
				this.campSelect = index;
				this.getCampaignTopLst();
				this.getCampaignFullData(1, true);
			},
			ChangeDateRange(pos) {
				if(pos == 0) {
					this.serchDataFromDt = this.$DateAdd(-364);
					this.serchDataToDt   = this.$DateAdd(0);
				}
				else if(pos == 1) {
					this.serchDataFromDt = this.$DateAdd(0);
					this.serchDataToDt   = this.$DateAdd(0);
				}
				else if(pos == 2) {
					this.serchDataFromDt = this.$DateAdd(-1);
					this.serchDataToDt   = this.$DateAdd(-1);
				}
				else if(pos == 3) {
					this.serchDataFromDt = this.$DateAdd(-2);
					this.serchDataToDt   = this.$DateAdd(0);
				}
				else if(pos == 4) {
					this.serchDataFromDt = this.$DateAdd(-6);
					this.serchDataToDt   = this.$DateAdd(0);
				}
				else if(pos == 5) {
					this.serchDataFromDt = this.$DateAdd(-30);
					this.serchDataToDt   = this.$DateAdd(0);
				}
				else {
					return;
				}

				this.getCampaignFullData(1, true);
			},
			makeExcel() {
				let d= new Date();
        let curDate = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(0,10).replace(/-/g, "");
				let curTime = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(11,19).replace(/:/g, "");

				var myJSON = new Array();

				for(let i = 0; i < this.campaignFullDataObj.length; i++) {
					let seqNo, caName, mkId, insDt, insTm, regIp, confirmTp, mkPrice, value01, value02, value03, value04, value05, value06, value07, value08, value09, value10;

					if(this.campaignFullDataObj[i].seqNo  == null) seqNo    = ''; else seqNo  = this.campaignFullDataObj[i].seqNo   ;
					if(this.campaignFullDataObj[i].caName == null) caName   = ''; else caName = this.campaignFullDataObj[i].caName  ;
					if(this.campaignFullDataObj[i].mkId   == null) mkId     = ''; else mkId   = this.campaignFullDataObj[i].mkId    ;
					if(this.campaignFullDataObj[i].insDt  == null) insDt    = ''; else insDt  = this.campaignFullDataObj[i].insDt   ;
					if(this.campaignFullDataObj[i].insTm  == null) insTm    = ''; else insTm  = this.campaignFullDataObj[i].insTm   ;
					if(this.campaignFullDataObj[i].regIp  == null) regIp    = ''; else regIp  = this.campaignFullDataObj[i].regIp   ;

               if(this.campaignFullDataObj[i].confirmTp == 'Z') confirmTp = '미충전';
					else if(this.campaignFullDataObj[i].confirmTp == 'N') confirmTp = '대기';
					else if(this.campaignFullDataObj[i].confirmTp == 'Y') confirmTp = '접수';
					else if(this.campaignFullDataObj[i].confirmTp == 'C') confirmTp = '취소';
					else if(this.campaignFullDataObj[i].confirmTp == 'P') confirmTp = '기타';
          else                                                  confirmTp = '미정';

					if(this.campaignFullDataObj[i].mkPrice   == null) 
						mkPrice = '0';
					else 
						mkPrice = this.campaignFullDataObj[i].mkPrice.replace(/,/g, "");

					if(this.campaignFullDataObj[i].value01 == null) value01 = ''; else value01 = this.campaignFullDataObj[i].value01;
					if(this.campaignFullDataObj[i].value02 == null) value02 = ''; else value02 = this.campaignFullDataObj[i].value02;
					if(this.campaignFullDataObj[i].value03 == null) value03 = ''; else value03 = this.campaignFullDataObj[i].value03;
					if(this.campaignFullDataObj[i].value04 == null) value04 = ''; else value04 = this.campaignFullDataObj[i].value04;
					if(this.campaignFullDataObj[i].value05 == null) value05 = ''; else value05 = this.campaignFullDataObj[i].value05;
					if(this.campaignFullDataObj[i].value06 == null) value06 = ''; else value06 = this.campaignFullDataObj[i].value06;
					if(this.campaignFullDataObj[i].value07 == null) value07 = ''; else value07 = this.campaignFullDataObj[i].value07;
					if(this.campaignFullDataObj[i].value08 == null) value08 = ''; else value08 = this.campaignFullDataObj[i].value08;
					if(this.campaignFullDataObj[i].value09 == null) value09 = ''; else value09 = this.campaignFullDataObj[i].value09;
					if(this.campaignFullDataObj[i].value10 == null) value10 = ''; else value10 = this.campaignFullDataObj[i].value10;

					let myArr = {
							'번호': seqNo
						, '캠페인명': caName
						, '마케터ID': mkId
						, '유입일자': insDt
						, '유입시간': insTm
						, '접수IP': regIp
						, 'DB상태': confirmTp
						, '단가': Number(mkPrice)
						, '입력1': value01
						, '입력2': value02
						, '입력3': value03
						, '입력4': value04
						, '입력5': value05
						, '입력6': value06
						, '입력7': value07
						, '입력8': value08
						, '입력9': value09
						, '입력10': value10
					};
					myJSON.push(myArr);
				}

				const workBook  = XLSX.utils.book_new();
				const workSheet = XLSX.utils.json_to_sheet(myJSON);
				XLSX.utils.book_append_sheet(workBook, workSheet, 'DB 집계 정보');
				// 파일명은 DB_집계정보_날짜_시간.xlsx 로 처리한다.
				XLSX.writeFile(workBook, 'DB집계정보_' + curDate + '_' + curTime + '.xlsx');
			}
		},
		created() {
			this.$store.state.headerTopTitle = "데이터 센터";
			this.$store.state.headerMidTitle = "일자별 통계";

			this.getCampaignNameLst();
//			this.getCampaignTopLst();
			this.getCampaignFullData(1, true);
		}
	}
</script>

<style scope>
  .campanignSearch {
    height: 35px;
    width: 100%;
  }
  .campanignSearch select {
    height: 100%;
    width: 256px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 9px 18px;
    margin-right: 5px;
    font-weight: 700;
  }
  .campanignSearch input[type="radio"] {
    display: none;
  }
  .campanignSearch input[type="radio"] + label {
		cursor: pointer;
    display: inline-block;
    width: 50px;
    height: 100%;
    text-align: center;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    margin-right: 5px;
    padding: 10px;
    font-weight: 700;
  }
  .campanignSearch input[type="radio"]:checked + label {
    color: #e25b45;
    border-color: #e25b45;
  }
  .campanignSearch input[type="date"] {
    width: 150px;
    height: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 10px 16px;
    margin: 0 5px;
  }
  .campanignSearch #searchStartDate1 {
    margin-left: 50px;
  }
  .campanignSearch #searchEndDate1 {
    margin-right: 10px;
  }
  .campanignSearch .searchDateBtn {
    width: 50px;
    height: 30px;
    border: 1px solid #e5e5e5;
    background: #707070;
    border-radius: 13px;
    color: #fff;
  }
  
  .dailyDataBox {
    margin-top: 10px;
    width: 100%;
    height: 81px;
    display: flex;
    justify-content: space-between;
  }
  .dailyDataBox .dailyDataMiddle {
    width: 218px;
    height: 81px;
    position: relative;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    padding: 17px;
    text-align: center;
    overflow: hidden;
  }
  .dailyDataBox .dailyDataMiddle h2,
  .dailyDataBox .dailyDataMiddle p {
    color: #222;
  }
  .dailyDataBox .dailyDataMiddle h2 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  .dailyDataBox .dailyDataMiddle h2.dataEm {
    color: #e25b45;
  }
  .dailyDataBox .dailyDataMiddle p {
    font-size: 14px;
  }
  .dailyDataBox .dailyDataMiddle .dailyFake {
    width: 100%;
    height: 100%;
    position: absolute;
    display: none;
    left: 0;
    top: 0;
    background: #ddd;
    padding: 17px;
  }
  .dailyDataBox .dailyDataMiddle .dailyFake p {
    margin-bottom: 13px;
    color: #929292;
  }
  .dailyDataSub .dailyDataTop {
    margin-top: 20px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dailyDataSub .dailyTab {
    height: 100%;
  }
  .dailyDataSub .dailyTab .dailyTabBtn {
    float: left;
    height: 100%;
    background: #e7e7e7;
    text-align: center;
    margin-right: 10px;
    padding: 18.3px 24.3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 14px;
    cursor: pointer;
  }
  .dailyDataSub .dailyTab .dailyTabBtn.on {
    font-weight: 700;
    color: #e25b45;
    background: #fff;
  }
  .dailyDataSub .dailyEx button {
    width: 139px;
    height: 33px;
    background: #fff;
    border: 1px solid #e25b45;
    color: #e25b45;
    border-radius: 10px;
    font-weight: 700;
    margin-right: 5px;
    margin-top: 1px;
  }
  .dailyDataSub .dailyEx select {
    width: 76px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-weight: 700;
  }
  .dailyDataSub .dailySub{
    border-radius: 10px;
    border-top-left-radius: 0px;
    background: #fff;
    overflow: hidden;
  }
  .dailyDataSub .dailySub .dailySubTable {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    display: none;
  }
  .dailyDataSub .dailySub .dailySubTable.on {
    display: table;
  }
  .dailyDataSub .dailySub table th,
  .dailyDataSub .dailySub table td {
    padding: 15px 18px;
  }
  .dailyDataSub .dailySub table tbody .dbState {
    padding: 9px 18px;
  }
  .dailyDataSub .dailySub table thead th {
    position: relative;
    border-bottom: 1px solid #5c5c5c;
  }
  .dailyDataSub .dailySub table tbody tr {
    border-bottom: 1px solid #ececec;
  }
  .dailyDataSub .dailySub table .dailyNum {
    width: 65px;
  }
  .dailyDataSub .dailySub table .dailyName {
    width: 155px;
  }
    .dailyDataSub .dailySub table .maketerCode {
    width: 143px;
  }
  .dailyDataSub .dailySub table .inTime {
    width: 197px;
  }
  .dailyDataSub .dailySub table .inIP {
    width: 200px;
  }
  .dailyDataSub .dailySub table .dbState {
    width: 150px;
  }
  .dailyDataSub .dailySub table .inData {
    width: 315px;
  }
  .dailyDataSub .dailySub table .inData i {
    float: right;
  }
  .dailyDataSub .dailySub table thead th:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  .dailyDataSub .dailySub table thead th:last-child:after {
		display: none;
	}
  .dailyDataSub .dailySub .hidetr {
    display: none;
    width: 100%;
  }
  .dailyDataSub .dailySub .hidetr .padNone {
    padding: 0;
  }
  .dailyDataSub .dailySub .viewTr{
    cursor: pointer;
  }
  .dailyDataSub .dailySub .dbSelect{
    position: relative;
  }
  .dailyDataSub .dailySub .dbSelect::after{
    position: absolute;
    width: 1357px;
    height: 272.5px;
    content: "";
    border: 1px solid #b3b3b3;
    left: 0;
    top: -0.5px;
  }
  .dailyDataSub .dailySub .dbSelect i {
    transform: rotate(180deg);
    color: #e25b45;
  } 
  .dailyDataSub .dailySub .hidetr.dbSubSelect {
    display: table-row;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox {
    display: flex;
    justify-content: space-between;
    background: #f6f6f6;
    padding: 19px 21px;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox .basicData div {
    width: 743px;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox .payData div {
    width: 555px;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox .basicData div,
  .dailyDataSub .dailySub .hidetr .dbDataBox .payData div {
    background: #fff;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    margin-top: 9px;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox .basicData table,
  .dailyDataSub .dailySub .hidetr .dbDataBox .payData table {
    border-collapse: collapse;
    border: solid 1px #e5e5e5;
    border-style: hidden;
  } 
  .dailyDataSub .dailySub .hidetr .dbDataBox h6,
  .dailyDataSub .dailySub .hidetr .dbDataBox th,
  .dailyDataSub .dailySub .hidetr .dbDataBox td {
    text-align: left;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox th,
  .dailyDataSub .dailySub .hidetr .dbDataBox td {
    border: 1px solid #e5e5e5;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox th {
    padding: 12px 0px 12px 16px;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox td {
    padding: 13px 11px;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox h6 {
    padding: 0 10px;
    position: relative;
    font-size: 14px;
    color: #444;
  }
  .dailyDataSub .dailySub .hidetr .dbDataBox h6:before{
    clear: both;
    width: 2px;
    height: 13px;
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #444;
  }
  .dailyDataSub .dailySub .hidetr .basicData th {
    width: 72px;;
  }
  .dailyDataSub .dailySub .hidetr .basicData td {
    width: 175px;
  }
  .dailyDataSub .dailySub .hidetr .payData th {
    width: 92px;;
  }
  .dailyDataSub .dailySub .hidetr .payData td {
    width: 184.5px;
  }
  .dailyDataSub .dailySub table tfoot td {
    padding: 20px 0 40px;
    text-align: center;
  }
  .dailyDataSub .dailySub table tfoot td .fas {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    font-size: 20px;
    padding: 2px 7px;
    transform: translateY(2px);
  }
  .dailyDataSub .dailySub table tfoot td .pageNum {
    display: inline-block;
  }
  .dailyDataSub .dailySub table tfoot td li {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
  }
  .dailyDataSub .dailySub table tfoot td .pageBtn{
    transform: translateY(-2px);
		cursor: pointer;
  }
  .dailyDataSub .dailySub table tfoot td li.on {
    font-weight: 900;
    position: relative;
  }
  .dailyDataSub .dailySub table tfoot td li.on:after {
    clear: both;
    position: absolute;
    height: 1px;
    width: 100%;
    content: "";
    bottom: -1px;
    left: 0;
    background: #666;
  }
</style>