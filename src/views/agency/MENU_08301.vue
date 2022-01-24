<template>
	<div class="container">
		<div id="menu08301">
			<div class="landSearch">
				<select v-model="campSelect">
					<option value="all">전체</option>
					<option v-for="(campaignNameList, index) in campaignNameListObj"
						:key="index" 
						:value="campaignNameList.caId"
						>{{ campaignNameList.name }}
					</option>
				</select>
				<button>조회</button>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="landNo">번호</th>
							<th class="landCamp">캠페인 명</th>
							<th class="landNm">랜딩페이지 명</th>
							<th class="landDbNum">총 DB 접수건수</th>
							<th class="landAdv">광고주명</th>
							<th class="landColl">수집항목</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th class="landNo">1</th>
							<td class="landCamp">캠페인 1</td>
							<td class="landNm">가나다라마바사</td>
							<td class="landDbNum">200건</td>
							<td class="landAdv">가나다</td>
							<td class="landColl">이름, 연락처, 성별, 기타</td>
						</tr>
						<tr>
							<th class="landNo">2</th>
							<td class="landCamp">캠페인 2</td>
							<td class="landNm">아자차카타파하</td>
							<td class="landDbNum">100건</td>
							<td class="landAdv">마바사</td>
							<td class="landColl">이름, 연락처, 나이, 기타</td>
						</tr>
						<tr>
							<th class="landNo">3</th>
							<td class="landCamp">캠페인 3</td>
							<td class="landNm">가나다라마바사 랜딩페이지 2</td>
							<td class="landDbNum">50건</td>
							<td class="landAdv">가나다</td>
							<td class="landColl">이름, 연락처, 성향, 기타</td>
						</tr>
						<tr>
							<th class="landNo">4</th>
							<td class="landCamp">캠페인 4</td>
							<td class="landNm">아자차카타파하 랜딩페이지 2</td>
							<td class="landDbNum">30건</td>
							<td class="landAdv">가나다</td>
							<td class="landColl">이름, 연락처, 기타</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="6">
								<span class="pageleft"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn">
										1
									</li>
									<li class="pageBtn">
										2
									</li>
									<li class="pageBtn">
										3
									</li>
									<li class="pageBtn">
										4
									</li>
								</ul>
                <span class="pageright"><i class="icon-chevron-right1"></i></span>

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
				, campSelect: 'all'
			}
		},
		methods: {
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
				})
				.catch(error => {
					console.log(error);
				})
			},
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

	#menu08301 .tableBox .landNo{
		width: 5%;
	}

	#menu08301 .tableBox .landCamp,
	#menu08301 .tableBox .landNm,
	#menu08301 .tableBox .landColl {
		width: 25%;
	}

	#menu08301 .tableBox .landDbNum{
		width: 9%;
	}

	#menu08301 .tableBox .landAdv{
		width: 11%;
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
