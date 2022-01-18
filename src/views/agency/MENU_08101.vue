<template>
	<div class="container">
		<div id="menu08101">
			<div class="campSearch">
				<div class="campSearchSub">
					<select v-model="campaignStatusCode" @change="campaignListChange(campaignStatusCode)">
						<option v-for="(campaignStatusCodeLst, index) in campaignStatusCodeObj"
							:key="index" 
							:value="campaignStatusCodeLst.code"
							>{{ campaignStatusCodeLst.codeNm}}
						</option>
					</select>
					<button class="campSearchBtn" @click="campaignListChange(campaignStatusCode)">조회</button>
				</div>
				<div class="campDataSub">
					<div class="campEx">
						<button @click="makeExcel">
							엑셀 다운로드
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="12" viewBox="0 0 11 12">
								<image id="icon" width="11" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAABHNCSVQICAgIfAhkiAAAAGxJREFUKFNj/P//PwM6eBzjBhJklF2yC0WKcSgrhnoK5CFGIAZ7EEozAD0KYjPAPQhUDOJjBg1EE0gDhmJ0DWCFGIpBAlDTYRrgJsI0MD6Kdv0PcxNMMchKZDbUoP8oitFMh1uPohgjvnEIAACmsll1nvDKAQAAAABJRU5ErkJggg=="/>
							</svg>
						</button>
						<!-- <select>
							<option value="" >등록일 내림차순</option>
							<option value="" >등록일 오름차순</option>
							<option value="" >캠페인명 내림차순</option>
							<option value="" >캠페인명 오름차순</option>
						</select> -->
						<select v-model="selectRowCount" @change="getCampaignFullData(1, true)">
							<option value="10" >10개</option>
							<option value="20" >20개</option>
							<option value="30" >30개</option>
							<option value="50" >50개</option>
							<option value="100">100개</option>
						</select>
					</div>
				</div>
			</div>
			<div class="campDataBox">
				<table class="campTable">
					<thead>
						<tr>
							<th class="campNum"     >번호</th>
							<th class="campCode"    >캠페인코드</th>
							<th class="campName"    >캠페인명</th>
							<th class="campPay"     >광고주 단가</th>
							<th class="marketer"    >마케터 단가</th>
							<th class="dbNum"       >DB 접수 건수</th>
							<th class="pageOpen"    >페이지 오픈수</th>
							<th class="campDbbState">캠페인 상태</th>
							<th class="campDate"    >등록일자</th>
							<th class="modifyBtn"   >수정</th>
						</tr>
					</thead>
					<tbody v-if="campaignFullDataObj.length == '0'" class="noLength">
						<tr>
							<td colspan="9">
								<img src="../../assets/images/menu08201/data_icon.png" alt="">
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr v-for="(campaignFullData, index) in campaignFullDataObj" :key="index">
							<th class="campNum"      >{{ index+1 }}</th>
							<td class="campCode"     >{{ campaignFullData.caId    }}</td>
							<td class="campName"     >{{ campaignFullData.name  }}</td>
							<td class="campPay"      >{{ campaignFullData.price   }} 원</td>
							<td class="marketer"     >{{ campaignFullData.marketerPrice }} 원</td>
							<td class="dbNum"        >{{"100"}} 건</td>
							<td class="pageOpen"     >{{"300"}} 건</td>

							<td class="campDbbState" v-if     ="campaignFullData.status == '01'">진행중</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '02'">승인 대기중</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '03'">일시정지</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '04'">승인거절</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '05'">기간 만기 종료</td>
							<td class="campDbbState" v-else                                     >강제종료</td>

							<td class="campDate"	   >{{ campaignFullData.srtDt   }}</td>
							<td class="modifyBtn"    >
								<button @click='PassData(campaignFullData.caId)'>수정</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td class="dataBtn" colspan="9">
								<span class="pageleft" v-if="pageCount.length > 0" @click="getCampaignFullData(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
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
								<span class="pageright" v-if="pageCount.length > 0" @click="getCampaignFullData(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
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
          campaignNameListObj: ''
        , campaignFullDataObj: ''
        , campaignStatusCode: ''
        , campaignStatusCodeObj: ''
				, pageCount: 0
				, selectRowCount: 10
			}
		},
		methods: {
			PassData(caId){
				this.$router.push({ 
					name : 'MENU_08103', 
					params: { caId: caId } 
				})
			},
			//******************************************************************************
			// 캠페인 분류(대분류)
			//******************************************************************************
			getCommonByTp0009() { // 캠페인 분류(대분류)
				axios.get("http://api.adinfo.co.kr:30000/CommonCode/getCommonByTp", 
				{
					params: {
						tp: '0009'
					}
				})
				.then(response => {
					if(response.data.length > 0) {
						this.campaignStatusCode = response.data[0].code;
						this.campaignStatusCodeObj = response.data;
					}
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 캠페인 목록 조회 (상태에 따른 목록)
			//******************************************************************************
			campaignListChange(campaignStatusCode) {
				axios.get("http://api.adinfo.co.kr:30000/GetCampaignForMbAdStatus", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
						, status: campaignStatusCode
					}
				})
				.then(response => {
					this.campaignFullDataObj = response.data;
					console.log(this.campaignFullDataObj);
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 엑셀로 내려받기
			//******************************************************************************
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
				XLSX.utils.book_append_sheet(workBook, workSheet, '캠페인 목록');
				// 파일명은 캠패인목록_날짜_시간.xlsx 로 처리한다.
				XLSX.writeFile(workBook, '캠패인목록_' + curDate + '_' + curTime + '.xlsx');
			}
		},
		created() {
			this.$store.state.headerTopTitle = "캠페인";
			this.$store.state.headerMidTitle = "캠페인 목록";

			this.getCommonByTp0009();
			this.campaignListChange("00");
		}
	}
</script>

<style scoped>
	#menu08101 .campSearch {
		height: 35px;
		margin-bottom: 10px;
	}

	#menu08101 .campSearch .campSearchSub {
		float: left;
	}

	#menu08101 > .campSearch > .campSearchSub > select {
    height: 100%;
    width: 200px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 9px 18px;
    margin-right: 5px;
    font-weight: 700;
	}

	#menu08101 .campSearch button {
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #393939;
    border-radius: 13px;
    color: #fff;
	}

	#menu08101 .campSearch .campEx {
		float: right;
		height: 100%;
	}


	#menu08101 .campSearch .campEx button {
    width: 139px;
    height: 35px;
    background: #fff;
    border: 1px solid #e25b45;
    color: #e25b45;
    border-radius: 10px;
    font-weight: 700;
    margin-right: 5px;
    margin-top: 1px;
	}

	#menu08101 .campSearch .campEx select {
    /* width: 76px; */
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-weight: 700;
		margin-left: 15px;
	}

	#menu08101 .campDataBox {
		border-radius: 10px;
    border-top-left-radius: 0px;
    background: #fff;
    overflow: hidden;
	}

	#menu08101 .campDataBox table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
	}

	#menu08101 .campDataBox th,
	#menu08101 .campDataBox td {
		padding: 15px 18px;
	}

	#menu08101 .campDataBox thead th {
    position: relative;
    border-bottom: 1px solid #5c5c5c;
	}

	#menu08101 .campDataBox thead th:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08101 .campDataBox thead th:last-child:after {
		display: none;
	}

	#menu08101 .campDataBox tbody tr {
    border-bottom: 1px solid #ececec;
	}

	#menu08101 .campDataBox .campNum {
		width: 5%;
	}

	#menu08101 .campDataBox .campCode {
		width: 8%;
	}

	#menu08101 .campDataBox .campPay,
	#menu08101 .campDataBox .marketer,
	#menu08101 .campDataBox .dbNum,
	#menu08101 .campDataBox .pageOpen, 
	#menu08101 .campDataBox .campDbbState {
		width: 10%;
	}

	#menu08101 .campDataBox .campName {
		width: 15%;
	}

	#menu08101 .campDataBox .campDate {
		width: 15%;
	}

	#menu08101 .campDataBox .modifyBtn{
		padding: 0;
		width: 7%;
	}

	#menu08101 .campDataBox .modifyBtn button {
		width: 40px;
    height: 20px;
    border-radius: 20px;
    border: none;
    background: #838383;
    color: #fff;
	}

	#menu08101 .campDataBox .modifyBtn button:hover {
		background: #e25b45;
	}

	#menu08101 .campDataBox tfoot td i {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    /* font-size: 12px; */
    padding: 5px 5px;
		cursor: pointer;
  }

	#menu08101 .campDataBox tfoot td .pageNum {
    display: inline-block;
	}

	#menu08101 .campDataBox tfoot td li {
		display: inline-block;
		margin: 0 10px;
		cursor: pointer;
	}
	#menu08101 .campDataBox tfoot td li.on {
    font-weight: 900;
    position: relative;
	}

	#menu08101 .campDataBox tfoot td li.on:after {
    clear: both;
    position: absolute;
    height: 1px;
    width: 100%;
    content: "";
    bottom: -1px;
    left: 0;
    background: #666;
	}

	#menu08101 .campDataBox .noLength tr {
		height: 600px;
		border-bottom: none;
	}
</style>