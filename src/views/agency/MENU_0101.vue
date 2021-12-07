<template>
	<div class="container">
		<div class="campanignSerch">
			<select name="camName" id="camName">
				<option value="">캠페인명1</option>
				<option value="">캠페인명1</option>
			</select>
				<input type="radio" name="serchToday" id="serchToday" class="serchSubDate"> <label for="serchToday">오늘</label>
				<input type="radio" name="serchToday" id="serchYesterday" class="serchSubDate"> <label for="serchToday">어제</label>
				<input type="radio" name="serchToday" id="serchThreeDay" class="serchSubDate"> <label for="serchToday">3일</label>
				<input type="radio" name="serchToday" id="serchSevenDay" class="serchSubDate"> <label for="serchToday">7일</label>		
			<div class="serchDateChoose">
				<input type="date" id="serchStartDate1"> ~ 
				<input type="date" id="serchEndDate1">
			</div>
		</div>
		<div class="serchDataBox"></div>
		<div class="serchDataSub">
			<div class="serchTab">
				<div class="serchTabBtn">DB 유입 현황</div>
				<div class="serchTabBtn">대행사 DB 지표</div>
				<div class="serchTabBtn">마케터 기준 DB 지표</div>
			</div>
			<div class="serchSub">
				<table class="serchSubTable">
					<thead>
						<tr>
							<th>번호</th>
							<th>캠페인명</th>
							<th>마케터 코드</th>
							<th>유입 시간</th>
							<th>접수 IP</th>
							<th>DB상태</th>
							<th>단가</th>
							<th>고객입력 정보</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>1</th>
							<td>모아만 의원</td>
							<td>011125144</td>
							<td>2021-11-11 12:05:55</td>
							<td>221.545.1.111</td>
							<td><img src="" alt="대기"></td>
							<td>250,000원</td>
							<td>승인 대기중</td>
						</tr>
						<tr>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		// 
		data() {
			return {
		
			}
		},
		methods: {

		},
		created() {
			this.$store.state.headerTopTitle = "데이터 센터";
			this.$store.state.headerMidTitle = "일자별 통계";
		}
	}
</script>

<style>

</style>
