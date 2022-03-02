<template>
	<div class="container">
		<div id="menu08402">
			<div class="left">
				<div class="tableBox campList">
					<table>
						<tr>
							<th>캠페인 선택</th>
							<td>
								<select v-model="campSelect" @change="getLandingPageLst(campSelect)">
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
								<select v-model="landSelect" @change="GetLandingListOne(landSelect)">
									<option v-for="(landingData, index) in landingDataObj"
										:key="index" 
										:value="landingData.pgId"
										>{{ landingData.name }}
									</option>
								</select>
							</td>
						</tr>
						<tr>
							<th>발송주소(URI)</th>
							<td>
								{{sendUrl}}
							</td>
						</tr>
						<tr>
							<th>수신 방식</th>
							<td>
								<input type="radio" v-model="postBack" name="postBack" id="goGet"  value='G'><label for="goGet" >GET 전송</label>
								<input type="radio" v-model="postBack" name="postBack" id="goPost" value='P'><label for="goPost">POST 전송</label>
							</td>
						</tr>
					</table>
				</div>
				<div class="btnBox">
					<button @click="RegisterSendPostback()">등록하기</button>
					<button @click="CancelUpdate()">취소하기</button>
				</div>
			</div>
			<div class="right">
				<!-- <img src="../../assets/images/menu08402/apiToWrite.png" alt=""> -->
			</div>
		</div>

	</div>
</template>

<script>
	import axios from "axios";
	export default {
		data() {
			return {
					campSelect					: ''
				, campaignNameListObj : ''
				, landSelect					: ''
				, landingDataObj			: ''
				, sendUrl             : ''
        , shortUrl            : ''
				, encrypt             : 'N'
        , postBack            : ''
			}
		},
		methods: {
			//******************************************************************************
			// POSTBACK 등록 처리
			//******************************************************************************
			RegisterSendPostback() {
				//------------------------------------------------------------------------------
				// input validation check
				//------------------------------------------------------------------------------
				if(this.campSelect == null || this.campSelect == '') {
					alert("캠페인을 선택해주세요.");
					this.$refs.campSelect.focus(); ///$refs
					return;
				}
				if(this.landSelect == null || this.landSelect == '') {
					alert("랜딩페이지를 선택해주세요.");
					this.$refs.landSelect.focus(); ///$refs
					return;
				}
				if(this.postBack == null || this.postBack == '') {
					alert("발송 형식을 선택해주세요.");
					this.$refs.postBack.focus(); ///$refs
					return;
				}

				//------------------------------------------------------------------------------
				// 정보 보내기
				//------------------------------------------------------------------------------
				let data = {
						mbId              : this.$store.state.mbId
					, mkId              : this.$store.state.mbId
					, adId              : this.$store.state.mbId
					, caId              : this.campSelect
					, pgId              : this.landSelect
					, clntId            : this.$store.state.clntId
					, sendUrl           : this.sendUrl
          , shortUrl          : this.shortUrl
					, encrypt           : this.encrypt
					, postBack          : this.postBack             // GET / POST 방식
					, status            : '00'
				};

				const frm = new FormData();
				frm.append("dataObj", new Blob([JSON.stringify(data)], {type: "application/json"}));
				axios.post("http://192.168.0.200:30000/newRecvPostback", frm, {
					headers: {'Content-Type': 'multipart/form-data'}    
				})
				.then(response => {
					alert(response.data.message);
					if( response.data.result == true) {
						this.$router.push({ path : "MENU_08401" })
					}
				})
				.catch(error => {
					console.log(error);
				})
			},
			//******************************************************************************
			// 포스트백 등록 취소
			//******************************************************************************
			CancelUpdate() {
				this.$router.push({ path : "MENU_08401" });
			},
			//******************************************************************************
			// 캠페인 목록
			//******************************************************************************
			getCampaignNameLst() {
				axios.get("http://192.168.0.200:30000/GetCampaignNameLst", 
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
        axios.get("http://192.168.0.200:30000/GetLandingListForMbAdCaCode",
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
//					this.getCampAsk();
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// 캠페인 수신 내역 조회
			//******************************************************************************
			GetLandingListOne(landSelect) {
        axios.get("http://192.168.0.200:30000/GetLandingListOne",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , caId: this.campSelect
            , pgId: landSelect
          }
        })
        .then(response => {
					// 설정 초기화시 사용할 오브젝트
          this.shortUrl= response.data.url;
          this.sendUrl = "http://dbmaster.co.kr/ad/" + response.data.url + "/postback.php";
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
		display: flex;
		justify-content: space-between;
	}
	#menu08402 .left {
		width: 800px;
	}
	#menu08402 .left .tableBox table th,
	#menu08402 .left .tableBox table td{
		border: none;
	}
	#menu08402 .left .tableBox table tr {
		border-bottom: 1px solid #ececec; 
	}
	#menu08402 .left .campList th {
		width: 130px;
		padding: 15px 5px 15px 21px;
		font-size: 14px;
		letter-spacing: -0.42px;
		color: #666;
	}
	#menu08402 .left .campList td {
		padding: 9px 10px 9px 0;
	}
	#menu08402 .left .campList input,
	#menu08402 .left .campList select {
		height: 100%;
		width: 100%;
		border: 1px solid #e5e5e5;
		padding: 5px;
	}
	#menu08402 .left .campList input + label {
		padding: 0 30px 0 24px;
	}
	#menu08402 .left .campList input + label::before {
		border-color: #e5e5e5;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		left: 0;
		background: #fff;
	}
	#menu08402 .left .campList input:checked + label::before {
		border-color: #e25b45;
	}
	#menu08402 .left .campList input:checked + label::after {
		content: "";
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #e25b45;
		left: 8px;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	#menu08402 .left .valueList table thead tr {
		border-bottom-color: #939393;
	}
	#menu08402 .left .valueList table th{
		padding: 12px;
		text-align: center;
		position: relative;
	}
	#menu08402 .left .valueList table .info,
	#menu08402 .left .valueList table .infofix,
	#menu08402 .left .valueList table .opp{
		font-weight: 700;
		width: 30%;
	}
	#menu08402 .left .valueList table .oppData {
		text-align: left;
	}
	#menu08402 .left .valueList table th::after {
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		content: "";
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	#menu08402 .left .valueList table th:last-child::after{
		display: none;
	}
	#menu08402 .left .valueList table td{
		text-align: center;
	}

	#menu08402 .left .valueList tfoot td{
		padding: 15px 0;
	}
	#menu08402 .left .valueList button {
		width: 120px;
		height: 30px;
		border: none;
		border-radius: 20px;
		background: #393939;
		font-weight: 700;
		color: #fff;
	}
	#menu08402 .left .valueList button:first-child {
		margin-right: 10px;
		width: 100px;
		background: #fff;
		border: 1px solid #393939;
		color: #393939;
	}
	#menu08402 .left .btnBox{
		margin-bottom: 50px;
		text-align: center;
	}
	#menu08402 .left .btnBox button {
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
	
	#menu08402 .left .btnBox button:first-child {
		margin-right: 20px;
		background: #e25b45;
	}
</style>