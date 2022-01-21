<template>
	<div class="container">
		<div id="menu08701">
			<div class="tableBox noticeTop">
				<h1>공지사항</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="noticeNum">No.</th>
							<th class="noticeNm">제목</th>
							<th class="noticeWriter">작성자</th>
							<th class="noticeDate">작성일</th>
							<th class="noticeOpen">조회수</th>
						</tr>

					</thead>
					<tbody>
						<tr>
							<th class="noticeNum">3</th>
							<td class="noticeNm" @click="GoNoticeCont()"> <span>[ 업데이트 ]</span>222222222222222222222222222222</td>
							<td class="noticeWriter">운영자</td>
							<td class="noticeDate">3333-33-33</td>
							<td class="noticeOpen">123</td>
						</tr>
						<!-- <tr>
							<th class="noticeNum">2</th>
							<td class="noticeNm"> <span>[ 공지사항 ]</span>222222222222222222222222222222</td>
							<td class="noticeWriter">운영자</td>
							<td class="noticeDate">3333-33-33</td>
							<td class="noticeOpen">456</td>
						</tr>
						<tr>
							<th class="noticeNum">1</th>
							<td class="noticeNm"> <span>[ 이벤트 ]</span>222222222222222222222222222222</td>
							<td class="noticeWriter">운영자</td>
							<td class="noticeDate">3333-33-33</td>
							<td class="noticeOpen">789</td>
						</tr> -->
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<span class="pageleft"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn on">1</li>
									<li class="pageBtn">2</li>
									<li class="pageBtn">3</li>
									<li class="pageBtn">4</li>
								</ul>
								<span class="pageright"><i class="icon-chevron-right1"></i></span>
							</td>
						</tr>
					</tfoot>
				</table>
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
			GoNoticeCont() { 
				console.log();
				this.$router.push({ 
					name : 'MENU_08701_2', 
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

	#menu08701 .noticeTop {
		background: #fff;
		padding: 21px;
	}

	#menu08701 .noticeTop p,
	#menu08701 .prevBox p {
		color: #444;
	}


	#menu08701 .noticeTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08701 .noticeTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08701 th,
	#menu08701 td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}



	#menu08701 .noticeNum {
		width: 7%;
	}

	#menu08701 .noticeNm {
		width: 63%;
	}

	#menu08701 td.noticeNm {
		text-align: left;
		padding-left: 30px;
		cursor: pointer;
	}

	#menu08701 .noticeWriter,
	#menu08701 .noticeDate,
	#menu08701 .noticeOpen  {
		width: 10%;
	}

	#menu08701 thead {
		border-bottom: 1px solid #5c5c5c;
	}

	#menu08701 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08701 thead tr th:last-child:after{
		display: none;
	}

	#menu08701 tbody tr{
		border-bottom: 1px solid #ececec;
	}

	#menu08701 tbody span{
		display: inline-block;
		width: 80px;
	}


	#menu08701 tfoot ul,
	#menu08701 tfoot ul li {
		display: inline-block;
	}

	#menu08701 tfoot span {
		display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #c6c6c6;
    font-size: 13px;
    padding: 5px 5px;
    text-align: left;
		cursor: pointer;
	}

	#menu08701 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}

	#menu08701 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}

	#menu08701 tfoot ul li.on:after {
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