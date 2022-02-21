<template>
	<div class="container">
		<div id="menu08402">
			<div class="tableBox campList">
				<table>
					<tr>
						<th>캠페인 선택</th>
						<td>
							<select v-model="campSelect" disabled>
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
							<select v-model="landSelect" disabled>
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
							<input type="text" v-model="sendUrl">
						</td>
					</tr>
					<tr>
						<th>발송 형식</th>
						<td>
							<input type="radio" v-model="postBack" name="postBack" id="goGet"  value='G'><label for="goGet">GET 전송</label>
							<input type="radio" v-model="postBack" name="postBack" id="goPost" value='P'><label for="goPost">POST 전송</label>
						</td>
					</tr>
					<tr>
						<th>사용여부</th>
						<td>
							<input type="radio" v-model="used" name="used" id="ing"  value='00'><label for="ing">진행중</label>
							<input type="radio" v-model="used" name="used" id="pause" value='01'><label for="pause">일시정지</label>
							<input type="radio" v-model="used" name="used" id="end"  value='02'><label for="end">종료</label>
						</td>
					</tr>
				</table>
			</div>
			<div class="tableBox valueList">
				<table>
					<thead>
						<tr>
							<th class="info">전송 항목</th>
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
							<td class="info" v-if="(askList.name != '-') && (askList.name != '')"> 
								{{ askList.name }} 
							</td>
							<td class="infofix" v-else>
								고정 항목
							</td>
							<td class="opp" ><input type="text" name="" id="memberId" v-model="askList.memberId"></td>

							<td class="opp" v-if="askList.name != '-'" >
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
				<button @click="ModifyPostback()">변경하기</button>
				<button @click="CancelUpdate()">취소하기</button>
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
				, encrypt             : ''
        , postBack            : ''
				, used								: ''
				, stAskValue          : []
				, stAskListObj        : []
				, stAskList           : []

				//------------------------------------------------------------------------------
				// MENU_08401 화면에서 전달받은 변수를 담는다.
				//------------------------------------------------------------------------------
				, paramCaId           : this.$route.params.caId
				, paramPgId           : this.$route.params.pgId
				, paramPbId           : this.$route.params.pbId
			}
		},
		methods: {
			//******************************************************************************
			// POSTBACK 변경 처리
			//******************************************************************************
			ModifyPostback() {
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

				for(let i = 0 ; i < this.stAskList.length; i++) {

					if(this.stAskList[i].memberId == null || this.stAskList[i].memberId == '' ) {
						if(this.stAskList[i].tp == 'N')
							alert("전송 항목 중 " + this.stAskList[i].name + "의 수신측 변수명을 입력해주세요.");
						else
							alert("전송 항목 중 고정항목의 수신측 변수명을 입력해주세요.");
						return;
					}

					if(this.stAskList[i].tp == 'Y') {
						if(this.stAskList[i].memberValue == null || this.stAskList[i].memberValue == '' ) {
							alert("전송 항목 중 " + this.stAskList[i].name + "의 고정값을 입력해주세요.");
							return;
						}
					}
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
					, pbId              : this.paramPbId
					, clntId            : this.$store.state.clntId
					, sendUrl           : this.sendUrl
					, encrypt           : this.encrypt
					, postBack          : this.postBack
					, inputParam        : this.stAskList
					, status						: this.used
				};

				const frm = new FormData();
				frm.append("dataObj", new Blob([JSON.stringify(data)], {type: "application/json"}));
				axios.post("http://api.adinfo.co.kr:30000/updSendPostback", frm, {
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
					this.campaignNameListObj = response.data;

					for(let i = 0 ; i < response.data.length; i++) {
						if(this.paramCaId == response.data[i].caId) {
							this.campSelect = response.data[i].caId;
						}
					}					
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
					, name        : '-'
					, memberId    : ''
					, memberValue : ''
					, useYn       : true
				}
				this.stAskList.push(paramAdd);
			},
			//******************************************************************************
			// 포스트백 변경 취소
			//******************************************************************************
			CancelUpdate() {
				this.$router.push({ path : "MENU_08401" });
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
				// DB 컬럼에는 없음이 '-'로 처리되어있음.
				//--------------------------------------------------------------------
				for(let i = 0 ; i < 10; i++) {
					if( this.stAskListObj[i] == '-' )
						continue;
					let paramAdd = {
							tp          : 'N'
						,	name        : this.stAskListObj[i]
						, memberId    : ''
						, memberValue : ''
						, useYn       : ''
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
            , caId: this.paramCaId
            , useTp: '00'
          }
        })
        .then(response => {
					this.landingDataObj = response.data;
					for(let i = 0 ; i < response.data.length; i++) {
						if(this.paramPgId == response.data[i].pgId) {
							this.landSelect = response.data[i].pgId;
						}
					}

					this.getCampAsk();
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// 포스트백 항목
			//******************************************************************************
			getLandFormat() {
        axios.get("http://api.adinfo.co.kr:30000/GetSelPostbackOne",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , caId: this.paramCaId
						, pgId: this.paramPgId
						, pbId: this.paramPbId
          }
        })
        .then(response => {
					if(response.data != null) {
						this.sendUrl  = response.data.postbackUrl;
						this.encrypt  = response.data.sslYn;
						this.postBack = response.data.sendType;
						this.used     = response.data.status;
						
						for(let i = 0 ; i < 10; i++) {
//							if( response.data.accessFlag.charAt(i) == '_' )
//								continue;

							let paramAdd = {
									tp          : 'N'
								, name        : this.stAskValue[i]
								, memberId    : ''
								, memberValue : ''
								, useYn       : true
							}

							paramAdd.tp = response.data.accessFlag.charAt(i);

							switch(i) {
								case 0 :  paramAdd.memberId    = response.data.value01.split("=")[0];
													paramAdd.memberValue = response.data.value01.split("=")[1];
													break;
								case 1 :  paramAdd.memberId    = response.data.value02.split("=")[0];
													paramAdd.memberValue = response.data.value02.split("=")[1];
													break;
								case 2 :  paramAdd.memberId    = response.data.value03.split("=")[0];
													paramAdd.memberValue = response.data.value03.split("=")[1];
													break;
								case 3 :  paramAdd.memberId    = response.data.value04.split("=")[0];
													paramAdd.memberValue = response.data.value04.split("=")[1];
													break;
								case 4 :  paramAdd.memberId    = response.data.value05.split("=")[0];
													paramAdd.memberValue = response.data.value05.split("=")[1];
													break;
								case 5 :  paramAdd.memberId    = response.data.value06.split("=")[0];
													paramAdd.memberValue = response.data.value06.split("=")[1];
													break;
								case 6 :  paramAdd.memberId    = response.data.value07.split("=")[0];
													paramAdd.memberValue = response.data.value07.split("=")[1];
													break;
								case 7 :  paramAdd.memberId    = response.data.value08.split("=")[0];
													paramAdd.memberValue = response.data.value08.split("=")[1];
													break;
								case 8 :  paramAdd.memberId    = response.data.value09.split("=")[0];
													paramAdd.memberValue = response.data.value09.split("=")[1];
													break;
								case 9 :  paramAdd.memberId    = response.data.value10.split("=")[0];
													paramAdd.memberValue = response.data.value10.split("=")[1];
													break;
							}

							this.stAskList.push(paramAdd);
						}
					}
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// DB 수집 항목 조회
			//******************************************************************************
			getCampAsk() {
        axios.get("http://api.adinfo.co.kr:30000/GetCampaignAskList",
        {
          params: {
              mbId: this.$store.state.mbId
            , adId: this.$store.state.mbId
            , caId: this.paramCaId
          }
        })
        .then(response => {
					for(let i = 0 ; i < 10; i++) {
						this.stAskList.splice(i);
					}
					// 설정 초기화시 사용할 오브젝트
					this.stAskListObj = response.data[0].askList.split(",");
					this.stAskValue   = response.data[0].askList.split(",");
					this.getLandFormat();
        })
        .catch(error => {
          console.log(error);
        })
			},
		},
		created() {
			this.$store.state.headerTopTitle = "포스트백";
			this.$store.state.headerMidTitle = "포스트백 변경";
			this.getCampaignNameLst();
		}
	}
</script>

<style scoped>
	#menu08402 {
		width: 800px;
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
	#menu08402 .valueList table .info,
	#menu08402 .valueList table .infofix,
	#menu08402 .valueList table .opp{
		font-weight: 700;
		width: 30%;
	}
	#menu08402 .valueList table th::after {
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		content: "";
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	#menu08402 .valueList table th:last-child::after{
		display: none;
	}
	#menu08402 .valueList table td{
		text-align: center;
	}
	#menu08402 .valueList button {
		width: 120px;
		height: 30px;
		border: none;
		border-radius: 20px;
		background: #393939;
		font-weight: 700;
		color: #fff;
	}
	#menu08402 .valueList button:first-child {
		margin-right: 10px;
		width: 100px;
		background: #fff;
		border: 1px solid #393939;
		color: #393939;
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