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

						<!--
						<tr>
							<th colspan="4" style="font-size:18px; text-align:center">
								사업자 정보
							</th>
						</tr>
						<tr>
							<th>
								상호 명
							</th>
							<td>
								<input type="text" v-model="businessNm">
							</td>
							<th class="business">
								사업자등록번호
							</th>
							<td>
								<input type="text" v-model="businessNo">
							</td>
						</tr>
						<tr>
							<th>
								대표자 명
							</th>
							<td>
								<input type="text" v-model="ceoNm">
							</td>
							<th class="business">
								세금계산서 회신용 이메일
							</th>
							<td>
								<input type="text" v-model="replyAdd">
							</td>
						</tr>
						<tr>
							<th>
								등록증 내 주소
							</th>
							<td colspan="3">
							<div class="adressBox" @click="AddressApi()">
								{{topAdd}}
							</div>	
							<input type="text" class="adressBox" placeholder="상세주소" v-model="subAdd">
							
							</td>
						</tr>
						<tr>
							<th>
								사업자등록증
							</th>
							<td colspan="3">
								<input type="text" class="upload_name" placeholder="사업자등록증을 업로드해주세요." disabled>
								<input type="file" accept="image/*" :id="this.indexNum" class="upload_hidden" ref="upImage01" @change="UploadImg()">
								<label :for="this.indexNum">이미지 찾기 <i class="icon-plus1"></i></label>
								
							</td>
						</tr>
						-->


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
				, topAdd: '주소를 입력해주세요'
				, subAdd: ''
				, businessNm: ''
				, businessNo : ''
				, ceoNm : ''

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
				if (this.clntPw.length > 13 || this.clntPw.length < 8) {
          alert('비밀번호는  8자 ~ 13자 이내 입력바랍니다. (영문 , 숫자 ,특수문자 조합 사용)');
          this.$refs.clntPw.focus();
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

			},

			// 주소 팝업
			AddressApi() {
        new window.daum.Postcode({ oncomplete: (data) => { 
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
          // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
          // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
          let fullRoadAddr = data.roadAddress; // 도로명 주소 변수
          let extraRoadAddr = ''; // 도로명 조합형 주소 변수
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          
          if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
            extraRoadAddr += data.bname;
          } // 건물명이 있고, 공동주택일 경우 추가한다. 
          
          if(data.buildingName !== '' && data.apartment === 'Y'){
            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          } // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if(extraRoadAddr !== ''){ extraRoadAddr = ' (' + extraRoadAddr + ')'; } // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
          if(fullRoadAddr !== ''){
            fullRoadAddr += extraRoadAddr;
          } // 우편번호와 주소 정보를 해당 필드에 넣는다.
          this.zip = data.zonecode; //5자리 새우편번호 사용
          this.topAdd = fullRoadAddr;
          } })
        .open()
      }

		},
		watch: {
      //******************************************************************************
      // 입력 값에 정규표현식 문자 및 "," 표시
      //******************************************************************************
      clntPw : function() { 
        return this.clntPw = this.clntPw.replace(/\s/g,'').replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'');
      },
      clntPwConfirm : function() {
        return this.clntPwConfirm = this.clntPwConfirm.replace(/\s/g,'').replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,'');
      },
    }, 
		created() {
			this.$store.state.headerTopTitle = "DBMASTER";
			this.$store.state.headerMidTitle = "내 정보";

			this.Select();

		}
	}
</script>

<style scoped>

	#menu08901 .myData table{
		table-layout: auto;
	}

	#menu08901 .myData th {
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
	#menu08901 .myData td .adressBox{
		width: 41.5%; 
		height: 100%;
	}
	#menu08901 .myData td div.adressBox{
		float: left;
		margin-right: 10px;
		background: #f5f5f5;
		border: 1px solid #e5e5e5;
		padding: 5px;
	}
	#menu08901 .myData .upload_name {
    width: 362px;
    height: 30px;
    margin-right: 10px;
    padding-left: 10px;
  }
  #menu08901 .myData input[type="file"] {
    display: none;
  }
  
  #menu08901 .myData input[type="file"] + label {
    display: inline-block;
    width: 110px;
    height: 100%;
    border-radius: 10px;
    background-color: #f0f0f0;
    color: #000;
    padding: 8px 20px;
    font-weight: 700;
    letter-spacing: -0.3px;
    cursor: pointer;
    border: 1px solid #e5e5e5;
    position: relative;
  }

  #menu08901 .myData input[type="file"] + label > i {
    position: absolute;
    font-size: 18px;
    color: #e25b45;
    font-weight: 700;
    right: 10px;
    top: 7px;
  }
	#menu08901 .myData .business{
		width: 14.5%;
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