<template>
	<div class="container menu0804">
		<div class="landPrev">
			<img src="../../assets/images/landingprev/300x300_2.jpg" alt="">
			<img src="../../assets/images/landingprev/300x300.jpg" alt="">
			<div class="formPrev">
				<form method="post">
					<input type="text" name="value01" placeholder="이름을 입력하세요.">
					<input type="text" name="value03" placeholder="나이">				
					<input type="text" name="value02" placeholder="연락처 '-'없이 입력해주세요.">
					<div class="checkLine">
						<input type="radio" name="value04" value="male" id="male"><label for="male">남자</label>
						<input type="radio" name="value04" value="female" id="female"><label for="female">여자</label>
					</div>
					<textarea class="textBox" name="value05" placeholder="문의 내용을 입력해주세요."></textarea>
					<input type="checkbox" name="agree01" id="agree01">
					<label for="agree01">개인정보 수집 동의<a href="javascript:void(0)">[보러가기]</a></label>
					<div class="centerBox">
						<button>신청하기</button>
					</div>
				</form>
			</div>
		</div>
		<div class="landChoice">
			<div class="basicInfo landBox">
				<h2>랜딩페이지 기본정보</h2>
				<table>
					<tr>
						<th>
							캠페인 분류
						</th>
						<td>
							<select name="campDis" id="campDis">
								<option value="none">분류를 선택해 주세요.</option>
								<option value="value1">test1</option>
								<option value="value2">test2</option>
								<option value="value3">test3</option>
								<option value="value4">test4</option>
							</select>
						</td>
						<th>
							회사명
						</th>
						<td>
							<input type="text" class="" name="company">
						</td>
					</tr>
					<tr>
						<th>
							캠페인 명
						</th>
						<td colspan="3">
							<input type="text" name="campNm">
						</td>
					</tr>
					<tr>
						<th>
							캠페인 내용
						</th>
						<td colspan="3">
							<textarea name="campCont" id="campCont"></textarea>
						</td>
					</tr>
				</table>
			</div>
			<div class="landScr landBox">
				<p>
					스크립트 삽입
					<input type="checkbox" name="landScr" id="landScr">
					<label for="landScr"></label>
					<i class="icon-chevron-down1"></i>
				</p>
				<div class="landScrChecked">
					<textarea class=""></textarea>
				</div>
			</div>
			<div class="landImg landBox">
					<h2>이미지 등록 <span>(가로사이즈 800px 권장, 용량 3MB 이하)</span><i class="icon-x1"></i></h2>
					<input class="upload_name" disabled="disabled">
					<label for="landImg01">이미지 등록하기 <i class="icon-plus1"></i></label> 
					<input type="file" id="landImg01" class="upload_hidden" >
			</div>
			<div class="landText landBox">
				<h2>텍스트 등록 <i class="icon-x1"></i></h2>
				<ckeditor></ckeditor>
			</div>

			<div class="landForm landBox">
				<h2>폼 꾸미기<span>(최대10개항목)</span><i class="icon-x1"></i></h2>
				<table>
					<thead>
						<tr>
							<th class="formNum">번호</th>
							<th class="formNm">항목</th>
							<th class="formType">유형</th>
							<th class="formCh">필수</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="formNum">01</td>
							<td class="formNm">이름</td>
							<td class="formType">
								<select name="formTypeSel" disabled>
									<option value="textForm" selected>입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary01" checked><label for="necessary01"></label></td>
						</tr>
						<tr>
							<td class="formNum">02</td>
							<td class="formNm">연락처</td>
							<td class="formType">
								<select name="formTypeSel" disabled>
									<option value="textForm" selected>입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02" checked><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox01">
							<td class="formNum">03</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox02">
							<td class="formNum">04</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox03">
							<td class="formNum">05</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox04">
							<td class="formNum">06</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox05">
							<td class="formNum">07</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox06">
							<td class="formNum">08</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox07">
							<td class="formNum">09</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
						<tr class="hiddenBox08">
							<td class="formNum">10</td>
							<td class="formNm"><input type="text"></td>
							<td class="formType">
								<select name="formTypeSel">
									<option value="textForm">입력박스</option>
									<option value="radioForm">체크박스</option>
									<option value="checkForm">다중체크박스</option>
									<option value="selForm">선택박스</option>
								</select>
							</td>
							<td class="formCh"><input type="checkbox" id="necessary02"><label for="necessary02"></label></td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="4">
								<button>입력항목 <i class="icon-plus1"></i></button>
							</td>
						</tr>
					</tfoot>
				</table>
				<div class="agreeBox">
					<input type="checkbox" name="agree01" id="agree01"><label for="agree01">이용약관 표시</label>
				</div>
				<div class="agreeBox">
					<input type="checkbox" name="agree02" id="agree02"><label for="agree02">이용약관 표시</label>
				</div>
				<div class="agreeBox">
					<input type="checkbox" name="agree03" id="agree03"><label for="agree03">이용약관 표시</label>
				</div>
				<div class="agreeBox">
					<input type="checkbox" name="agree04" id="agree04"><label for="agree04">이용약관 표시</label>
				</div>
				<div class="agreeBox">
					<input type="checkbox" name="agree05" id="agree05"><label for="agree05">이용약관 표시</label>
				</div>
				<div class="agreeBox">
					<h6 class="miniBox">신청 버튼 이름</h6>
					<input type="text" name="sumBtn" id="sumBtn">
				</div>
				<div class="agreeBox">
					<h6>신청버튼 모양 선택</h6>
					<input type="radio" name="btnShape" id="btn01"><label for="btn01"></label>
					<input type="radio" name="btnShape" id="btn02"><label for="btn02"></label>
					<input type="radio" name="btnShape" id="btn03"><label for="btn03"></label>
				</div>
				<div class="agreeBox">
					<h6 class="miniBox">신청버튼 모양 선택</h6>
					<input type="radio" name="btnColor" id="btn_e50000">
					<label for="btn_e50000"></label>
					<input type="radio" name="btnColor" id="btn_e56e00">
					<label for="btn_e56e00"></label>
					<input type="radio" name="btnColor" id="btn_0077e5">
					<label for="btn_0077e5"></label>
					<input type="radio" name="btnColor" id="btn_aa00e5">
					<label for="btn_aa00e5"></label>
					<input type="radio" name="btnColor" id="btn_350101">
					<label for="btn_350101"></label>
					<input type="radio" name="btnColor" id="btn_291d4b">
					<label for="btn_291d4b"></label>
					<input type="radio" name="btnColor" id="btn_a37300">
					<label for="btn_a37300"></label>
					<input type="radio" name="btnColor" id="btn_2a4c05">
					<label for="btn_2a4c05"></label>
					<input type="radio" name="btnColor" id="btn_4e4e4e">
					<label for="btn_4e4e4e"></label>
					<input type="radio" name="btnColor" id="btn_000000">
					<label for="btn_000000"></label>
				</div>			
			</div>
			<div class="btnBox">
				<button class="saveBtn">저장하기</button>
				<button class="imgBtn">이미지 추가</button>
				<button class="textBtn">텍스트 추가</button>
				<button class="formBtn">폼 추가</button>
			</div>
		

		</div>
	</div>
</template>

<script>


	export default {
		data() {
			return {

			}
		},
		methods: {
			//******************************************************************************
			// 파일 업로드 시 text 박스의 값 보여지기
			//******************************************************************************
			// uploadfile(){
			// 	let etcFile = this.$refs.etcImage.files;
			// 	// let etcName = [];

			// 	// etcName.push(etcFile[0].name

			// 	this.etcImeageName = etcFile[0].name;
			// },

		},
		created() {
			this.$store.state.headerTopTitle = "DBMASTER";
			this.$store.state.headerMidTitle = "랜딩페이지 제작";

		}
	}
</script>

<style scoped>
	.menu0804 {
		display: flex;
		justify-content: space-between;
	}

	.menu0804 .landPrev {
		width: 820px;
		padding-right: 20px;
	}

	.menu0804 .landPrev img{
		width: 100%;
	}

	.menu0804 .landPrev .formPrev {
		width: 100%;
		border: 30px solid #3e3e3e;
		padding: 50px;
	}

	.menu0804 .landPrev .formPrev input[type="text"] {
		width: 100%;
		margin-bottom: 10px;
		font-size: 14px;
		padding: 12px 16px;
	}

	.menu0804 .landPrev .formPrev	.checkLine input[type="radio"],
	.menu0804 .landPrev .formPrev	input[type="checkbox"]{
		display: none;
	}

	.menu0804 .landPrev .formPrev	.checkLine label{
		font-size: 16px;
		display: inline-block;
		width: 76px;
		margin: 15px 15px 25px 0px ;
		position: relative;
		text-align: right;
		padding-right: 10px;
		font-weight: 700;
	}

	.menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
		font-size: 16px;
		display: inline-block;
		margin-bottom: 38px;
		font-weight: 700;
		position: relative;
		padding-left: 35px;
	}

	.menu0804 .landPrev .formPrev	input[type="checkbox"] + label a{
		font-size: 16px;
		margin-left: 5px;
	}

	.menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
	.menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
    clear: both;
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #cbcbcb;
    background: #f6f6f6;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    border-radius: 2px;
  }

	.menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after,
	.menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
		clear: both;
    position: absolute;
    display: block;
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 15px;
    left: 7px;
    top: 2px;
    color: #e25b45;
	}

	.menu0804 .landPrev .formPrev	.textBox {
		width: 100%;
		height: 120px;
		resize: none;
		margin-bottom: 16px;
		padding: 10px;
		font-size: 16px;
	}

	.menu0804 .landPrev .formPrev .centerBox{
		text-align: center;
	}

	.menu0804 .landPrev .formPrev .centerBox button {
		width: 50%;
		background: #aa00e5;
		color: #fff;
		border: none;
		padding: 25px;
		font-size: 28px;
		border-radius: 100px;
		font-weight: 700;
	}

	.menu0804 .landChoice {
		width: 525px;
	}

	.menu0804 .landChoice .landBox{
		width: 100%;
		border: 1px solid #e5e5e5;
		background: #fff;
		border-radius: 10px;
		margin-bottom: 8px;
	}

	.menu0804 .landChoice .landBox h2{
		font-size: 14px;
		padding: 14px 20px;
		border-bottom: 1px solid #e5e5e5;
	}

	.menu0804 .landChoice .basicInfo table {
		padding: 5px 20px 21px;
		width: 100%;
	}

	.menu0804 .landChoice .basicInfo table th,
	.menu0804 .landChoice .basicInfo table td {
		text-align: left;
	}

	.menu0804 .landChoice .basicInfo table th {
		width: 64px;
		letter-spacing: -0.36px;
		padding: 8.5px 0;
		vertical-align: top;
	}

	.menu0804 .landChoice .basicInfo table td input,
	.menu0804 .landChoice .basicInfo table td select,
	.menu0804 .landChoice .basicInfo table td textarea {
		border: 1px solid #e5e5e5;
		padding: 8.5px 14px;
		margin: 2px 0;
	}

	.menu0804 .landChoice .basicInfo table td textarea {
		width: 100%;
		height: 60px;
		resize: none;
		padding: 10px;
		font-size: 16px;
	}

	.menu0804 .landChoice .basicInfo table input{
		width: 100%;
		height: 100%;
	}

	.menu0804 .landChoice .landForm table {
		width: 100%;
		text-align: center;
	}

	@media (max-width: 960px) {
		.menu0804 .landPrev .formPrev input[type="text"] {
			font-size: 28px;
		}

		.menu0804 .landPrev .formPrev	.checkLine label{
			font-size: 32px;
			margin: 15px 27px 25px 0px ;
			padding: 0;
			width: 104px;
		}
		.menu0804 .landPrev .formPrev	input[type="checkbox"] + label {
			font-size: 24px;
			display: inline-block;
			padding-left: 45px;
		}

		.menu0804 .landPrev .formPrev	input[type="checkbox"] + label a{
			font-size: 24px;
		}
		
		.menu0804 .landPrev .formPrev	.checkLine input[type="radio"] + label:before,
		.menu0804 .landPrev .formPrev	input[type="checkbox"] + label:before {
			width: 20px;
			height: 20px;
		}

		.menu0804 .landPrev .formPrev	.checkLine input[type="radio"]:checked + label:after {
			font-size: 20px;
			top: 7px;
		}

		.menu0804 .landPrev .formPrev	input[type="checkbox"]:checked + label:after {
			font-size: 20px;
			top: 3px;
		}

		.menu0804 .landPrev .formPrev	.textBox {
			font-size: 32px;
		}

		.menu0804 .landPrev .formPrev .centerBox button {
			width: 100%;
			font-size: 40px;
		}



	}

</style>