<template>
	<div class="container">
		<div id="menu08404">
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
					<select v-model="landSelect" @change="getLandingPageLst(landSelect)" :disabled="campSelect == '-1'">
						<option value="-1">전체</option>
						<option v-for="(landingData, index) in landingDataObj"
							:key="index" 
							:value="landingData.pgId"
							>{{ landingData.name }}
						</option>
					</select>
					<select v-model="resultSelect" @change="postbackListChange(1, true)">
						<option value="-1">전체</option>
            <option value="0">성공</option>
            <option value="1">실패</option>
					</select>
					<button class="campSearchBtn" @click="postbackListChange(1, true)">조회</button>
				</div>
				<div class="campDataSub">
					<div class="campEx">
						<!-- <button @click="makeExcel">
							엑셀 다운로드
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="12" viewBox="0 0 11 12">
								<image id="icon" width="11" height="12" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAABHNCSVQICAgIfAhkiAAAAGxJREFUKFNj/P//PwM6eBzjBhJklF2yC0WKcSgrhnoK5CFGIAZ7EEozAD0KYjPAPQhUDOJjBg1EE0gDhmJ0DWCFGIpBAlDTYRrgJsI0MD6Kdv0PcxNMMchKZDbUoP8oitFMh1uPohgjvnEIAACmsll1nvDKAQAAAABJRU5ErkJggg=="/>
							</svg>
						</button> -->
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
							<th class="apiNum" >번호</th>
							<th class="apiStart">발생일시</th>
							<th class="apiDis">처리일시</th>

              <th class="campNm" >캠페인명</th>
              <th class="landNm" >랜딩페이지명</th>

							<th class="apiResult">처리결과</th>
							<th class="sendData"   >전송데이터</th>
						</tr>
					</thead>
					<tbody v-if="postbackDataObj[1].length == '0'" class="noLength">
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
						<tr v-for="(postbackData, index) in postbackDataObj[1]" :key="index">
							<th class="apiNum"      >{{ index+1 }}</th>							
							<td class="apiStart" >{{ postbackData.createDt }}</td>
							<td class="apiDis" >{{ postbackData.processDt }} {{ postbackData.processTm }}</td>

              <td class="campNm"      >{{ postbackData.caName }}</td>
              <td class="landNm"      >{{ postbackData.pgName }}</td>

              <td class="apiResult"     v-if="postbackData.resultCd == '0'">성공</td>
              <td class="apiResult"     v-else>실패</td>


							<td class="sendData"    >{{ postbackData.sendUrl }}/{{ postbackData.sendValue }}</td>
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

	export default {
		data() {
			return {
          campaignNameListObj   : ''
				, campSelect            : -1
				
				, landingDataObj        : ''
				, landSelect            : -1
        , resultSelect          : -1
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

        console.log(index);
				this.campSelect = index;
        if(index == "-1") {
          this.landSelect = "-1";
        }

				this.getLandingPageLst();
				// this.getCampaignFullData(1, true);
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

				axios.get("http://api.adinfo.co.kr:30000/GetSelPostbackResult", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.adId
						, caId: this.campSelect
						, pgId: this.landSelect
            , resultSelect : this.resultSelect
						, curPage: selectPage
						, rowCount: this.selectRowCount
					}
				})
				.then(response => {
					console.log(response);
					this.postbackDataObj = response.data;

          for(let i = 0 ; i < this.postbackDataObj[1].length; i++) {
            let year  = this.postbackDataObj[1][i].processDt.substr(0,4);
            let month = this.postbackDataObj[1][i].processDt.substr(4,2);
            let day   = this.postbackDataObj[1][i].processDt.substr(6,2);
            this.postbackDataObj[1][i].processDt = year + "-" + month + "-" + day;

            year  = this.postbackDataObj[1][i].processTm.substr(0,2);
            month = this.postbackDataObj[1][i].processTm.substr(2,2);
            day   = this.postbackDataObj[1][i].processTm.substr(4,2);
            this.postbackDataObj[1][i].processTm = year + ":" + month + ":" + day;
          }

          if(response.data[0][0].rowTotalCount <= 0) {
            return;
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
            if(this.curRunTotalPages < 10) {
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
                  arrGab.push(i+1);
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
    },
		created() {
			this.$store.state.headerTopTitle = "API 연동";
			this.$store.state.headerMidTitle = "API 목록";

			this.getCampaignNameLst();			
		}
	}
</script>

<style scoped>
	#menu08404 .campSearch {
		height: 35px;
		margin-bottom: 10px;
	}
	#menu08404 .campSearch .campSearchSub {
		float: left;
	}
	#menu08404 > .campSearch > .campSearchSub > select {
    height: 100%;
    width: 200px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    padding: 9px 18px;
    margin-right: 5px;
    font-weight: 700;
	}
	#menu08404 .campSearch button {
    width: 50px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #393939;
    border-radius: 13px;
    color: #fff;
	}
	#menu08404 .campSearch .campEx {
		float: right;
		height: 100%;
	}
	#menu08404 .campSearch .campEx button {
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
	#menu08404 .campSearch .campEx select {
    /* width: 76px; */
    height: 35px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    text-align: center;
    font-weight: 700;
		margin-left: 15px;
	}
	#menu08404 .campDataBox {
		border-radius: 10px;
    border-top-left-radius: 0px;
    background: #fff;
    overflow: hidden;
	}
	#menu08404 .campDataBox table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
	}
	#menu08404 .campDataBox th,
	#menu08404 .campDataBox td {
		padding: 15px 18px;
	}
	#menu08404 .campDataBox thead th {
    position: relative;
    border-bottom: 1px solid #5c5c5c;
	}
	#menu08404 .campDataBox thead th:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}
	#menu08404 .campDataBox thead th:last-child:after {
		display: none;
	}
	#menu08404 .campDataBox tbody tr {
    border-bottom: 1px solid #ececec;
	}
	#menu08404 .campDataBox .apiNum{
		width: 5%;
	}
	#menu08404 .campDataBox .apiStart{
		width: 12%;
	}
	#menu08404 .campDataBox .apiDis{
		width: 12%;
	}
	#menu08404 .campDataBox .campNm{
		width: 17%;
	}
	#menu08404 .campDataBox .landNm{
		width: 17%;
	}
	#menu08404 .campDataBox .apiResult{
		width: 7%;
	}
	#menu08404 .campDataBox .sendData{
		width: 30%;
	}

	#menu08404 .campDataBox td.campNm,
	#menu08404 .campDataBox td.landNm,
	#menu08404 .campDataBox td.sendData {
		text-align: left;
	}


	#menu08404 .campDataBox tfoot td i {
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    /* font-size: 12px; */
    padding: 5px 5px;
		cursor: pointer;
  }
	#menu08404 .campDataBox tfoot td .pageNum {
    display: inline-block;
	}
	#menu08404 .campDataBox tfoot td li {
		display: inline-block;
		margin: 0 10px;
		cursor: pointer;
	}
	#menu08404 .campDataBox tfoot td li.on {
    font-weight: 900;
    position: relative;
	}
	#menu08404 .campDataBox tfoot td li.on:after {
    clear: both;
    position: absolute;
    height: 1px;
    width: 100%;
    content: "";
    bottom: -1px;
    left: 0;
    background: #666;
	}
	#menu08404 .campDataBox .noLength tr {
		border-bottom: none;
		font-weight: 900;
	}
</style>