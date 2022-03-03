<template>
	<div class="container">
		<div id="menu08901">
			<div class="tableBox myData">
				<table>
					<tbody>
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
								이름/회사명
							</th>
							<td colspan="3">
								<input type="text" autocomplete='off' v-model="clntNm" ref="clntNm">
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
			<!-- <div class="flatRate">
				<span>SILVER (1개월)</span> ( 2022-02-01 만료 / 잔여기간: 5일) 
			</div>
			<div class="tableBox priceData">
				<table>
					<thead>
						<tr>
							<th class="division">이용권 구분</th>
							<th class="startDate">이용권 시작일</th>
							<th class="lastDate">이용권 만료일</th>
							<th class="extra">부가서비스</th>
							<th class="pay">결제수단</th>
							<th class="price">결제금액</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="division">SILVER <span>(랜딩페이지 7개)</span></td>
							<td class="startDate">2021-03-26 15:29:26</td>
							<td class="lastDate">2021-04-25</td>
							<td class="extra"> 포스트백,  SMS 발송</td>
							<td class="pay">계좌이체</td>
							<td class="price">66,000원</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<span class="pageleft"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="on">
										1
									</li>
									<li>
										2
									</li>
									<li>
										3
									</li>
									<li>
										4
									</li>

								</ul>
                <span class="pageright"><i class="icon-chevron-right1"></i></span>
                <span class="pageleft" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getNotifyTitleList(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
							</td>
						</tr>
					</tfoot>

				</table>
			</div> -->
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
		font-size: 14px;
		color: #666;
		/* font-weight: 700; */
	}

	#menu08901 .flatRate span{
		font-weight: 700;
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

	#menu08901 .priceData table th {
		font-size: 14px;
	}

	#menu08901 .priceData .division {
		width: 15%;
	}

	#menu08901 .priceData .startDate,
	#menu08901 .priceData .lastDate,
	#menu08901 .priceData .extra {
		width: 20%;
	}

	#menu08901 .priceData .pay {
		width: 12%;
	}

	#menu08901 .priceData .price {
		width: 13%;
	}

	#menu08901 .priceData .division  span{
		color: #999;
	}

	#menu08901 .priceData th::after {
		position: absolute;
		content: "";
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	#menu08901 .priceData th:last-child::after {
		display: none;
	}

	#menu08901 .priceData thead {
		border-bottom: 1px solid #939393;
	}

	#menu08901 .priceData tbody tr {
		border-bottom: 1px solid #ececec;
	}

	#menu08901 .priceData tfoot span,
	#menu08901 .priceData tfoot ul,
	#menu08901 .priceData tfoot ul li {
		display: inline-block;
		cursor: pointer;
	}

	#menu08901 .priceData tfoot span {
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #e6e6e6;
    font-size: 13px;
    padding: 5px 5px;
	}

	#menu08901 .priceData tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
		color: #606060;
		line-height: 14px;
	}
	#menu08901 .priceData tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}
	#menu08901 .priceData tfoot ul li.on:after {
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