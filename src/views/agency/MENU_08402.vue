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
								<select v-model="landSelect" >
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
								<input type="text" v-model="sendUrl">
							</td>
						</tr>
						<tr>
							<th>전송 방식</th>
							<td>
								<input type="radio" v-model="postBack" name="postBack" id="goGet"  value='G'><label for="goGet" >GET 전송</label>
								<input type="radio" v-model="postBack" name="postBack" id="goPost" value='P'><label for="goPost">POST 전송</label>
							</td>
						</tr>
					</table>
				</div>















				<div class="tableBox valueList">
					<table>
						<thead>
							<tr>
								<th class="info">헤더 전송 항목</th>
								<th class="infofix">수신측 변수명</th>
								<th class="opp">서버정보코드</th>
								<th class="useCheck">전송여부
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(stServer, index) in stServerObj"
								:key="index" 
								:value="stServer"
							> 
								<td class="info" v-if="stServer.name != ''"> 
									{{ stServer.name }} 
								</td>
								<td class="infofix" v-else>
									고정 항목
								</td>
								<td class="opp" ><input type="text" name="" id="memberId" v-model="stServer.memberId"></td>
								<td class="oppData">
									{{stServer.place}}
								</td>
								<td class="useCheck">
									<input type="checkbox" :id="'useYnS'+index" v-model="stServer.useYn">
									<label :for="'useYnS'+index"></label>
								</td>
							</tr>
						</tbody>
					</table>
				</div>







				<div class="tableBox valueList">
					<table>
						<thead>
							<tr>
								<th class="info">데이터 전송 항목</th>
								<th class="infofix">수신측 변수명</th>
								<th class="opp">고정값</th>
								<th class="useCheck">전송여부
								</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(askList, index) in stAskList"
								:key="index" 
								:value="askList"
							> 
								<td class="info" v-if="askList.name != ''"> 
									{{ askList.name }} 
								</td>
								<td class="infofix" v-else>
									고정 항목
								</td>
								<td class="opp" ><input type="text" name="" id="memberId" v-model="askList.memberId"></td>
								<td class="opp" v-if="askList.name != ''" >
									없음
								</td>
								<td class="opp" v-else>
									<input type="text" name="" id="memberValue" v-model="askList.memberValue">
									</td>
								<td class="useCheck">
									<input type="checkbox" :id="'useYn'+index" v-model="askList.useYn">
									<label :for="'useYn'+index"></label>
								</td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td colspan="4">
									<button class="imgBtn" @click="ValueAdd()" >항목 추가</button>
									<button class="imgBtn" @click="ValueInit()">전송 항목 초기화</button>
								</td>
							</tr>
						</tfoot>
					</table>
				</div>






















				<div class="btnBox">
					<button @click="RegisterPostback()">등록하기</button>
					<button @click="CancelUpdate()">취소하기</button>
				</div>
			</div>
			<div class="right">
				<img src="../../assets/images/menu08402/apiToWrite.png" alt="">
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
				, encrypt             : 'N'
        , postBack            : ''
				, stServerObj         : []
				, stAskListObj        : []
				, stAskList           : []
			}
		},
		methods: {
			//******************************************************************************
			// POSTBACK 등록 처리
			//******************************************************************************
			RegisterPostback() {
				//------------------------------------------------------------------------------
				// input validation check
				//------------------------------------------------------------------------------
				if(this.landSelect == null || this.landSelect == '') {
					alert("랜딩페이지를 선택해주세요.");
					this.$refs.landSelect.focus(); ///$refs
					return;
				}
				if(this.sendUrl == null || this.sendUrl == '') {
					alert("발송주소(URL)를 입력해주세요.");
					this.$refs.sendUrl.focus(); ///$refs
					return;
				}
				if(this.encrypt == null || this.encrypt == '') {
					alert("암호화 여부를 선택해주세요.");
					this.$refs.encrypt.focus(); ///$refs
					return;
				}
				if(this.postBack == null || this.postBack == '') {
					alert("발송 형식을 선택해주세요.");
					this.$refs.postBack.focus(); ///$refs
					return;
				}

				//-------------------------------------------------------
				// 헤더 전송 항목을 입력정보를 확인한다.
				//-------------------------------------------------------
				for(let i = 0 ; i < this.stServerObj.length; i++) {
					if(this.stServerObj[i].useYn == true) {
						if(this.stServerObj[i].memberId == null || this.stServerObj[i].memberId == '' ) {
							alert("헤더 전송 항목 중 고정항목의 수신측 변수명을 입력해주세요.");
							return;
						}
					}
				}

				//-------------------------------------------------------
				// 데이터 전송 항목을 입력정보를 확인한다.
				//-------------------------------------------------------
				for(let i = 0 ; i < this.stAskList.length; i++) {
					//-------------------------------------------------------
					// 정보기입이 정확한지 확인한다.
					//-------------------------------------------------------
					if(this.stAskList[i].memberId == null || this.stAskList[i].memberId == '' ) {
						if(this.stAskList[i].useYn == true) {
							alert("1 데이터 전송 항목 중 " + this.stAskList[i].name + "의 수신측 변수명을 입력해주세요.");
							return;
						}
					}

					if(this.stAskList[i].memberValue == null || this.stAskList[i].memberValue == '' ) {
						if(this.stAskList[i].useYn == true) {
							if(this.stAskList[i].tp == 'Y') {
								alert("2 데이터 전송 항목 중 " + this.stAskList[i].name + "의 고정값을 입력해주세요.");
								return;
							}
						}
					}


					// if(this.stAskList[i].useYn == 'Y') {
					// 	//--------------------------------------------------------------
					// 	// 캠페인에서 등록한 항목의 경우
					// 	//--------------------------------------------------------------
					// 	if(this.stAskList[i].memberValue == null || this.stAskList[i].memberValue == '' ) {
					// 			alert("데이터 전송 항목 중 " + this.stAskList[i].name + "의 수신측 변수명을 입력해주세요.");
					// 			return;
					// 	}

					// 	//--------------------------------------------------------------
					// 	// 캠페인에 등록된 항목인 경우는 수신측 변수명만 확인한다.
					// 	//--------------------------------------------------------------
					// 	if(this.stAskList[i].memberId == null || this.stAskList[i].memberId == '') {
					// 		alert("데이터 전송 항목 중 " + this.stAskList[i].name + "의 수신측 변수명을 입력해주세요.");
					// 		return;
					// 	}

					// 	//--------------------------------------------------------------
					// 	// 항목 추가를 한 경우
					// 	//--------------------------------------------------------------
					// 	else {
					// 		//--------------------------------------------------------------
					// 		// 항목 추가의 경우 수신측 변수명과 고정값을 모두 확인한다.
					// 		//--------------------------------------------------------------
					// 		if(this.stAskList[i].memberId == null || this.stAskList[i].memberId == '') {
					// 			alert("3 데이터 전송 항목 중 수신측 변수명을 입력해주세요.");
					// 			return;
					// 		}
					// 		if(this.stAskList[i].memberValue == null || this.stAskList[i].memberValue == '') {
					// 			alert("3 데이터 전송 항목 중 수신측 고정값을 입력해주세요.");
					// 			return;
					// 		}
					// 	}
					// }
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
					, encrypt           : this.encrypt
					, postBack          : this.postBack
					, serverParam       : this.stServerObj
					, inputParam        : this.stAskList
					, status            : '00'
				};

				const frm = new FormData();
				frm.append("dataObj", new Blob([JSON.stringify(data)], {type: "application/json"}));
				axios.post("http://api.adinfo.co.kr:30000/newSendPostback", frm, {
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
			// 포스트백 항목 추가.
			//******************************************************************************
			ValueAdd() {
				if(this.stAskList.length >= 10) {
					alert('포스트백으로 전송할 항목은 최대 10개까지 가능합니다.');
					return;
				}
				let paramAdd = {
            tp          : 'Y'
					, name        : ''
					, memberId    : ''
					, memberValue : ''
					, place       : ''
					, useYn       : true
				}
				this.stAskList.push(paramAdd);
			},
			//******************************************************************************
			// 포스트백 항목 초기화
			//******************************************************************************
			ValueInit() {
				if(confirm("전송 항목을 정말로 초기화하시겠습니까?") == false) {
					return;
				}
				//--------------------------------------------------------------------
				// stAskList 오브젝트 초기화
				//--------------------------------------------------------------------
				for(let i = 0 ; i < 10; i++) {
					this.stAskList.splice(i);
				}
				//--------------------------------------------------------------------
				// DB 컬럼에는 없음이 'S'로 처리되어있음.
				//--------------------------------------------------------------------
				for(let i = 0 ; i < 10; i++) {
					if( this.stAskListObj[i] == 'S' )
						continue;
					let paramAdd = {
							tp          : 'N'
						, name        : this.stAskListObj[i]
						, memberId    : ''
						, memberValue : ''
						, place       : ''
						, useYn       : true
					}
					this.stAskList.push(paramAdd);
				}
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
            , useTp: '00'
          }
        })
        .then(response => {
          this.landingDataObj = response.data;
					this.getCampAsk();
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// 랜딩페이지 목록
			//******************************************************************************
			getCampAsk() {
        axios.get("http://api.adinfo.co.kr:30000/GetCampaignAskList",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , caId: this.campSelect
          }
        })
        .then(response => {
					for(let i = 0 ; i < 10; i++) {
						this.stAskList.splice(i);
					}
					// 설정 초기화시 사용할 오브젝트
					this.stAskListObj = response.data[0].askList.split(",");
					let AskList       = response.data[0].askList.split(",");
					for(let i = 0 ; i < 10; i++) {
						if( AskList[i] == '-' )
							continue;
            let paramAdd = {
								tp          : 'N'
              , name        : AskList[i]
							, memberId    : ''
							, memberValue : ''
							, place       : ''
							, useYn       : true
						}
						this.stAskList.push(paramAdd);
					}
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

			let arr = ['에이전트', '접수 IP', '접수 URL', '접수 도메인명', '접수 도메인 정보'];
			let arr1 = ['$_SERVER[\'HTTP_USER_AGENT\']', '$_SERVER[\'REMOTE_ADDR\']', '$_SERVER[\'HTTP_REFERER\']', '$_SERVER[\'HTTP_HOST\']', '$_SERVER[\'REQUEST_URI\']'];

			for(let i = 0 ; i < 5; i++) {
				let paramAdd = {
						tp          : 'N'
					, name        : arr[i]
					, memberId    : ''
					, memberValue : ''
					, place       : arr1[i]
					, useYn       : false
				}
				this.stServerObj.push(paramAdd);
			}
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