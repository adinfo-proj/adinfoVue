<template>
	<div class="container">
		<div id="menu08402">
			<div class="tableBox campList">
				<table>
					<tr>
						<th>캠페인 선택</th>
						<td>

							<select v-model="campSelect" id="campaignList" @change="campaignListChange(campSelect)">
								<option v-for="(campaignNameList, index) in campaignNameListObj"
									:key="index" 
									:value="campaignNameList.caId"
									>{{ campaignNameList.name }}
								</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>랜딩페이지 선택</th>
						<td>
							<!--  @change="getLandingPageLst(landSelect)" -->
							<select v-model="landSelect">
								<option v-for="(landingData, index) in landingDataObj"
									:key="index" 
									:value="landingData.pgId"
									>{{ landingData.name }}
								</option>
							</select>
						</td>
					</tr>
					<tr>
						<th>발송주소(URL)</th>
						<td>
							<input type="text">
						</td>
					</tr>
					<tr>
						<th>암호화 여부</th>
						<td>
							<input type="radio" v-model="encrypt" name="encrypt" id="http"><label for="http">http://</label>
							<input type="radio" v-model="encrypt" name="encrypt" id="https"><label for="https">https://</label>
						</td>
					</tr>
					<tr>
						<th>발송 형식</th>
						<td>
							<input type="radio" v-model="postBack" name="postBack" id="goGet"><label for="goGet">GET</label>
							<input type="radio" v-model="postBack" name="postBack" id="goPost"><label for="goPost">POST</label>
						</td>
					</tr>
				</table>
			</div>
			<div class="tableBox valueList">
				<table>
					<thead>
						<tr>
							<th class="info">랜딩페이지 정보</th>
							<th class="opp">상대 변수</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="info">이름</td>
							<td class="opp"><input type="text" name="" id=""></td>
						</tr>
						<tr>
							<td class="info">연락처</td>
							<td class="opp"><input type="text" name="" id=""></td>
						</tr>
						<tr>
							<td class="info">기타</td>
							<td class="opp"><input type="text" name="" id=""></td>
						</tr>
						<tr>
							<td class="info">기타</td>
							<td class="opp"><input type="text" name="" id=""></td>
						</tr>
						<tr>
							<td class="info">기타</td>
							<td class="opp"><input type="text" name="" id=""></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="btnBox">
				<button>등록하기</button>
				<button>취소하기</button>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from "axios";

	export default {
		data() {
			return {
				campSelect					: ""
			, campaignNameListObj : ""
			, landSelect					: ""
			, landingDataObj			: ""
			}
		},
		methods: {

			//******************************************************************************
			// 캠페인 목록
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
					this.campSelect          = response.data[0].caId;
					this.campaignNameListObj = response.data;

          this.getLandingPageLst();
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 랜딩페이지 목록
			//******************************************************************************
			getLandingPageLst() {
        axios.get("http://api.adinfo.co.kr:30000/GetLandingListForMbAdCaCode",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , mkId: this.$store.state.mbId
            , caId: this.campSelect
            , useTp: 'R'
          }
        })
        .then(response => {
          this.landingDataObj = response.data;
          this.getCampaignFullData(1, true);
        })
        .catch(error => {
          console.log(error);
        })
			},

		},
		created() {
			this.$store.state.headerTopTitle = "포스트백";
			this.$store.state.headerMidTitle = "포스트백 등록";

			this.getCampaignNameLst();

		}
	}
</script>

<style scoped>
	#menu08402 {
		width: 675px;
	}

	#menu08402 .tableBox table th,
	#menu08402 .tableBox table td{
		border: none;
	}

	#menu08402 .tableBox table tr {
		border-bottom: 1px solid #ececec; 
	}

	#menu08402 .campList th {
		width: 130px;
		padding: 15px 5px 15px 21px;
		font-size: 14px;
		letter-spacing: -0.42px;
		color: #666;
	}

	#menu08402 .campList td {
		padding: 9px 10px 9px 0;
	}

	#menu08402 .campList input,
	#menu08402 .campList select {
		height: 100%;
		width: 100%;
		border: 1px solid #e5e5e5;
		padding: 5px;
	}

	#menu08402 .campList #campaignList {
		width: 350px;
	}

	#menu08402 .campList input + label {
		padding: 0 30px 0 24px;
	}

	#menu08402 .campList input + label::before {
		border-color: #e5e5e5;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		left: 0;
		background: #fff;
	}

	#menu08402 .campList input:checked + label::before {
		border-color: #e25b45;
	}

	#menu08402 .campList input:checked + label::after {
		content: "";
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #e25b45;
		left: 8px;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	#menu08402 .valueList table thead tr {
		border-bottom-color: #939393;
	}

	#menu08402 .valueList table th{
		padding: 12px;
		text-align: center;
		position: relative;
	}

	#menu08402 .valueList table .info{
		width: 38.5%;
	}

	#menu08402 .valueList table .opp{
		width: 61.5%;
	}

	#menu08402 .valueList table th:first-child::after {
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		content: "";
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	#menu08402 .valueList table td{
		text-align: center;
	}


	#menu08402 .btnBox{
		margin-bottom: 50px;
		text-align: center;
	}

	#menu08402 .btnBox button {
		width: 120px;
		height: 45px;
		border-radius: 20px;
		border: none;
		color: #fff;
		font-size: 16px;
		letter-spacing: -0.48px;
		background: #868686;
		font-weight: 700;
	}
	
	#menu08402 .btnBox button:first-child {
		margin-right: 20px;
		background: #e25b45;
	}

</style>