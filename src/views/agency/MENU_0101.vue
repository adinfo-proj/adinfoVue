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
      <input type="radio" name="searchDay" id="searchToday" class="searchSubDate" @click="ChangeDateRange(1)" checked> <label for="searchToday">오늘</label>
      <input type="radio" name="searchDay" id="searchYesterday" class="searchSubDate" @click="ChangeDateRange(2)"> <label for="searchYesterday">어제</label>
      <input type="radio" name="searchDay" id="searchThreeDay" class="searchSubDate" @click="ChangeDateRange(3)"> <label for="searchThreeDay">3일</label>
      <input type="radio" name="searchDay" id="searchSevenDay" class="searchSubDate" @click="ChangeDateRange(4)"> <label for="searchSevenDay">7일</label>
			<input type="radio" name="searchDay" id="searchthirtyDay" class="searchSubDate" @click="ChangeDateRange(5)"> <label for="searchthirtyDay">30일</label>		
      <input type="radio" name="searchDay" id="searchYear" class="searchSubDate" @click="ChangeDateRange(0)"> <label for="searchYear">1년</label>
			조회기간
      <input type="date" id="searchStartDate1"  v-model="serchDataFromDt"> ~ 
      <input type="date" id="searchEndDate1" v-model="serchDataToDt">
			<button class="searchDateBtn" @click="getCampaignFullData(1, true)">조회</button>
		</div>
		<div class="dailyDataBox">
			<div class="dailyDataMiddle">
				<h2 class="dataEm">
          {{ topArrayListObj.maketerCount }} 3
				</h2>
				<p>
					랜딩페이지 수
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{topArrayListObj.todayDbCount}} 122건
				</h2>
				<p>
					DB 접수 건수
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2 class="dataEm">
					{{topArrayListObj.validDbCount}} 325건
				</h2>
				<p>
					DB 노출 건수
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2>
				{{topArrayListObj.invalidDbCount}} 135건
				</h2>
				<p>
					클릭 건수
				</p>
			</div>
      <div class="dailyDataMiddle">
				<h2 class="dataEm">
					{{topArrayListObj.allDupDBCount}} 35%
				</h2>
				<p>
					DB 접수율
				</p>
			</div>
			<div class="dailyDataMiddle">
				<h2>
					{{topArrayListObj.clickPer}} 15초
				</h2>
				<p>
					랜딩페이지 체류시간(평균)
				</p>
			</div>
		</div>
		<div class="dailyDataSub">
      <div class="dailyDataTop">
        <div class="dailyTab">
          <div class="dailyTabBtn" v-bind:class="{on : 0 == divSelect}">DB 유입 현황</div>
        </div>
        <div class="dailyEx">
          <button @click="makeExcel">
            엑셀 다운로드
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="12" viewBox="0 0 11 12">
              <image id="icon" width="11" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAABHNCSVQICAgIfAhkiAAAAGxJREFUKFNj/P//PwM6eBzjBhJklF2yC0WKcSgrhnoK5CFGIAZ7EEozAD0KYjPAPQhUDOJjBg1EE0gDhmJ0DWCFGIpBAlDTYRrgJsI0MD6Kdv0PcxNMMchKZDbUoP8oitFMh1uPohgjvnEIAACmsll1nvDKAQAAAABJRU5ErkJggg=="/>
            </svg>
          </button>
          <select name="" id="" v-model="selectRowCount" @change="getCampaignFullData(1, true)">
						<option value="2">2개</option>
						<option value="5">5개</option>
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="30">30개</option>
            <option value="50">50개</option>
            <option value="100">100개</option>
          </select>
        </div>
      </div>
			<div class="dailySub">
				<table class="dailySubTable" v-bind:class="{on : 0 == divSelect}">
					<thead>
						<tr>
							<th class="dailyNum">번호</th>
							<th class="dailyName">캠페인명</th>
							<th class="maketerCode">마케터 ID</th>
							<th class="inTime">유입 시간</th>
							<th class="inIP">접수 IP</th>
							<th class="dbState">DB상태</th>
							<th class="dbPrice">단가</th>
							<th class="inData">고객입력 정보</th>
						</tr>
					</thead>
					<tbody v-for="(campaignFullData, index) in campaignFullDataObj"
						:key="index" 
						>
						<tr class="viewTr" @click="DbData(index)" v-bind:class="{dbSelect : index == dbSelectData}">
							<th class="dailyNum">{{ campaignFullData.seqNo }}</th>
							<td class="dailyName">{{ campaignFullData.caName }}</td>
							<td class="maketerCode">{{ campaignFullData.mkId }}</td>
							<td class="inTime">{{campaignFullData.insDt}} {{campaignFullData.insTm}}</td>
							<td class="inIP">{{ campaignFullData.regIp }}</td>
							<td class="dbState" v-if="campaignFullData.confirmTp == 'N'"><img src="../../assets/images/menu0101/waitIcon.png" alt="대기"></td>
							<td class="dbState" v-else-if="campaignFullData.confirmTp == 'C'"><img src="../../assets/images/menu0101/cancleIcon.png" alt="취소"></td>
							<td class="dbState" v-else-if="campaignFullData.confirmTp == 'R'"><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>
							<td class="dbState" v-else><img src="../../assets/images/menu0101/takeIcon.png" alt="접수"></td>

							<td class="dbPrice">{{ campaignFullData.mkPrice }} 원</td>
							<td class="inData">승인 대기중
                <i class="fas fa-chevron-down"></i>
              </td>
						</tr>
            <tr class="hidetr" v-bind:class="{dbSubSelect : index == dbSelectData}">
              <td colspan="8" class="padNone">
                <div class="dbDataBox">
                  <div class="basicData">
                    <h6>고객 기본정보</h6>
                    <div>
                      <table>
                        <tr>
                          <th>식별 ID</th>
                          <td>{{ campaignFullData.seqNo }}</td>
                          <th>이름</th>
                          <td>{{ campaignFullData.value02 }}</td>
                          <th>나이</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>성별</th>
                          <td></td>
                          <th>전화번호</th>
                          <td colspan="3">{{ campaignFullData.value01 }}</td>
                        </tr>
                        <tr>
                          <th>기타1</th>
                          <td></td>
                          <th>기타2</th>
                          <td></td>
                          <th>기타3</th>
                          <td></td>
                        </tr>
                        <tr>
                          <th>메모</th>
                          <td colspan="5">메모를 기입할 수 있습니다.</td>
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
                          <td>*****</td>
                          <th>접수지역</th>
                          <td>*****</td>
                        </tr>
                        <tr>
                          <th>유입URL</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>2차전환 체크</th>
                          <td colspan="3">*****</td>
                        </tr>
                        <tr>
                          <th>접수기기</th>
                          <td colspan="3">**{**}</td>
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
                <span class="pageleft" @click="getCampaignFullData(curPage - 1, false)"><i class="fas fa-angle-left"></i></span>
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
                <span class="pageright" @click="getCampaignFullData(curPage + 1, false)"><i class="fas fa-angle-right"></i></span>
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
	import XLSX from 'xlsx';

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
					
					console.log(response.data);
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 상단 합산 정보 조회
			//******************************************************************************
			getCampaignTopLst() {
				console.log("getCampaignTopLst Start...");

				axios.get("http://api.adinfo.co.kr:30000:30000/DataCenter/TopSummary", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
						, caId: this.campSelect
						, endDt: this.serchDataToDt
					}
				})
				.then(response => {
					this.topArrayListObj = response.data;
					console.log(response.data);
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 수집항목 목록
			//******************************************************************************
			getCampaignFullData(selectPage, firstSel) {
        let lastPosition  = this.pageCount[this.pageCount.length-1];
        let curSelectPage = 0;

        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }
        curSelectPage = selectPage + (lastPosition-10);


        //selectPage = curSelectPage;
        //selectPage = curSelectPage;

        
        console.log("----------------------------------");
        console.log("lastPosition                : [" + lastPosition + "]");
        console.log("curSelectPage               : [" + curSelectPage + "]");
        console.log("curRunTotalPages            : [" + this.curRunTotalPages + "]");
        console.log("pageCount                   : [" + this.pageCount + "]");
        console.log("selectPage                  : [" + selectPage + "]");

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
						, ptId: 0
						, srtDt: this.serchDataFromDt
						, endDt: this.serchDataToDt
						, curPage: selectPage
						, rowCount: this.selectRowCount
					}
				})
				.then(response => {
					this.campaignFullDataObj = response.data;

					//------------------------------------------------------------------------------
					// 페이지 정보 조회
					//------------------------------------------------------------------------------
					axios.get("http://api.adinfo.co.kr:30000/GetCpaDataForAllPageCount", 
					{
						params: {
								mbId: this.$store.state.mbId
							, adId: this.$store.state.adId
							, caId: this.campSelect
							, ptId: 0
							, srtDt: this.serchDataFromDt
							, endDt: this.serchDataToDt
							, curPage: selectPage
							, rowCount: this.selectRowCount
						}
					})
					.then(response => {
            let pageUpPage = 0;
            this.curRunTotalPages = Math.ceil(response.data.rowTotalCount / this.selectRowCount);

            //--------------------------------------------------------------------
            // 10페이지 단위로 어디를 조회중인지 확인한다.
            //   - 예) 12페이지면 10, 35페이지면 30이 된다.
            //--------------------------------------------------------------------
            let pageDump = Math.floor(selectPage / 11);
            console.log("pageDump : " + pageDump);

            //--------------------------------------------------------------------
            // 10페이지 이하면 10으로 나눴을때 0이 되어 따로 처리함.
            //--------------------------------------------------------------------
            if( pageDump == 0) { // 1~10페이지
              pageUpPage = 0;
            }
            else {
              let selLen = selectPage + '';

              let pageCut = Math.floor(lastPosition / 10) * 10;

              console.log("selLen     : " + selLen)
              console.log("selLen Len : " + selLen.length)
              if(selLen[selLen.length-1] == '1')
                if(selLen == 11) {
                  pageUpPage = pageDump * 10;
                }
                else {
                  pageUpPage = pageDump * pageCut;
                }                
              else
                pageUpPage = pageDump * 10;
            }

            let nLoop = 0;
            let arrGab = [];
            for(let i = pageUpPage; i < Math.ceil(response.data.rowTotalCount / this.selectRowCount); i++) {
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
				else {
					return;
				}

				this.getCampaignFullData(1, true);
			},
			makeExcel() {
				let d= new Date();
        let curDate = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(0,10).replace(/-/g, "");
				let curTime = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(11,19).replace(/:/g, "");
				
				console.log(curDate);
				console.log(curTime);
				
				var myJSON = new Array();

				for(let i = 0; i < this.campaignFullDataObj.length; i++) {
					let seqNo, caName, mkId, insDt, insTm, regIp, confirmTp, mkPrice, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10;

					if(this.campaignFullDataObj[i].seqNo     == null) seqNo     = '' ; else seqNo     = this.campaignFullDataObj[i].seqNo    ;
					if(this.campaignFullDataObj[i].caName    == null) caName    = '' ; else caName    = this.campaignFullDataObj[i].caName   ;
					if(this.campaignFullDataObj[i].mkId      == null) mkId      = '' ; else mkId      = this.campaignFullDataObj[i].mkId     ;
					if(this.campaignFullDataObj[i].insDt     == null) insDt     = '' ; else insDt     = this.campaignFullDataObj[i].insDt    ;
					if(this.campaignFullDataObj[i].insTm     == null) insTm     = '' ; else insTm     = this.campaignFullDataObj[i].insTm    ;
					if(this.campaignFullDataObj[i].regIp     == null) regIp     = '' ; else regIp     = this.campaignFullDataObj[i].regIp    ;

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

					if(this.campaignFullDataObj[i].value1    == null) value1    = '' ; else value1    = this.campaignFullDataObj[i].value1   ;
					if(this.campaignFullDataObj[i].value2    == null) value2    = '' ; else value2    = this.campaignFullDataObj[i].value2   ;
					if(this.campaignFullDataObj[i].value3    == null) value3    = '' ; else value3    = this.campaignFullDataObj[i].value3   ;
					if(this.campaignFullDataObj[i].value4    == null) value4    = '' ; else value4    = this.campaignFullDataObj[i].value4   ;
					if(this.campaignFullDataObj[i].value5    == null) value5    = '' ; else value5    = this.campaignFullDataObj[i].value5   ;
					if(this.campaignFullDataObj[i].value6    == null) value6    = '' ; else value6    = this.campaignFullDataObj[i].value6   ;
					if(this.campaignFullDataObj[i].value7    == null) value7    = '' ; else value7    = this.campaignFullDataObj[i].value7   ;
					if(this.campaignFullDataObj[i].value8    == null) value8    = '' ; else value8    = this.campaignFullDataObj[i].value8   ;
					if(this.campaignFullDataObj[i].value9    == null) value9    = '' ; else value9    = this.campaignFullDataObj[i].value9   ;
					if(this.campaignFullDataObj[i].value10   == null) value10   = '' ; else value10   = this.campaignFullDataObj[i].value10  ;

					let myArr = {
							'번호': seqNo
						, '캠페인명': caName
						, '마케터ID': mkId
						, '유입일자': insDt
						, '유입시간': insTm
						, '접수IP': regIp
						, 'DB상태': confirmTp
						, '단가': Number(mkPrice)
						, '입력1': value1
						, '입력2': value2
						, '입력3': value3
						, '입력4': value4
						, '입력5': value5
						, '입력6': value6
						, '입력7': value7
						, '입력8': value8
						, '입력9': value9
						, '입력10': value10
					};
					myJSON.push(myArr);
				}

				const workBook = XLSX.utils.book_new();
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
			this.getCampaignTopLst();
			this.getCampaignFullData(1, true);
		}
	}
</script>

<style scoped>
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