<template>
	<div class="container">
		<div id="menu08101">
			<div class="campSearch">
				<div class="campSearchSub">
					<select v-model="campaignStatusCode" @change="campaignListChange(campaignStatusCode, 1, true)">
						<option v-for="(campaignStatusCodeLst, index) in campaignStatusCodeObj"
							:key="index" 
							:value="campaignStatusCodeLst.code"
							>{{ campaignStatusCodeLst.codeNm}}
						</option>
					</select>
					<button class="campSearchBtn" @click="campaignListChange(campaignStatusCode, 1, true)">조회</button>
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
						<select name="" id="" v-model="selectRowCount" @change="campaignListChange(campaignStatusCode, 1, true)">
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
							<th class="campNum"   	  >ID</th>							
							<th class="campName"  	  >캠페인명</th>
							<th class="campCode"  	  >랜딩페이지 수</th>
							<th class="campPay"   	  >광고주 단가</th>
							<th class="marketer"  	  >마케터 단가</th>
							<th class="dbNum"     	  >DB 접수 건수</th>
							<th class="pageOpen"    	>페이지 오픈수</th>
							<th class="campDbbState"	>캠페인 상태</th>
							<th class="campDate"    	>등록일자</th>
							<th class="modifyBtnBox"  >비고</th>
						</tr>
					</thead>
					<tbody v-if="campaignFullDataObj.length == '0'" class="noLength">
						<br>
						<br><br>
						<tr>
							<td colspan="12">
								조회하신 정보가 없습니다.
								<!-- <img src="../../assets/images/menu08201/data_icon.png" alt=""> -->
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr v-for="(campaignFullData, index) in campaignFullDataObj" :key="index">
							<th class="campNum"      >{{ campaignFullData.caId }}</th>							
							<td class="campName" @click='ReadCampaign(campaignFullData.caId, index)'>{{ campaignFullData.name  }}</td>
							<td class="campCode"     >{{ campaignFullData.landCount }} 개</td>
							<td class="campPay"      >{{ campaignFullData.price }} 원</td>
							<td class="marketer"     >{{ campaignFullData.marketerPrice }} 원</td>
							<td class="dbNum"        >{{ campaignFullData.createCount }} 건</td>
							<td class="pageOpen"     >{{ campaignFullData.viewCount }} 건</td>

							<td class="campDbbState" v-if     ="campaignFullData.status == '01'">진행중</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '02'">승인 대기중</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '03'">일시정지</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '04'">승인거절</td>
							<td class="campDbbState" v-else-if="campaignFullData.status == '05'">기간 만기 종료</td>
							<td class="campDbbState" v-else                                     >강제종료</td>

							<td class="campDate"	   >{{ campaignFullData.srtDt   }}</td>
							<td class="modifyBtnBox"    >
								<button class="modifyBtn" @click='UpdateCampaign(campaignFullData.caId)'>수정</button> 
								<button @click='DeleteCampaign(campaignFullData.caId, index)'>삭제</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td class="dataBtn" colspan="10">
								<span class="pageleft" v-if="pageCount.length > 0" @click="campaignListChange(campaignStatusCode, curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<div class="pageNum">
									<ul>
										<li class="pageBtn" 
											v-bind:class="{on : (indexPage) == curPage}" 
											v-for="(indexPage, index) in pageCount" :key="index" 
											@click="campaignListChange(campaignStatusCode, pageCount[0] + index, false)"
										>
											{{indexPage}}
										</li>
									</ul>
								</div>
								<span class="pageright" v-if="pageCount.length > 0" @click="campaignListChange(campaignStatusCode, curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
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
          campaignNameListObj   : ''
        , campaignFullDataObj   : ''
        , campaignStatusCode    : ''
        , campaignStatusCodeObj : ''
				, pageCount             : []
				, selectRowCount        : 10
				, curRunTotalPages      : 0
        , curPage               : 0
			}
		},
		methods: {
			//******************************************************************************
			// 캠페인 수정
			//******************************************************************************
			UpdateCampaign(caId) {
				this.$router.push({ 
					name : 'MENU_08103', 
					params: { caId: caId } 
				})
			},
			//******************************************************************************
			// 캠페인 보기
			//******************************************************************************
			ReadCampaign(caId) {
				this.$router.push({ 
					name : 'MENU_08104',
					params: { caId: caId } 
				})
			},
			//******************************************************************************
			// 캠페인 삭제
			//******************************************************************************
			DeleteCampaign(caId, index) {
				if(confirm("정말 삭제하시겠습니까??") == false) {
					return;
				}

				axios.get("http://api.adinfo.co.kr:30000/ChangeCampaignStatus", 
				{
					params: {
							mbId        : this.$store.state.mbId
						, adId        : this.$store.state.adId
						, caId        : caId
						, mkId        : this.$store.state.adId
						, status      : 'ZZ'
						, clntId      : this.$store.state.clntId
						, campName    : this.campaignFullDataObj[index].name
					}
				})
				.then(response => {
					if(response.data.status == true) {
						alert("캠페인을 정상적으로 삭제하였습니다.");
						this.campaignListChange(this.campaignStatusCode, 1, true);
					}
					else {
						alert("캠페인을 삭제에 실패하였습니다.\n\n고객센터 [1533-3757]로 연락하세요.");
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
						this.campaignStatusCode    = response.data[0].code;
						this.campaignStatusCodeObj = response.data;
						this.campaignListChange(this.campaignStatusCode, 1, true);
					}
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 캠페인 목록 조회 (상태에 따른 목록)
			//******************************************************************************
			campaignListChange(campaignStatusCode, selectPage, firstSel) {
        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.curPage = selectPage;

				axios.get("http://api.adinfo.co.kr:30000/GetCampaignForMbAdStatus", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
						, status: campaignStatusCode
						, curPage: selectPage
						, rowCount: this.selectRowCount
					}
				})
				.then(response => {
					this.campaignFullDataObj = response.data[1];

          //--------------------------------------------------------------------
          // 페이지처리 시작
          //--------------------------------------------------------------------
          {
            let arrGab     = [];
            let pageUpPage = 0;

            // 전체 페이지의 수를 확인한다.
            this.curRunTotalPages = Math.ceil(response.data[0][0].rowTotalCount / this.selectRowCount);

            // 페이지가 10개 이하이면...
            if( this.curRunTotalPages < 10) {
              for(let i = 0; i < this.curRunTotalPages; i++) {
                arrGab.push(i+1);
              }
              this.pageCount = arrGab;
            }
            else {
              //--------------------------------------------------------------------
              // 10페이지 이하면 10으로 나눴을때 0이 되어 따로 처리함.
              //--------------------------------------------------------------------
              let pageCut = Math.floor((selectPage) / 10) * 10;

              if( (selectPage % 10) != 0 ) {
                let nLoop = 0;
                for(let i = pageCut; i < this.curRunTotalPages; i++) {
                  if( (nLoop+pageUpPage) >= 10 + pageUpPage)
                    break;
                  arrGab.push( i + 1 );
                  nLoop++;
                }

                this.pageCount = arrGab;
              }
            }
          }					
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 엑셀로 내려받기
			//******************************************************************************
			makeExcel() {
				if( this.campaignFullDataObj.length <= 0 ) {
					alert("조회된 정보가 없어 엑셀 내려받기를 하실 수 없습니다.");
					return;
				}

				let d = new Date();
        let curDate = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(0,10).replace(/-/g, "");
				let curTime = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(11,19).replace(/:/g, "");

				var myJSON = new Array();

				for(let i = 0; i < this.campaignFullDataObj.length; i++) {
					let seqNo, name, landCount, price, marketerPrice, createCount, viewCount, status, srtDt;				

					seqNo = i + 1;

					if(this.campaignFullDataObj[i].name          == null) name          = ''; else name          = this.campaignFullDataObj[i].name;					
					if(this.campaignFullDataObj[i].landCount     == null) landCount     = 0 ; else landCount     = this.campaignFullDataObj[i].landCount;
					if(this.campaignFullDataObj[i].price         == null) price         = 0 ; else price         = this.campaignFullDataObj[i].price;
					if(this.campaignFullDataObj[i].marketerPrice == null) marketerPrice = 0 ; else marketerPrice = this.campaignFullDataObj[i].marketerPrice;
					if(this.campaignFullDataObj[i].createCount   == null) createCount   = 0 ; else createCount   = this.campaignFullDataObj[i].createCount;
					if(this.campaignFullDataObj[i].viewCount     == null) viewCount     = 0 ; else viewCount     = this.campaignFullDataObj[i].viewCount;

					price         = price.replace(/,/g, '');
					marketerPrice = marketerPrice.replace(/,/g, '');

               if(this.campaignFullDataObj[i].status == '01') status = '진행중';
					else if(this.campaignFullDataObj[i].status == '02') status = '대기중';
					else if(this.campaignFullDataObj[i].status == '03') status = '일시정지';
					else if(this.campaignFullDataObj[i].status == '04') status = '승인거절';
					else if(this.campaignFullDataObj[i].status == '05') status = '기간 만기 종료';
					else if(this.campaignFullDataObj[i].status == '06') status = '강제종료';
          else                                                status = '삭제';

					if(this.campaignFullDataObj[i].srtDt == null) srtDt = ''; else srtDt = this.campaignFullDataObj[i].srtDt;

					let myArr = {
							'번호': seqNo
						, '캠페인명': name
						, '랜딩페이지수': Number(landCount)
						, '광고주단가': Number(price)
						, '마케터단가': Number(marketerPrice)
						, 'DB접수건수': Number(createCount)
						, '페이지 조회수': Number(viewCount)
						, '캠페인상태': status
						, '생성일자': srtDt
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

	#menu08101 .campDataBox .campCode,
	#menu08101 .campDataBox .campDbbState {
		width: 8%;
	}

	#menu08101 .campDataBox .campPay,
	#menu08101 .campDataBox .marketer,
	#menu08101 .campDataBox .dbNum,
	#menu08101 .campDataBox .pageOpen {
		width: 10%;
	}

	#menu08101 .campDataBox .campName {
		width: 15%;
	}

	#menu08101 .campDataBox .campDate {
		width: 15%;
	}

	#menu08101 .campDataBox .modifyBtnBox{
		padding: 0;
		width: 9%;
	}



	#menu08101 .campDataBox td.campName {
		cursor: pointer;
	}

	#menu08101 .campDataBox td.campPay,
	#menu08101 .campDataBox td.marketer {
		text-align: right;
	}

	#menu08101 .campDataBox .modifyBtnBox button {
		width: 40px;
    height: 20px;
    border-radius: 20px;
    border: none;
    background: #838383;
    color: #fff;
	}

	#menu08101 .campDataBox .modifyBtnBox .modifyBtn {
		margin-right: 5px;
	}

	#menu08101 .campDataBox .modifyBtnBox button:hover {
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
		border-bottom: none;
		font-weight: 900;
	}
</style>