<template>
	<div class="container">
		<div id="menu08701_2">
			<div class="tableBox noticeTop">
				<h1>공지사항</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox noticeView">
				<h3>[ 업데이트 ] 디비마스터 2022-01-20 목요일 업데이트 안내입니다. 
					<p>
						<span><a href="javascript:void(0)" @click="ModifyNotice()">수정</a></span>
						<span><a href="javascript:void(0)">삭제</a></span>
						<span>관리자</span>
						<span>2022-01-20</span>
					</p>
				</h3>
				<p>
					안녕하세요. 카페24 운영도우미 입니다.<br>
					2021년 12월 카드사 부분 무이자 할부 이벤트를 안내드립니다.<br>
					<br>
					자세한 내용은 아래를 참조해주세요.<br>
					<br>
					1. 부분 무이자 할부란?<br>
					- 할부 기간에 따라 결제 고객이 수수료 일부를 부담하고, 나머지는 카드사가 부담하는 형식입니다.<br>
					&nbsp;&nbsp;※ 참고: 무이자 할부는 카드사에서 수수료 전체를 부담하는 형식으로, 부분 무이자 할부와 상이합니다.<br>
					<br>
					2. 유의사항<br>
					<br>
					- 해당 행사는 카드사 사정에 의해 중지 또는 변경될 수 있습니다.<br>
					- PG사에서 발송되는 무이자 할부 안내 메일을 반드시 확인해주시기 바랍니다.<br>
					- 부분 무이자 할부의 경우 ARS 신청 대상 회원의 행사이므로 결제창에서 무이자 표기되지 않으며, 상점부담 무이자가 우선 적용됩니다.<br>
					<br>
					3. PG사별 상세 내용<br>
					<br>
					[KSNET 부분 무이자 할부]<br>
					<br>
					- 법인/체크/선불/기프트/은행계열카드 제외<br>
					- 비씨카드, NH농협카드 회원이 직접 카드사 ARS 신청 시 무이자 및 부분 무이자 할부 가능 <br>
					<br>
					<br>
					- 정확한 내용은 PG사로 문의
				</p>

			</div>
			<div class="tableBox prevBox">
				<p>
					<span class="prev">이전글</span>
					[ 업데이트 ] 디비마스터 2022-01-20 목요일 업데이트 안내입니다.
					<span class="prevDate">2022-01-20</span>
				</p>
				<p>
					<span class="prev">다음글</span>
					[ 업데이트 ] 디비마스터 2022-01-20 목요일 업데이트 안내입니다.
					<span class="prevDate">2022-01-20</span>
				</p>
			</div>
			<div class="btnBox">
				<button @click="GoNoticeList()">목록으로</button>
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
			// 공지사항 리스트로 돌아가기
			//******************************************************************************
			GoNoticeList() {
				this.$router.push({ name : 'MENU_08701' })
			},
			ModifyNotice() {
				this.$router.push({ 
					name : 'MENU_08701_3', 
					// params: { index: index } 
				})
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "공지사항";

		}
	}
</script>

<style scoped>

	#menu08701_2 .tableBox {
		background: #fff;
	}

	#menu08701_2 .noticeTop {
		padding: 21px;
	}

	#menu08701_2 .noticeTop p,
	#menu08701_2 .prevBox p {
		color: #444;
	}

	#menu08701_2 .noticeTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08701_2 .noticeTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08701_2 .noticeView h3 {
		padding: 16px 0 16px 20px;
		border-bottom: 1px solid #939393;
		color: #222;
	}

	#menu08701_2 .noticeView h3 p{
		/* display: inline-block; */
		float: right;
	}

	#menu08701_2 .noticeView h3 p span {
		display: inline-block;
		position: relative;
		padding: 0 20px;
	}

	#menu08701_2 .noticeView h3 p span:before {
		clear: both;
		content: "";
		position: absolute;
		width: 1px;
		height: 13px;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background: #d2d2d2;
	}

	#menu08701_2 > .noticeView > p {
		padding: 17px 19px;
		line-height: 20px;
		color: #444;
	}

	#menu08701_2 .prevBox p {
		padding: 11px;
	}

	#menu08701_2 .prevBox p:first-child {
		border-bottom: 1px solid #e5e5e5;
	}

	#menu08701_2 .prevBox .prev {
		display: inline-block;
		padding: 6.13px 13px 7.3px 13px;
		background: #f0f0f0;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		margin-right: 18px;
	}

	#menu08701_2 .prevBox .prevDate {
		padding-left: 20px;
		float: right;
		padding: 6.13px 9px 7.3px 20px;
		position: relative;
	}

	#menu08701_2 .prevBox .prevDate:before {
		clear: both;
		content: "";
		position: absolute;
		width: 1px;
		height: 13px;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background: #d2d2d2;
	}

	#menu08701_2 .btnBox {
		text-align: center;
		margin-bottom: 20px;
	}

	#menu08701_2 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 50px;
		background: #e25b45;
		font-size: 16px;
		color: #fff;
		font-weight: 700;
	}
</style>