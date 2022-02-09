<template>
	<div class="container">

		<table>
			<tr>
				<th>
					이름/회사명
				</th>
				<td>
					<input type="text" autocomplete='off' v-model="clntNm" ref="clntNm">
				</td>
			</tr>
			<tr>
				<th>
					아이디
				</th>
				<td>
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
			</tr>
			<tr>
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
				<td>
					<input type="tel" v-model="clntSubsNo" ref="clntSubsNo">
				</td>
			</tr>
		</table>
		<button @click="Modify()">수정</button>
		<button @click="Select()">취소</button>
	</div>

	<!-- 
url - /selectmember (clntId)


clntId
/modifymember (clntId, clntPw, clntNm, clntSubsNo
data = {
		clntId = ,
	, clntPw, clntNm, clntSubsNo

	


	resMap.put("status" , false); - 실패
	
	alert(message) 
}


-->
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
				console.log(this.$store.state.clntId);

				var data = {
          clntId: this.clntId
        };
				
        const frm = new FormData();
        frm.append("dataObj", new Blob([JSON.stringify(data)], {
          type: "application/json"
        }));

				axios.post("http://api.adinfo.co.kr:30000/selectmember", frm)
        .then(response => {
					console.log(response)
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

					console.log(response)
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

		}
	}
</script>

<style>

</style>