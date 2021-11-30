<template>
	<div class="container">
		<div class="topBox">
			<div class="moneyBox">
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png"  alt="">
					<div>
						<p>합산 예치금</p>
						<b>2,000,000원</b>
					</div>
				</div>
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png" alt="">
					<div>
						<p>잔여 예치금</p>
						<b>2,000,000원</b>
					</div>
				</div>
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png" alt="">
					<div>
						<p>잔여 충전 광고비</p>
						<b>2,000,000원</b>
					</div>
				</div>
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png" alt="">
					<div>
						<p>취소/환불예정액</p>
						<b>2,000,000원</b>
					</div>
				</div>
			</div>
			<div class="notice">
				<h2>공지사항</h2>
				<ul>
					<li>
						<a href="javascript:void(0)">
							- <span class="noticeKinds">[애드인포]</span> 안녕하세요.공지사항 입니다.<span class="noticeDate">2021-11-09</span>
						</a>	
					</li>
					<li>
						<a href="javascript:void(0)">
							- <span class="noticeKinds">[애드인포]</span> 안녕하세요. 이것은 공지사항 입니다.<span class="noticeDate">2021-11-09</span>
						</a>	
					</li>
					<li>
						<a href="javascript:void(0)">
							- <span class="noticeKinds">[일반]</span> 안녕하세요.공지사항 입니다.<span class="noticeDate">2021-11-09</span>
						</a>	
					</li>
				</ul>
			</div>
		</div>
		<div class="dataBox">
			<div class="dataSubBox">
				<div class="tabBox">
					<a href="javascript:void(0)" class="tabBtn on">라이브 <span>15</span></a>
					<a href="javascript:void(0)" class="tabBtn">심사중 <span>08</span></a>
					<a href="javascript:void(0)" class="tabBtn">승인보류 <span>12</span></a>
					<a href="javascript:void(0)" class="tabBtn">일시정지 <span>06</span></a>
					<a href="javascript:void(0)" class="tabBtn">전체 <span>20</span></a>
				</div>
				<div>날짜선택, 등등등 내용 추가 예정</div>
			</div>
			<table>
				<thead>
					<tr>
						<td class="tableNum">번호</td>
						<td class="tableCamName">캠페인명</td>
						<td class="money01">총 충전 광고비</td>
						<td class="money02">잔여 광고비</td>
						<td class="money03">이벤트 광고비</td>
						<td class="todayNum">금일수량</td>
						<td class="beforeNum">전일수량</td>
						<td class="rateBox">유효율</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th class="tableNum">1</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">71%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">2</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">50%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">3</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">60%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">4</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">32%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">5</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">25%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">6</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">10%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">7</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">90%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">8</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">45%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">9</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">85%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
					<tr>
						<th class="tableNum">10</th>
						<td class="tableCamName">모아만의원</td>
						<td class="money01">1,000,000원</td>
						<td class="money02">500,000원</td>
						<td class="money03">100,000원</td>
						<td class="todayNum">10/50</td>
						<td class="beforeNum">10/50</td>
						<td class="rateBox"> 50/500 <span class="rateDate">80%</span>
							<span class="rateBar"><span class="progressRateBar"></span></span>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td class="dataBtn" colspan="8">
							<a href="javascript:void(0)" class="pageleft"><i class="fas fa-angle-left"></i></a>
							<a href="javascript:void(0)" class="pageBtn">1</a>
							<a href="javascript:void(0)" class="pageBtn">2</a>
							<a href="javascript:void(0)" class="pageBtn">3</a>
							<a href="javascript:void(0)" class="pageBtn">4</a>
							<a href="javascript:void(0)" class="pageBtn">5</a>
							<a href="javascript:void(0)" class="pageright"><i class="fas fa-angle-right"></i></a>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>

<script>

</script>


<style>
	.topBox {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.topBox .moneyBox {
		width: 808px;
		display: flex;
		justify-content: space-between;
		padding: 35px 33px;
		background: #fff;
		border: 1px solid #ededed;
		border-radius: 10px;
	}

	.topBox .moneySubBox {
		width: 150px;
		height: 44px;
		display: flex;
		justify-content: space-between;
		align-items:center;
	}

	.topBox .moneySubBox img {
		width: 29px;
		height: 29px;
		margin-top: 10px;
	}

	.topBox .moneySubBox p {
		margin: 18px 0 4px;
		font-size: 14px;
	}

	.topBox .moneySubBox b {
		font-size: 20px;
	}

	.topBox .notice {
		width: 532px;
		border-radius: 10px;
		padding: 22px 27px;
		background: #fff;
		border: 1px solid #ededed;
	}

	.topBox .notice h2 {
		font-size: 16px;
	}

	.topBox .notice li {
		margin-top: 10px;
	}

	.topBox .notice li .noticeDate {
		float: right;
	}

	.dataSubBox {
		display: flex;
		justify-content: space-between;
	}

	.dataSubBox .tabBtn {
		display: block;
		width: 126px;
		height: 50px;
		float: left;
		padding: 14px 0;
		text-align: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background: #e7e7e7;
		margin-right: 10px;
		font-size: 16px;
		font-weight: 700;
	}

	.dataSubBox .tabBtn span {
		font-size: 15px;
		vertical-align: top;
		position: relative;
		font-weight: 700;
	}

	.dataSubBox .tabBtn span:after {
		clear: both;
		width: 100%;
		height: 0.5px;
		content: "";
		display: block;
		position: absolute;
		background: #666;
		left: 0;
	}

	.dataSubBox .tabBtn.on,
	.dataSubBox .tabBtn.on span {
		background: #fff;
		color: #e25b45;
	}

	.dataSubBox .tabBtn.on span:after {
		background: #e25b45;
	}

	.dataBox {
		padding-bottom: 90px;
	}

	.dataBox table,
	.dataBox table th	{
		text-align: center;
	}

	.dataBox table {
		width: 100%;
    border-collapse: collapse;
    border: solid 1px #e5e5e5; 
    width: 100%;
    background: #fff;
    border-radius: 10px;
		border-top-left-radius: 0px;
    border-style: hidden;
	}

	.dataBox thead {
		border-bottom: 1px solid #939393;
		height: 50px;
		font-weight: 700;
	}

	.dataBox thead td {
		position: relative;
	}

	.dataBox thead td:after {
		clear: both;
		width: 1px;
		height: 30%;
		content: "";
		position: absolute;
		background: #d2d2d2;
		right: 0;
	}

	.dataBox thead td:last-child:after{
		display: none;
	}

	.dataBox tbody tr {
		height: 41px;
		border-bottom: 1px solid #ececec;
	}

	.dataBox td {
		width: 12%
	}

	.dataBox .tableNum {
		width: 5%;
	}

	.dataBox .rateBox {
		width: 23%;
	}

	.rateBox>span {
		margin-left: 15px;
	}

	.dataBox .rateBox .rateBar {
		display: inline-block;
		width: 55%;
		height: 10px;
		background: #f8f8f8;
		border-radius: 10px;
		border: 1px solid #e3e3e3;
		overflow: hidden;
	}

	.dataBox .rateBox .rateBar .progressRateBar {
		display: block;
		height: 100%;
		background: #e25b45;
		width: 50%;
		float: left;
		border-radius: 10px;
	}

	.dataBox tfoot {
		height: 100px;
		/* font-size: 14px; */
	}

	.dataBox tfoot .pageBtn {
		/* letter-spacing: 15px; */
		text-align: center;
		padding: 10px;
	}

	.dataBox tfoot i {
		letter-spacing: 5px;
		display: inline-block;
		width: 25px;
		height: 25px;
		margin: 0 15px;
		padding: 7px 8px;
		border: 1px solid #e4e4e4;
	}
	
</style>
