<template>
	<div class="container">
		<div class="topBox">
			<div class="moneyBox">
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png"  alt="">
					<div>
						<p>합산 예치금</p>
						<b>12,000,000원</b>
					</div>
				</div>
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png" alt="">
					<div>
						<p>잔여 예치금</p>
						<b>300,000원</b>
					</div>
				</div>
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png" alt="">
					<div>
						<p>잔여 충전 광고비</p>
						<b>32,000,000원</b>
					</div>
				</div>
				<div class="moneySubBox">
					<img src="../../assets/images/moneyBoxIcon.png" alt="">
					<div>
						<p>취소/환불예정액</p>
						<b>82,000,000원</b>
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
				<div class="tapBox">
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(0)" v-bind:class="{on : 0 == divSelect}">라이브 <span>15</span></a>
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(1)" v-bind:class="{on : 1 == divSelect}">대기중 <span>20</span></a>
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(2)" v-bind:class="{on : 2 == divSelect}">심사중 <span>08</span></a>
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(3)" v-bind:class="{on : 3 == divSelect}">승인보류 <span>12</span></a>
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(4)" v-bind:class="{on : 4 == divSelect}">일시정지 <span>06</span></a>
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(5)" v-bind:class="{on : 5 == divSelect}">종료 <span>20</span></a>
					<a href="javascript:void(0)" class="tapBtn" @click="divSelectFunc(9)" v-bind:class="{on : 9 == divSelect}">전체 <span>50</span></a>
				</div>
				<div class="tapBoxSeach">
					<select name="viewNum" id="viewNum">
						<option value="viewNum10">10개</option>
						<option value="viewNum20">20개</option>
						<option value="viewNum30">30개</option>
						<option value="viewNum50">50개</option>
						<option value="viewNum10">100개</option>
					</select>
				</div>
			</div>
			<div class="tapData" >
				<!-- 라이브 -->
				<div class="tapTable tapLive" v-if="divSelect == 0">
					<table>
						<thead>
							<tr>
								<th class="tableNum">번호</th>
								<th class="tableCamName">캠페인명</th>
								<th class="todayNum">금일수량</th>
								<th class="beforeNum">전일수량</th>
								<th class="rateBox">유효율</th>
								<th class="money02">잔여 광고비</th>
								<th class="money03">이벤트 광고비</th>
								<th class="money01">총 충전 광고비</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">71%</span>
									<progress class="rateBar" value="71" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">2</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">50%</span>
									<progress class="rateBar" value="50" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">3</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">60%</span>
									<progress class="rateBar" value="60" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">4</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">32%</span>
									<progress class="rateBar" value="32" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">5</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">25%</span>
									<progress class="rateBar" value="25" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">6</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">10%</span>
									<progress class="rateBar" value="10" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">7</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">90%</span>
									<progress class="rateBar" value="90" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
									<th class="tableNum">8</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">45%</span>
									<progress class="rateBar" value="45" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">9</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">85%</span>
									<progress class="rateBar" value="85" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
							</tr>
							<tr>
								<th class="tableNum">10</th>
								<td class="tableCamName">모아만의원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">80%</span>
									<progress class="rateBar" value="80" max="100"></progress>
								</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="money01">1,000,000원</td>
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
				<!-- 대기중 -->
				<div class="tapTable tapWait" v-if="divSelect == 1">
					<table>
						<thead>
							<tr>
								<th class="tableNum">번호</th>
								<th class="tableCamName">캠페인명</th>
								<th class="dateRevise">최종 수정 일</th>
								<th class="waitReason">대기 사유</th>
								<th class="manager">담당자</th>
								<th class="managerNum">연락처</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">2</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">3</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">4</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">5</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">6</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">7</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">8</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">9</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">10</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="waitReason">500,000원</td>
								<td class="manager">100,000원</td>
								<td class="managerNum">10/50</td>
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
				<!-- 심사중 -->
				<div class="tapTable taoJudge" v-if="divSelect == 2">
					<table>
						<thead>
							<tr>
								<th class="tableNum">번호</th>
								<th class="tableCamName">캠페인명</th>
								<th class="dateRevise">최종 수정 일</th>
								<th class="progress">진행률</th>
								<th class="worker">작업자</th>
								<th class="condition">상태</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">심사중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="condition">10/50</td>
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
				<!-- 승인보류 -->
				<div class="tapTable tapHold" v-if="divSelect == 3">
					<table>
						<thead>
							<tr>
								<th class="tableNum">번호</th>
								<th class="tableCamName">캠페인명</th>
								<th class="dateRevise">최종 수정 일</th>
								<th class="progress">진행률</th>
								<th class="worker">작업자</th>
								<th class="holdReason">보류사유</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>``
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">대기중탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="progress">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="holdReason">10/50</td>
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
				<!-- 일시정지 -->
				<div class="tapTable tapPause" v-if="divSelect == 4">
					<table>
						<thead>
							<tr>
								<td class="tableNum">번호</td>
								<td class="tableCamName">캠페인명</td>
								<td class="dateRevise">최종 수정 일</td>
								<td class="money02">일시정지 일시</td>
								<td class="money03">진행 예정 일</td>
								<td class="todayNum">진행률</td>
								<td class="beforeNum">작업자</td>
								<td class="rateBox">정지사유</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">일시정지</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">71%</span>
									<progress class="rateBar" value="71" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">2</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">50%</span>
									<progress class="rateBar" value="50" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">3</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">60%</span>
									<progress class="rateBar" value="60" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">4</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">32%</span>
									<progress class="rateBar" value="32" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">5</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">25%</span>
									<progress class="rateBar" value="25" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">6</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">10%</span>
									<progress class="rateBar" value="10" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">7</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">90%</span>
									<progress class="rateBar" value="90" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">8</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">45%</span>
									<progress class="rateBar" value="45" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">9</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">85%</span>
									<progress class="rateBar" value="85" max="100"></progress>
								</td>
							</tr>
							<tr>
								<th class="tableNum">10</th>
								<td class="tableCamName">일시정지</td>
								<td class="money01">1,000,000원</td>
								<td class="money02">500,000원</td>
								<td class="money03">100,000원</td>
								<td class="todayNum">10/50</td>
								<td class="beforeNum">10/50</td>
								<td class="rateBox"> 50/500 <span class="rateDate">80%</span>
									<progress class="rateBar" value="80" max="100"></progress>
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
				<!-- 종료 -->
				<div class="tapTable tapEnd" v-if="divSelect == 5">
					<table>
						<thead>
							<tr>
								<th class="tableNum">번호</th>
								<th class="tableCamName">캠페인명</th>
								<th class="dateRevise">최종 수정 일</th>
								<th class="dateEnd">종료 일</th>
								<th class="worker">작업자</th>
								<th class="endReason">종료사유</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">종료탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="dateEnd">500,000원</td>
								<td class="worker">100,000원</td>
								<td class="endReason">10/50</td>
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
				<!-- 전체 -->
				<div class="tapTable tapAll" v-if="divSelect == 9">
					<table>
						<thead>
							<tr>
								<th class="tableNum">번호</th>
								<th class="tableCamName">캠페인명</th>
								<th class="dateRevise">최종 수정 일</th>
								<th class="nowCon">현재 상태</th>
								<th class="money04">잔여금액</th>
								<th class="accumNum">누적수량</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
							</tr>
							<tr>
								<th class="tableNum">1</th>
								<td class="tableCamName">전체탭</td>
								<td class="dateRevise">1,000,000원</td>
								<td class="nowCon">500,000원</td>
								<td class="money04">100,000원</td>
								<td class="accumNum">10/50</td>
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
		</div>
	</div>
</template>

<script>
export default {
  // 
  data() {
    return {
      divSelect: 0,
    }
  },
  methods: {

		//******************************************************************************
		// 대쉬보드 탭버튼 함수
		//******************************************************************************
		divSelectFunc(pos) {
			this.divSelect = pos;
		}
	},
	created() {
    this.$store.state.headerTopTitle = "DASHBOARD";
    this.$store.state.headerMidTitle = "DASHBOARD";
	}
}
</script>


<style scoped>
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
		/* width: 150px; */
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

	.topBox .moneySubBox div {
		padding-left: 10px;
	}

	.topBox .moneySubBox p {
		margin: 18px 0 4px;
		font-size: 14px;
	}

	.topBox .moneySubBox b {
		font-size: 20px;
		color: #222;
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
		color: #222;
	}

	.topBox .notice li {
		margin-top: 10px;
	}

	.topBox .notice li .noticeDate {
		float: right;
	}

	.dataBox {
		padding-bottom: 90px;
	}

	.dataSubBox {
		display: flex;
		justify-content: space-between;
	}

	.dataSubBox .tapBtn {
		display: block;
		width: 100px;
		height: 45px;
		float: left;
		padding: 14px 0;
		text-align: center;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background: #e7e7e7;
		margin-right: 10px;
		font-size: 14px;
		font-weight: 700;
	}

	.dataSubBox .tapBtn span {
		font-size: 13px;
		vertical-align: top;
		position: relative;
		font-weight: 700;
	}

	.dataSubBox .tapBtn span:after {
		clear: both;
		width: 100%;
		height: 0.5px;
		content: "";
		display: block;
		position: absolute;
		background: #666;
		left: 0;
	}

	.dataSubBox .tapBtn.on,
	.dataSubBox .tapBtn.on span {
		background: #fff;
		color: #e25b45;
	}

	.dataSubBox .tapBtn.on span:after {
		background: #e25b45;
	}

	.dataBox .tapBoxSeach {
		padding-top: 5px;
	}

	.dataBox .tapBoxSeach select {
		width: 100px;
		height: 30px;
		border: solid 1px #e5e5e5;
    border-radius: 5px;
		padding: 5px 2px;
		margin: 0 5px;
	}

	.dataBox table,
	.dataBox table th	{
		text-align: center;
	}

	.dataBox .tapData table {
		width: 100%;
    border-collapse: collapse;
    border: solid 1px #e5e5e5;
    background: #fff;
    border-radius: 10px;
		border-top-left-radius: 0px;
    border-style: hidden;
	}

	.dataBox thead {
		border-bottom: 2px solid #c9c9c9;
		height: 50px;
		font-weight: 700;
		width: 100%;
	}

	.dataBox thead th {
		color: #222;
		position: relative;
	}

	.dataBox thead th:after {
		clear: both;
		width: 1px;
		height: 30%;
		content: "";
		position: absolute;
		background: #d2d2d2;
		right: 0;
	}

	.dataBox thead th:last-child:after {
		display: none;
	}

	.dataBox tbody tr {
		height: 41px;
		border-bottom: 1px solid #ececec;
	}

	.dataBox .tableNum {
		width: 5%;
	}

	.dataBox .tapLive td {
		width: 12%
	}

	.dataBox .tapLive .rateBox {
		width: 23%;
	}

	/* .dataBox .tapLive td {
		width: 12%
	}

	.dataBox .tapLive .tableNum {
		width: 5%;
	}

	.dataBox .tapLive .rateBox {
		width: 23%;
	} */

	.rateBox > span,
	.rateBox > progress {
		margin-left: 15px;
	}

	.dataBox .rateBox .rateBar {
		width: 55%;
		height: 10px;
		border-radius: 10px;
		border: 1px solid #e3e3e3;
	}
	

	.dataBox .rateBox progress.rateBar::-webkit-progress-bar{
		background: #f8f8f8;
		
	}

	.dataBox .rateBox progress.rateBar::-webkit-progress-value {
		background-color: #e25b45;
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
