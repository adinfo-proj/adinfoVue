<template>
	<div class="container">
		<div id="menu08701">
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
							<td class="noticeNm"> <span>(업데이트)</span>222222222222222222222222222222</td>
							<td class="noticeWriter">운영자</td>
							<td class="noticeDate">3333-33-33</td>
							<td class="noticeOpen">123</td>
						</tr>
						<tr>
							<th class="noticeNum">2</th>
							<td class="noticeNm"> <span>(공지사항)</span>222222222222222222222222222222</td>
							<td class="noticeWriter">운영자</td>
							<td class="noticeDate">3333-33-33</td>
							<td class="noticeOpen">456</td>
						</tr>
						<tr>
							<th class="noticeNum">1</th>
							<td class="noticeNm"> <span>(이벤트)</span>222222222222222222222222222222</td>
							<td class="noticeWriter">운영자</td>
							<td class="noticeDate">3333-33-33</td>
							<td class="noticeOpen">789</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<span class="pageleft"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn">1</li>
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

		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "공지사항";

		}
	}
</script>

<style scoped>

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


	/* #menu08701 tf */





</style>