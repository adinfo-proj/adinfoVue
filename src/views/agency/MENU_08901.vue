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
							<th class="pwBox">
								비밀번호
							</th>
							<td>
								<input type="password" autocomplete='new-password' v-model="clntPw" ref="clntPw">
							</td>
							<th class="pwBox">
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
						<!-- <tr>
							<th colspan="4" style="font-size:18px; text-align:center">
								사업자 정보
							</th>
						</tr>
						<tr>
							<th>
								상호 명
							</th>
							<td>
								<input type="text">
							</td>
							<th>
								사업자등록번호
							</th>
							<td>
								<input type="text">
							</td>
						</tr>
						<tr>
							<th>
								대표자 명
							</th>
							<td>
								<input type="text">
							</td>
							<th>
								세금계산서 회신용 이메일
							</th>
							<td>
								<input type="text">
							</td>
						</tr>
						<tr>
							<th>
								등록증 내 주소
							</th>
							<td colspan="3">
								<input type="text">
							</td>
						</tr> -->
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

	#menu08901 .myData th ,
	#menu08901 .myData .pwBox{
		padding: 15px 20px;
		width: 11%;
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

</style>