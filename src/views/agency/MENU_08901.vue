<template>
	<div class="container">
		<div id="menu08901">
			<div class="tableBox myData">
				<table>
					<tbody>
						<tr>
							<th>
								이름/회사명
							</th>
							<td colspan="3">
								<input type="text" autocomplete='off' v-model="clntNm" ref="clntNm">
							</td>
						</tr>
						<tr>
							<th>
								아이디
							</th>
							<td colspan="3">
								{{clntId}}
							</td>
						</tr>
						<tr>
							<th>
								비밀번호
							</th>
							<td>
								<input type="password" autocomplete='new-password' v-model="clntPw" ref="clntPw">
							</td>
							<th>
								비밀번호 확인
							</th>
							<td>
								<input type="password" autocomplete='new-password' v-model="clntPwConfirm" ref="clntPwConfirm">
							</td>
						</tr>
						<tr>
							<th>
								휴대폰번호
							</th>
							<td colspan="3">
								<input type="tel" v-model="clntSubsNo" ref="clntSubsNo">
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="4">
								<button @click="Modify()">수정하기</button>
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div class="flatRate">
				<span>SLVER (1개월) 포스트백 프미리엄 서비스</span> (2022-01-01~2022-02-01) 
			</div>
			<div class="tableBox priceData">
				<table>
					<thead>
						<tr>
							<th class="division">이용권 구분</th>
							<th class="startDate">기간연장 및 이용권 전환일</th>
							<th class="lastDate">a</th>
							<th class="pay">a</th>
							<th class="price">a</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="division">as</td>
							<td class="startDate">a</td>
							<td class="lastDate">a</td>
							<td class="pay">a</td>
							<td class="price">a</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
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
                <!-- <span class="pageleft" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn" 
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getNotifyTitleList(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage + 1, false)"><i class="icon-chevron-right1"></i></span> -->
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
          clntId: this.$store.state.clntId
        , clntNm: ''
        , clntPw: ''
				, clntPwConfirm: ''
        , clntSubsNo: ''
			}
		},
		methods: {
			Select() {

				var data = {
          clntId: this.clntId
        };
				
        const frm = new FormData();
        frm.append("dataObj", new Blob([JSON.stringify(data)], {
          type: "application/json"
        }));

				axios.post("http://api.adinfo.co.kr:30000/selectmember", frm)
        .then(response => {
					this.clntNm = response.data.clntNm
					this.clntSubsNo = response.data.clntSubsNo
     
        })
        .catch(error => {
          console.log(error);
        })
			},

			Modify() {

				if(this.clntNm == null || this.clntNm == '') {
					alert('이름/회사명을 입력해주세요.');
					this.$refs.clntNm.focus();
					return;
				}
				
				if(this.clntPw != this.clntPwConfirm) {
					alert('비밀번화 확인을 재 입력해주세요.');
					this.$refs.clntPw.focus();
					return;
				}

				if(this.clntSubsNo == null || this.clntSubsNo == '') {
					alert('연락처를 입력해주세요.');
					this.$refs.clntSubsNo.focus();
					return;
				}

				var data = {
          clntId: this.clntId,
          clntNm: this.clntNm,
          clntPw: this.clntPw,
          clntSubsNo: this.clntSubsNo
        };

				
        const frm = new FormData();
        frm.append("dataObj", new Blob([JSON.stringify(data)], {
          type: "application/json"
        }));

				axios.post("http://api.adinfo.co.kr:30000/modifymember", frm)
        .then(response => {

					alert(response.data.message)
          
        })
        .catch(error => {
          console.log(error);
        })


			}

		},
		created() {
			this.$store.state.headerTopTitle = "DBMASTER";
			this.$store.state.headerMidTitle = "내 정보";

			this.Select();

		}
	}
</script>

<style scoped>

	#menu08901 .myData th{
		padding: 15px 20px;
		width: 130px;
		font-size: 14px;
		color: #666;
	}	

	#menu08901 .myData td {
		padding: 9px 11px;
	}

	#menu08901 .myData td input {
		width: 100%;
		height: 100%;
		border: 1px solid #e5e5e5;
    border-radius: 0;
	}

	#menu08901 .myData td input[type="tel"] {
		width: 70%;
	}

	#menu08901 .myData tfoot td{
		text-align: right;
		padding: 11px;
	}

	#menu08901 .myData tfoot td button {
		width: 90px;
		height: 33px;
		border: none;
		background: #e25b45;
		color: #fff;
		letter-spacing: -0.3px;
		border-radius: 10px;
	}


	#menu08901 .flatRate {
		width: 100%;
		padding: 17px;
		border-radius: 10px;
		background: #fff;
		border: 1px solid #e25b45;
		text-align: center;
		margin-bottom: 10px;
		font-size: 18px;
		color: #666;
		font-weight: 700;
	}

	#menu08901 .flatRate span{
		font-size: 18px;
		color: #e25b45;
		letter-spacing: -0.45px;
		line-height: 20px;
	}

	#menu08901 .priceData table th,
	#menu08901 .priceData table td {
		border: none;
		position: relative;
		padding: 13px;
		text-align: center;
	}

	#menu08901 .priceData .division {
		width: 15%;
	}

	#menu08901 .priceData .startDate,
	#menu08901 .priceData .lastDate {
		width: 30%;
	}

	#menu08901 .priceData .pay {
		width: 12%;
	}

	#menu08901 .priceData .price {
		width: 13%;
	}

	#menu08901 .priceData table th::after {
		position: absolute;
		content: "";
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	#menu08901 .priceData table th:last-child::after {
		display: none;
	}

	

</style>