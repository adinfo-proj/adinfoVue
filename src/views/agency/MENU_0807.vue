<template>
	<div class="container">
		<div id="menu08702">
			<div class="tableBox boardTop">
				<h1>문의사항</h1>
				<p>궁금하신 사항이 있으시다면 언제든지 문의해주시기 바랍니다. 신속하고 친절하게 답변드리겠습니다.</p>
			</div>
			<div class="tableBox">
				<table>
					<thead>
						<tr>
							<th class="boardNum">No.</th>
							<th class="boardNm">제목</th>
							<th class="boardWriter">작성자</th>
							<th class="boardDate">작성일</th>
							<th class="boardOpen">조회수</th>
						</tr>

					</thead>
					<tbody>
						<tr>
							<th class="boardNum">1</th>
							<td class="boardNm">제목</td>
							<td class="boardWriter">작성자</td>
							<td class="boardDate">작성일</td>
							<td class="boardOpen">조회수</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="5">
								<button @click="WriteBoard()">문의하기</button>
							</td>
						</tr>
						<tr>
							<td colspan="5">
							<span><i class="icon-chevron-left1"></i></span>
								<ul>
									<li class="pageBtn">1</li>
									<li class="pageBtn">2</li>
									<li class="pageBtn">3</li>
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



<style scoped>

	#menu08702 .boardTop {
		background: #fff;
		padding: 21px;
	}

	#menu08702 .boardTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08702 .boardTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08702 th,
	#menu08702 td {
		padding: 15px 18px;
		text-align: center;
		border: none;
		position: relative;
	}


	#menu08702 .boardNum {
		width: 7%;
	}

	#menu08702 .boardNm {
		width: 63%;
	}

	#menu08702 td.boardNm {
		text-align: left;
		padding-left: 30px;
		cursor: pointer;
	}

	#menu08702 .boardWriter,
	#menu08702 .boardDate,
	#menu08702 .boardOpen  {
		width: 10%;
	}

	#menu08702 thead {
		border-bottom: 1px solid #5c5c5c;
	}

	#menu08702 thead tr th:after{
		position: absolute;
    content: "";
    width: 1px;
    height: 14px;
    background: #d2d2d2;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
	}

	#menu08702 thead tr th:last-child:after{
		display: none;
	}

	#menu08702 tbody tr{
		border-bottom: 1px solid #ececec;
	}

	#menu08702 tbody span{
		display: inline-block;
		width: 80px;
	}

	#menu08702 tfoot tr:first-child td{
		text-align: right;
	}

	#menu08702 tfoot tr:first-child td button {
		padding: 12px 24px;
		font-size: 14px;
		font-weight: 700;
		color: #fff;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		background: #393939;
	}


	#menu08702 tfoot ul,
	#menu08702 tfoot ul li {
		display: inline-block;
	}

	#menu08702 tfoot span {
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

	#menu08702 tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
	}

	#menu08702 tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}

	#menu08702 tfoot ul li.on:after {
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