<template>
	<div class="container">
		<div id="menu08999">
			<div class="ratePlanTop">
				<ul>
					<li class="on">
						<span class="tapBtn">디미바스터 서비스 상품</span>
						<div class="ratePlanMiddle mid01">
							<input type="radio"  name="plan02" id="basic" value="basic" v-model="servicePlan">
							<label for="basic">
								<span class="top">BASIC</span>
								<span class="middle">29,700 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 3개</span>
							</label>
							<input type="radio" name="plan02" id="silver" value="silver">
							<label for="silver">
								<span class="top">SILVER</span>
								<span class="middle">66,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 7개</span>
							</label>
							<input type="radio" name="plan02" id="gold" value="gold">
							<label for="gold">
								<span class="top">GOLD</span>
								<span class="middle">99,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 12개</span>
							</label>
							<input type="radio" name="plan02" id="vip" value="vip">
							<label for="vip">
								<span class="top">VIP</span>
								<span class="middle">220,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 30개</span>
							</label>
						</div>
					</li>
					<li >
						<span class="tapBtn">부가서비스 상품</span>
						<div class="ratePlanMiddle mid02">
							<input type="radio" name="plan02" id="post" value="basic">
							<label for="post">
								<span class="top">BASIC</span>
								<span class="middle">29,700 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 3개</span>
							</label>
							<input type="radio" name="plan02" id="sms" value="silver">
							<label for="sms">
								<span class="top">SILVER</span>
								<span class="middle">66,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 7개</span>
							</label>
						</div>
					</li>
				</ul>
			</div>
			<div class="ratePlanBottom">
				<div class="detailPlan">
					<div class="left">
						<img src="../../assets/images/ratePlan/basic.jpg" alt="basic">
					</div>
					<div class="right">
						<h6>
							[디비마스터] 베이직 1개월
						</h6>
						<p class="subtitle">
							마케터의 성공 파트너 디비마스터의 유료 서비스 상품입니다.
						</p>
						<p>
							<span class="planTitle">
								상품가
							</span>
							<span class="org">
								29,700원
							</span>
						</p>
						<p>
							<span class="planTitle">
								제조사
							</span>
							<span class="gray">
								(주)마케팅디자인
							</span>
						</p>
						<p>
							<span class="planTitle">
								추가옵션
							</span>
							<span class="org">
								<select name="" id="">
									<option value="">dd</option>
									<option value="">sss</option>
								</select>
							</span>
						</p>
						<p>
							<span class="planTitle">
								총 금액
							</span>
							<span class="org">
								29,700원
							</span>
						</p>
						<div class="btn">
							<button>바로 구매</button>
						</div>
					</div>
				</div>
				<img src="../../assets/images/ratePlan/basicPlan.png" alt="basicPlan">
				<div class="ratePlanFooter">
					<h2>배송 및 환불/취소정보</h2>
					<h6>서비스의 요금환불/취소정책</h6>
					<p>
						① 서비스 이용에 따른 환불정책은 다음과 같습니다. 단, 회원의 귀책사유로 회사가 이용계약을 직권해지하는 경우 환불하지 않습니다.<br>
						② 결제일로 부터 5일이내 해지 신청 시 서비스 신청금액에서 해지수수료로 신청금액의 20%를 공제한 나머지 금액이 환불됩니다.(단,서비스개시이용전인경우만 해당함)<br>
						③ 결제일로 부터 5일 초과 20일 이내 해지 신청 시 서비스 신청금액에서 해지수수료로 서비스 신청금액의 20%를 공제한 나머지 금액을 기준으로 남은 잔여일에 해당하는 금액이 환불됩니다.<br>
						<span>
							즉 환불액은 [서비스 신청금액 *0.80] - [(서비스 신청금액/30일) * 서비스 사용일]이 됩니다.<br>
						</span>
						④ 단, 휴대폰결제는 3일 이내 취소만 가능하며 3일 이후는 환불 및 취소가 불가능합니다<br>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	// import axios from "axios";


	export default {
		data() {
			return {
					servicePlan: 'basic'
			}
		},
		methods: {


		},
		created() {
			this.$store.state.headerTopTitle = "DBMASTER";
			this.$store.state.headerMidTitle = "요금제";

		}
	}
</script>

<style scoped>

@font-face {
  font-family: 'S-CoreDream-6Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#menu08999 .ratePlanTop ul {
	height: 270px;
	margin-bottom: 20px;
	position: relative;
}

#menu08999 .ratePlanTop li {
	float: left;
	width: 680px;
}
#menu08999 .ratePlanTop li:last-child {
	margin-left: -1px;
}
#menu08999 .ratePlanTop li span {
	text-align: center;
}
#menu08999 .ratePlanTop li .tapBtn {
	display: block;
	padding: 22px;
	background: #e6e6e6;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	border: 1px solid #bfbfbf;
	border-bottom-color: #262626;
	font-size: 14px;
	position: relative;
}

#menu08999 .ratePlanTop li.on .tapBtn {
	background: #fff;
	border-color: #262626;
	border-bottom-color:#fff;
	z-index: 9;
}

#menu08999 .ratePlanTop li .ratePlanMiddle {
	position: absolute;
	left: 0;
	top: 62px;
	width: 100%;
	height: 210px;
	background: #fff;
	padding: 20px;
	border: 1px solid #262626;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
	border-top: none;
	display: none;
}

#menu08999 .ratePlanTop li.on .ratePlanMiddle {
	display: flex;
	justify-content: space-between;
}


#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] {
	display: none;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] + label {
	display: block;
	width: 315px;
	position: relative;
	border: 1px solid #d0d0d0;
	padding: 16px 20px;
	cursor: pointer;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] + label span{
	display: block;
	color: #222;
	font-weight: 700;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] + label span span{
	display: inline;
	font-weight: 400;
	font-size: 16px;
} 

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]:checked + label::before {
	clear: both;
	position: absolute;
	content: "";
	width: 315px;
	height: 169px;
	border: 4px solid #f68a1e;
	left: -1px;
	top: -1px;
	box-sizing: border-box;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] + label .top {
	font-size: 35px;
	font-family: 'S-CoreDream-6Bold';
	color: #f68a1e;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]#silver + label .top {
	color: #f36c21;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]#silver:checked + label::before {
	border-color: #f36c21;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]#gold + label .top {
	color: #8fa415;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]#gold:checked + label::before {
	border-color: #8fa415;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]#vip + label .top {
	color: #1581a4;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"]#vip:checked + label::before {
	border-color: #1581a4;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] + label .middle {
	font-size: 20px;
	padding: 11px;
	border-bottom: 1px solid #eee;
}

#menu08999 .ratePlanTop li .ratePlanMiddle input[type="radio"] + label .bottom {
	font-size: 16px;
	padding: 15px;
}

#menu08999 .ratePlanBottom {
	padding: 40px;
	background: #fff;
	border: 1px solid #e5e5e5;
	border-radius: 10px;
}

#menu08999 .ratePlanBottom .detailPlan {
	display: flex;
	justify-content: space-between;
	margin-bottom: 60px;
}

#menu08999 .ratePlanBottom .detailPlan .left {
	height: 362px;
}

#menu08999 .ratePlanBottom .detailPlan .left img {
	height: 100%;
}

#menu08999 .ratePlanBottom .detailPlan .right {
	width: 610px;
}

#menu08999 .ratePlanBottom .detailPlan .right h6 {
	font-size: 20px;
	color: #222;
	padding-left: 15px;
}

#menu08999 .ratePlanBottom .detailPlan .right p {
	padding: 13px 15px;
	border-bottom: 1px solid #eee;
	font-size: 14px;
	height: 46px;
}

#menu08999 .ratePlanBottom .detailPlan .right p span {
	font-size: 14px;
}

#menu08999 .ratePlanBottom .detailPlan .right .subtitle {
	padding-top: 9px;
	border-bottom-color:#3d3d3d;
}

#menu08999 .ratePlanBottom .detailPlan .right p .planTitle {
	display: inline-block;
	width: 107px;
	font-weight: 700;
}

#menu08999 .ratePlanBottom .detailPlan .right p .org {
	font-size: 16px;
	font-weight: 700;
	color: #e25b45;
}

#menu08999 .ratePlanBottom .detailPlan .right p select {
	width: 470px;
	height: 31px;
	padding: 6px 14px;
	font-size: 12px;
	margin-top: -13px;
}

#menu08999 .ratePlanBottom .detailPlan .btn{
	text-align: center;
	padding-top: 30px;
}

#menu08999 .ratePlanBottom .detailPlan .btn button {
	width: 240px;
	height: 50px;
	color: #fff;
	background: #e25b45;
	border-radius: 25px;
	border: 2px solid #f68a1e;
	font-weight: 700;
	font-size: 18px;
}


#menu08999 .ratePlanBottom .ratePlanFooter h2 {
	margin: 100px 0 35px;
	text-align: center;
	font-size: 24px;
	position: relative;
}

#menu08999 .ratePlanBottom .ratePlanFooter h2::before,
#menu08999 .ratePlanBottom .ratePlanFooter h2::after {
	clear: both;
	position: absolute;
	content: "";
	width: 520px;
	height: 1px;
	background: #939393;
	top: 50%;
	transform: translateY(-50%);
}

#menu08999 .ratePlanBottom .ratePlanFooter h2::before {
	left: 0;
}

#menu08999 .ratePlanBottom .ratePlanFooter h2::after {
	right: 0;
}

#menu08999 .ratePlanBottom .ratePlanFooter h6 {
	font-size: 14px;
	margin-bottom: 12px;
}

#menu08999 .ratePlanBottom .ratePlanFooter p {
	line-height: 24.4px;
	letter-spacing: -0.42px;
	margin-bottom: 10px;
}

</style>