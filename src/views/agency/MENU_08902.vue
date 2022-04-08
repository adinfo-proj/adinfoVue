<template>
	<div class="container">
		<div id="menu08902">
			<div class="flatRate">
				<span>SILVER (1개월)</span> ( 2022-02-01 만료 / 잔여기간: 5일) 
			</div>
			<div class="tableBox priceData">
				<table>
					<thead>
						<tr>
							<th class="division">이용권 구분</th>
							<th class="startDate">이용권 시작일</th>
							<th class="lastDate">이용권 만료일</th>
							<th class="extra">부가서비스</th>
							<th class="pay">결제수단</th>
							<th class="price">결제금액</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="division">SILVER <span>(랜딩페이지 7개)</span></td>
							<td class="startDate">2021-03-26 15:29:26</td>
							<td class="lastDate">2021-04-25</td>
							<td class="extra"> 포스트백,  SMS 발송</td>
							<td class="pay">계좌이체</td>
							<td class="price">66,000원</td>
						</tr>
					</tbody>
					<tfoot>
						<!-- 
							<tr>
							<td colspan="5">
                <span class="pageleft" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage - 1, false)"><i class="icon-chevron-left1"></i></span>
								<ul>
									<li
										v-bind:class="{on : (indexPage) == curPage}" 
										v-for="(indexPage, index) in pageCount" :key="index" 
										@click="getNotifyTitleList(pageCount[0] + index, false)"
									>
										{{indexPage}}
									</li>
								</ul>
                <span class="pageright" v-if="pageCount.length > 0" @click="getNotifyTitleList(curPage + 1, false)"><i class="icon-chevron-right1"></i></span>
							</td>
						</tr> 
					-->
					</tfoot>

				</table>
			</div>
		</div>
	</div>
</template>

<script>


	export default {

	}
</script>

<style scoped>

	#menu08902 .flatRate {
		width: 100%;
		padding: 17px;
		border-radius: 10px;
		background: #fff;
		border: 1px solid #e25b45;
		text-align: center;
		margin-bottom: 10px;
		font-size: 14px;
		color: #666;
	}
	#menu08902 .flatRate span{
		font-weight: 700;
		font-size: 18px;
		color: #e25b45;
		letter-spacing: -0.45px;
		line-height: 20px;
	}
	#menu08902 .priceData table th,
	#menu08902 .priceData table td {
		border: none;
		position: relative;
		padding: 13px;
		text-align: center;
	}
	#menu08902 .priceData table th {
		font-size: 14px;
	}
	#menu08902 .priceData .division {
		width: 15%;
	}
	#menu08902 .priceData .startDate,
	#menu08902 .priceData .lastDate,
	#menu08902 .priceData .extra {
		width: 20%;
	}
	#menu08902 .priceData .pay {
		width: 12%;
	}
	#menu08902 .priceData .price {
		width: 13%;
	}
	#menu08902 .priceData .division  span{
		color: #999;
	}
	#menu08902 .priceData th::after {
		position: absolute;
		content: "";
		width: 1px;
		height: 14px;
		background: #d2d2d2;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
	#menu08902 .priceData th:last-child::after {
		display: none;
	}
	#menu08902 .priceData thead {
		border-bottom: 1px solid #939393;
	}
	#menu08902 .priceData tbody tr {
		border-bottom: 1px solid #ececec;
	}
	#menu08902 .priceData tfoot span,
	#menu08902 .priceData tfoot ul,
	#menu08902 .priceData tfoot ul li {
		display: inline-block;
		cursor: pointer;
	}
	#menu08902 .priceData tfoot span {
    width: 25px;
    height: 25px;
    border: 1px solid #e4e4e4;
    color: #e6e6e6;
    font-size: 13px;
    padding: 5px 5px;
	}
	#menu08902 .priceData tfoot ul li {
    margin: 0 10px;
		cursor: pointer;
		color: #606060;
		line-height: 14px;
	}
	#menu08902 .priceData tfoot ul li.on {
    font-weight: 900;
    position: relative;
	}
	#menu08902 .priceData tfoot ul li.on:after {
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