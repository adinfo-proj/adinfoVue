<template>
	<div class="container">
		<div id="menu08702_3">
			<div class="tableBox techTop">
				<h1>기능 개선 요청</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<h2>
					제목
					<input type="text">
				</h2>
				<div class="textBox">
					<textarea></textarea>
				</div>
			</div>
			<div class="btnBox">
				<button>등록하기</button>
				<button class="canBtn" @click="CancleBoardList()">취소하기</button>
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
			CancleBoardList() { 
				console.log();
				this.$router.push({ name : 'MENU_08703' })
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "기능 개선 요청";

		}
	}
</script>

<style scoped>

	#menu08702_3 .tableBox {
		background: #fff;
	}

	#menu08702_3 .techTop {
		padding: 21px;
	}

	#menu08702_3 .techTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08702_3 .techTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

		#menu08702_3 .tableBox h2 {
		padding: 8px 11px 9px 21px;
		border-bottom: 1px solid #e5e5e5;
	}

	#menu08702_3 .tableBox h2 input {
		margin-left: 30px;
		width: 1268px;
		border-radius: 0;
	}

	#menu08702_3 .tableBox .textBox {
		padding: 8px 11px;
	}

	#menu08702_3 .tableBox .textBox textarea {
		width: 100%;
		height: 487px;
		resize: none;
		border: 1px solid #e5e5e5;
		color: #666;
		padding: 10px;
	}

	#menu08702_3 .btnBox{
		padding: 20px 0;
		text-align: center;
	}

	#menu08702_3 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 30px;
		background: #e25b45;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
	}

	#menu08702_3 .btnBox button.canBtn {
		margin-left: 20px;
		background: #868686;
	}




</style>