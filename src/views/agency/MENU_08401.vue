<template>
	<div class="container">
		<div id="menu08401">
			<div class="campSearch">
				<div class="campSearchSub">
					<select v-model="campSelect" @change="campaignListChange(campSelect)">
						<option value="-1">전체</option>
						<option v-for="(campaignNameList, index) in campaignNameListObj"
							:key="index" 
							:value="campaignNameList.caId"
							>{{ campaignNameList.name}}
						</option>
					</select>
					<select v-model="landSelect" @change="getLandingPageLst(landSelect)">
						<option value="-1">전체</option>
						<option v-for="(landingData, index) in landingDataObj"
							:key="index" 
							:value="landingData.pgId"
							>{{ landingData.name }}
						</option>
					</select>
					<button class="campSearchBtn" @click="postbackListChange(1, true)">조회</button>
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
						<select name="" id="" v-model="selectRowCount" @change="postbackListChange(1, true)">
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
							<th class="campName"    >캠페인명</th>
							<th class="campCode"    >랜딩페이지명</th>

							<th class="landUrl"     >발송주소</th>
							<th class="marketer"    >전송방식</th>

							<th class="dbNum"       >전송항목수</th>
							<th class="campDate"    >등록일자</th>
							<th class="modifyBtnBox"   >처리</th>
						</tr>
					</thead>
					<tbody v-if="postbackDataObj.length == '0'" class="noLength">
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
						<tr v-for="(postbackData, index) in postbackDataObj" :key="index">
							<th class="campNum"      >{{ index+1 }}</th>							
							<td class="campName" >{{ postbackData.caName }}</td>
							<td class="campCode" >{{ postbackData.pgName }}</td>
							<td class="landUrl"      >{{ postbackData.postbackUrl }}</td>

							<td class="marketer"     v-if="postbackData.sendType=='G'">GET</td>
							<td class="marketer"     v-else>POST</td>

							<td class="dbNum"        >{{ postbackData.accessFlag }} 개</td>
							<td class="campDate"	   >{{ postbackData.updateDt.substring(0, 10) }}</td>
							<td class="modifyBtnBox"    >
								<button class="modifyBtn" @click='UpdatePostback(postbackData.caId, postbackData.pgId, postbackData.pbId)'>수정</button> 
								<button @click='DeletePostback(postbackData.caId, postbackData.pgId, postbackData.pbId, index)'>삭제</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td class="dataBtn" colspan="9">
								<span class="pageleft" v-if="pageCount.length > 0" @click="postbackListChange(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<div class="pageNum">
									<ul>
										<li class="pageBtn" 
											v-bind:class="{on : (indexPage) == curPage}" 
											v-for="(indexPage, index) in pageCount" :key="index" 
											@click="postbackListChange(pageCount[0] + index, false)"
										>
											{{indexPage}}
										</li>
									</ul>
								</div>
								<span class="pageright" v-if="pageCount.length > 0" @click="postbackListChange(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
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
				, campSelect            : -1
				
				, landingDataObj        : ''
				, landSelect            : -1
        , postbackDataObj       : ''
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
			// 포스트백 수정
			//******************************************************************************
			UpdatePostback(caId, pgId, pbId) {
				this.$router.push({ 
					name : 'MENU_08403', 
					params: { pbId: pbId, pgId: pgId, caId: caId } 
				})
			},
			//******************************************************************************
			// 캠페인 삭제
			//******************************************************************************
			DeletePostback(caId, pgId, pbId, index) {
				if(confirm("정말로 포스트백을 삭제하시겠습니까??") == false) {
					return;
				}

				axios.get("http://api.adinfo.co.kr:30000/ChangePostbackStatus", 
				{
					params: {
							mbId        : this.$store.state.mbId
						, adId        : this.$store.state.adId
						, caId        : caId
						, mkId        : this.$store.state.adId
						, pgId        : pgId
						, pbId        : pbId
						, status      : 'ZZ'
						, clntId      : this.$store.state.clntId
						, campName    : this.postbackDataObj[index].caName
					}
				})
				.then(response => {
					if(response.data.status == true) {
						alert("포스트백을 정상적으로 삭제하였습니다.");
						this.postbackListChange(1, true);
					}
					else {
						alert("포스트백을 삭제에 실패하였습니다.\n\n고객센터 [1533-3757]로 연락하세요.");
					}
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 캠페인 상태
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
					//this.campSelect          = response.data[0].caId;
					this.campaignNameListObj = response.data;

          this.getLandingPageLst();
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 캠페인 변경
			//******************************************************************************
			campaignListChange(index) {
				this.campSelect = index;
				this.landSelect = -1;
				this.getLandingPageLst();
				this.getCampaignFullData(1, true);
			},
			//******************************************************************************
			// 랜딩페이지 목록 조회
			//******************************************************************************
			getLandingPageLst() {
        axios.get("http://api.adinfo.co.kr:30000/GetLandingListForMbAdCaCode",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , mkId: this.$store.state.mbId
            , caId: this.campSelect
            , useTp: '00'
          }
        })
        .then(response => {
          this.landingDataObj = response.data;
          this.postbackListChange(1, true)
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// 포스트백 목록 조회 (상태에 따른 목록)
			//******************************************************************************
			postbackListChange(selectPage, firstSel) {
        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.curPage = selectPage;

				axios.get("http://api.adinfo.co.kr:30000/GetSelPostbackList", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
						, caId: this.campSelect
						, pgId: this.landSelect
						, curPage: selectPage
						, rowCount: this.selectRowCount
					}
				})
				.then(response => {
					this.postbackDataObj = response.data;

					for(let i = 0 ; i < this.postbackDataObj.length; i++) {
						let lSendCount = 0;

						if(this.postbackDataObj[i].value01 != null) lSendCount++;
						if(this.postbackDataObj[i].value02 != null) lSendCount++;
						if(this.postbackDataObj[i].value03 != null) lSendCount++;
						if(this.postbackDataObj[i].value04 != null) lSendCount++;
						if(this.postbackDataObj[i].value05 != null) lSendCount++;
						if(this.postbackDataObj[i].value06 != null) lSendCount++;
						if(this.postbackDataObj[i].value07 != null) lSendCount++;
						if(this.postbackDataObj[i].value08 != null) lSendCount++;
						if(this.postbackDataObj[i].value09 != null) lSendCount++;
						if(this.postbackDataObj[i].value10 != null) lSendCount++;

						this.postbackDataObj[i].accessFlag = lSendCount;
					}

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
				if( this.postbackDataObj.length <= 0 ) {
					alert("조회된 정보가 없어 엑셀 내려받기를 하실 수 없습니다.");
					return;
				}

				let d = new Date();
        let curDate = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(0,10).replace(/-/g, "");
				let curTime = (new Date(d.getTime() - (d.getTimezoneOffset() * 60000))).toISOString().substring(11,19).replace(/:/g, "");

				var myJSON = new Array();

				for(let i = 0; i < this.postbackDataObj.length; i++) {
					let seqNo, name, landCount, price, marketerPrice, createCount, viewCount, status, srtDt;				

					seqNo = i + 1;

					if(this.postbackDataObj[i].name          == null) name          = ''; else name          = this.postbackDataObj[i].name;					
					if(this.postbackDataObj[i].landCount     == null) landCount     = 0 ; else landCount     = this.postbackDataObj[i].landCount;
					if(this.postbackDataObj[i].price         == null) price         = 0 ; else price         = this.postbackDataObj[i].price;
					if(this.postbackDataObj[i].marketerPrice == null) marketerPrice = 0 ; else marketerPrice = this.postbackDataObj[i].marketerPrice;
					if(this.postbackDataObj[i].createCount   == null) createCount   = 0 ; else createCount   = this.postbackDataObj[i].createCount;
					if(this.postbackDataObj[i].viewCount     == null) viewCount     = 0 ; else viewCount     = this.postbackDataObj[i].viewCount;

					price         = price.replace(/,/g, '');
					marketerPrice = marketerPrice.replace(/,/g, '');

               if(this.postbackDataObj[i].status == '01') status = '진행중';
					else if(this.postbackDataObj[i].status == '02') status = '대기중';
					else if(this.postbackDataObj[i].status == '03') status = '일시정지';
					else if(this.postbackDataObj[i].status == '04') status = '승인거절';
					else if(this.postbackDataObj[i].status == '05') status = '기간 만기 종료';
					else if(this.postbackDataObj[i].status == '06') status = '강제종료';
          else                                                status = '삭제';

					if(this.postbackDataObj[i].srtDt == null) srtDt = ''; else srtDt = this.postbackDataObj[i].srtDt;

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
			this.$store.state.headerTopTitle = "API 연동";
			this.$store.state.headerMidTitle = "API 목록";

			this.getCampaignNameLst();			
		}
	}
</script>

<style scoped>
	#menu08401 .campSearch {
		height: 35px;
		margin-bottom: 10px;
	}
	#menu08401 .campSearch .campSearchSub {
		float: left;
	}
	#menu08401 > .campSearch > .campSearchSub > select {
    height: 100%;
    width: 200px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 9px 18px;
    margin-right: 5px;
    font-weight: 700;
	}
	#menu08401 .campSearch button {
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #393939;
    border-radius: 13px;
    color: #fff;
	}
	#menu08401 .campSearch .campEx {
		float: right;
		height: 100%;
	}
	#menu08401 .campSearch .campEx button {
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
	#menu08401 .campSearch .campEx select {
    /* width: 76px; */
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-weight: 700;
		margin-left: 15px;
	}
	#menu08401 .campDataBox {
		border-radius: 10px;
    border-top-left-radius: 0px;
    background: #fff;
    overflow: hidden;
	}
	#menu08401 .campDataBox table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
		border-style: hidden;
    table-layout: fixed;
	}
	#menu08401 .campDataBox th,
	#menu08401 .campDataBox td {
		padding: 15px 18px;
		white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    word-break:break-all;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3
	}
	#menu08401 .campDataBox thead th {
    position: relative;
    border-bottom: 1px solid #5c5c5c;
	}
	#menu08401 .campDataBox thead th:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}
	#menu08401 .campDataBox thead th:last-child:after {
		display: none;
	}
	#menu08401 .campDataBox tbody tr {
    border-bottom: 1px solid #ececec;
	}
	#menu08401 .campDataBox .campNum {
		width: 5%;
	}
	#menu08401 .campDataBox .campName {
		width: 20%;
	}
	#menu08401 .campDataBox .campCode {
		width: 20%;
	}
	#menu08401 .campDataBox .landUrl {
		width: 24%;
	}
	#menu08401 .campDataBox .marketer {
		width: 7%;
	}
	#menu08401 .campDataBox .dbNum {
		width: 7%;
	}
	#menu08401 .campDataBox .campDate {
		width: 9%;
	}
	#menu08401 .campDataBox .modifyBtnBox{
		padding: 0;
		width: 8%;
	}

	#menu08401 .campDataBox td.campName,
	#menu08401 .campDataBox td.campCode,
	#menu08401 .campDataBox td.landUrl {
		text-align: left;
	}
	#menu08401 .campDataBox td.campPay {
		text-align: left;
	}
	#menu08401 .campDataBox td.marketer {
		text-align: center;
	}
	#menu08401 .campDataBox .modifyBtnBox button {
		width: 40px;
    height: 20px;
    border-radius: 20px;
    border: none;
    background: #838383;
    color: #fff;
	}
	#menu08401 .campDataBox .modifyBtnBox .modifyBtn {
		margin-right: 5px;
	}
	#menu08401 .campDataBox .modifyBtnBox button:hover {
		background: #e25b45;
	}
	#menu08401 .campDataBox tfoot td i {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    /* font-size: 12px; */
    padding: 5px 5px;
		cursor: pointer;
  }
	#menu08401 .campDataBox tfoot td .pageNum {
    display: inline-block;
	}
	#menu08401 .campDataBox tfoot td li {
		display: inline-block;
		margin: 0 10px;
		cursor: pointer;
	}
	#menu08401 .campDataBox tfoot td li.on {
    font-weight: 900;
    position: relative;
	}
	#menu08401 .campDataBox tfoot td li.on:after {
    clear: both;
    position: absolute;
    height: 1px;
    width: 100%;
    content: "";
    bottom: -1px;
    left: 0;
    background: #666;
	}
	#menu08401 .campDataBox .noLength tr {
		border-bottom: none;
		font-weight: 900;
	}
</style>