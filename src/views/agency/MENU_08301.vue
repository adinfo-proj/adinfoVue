<template>
	<div class="container">
		<div id="menu08301">
			<div class="landSearch">
				<select v-model="campSelect" @change="getLandingLst(1, true)">
					<option value="-1">전체</option>
					<option v-for="(campaignNameList, index) in campaignNameListObj"
						:key="index" 
						:value="campaignNameList.caId"
						>{{ campaignNameList.name }}
					</option>
				</select>
				<button @click="getLandingLst(1, true)">조회</button>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="landNo"   >번호</th>
							<th class="landCamp" >캠페인 명</th>
							<th class="landNm"   >랜딩페이지 명</th>
							<th class="landDbNum">총 DB 접수건수</th>
							<th class="landAdv"  >광고주명</th>
							<th class="landColl" >수집항목</th>
							<th class="landBtn"  >수정</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(LandingList, index) in LandingListObj"
							:key="index" 
							:value="LandingList.mkId"
						>
							<th class="landNo"   >{{LandingList.seqNo}}</th>
							<td class="landCamp" >{{LandingList.adName}}</td>
							<td class="landNm" @click="OpenPage('http://dbfactory.kr/dbm/' + LandingList.url);">{{LandingList.name}}</td>
							<td class="landDbNum">{{LandingList.createCount}}</td>
							<td class="landAdv"  >아직개발중</td>
							<td class="landColl" >{{askLists[index]}}</td>
							<td class="landBtn"  >
								<button @click="ModifyLanding(LandingList.pgId)">수정</button>
								<button>삭제</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
            <tr>
              <td class="dataBtn" colspan="8">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getLandingLst(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul class="pageNum">
									<li class="pageBtn" 
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getLandingLst(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getLandingLst(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
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
					campaignNameListObj: ''
				,	LandingListObj: ''
				, campSelect: -1
				, askLists: []
				//--------------------------------------------------------------
				// 페이지 처리용 변수
				//--------------------------------------------------------------
				, selectRowCount: 10
				, pageCount: []
				, curPage: 0
				, curRunTotalPages: 0
			}
		},
		methods: {
			//******************************************************************************
			// 캠페인 목록 불러오기
			//******************************************************************************
			getLandingLst(selectPage, firstSel) {
        if( firstSel == true) {
          this.curRunTotalPages = 100000000;
        }

        if( (selectPage > this.curRunTotalPages) || (selectPage <= 0) ) {
          return false;
        }

				this.dbSelectData = null;
				this.curPage = selectPage;

				axios.get("http://api.adinfo.co.kr:30000/GetLandingListForMbAdCa", 
				{
					params: {
							mbId: this.$store.state.mbId
						, adId: this.$store.state.mbId
						, mkId: this.$store.state.mbId
						, caId: this.campSelect
						, useTp: 'R'
						, curPage   : selectPage
						, rowCount  : this.selectRowCount
					}
				})
				.then(response => {
					this.LandingListObj = response.data[0];

					for(let i = 0 ; i < this.LandingListObj.length ; i++) {
            let parseData = this.LandingListObj[i].askList.replace(/,-/gi,"", (match) => {return '' + match + '';});
						this.askLists.push(parseData);
					}

					let arrGab = [];
					let pageUpPage = 0;

					// 전체 페이지의 수를 확인한다.
					this.curRunTotalPages = Math.ceil(response.data[1][0].count / this.selectRowCount);

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
			},
			//******************************************************************************
			// 캠페인 목록 불러오기
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
					// this.campSelect = response.data[0].caId;
					this.campaignNameListObj = response.data;
					this.getLandingLst(1, true);
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 공지사항 현재글 수정
			//******************************************************************************
			ModifyLanding(pgId) {
				this.$router.push({ 
					name : 'MENU_08303', 
					params: { pgId: pgId }
				})
			},
			//******************************************************************************
			// 랜딩페이지 오픈
			//******************************************************************************
			OpenPage(url) {
				window.open(url);
			}
		},
		created() {
			this.$store.state.headerTopTitle = "랜딩페이지";
			this.$store.state.headerMidTitle = "랜딩페이지 목록";
			this.getCampaignNameLst();
		}
	}
</script>

<style>
	#menu08301 .landSearch {
		height: 35px;
		margin-bottom: 10px;
	}

	#menu08301 .landSearch select {
		height: 100%;
		width: 200px;
		border-radius: 10px;
		border: 1px solid #e5e5e5;
		padding: 9px 18px;
		margin-right: 5px;
		font-weight: 700;
	}

	#menu08301 .landSearch button {
		width: 50px;
		height: 35px;
		border-radius: 10px;
		border: 1px solid #e5e5e5;
		background: #393939;
		border-radius: 13px;
		color: #fff;
	}	

	#menu08301 .tableBox th,
	#menu08301 .tableBox td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}

	#menu08301 .tableBox .landNm {
		cursor: pointer;
	}

	#menu08301 .tableBox td.landNm,
	#menu08301 .tableBox td.landColl {
		text-align: left;
	}

	#menu08301 .tableBox .landNo {
		width: 5%;
	}

	#menu08301 .tableBox .landCamp {
		width: 20%;
	}
	#menu08301 .tableBox .landNm,
	#menu08301 .tableBox .landColl {
		width: 22.5%;
	}

	#menu08301 .tableBox .landDbNum{
		width: 9%;
	}

	#menu08301 .tableBox .landAdv{
		width: 11%;
	}

	#menu08301 .tableBox .landBtn{
		width: 10%;
	}

	#menu08301 thead {
		border-bottom: 1px solid #5c5c5c;
	}

	#menu08301 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08301 thead tr th:last-child:after{
		display: none;
	}

	#menu08301 tbody tr{
		border-bottom: 1px solid #ececec;
	}

	#menu08301 tbody .landBtn button,
	.landDelBtn button {
    width: 40px;
    height: 20px;
    border-radius: 20px;
    border: none;
    background: #838383;
    color: #fff;
	}

	#menu08301 tbody button:first-child {
		margin-right: 5px;
	}

	#menu08301 tfoot ul,
	#menu08301 tfoot ul li {
		display: inline-block;
	}
	#menu08301 tfoot span {
		display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    font-size: 13px;
    padding: 5px 5px;
    text-align: left;
		cursor: pointer;
	}
	#menu08301 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}
	#menu08301 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}
	#menu08301 tfoot ul li.on:after {
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
