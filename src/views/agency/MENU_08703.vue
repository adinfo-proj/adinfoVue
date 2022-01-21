<template>
	<div class="container">
		<div id="menu08703">
			<div class="tableBox techTop">
				<h1>기능 개선 요청</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="techNum">No.</th>
							<th class="techNm">제목</th>
							<th class="techWriter">작성자</th>
							<th class="techDate">작성일</th>
							<th class="techOpen">조회수</th>
						</tr>

					</thead>
					<tbody>
						<tr>
							<th class="techNum">3</th>
							<td class="techNm" @click="GoTechCont()">222222222222222222222222222222</td>
							<td class="techWriter">운영자</td>
							<td class="techDate">3333-33-33</td>
							<td class="techOpen">123</td>
						</tr>
						<!-- <tr>
							<th class="techNum">2</th>
							<td class="techNm" @click="GoRequestCont()">222222222222222222222222222222</td>
							<td class="techWriter">운영자</td>
							<td class="techDate">3333-33-33</td>
							<td class="techOpen">456</td>
						</tr>
						<tr>
							<th class="techNum">1</th>
							<td class="techNm" @click="GoRequestCont()">222222222222222222222222222222</td>
							<td class="techWriter">운영자</td>
							<td class="techDate">3333-33-33</td>
							<td class="techOpen">789</td>
						</tr> -->
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<button @click="WriteTech()">기능 요청하기</button>
							</td>
						</tr>
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
			GoTechCont() { 
				console.log();
				this.$router.push({ 
					name : 'MENU_08703_2', 
					// params: { index: index } 
				})
			},
			WriteTech () {
				this.$router.push({ 
					name : 'MENU_08703_3' 
				})
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "기능 개선 요청";

		}
	}
</script>

<style scoped>

	#menu08703 .techTop {
		background: #fff;
		padding: 21px;
	}

	#menu08703 .techTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08703 .techTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08703 th,
	#menu08703 td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}


	#menu08703 .techNum {
		width: 7%;
	}

	#menu08703 .techNm {
		width: 63%;
	}

	#menu08703 td.techNm {
		text-align: left;
		padding-left: 30px;
		cursor: pointer;
	}

	#menu08703 .techWriter,
	#menu08703 .techDate,
	#menu08703 .techOpen  {
		width: 10%;
	}

	#menu08703 thead {
		border-bottom: 1px solid #5c5c5c;
	}

	#menu08703 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08703 thead tr th:last-child:after{
		display: none;
	}

	#menu08703 tbody tr{
		border-bottom: 1px solid #ececec;
	}
	
	#menu08703 tfoot tr:first-child td{
		text-align: right;
	}

	#menu08703 tfoot tr:first-child td button {
		padding: 12px 24px;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		background: #393939;
	}



	#menu08703 tbody span{
		display: inline-block;
		width: 80px;
	}


	#menu08703 tfoot ul,
	#menu08703 tfoot ul li {
		display: inline-block;
	}

	#menu08703 tfoot span {
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

	#menu08703 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}

	#menu08703 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}

	#menu08703 tfoot ul li.on:after {
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