<template>
	<div class="container">
		<div id="menu08701">
			<div class="tableBox noticeBack">
				<h1>공지사항</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<h2>
					제목
					<select name="" id="">
						<option value="" disabled>머리말 선택</option>
						<option value="">aa</option>
						<option value="">bb</option>
						<option value="">vv</option>
					</select>
					<input type="text">
				</h2>
				<div class="textBox">
					<textarea name="" id="" cols="30" rows="10"></textarea>
				</div>
			</div>
			<div class="btnBox">
				<button>등록하기</button>
				<button class="canBtn">취소하기</button>
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

		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "공지사항";

		}
	}
</script>

<style scoped>

	#menu08701 .tableBox {
		background: #fff;
	}

	#menu08701 .noticeBack {
		padding: 21px;
	}

	#menu08701 .noticeTop h1 {
		font-size: 14px;
		margin-bottom: 7px;
	}

	#menu08701 .tableBox h2 {
		padding: 8px 11px 9px 21px;
		border-bottom: 1px solid #e5e5e5;
	}

	#menu08701 .tableBox h2 select {
		padding: 5px;
		border: 1px solid #e5e5e5;
		margin-left: 21px;
		width: 155px;
	}

	#menu08701 .tableBox h2 input {
		margin-left: 5px;
		width: 1117px;
		border-radius: 0;
	}

	#menu08701 .tableBox .textBox {
		padding: 8px 11px;
	}

	#menu08701 .tableBox .textBox textarea {
		width: 100%;
		height: 487px;
		resize: none;
		border: 1px solid #e5e5e5;
		color: #666;
		padding: 10px;
	}

	#menu08701 .btnBox{
		padding: 20px 0;
		text-align: center;
	}

	#menu08701 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 30px;
		background: #e25b45;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
	}

	#menu08701 .btnBox button.canBtn {
		margin-left: 20px;
		background: #868686;
	}

</style>