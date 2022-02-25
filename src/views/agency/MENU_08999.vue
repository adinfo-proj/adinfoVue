<template>
	<div class="container">
		<div id="menu08999">
			<div class="ratePlanTop">
				<ul>
					<li @click="Rate(1)" v-bind:class="{ on : 1 == tapbtn}">
						<span class="tapBtn" >디미바스터 서비스 상품</span>
						<div class="ratePlanMiddle mid01">
							<input type="radio" id="basic" value="basic" v-model="servicePlan" :checked="TotalPrice()">
							<label for="basic" @click="Init()">
								<span class="top">BASIC</span>
								<span class="middle">29,700 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 3개</span>
							</label>
							<input type="radio" id="silver" value="silver" v-model="servicePlan" >
							<label for="silver" @click="Init()">
								<span class="top">SILVER</span>
								<span class="middle">66,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 7개</span>
							</label>
							<input type="radio" id="gold" value="gold" v-model="servicePlan">
							<label for="gold" @click="Init()">
								<span class="top">GOLD</span>
								<span class="middle">99,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 12개</span>
							</label>
							<input type="radio" id="vip" value="vip" v-model="servicePlan" >
							<label for="vip" @click="Init()">
								<span class="top">VIP</span>
								<span class="middle">220,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩 갯 수</span> 30개</span>
							</label>
						</div>
					</li>
					<li @click="Rate(2)" v-bind:class="{ on : 2 == tapbtn}">
						<span class="tapBtn">부가서비스 상품</span>
						<div class="ratePlanMiddle mid02">
							<input type="radio" v-model="subPlan" id="post" value="post" :checked="ExtraPrice()">
							<label for="post">
								<span class="top">API 프리미엄 서비스</span>
								<span class="middle">55,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>DB 데이터 보내기 + 받기</span></span>
							</label>
							<input type="radio" v-model="subPlan" id="sms" value="sms">
							<label for="sms">
								<span class="top">SMS 수신 서비스</span>
								<span class="middle">2,200 / 6,600 /11,000 / 22,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>DB접수 시 SMS수신 서비스</span></span>
							</label>
						</div>
					</li>
				</ul>
			</div>
			<div class="ratePlanBottom">
				<div v-if="tapbtn == 1">
					<div class="detailPlan">
						<div class="left">
							<img v-if="servicePlan == 'basic'" src="../../assets/images/ratePlan/basic.jpg" alt="basic">
							<img v-if="servicePlan == 'silver'" src="../../assets/images/ratePlan/silver.jpg" alt="silver">
							<img v-if="servicePlan == 'gold'" src="../../assets/images/ratePlan/gold.jpg" alt="gold">
							<img v-if="servicePlan == 'vip'" src="../../assets/images/ratePlan/vip.jpg" alt="vip">
						</div>
						<div class="right">
							<h6 v-if="servicePlan == 'basic'"> [디비마스터] 베이직 1개월</h6>
							<h6 v-if="servicePlan == 'silver'"> [디비마스터] 실버 1개월</h6>
							<h6 v-if="servicePlan == 'gold'"> [디비마스터] 골드 1개월</h6>
							<h6 v-if="servicePlan == 'vip'">[디비마스터] 브이아이피 1개월</h6>
							<p class="subtitle">
								마케터의 성공 파트너 디비마스터의 유료 서비스 상품입니다.
							</p>
							<p>
								<span class="planTitle">
									상품가
								</span>
								<span v-if="servicePlan == 'basic'" class="line">29,700원</span>
								<span v-if="servicePlan == 'silver'" class="line">69,300원</span>
								<span v-if="servicePlan == 'gold'" class="line">118,000원</span>
								<span v-if="servicePlan == 'vip'" class="line">297,000원</span>
							</p>
							<p>
								<span class="planTitle">
									판매가
								</span>
								<span v-if="servicePlan == 'basic'" class="org">29,700원 </span>
								<span v-if="servicePlan == 'silver'" class="org">66,000원 <span>(4.7% 할인)</span></span>
								<span v-if="servicePlan == 'gold'" class="org">99,000원 <span>(16.7% 할인)</span></span>
								<span v-if="servicePlan == 'vip'" class="org">220,000원 <span>(25.9% 할인)</span></span>
							</p>
							<p>
								<span class="planTitle">
									개발사
								</span>
								<span class="gray">
									디비마스터
								</span>
							</p>
							<p>
								<span class="planTitle">
									추가옵션
								</span>
								<span>
									<input type="checkbox" id="extraPost" value="01" v-model="extraService"><label for="extraPost">API 프리미엄 <span class="small">( + 55,000원 )</span></label>
									<!-- <input type="checkbox" id="extraSms" value="02" v-model="extraService" @change="SelectBox()"><label for="extraSms">SMS 수신</label> -->

								</span>
							</p>
							<p>
								<span class="planTitle">
									총 금액
								</span>
								<span class="org">
									{{ preview }} 원
								</span>
							</p>
							<div class="btn">
								<button>바로 구매</button>
							</div>
						</div>
					</div>
					<div	class="planInfo">
						<h6>디비마스터 상품정보</h6>
						<img v-if="servicePlan == 'basic'" src="../../assets/images/ratePlan/basicPlan.jpg" alt="basicPlan">
						<img v-if="servicePlan == 'silver'" src="../../assets/images/ratePlan/silverPlan.jpg" alt="silverPlan">
						<img v-if="servicePlan == 'gold'" src="../../assets/images/ratePlan/goldPlan.jpg" alt="goldPlan">
						<img v-if="servicePlan == 'vip'" src="../../assets/images/ratePlan/vipPlan.jpg" alt="vipPlan">
						<img src="../../assets/images/ratePlan/common.jpg" alt="common"> 
					</div>
				</div>
				<div v-if="tapbtn == 2" @change="ExtraPrice()">
					<div class="detailPlan">
						<div class="left">
							<img v-if="subPlan == 'post'" src="../../assets/images/ratePlan/post.jpg" alt="post">
							<img v-if="subPlan == 'sms'" src="../../assets/images/ratePlan/sms.jpg" alt="sms">
						</div>
						<div class="right">
							<h6 v-if="subPlan == 'post'">[디비마스터] API 프리미엄 서비스 1개월 </h6>
							<h6 v-if="subPlan == 'sms'"> [디비마스터] SMS 수신 서비스</h6>
							<p class="subtitle">
								디비마스터의 유료 서비스상품을 구매 후 이용할 수 있는 상품입니다. 
							</p>
							<p>
								<span class="planTitle">
									상품가
								</span>
								<span v-if="subPlan == 'post'" class="line">110,000원</span>
								<span v-if="subPlan == 'sms'" class="line">DB접수 알림 건당 20원 발생</span>
							</p>
							<p>
								<span class="planTitle">
									판매가
								</span>
								<span v-if="subPlan == 'post'" class="org">55,000원 <span>(50% 할인)</span></span>
								<span v-if="subPlan == 'sms'" class="org">2,200원 ~</span>
							</p>
							<p>
								<span class="planTitle">
									개발사
								</span>
								<span class="gray">
									디비마스터
								</span>
							</p>
							<p>
								<span class="planTitle">
									상품선택
								</span>
								<span v-if="subPlan == 'post'">단일상품</span>
								<span v-if="subPlan == 'sms'">
									<select v-model="smsPlan" >
										<option value=0 disabled>발송 건수 선택</option>
										<option value="2200">100개</option>
										<option value="6600">300개</option>
										<option value="11000">1,000개</option>
										<option value="22000">2,000개</option>
									</select>
								</span>
							</p>
							<p>
								<span class="planTitle">
									총 금액
								</span>
								<span class="org">
									{{extraPreview}} 원
								</span>
							</p>
							<div class="btn">
								<button>바로 구매</button>
							</div>
						</div>
					</div>
					<div	class="planInfo">
						<h6>디비마스터 상품정보</h6>

						<img v-if="subPlan == 'post'" src="../../assets/images/ratePlan/postPlan.jpg" alt="postPlan">
						<img v-if="subPlan == 'sms'" src="../../assets/images/ratePlan/smsPlan.jpg" alt="smsPlan">
					</div>
				</div>
				<div class="ratePlanFooter">
					<h2>배송 및 환불/취소정보</h2>
					<h6>상품 배송 </h6>
					<p>
						* 배송이 없는 상품입니다.<br>
						<br>
					</p>
					<h6>서비스의 요금환불/취소정책</h6>
					<p>
						① 서비스 이용에 따른 환불정책은 다음과 같습니다. 단, 회원의 귀책사유로 회사가 이용계약을 직권해지하는 경우 환불하지 않습니다.<br>
						② 결제일로 부터 5일이내 해지 신청 시 서비스 신청금액에서 해지수수료로 신청금액의 20%를 공제한 나머지 금액이 환불됩니다.(단,서비스개시이용전인경우만 해당함)<br>
						③ 결제일로 부터 5일 초과 20일 이내 해지 신청 시 서비스 신청금액에서 해지수수료로 서비스 신청금액의 20%를 공제한 나머지 금액을 기준으로 남은 잔여일에 해당하는 금액이 환불됩니다.<br>
						<span>
							즉 환불액은 [서비스 신청금액 *0.80] - [(서비스 신청금액/30일) * 서비스 사용일]이 됩니다.<br>
						</span>
						④ 단, 휴대폰결제는 3일 이내 취소만 가능하며 3일 이후는 환불 및 취소가 불가능합니다<br>
						<br>
							'디비마스터'의 모든 거래에 대한 책임과 배송.교환.환불.민원등의 처리는  (주)마케팅디자인에서 진행합니다.<br>
							*민원 담당자 : 김화성   / 연락처 : 1533-3757 
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	// import axios from "axios";
	// import $ from 'jquery';


	export default {
		data() {
			return {
					servicePlan: ''
				, tapbtn: 1
				, subPlan: 'post'
				, extraService: []
				, total : 29700
				, extraTotal : 0
				, preview : ''
				, smsPlan : 0
				, 
			}
		},
		methods: {

			Rate(pos) {
				this.tapbtn = pos
				if(this.tapbtn == 1) {
					this.servicePlan = 'basic'
				}
				else if(this.tapbtn == 2) {
					this.subPlan = 'post'
				}
			},
			Init() {
				this.extraService = []
				// this.TotalPrice();
			},

			TotalPrice() {

				let price = 29700;
				let extraPrice = 0;
				if(this.servicePlan == 'basic'){
					price = 29700;
				}else if(this.servicePlan == 'silver') {
					price = 66000;
				}else if(this.servicePlan == 'gold') {
					price = 99000;
				}else if(this.servicePlan == 'vip') {
					price = 220000;
				}
				
				for(let i = 0 ; i <this.extraService.length ; i++){
					if(this.extraService[i] == '01') {
						extraPrice = extraPrice + 55000
					}
				}

				this.total = price +extraPrice
				this.preview = this.total.toLocaleString('ko-KR'); 
				
			},
			ExtraPrice(){
				let price = 0;
				if(this.subPlan == 'post') {
					price = 55000
					this.smsPlan = 0;
				}
				else if(this.subPlan == 'sms'){
					price = Number(this.smsPlan)
				}
				this.extraTotal = price
				this.extraPreview = this.extraTotal.toLocaleString('ko-KR');

			},
			
			// SelectBox() {

			// 	for(let i = 0 ; i < this.extraService.length ; i++){
			// 		if(this.extraService[i] == '01'){

			// 		}
			// 	}
			// },
			TapClear() {
				this.servicePlan = 'basic'
			}


		},
		created() {
			this.$store.state.headerTopTitle = "DBMASTER";
			this.$store.state.headerMidTitle = "요금제";

			this.TapClear();

			// console.log(navigator.language);
			

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
	cursor: pointer;
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
	font-weight: 700;
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

#menu08999 .ratePlanTop li .mid02 input[type="radio"] + label {
	width: 645px;
}

#menu08999 .ratePlanTop li .mid02 input[type="radio"]:checked + label::before {
	width: 645px;
	height: 169px;
}



#menu08999 .ratePlanTop li .mid02 input[type="radio"] + label .top {
	color: #222;
	font-size: 30px;
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

#menu08999 .ratePlanBottom .detailPlan .right p .line {
	/* font-size: 16px; */
	text-decoration: line-through;
}

#menu08999 .ratePlanBottom .detailPlan .right p .org {
	font-size: 16px;
	font-weight: 700;
	color: #e25b45;
}

#menu08999 .ratePlanBottom .detailPlan .right p .org span {
	font-weight: 400;
}

#menu08999 .ratePlanBottom .detailPlan .right p input {
	display: none;
}

#menu08999 .ratePlanBottom .detailPlan .right p input + label {
	padding: 0 19px 0 24px;
	font-weight: 700;
	letter-spacing: -0.36px;
	position: relative;
}

#menu08999 .ratePlanBottom .detailPlan .right p input + label span {
	font-size: 12px;
	font-weight: 400;
}

#menu08999 .ratePlanBottom .detailPlan .right p input + label::before {
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 2px;
	width: 14px;
	height: 14px;
	border: 1px solid #b3b3b3;
	content: "";
}

#menu08999 .ratePlanBottom .detailPlan .right p input:checked + label::before {
	border: none;
	background: #e25b45;
}

#menu08999 .ratePlanBottom .detailPlan .right p input:checked + label::after {
	content: "\e91c";
	font-family: "icomoon";
	position: absolute;
	color: #fff;
	left: 1px;
	top: 1px;
}

/* #menu08999 .ratePlanBottom .detailPlan .right p select {
	width: 470px;
	height: 31px;
	padding: 6px 14px;
	font-size: 12px;
	margin-top: -13px;
} */

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

#menu08999 .ratePlanBottom .planInfo h6{
	font-size: 24px;
	line-height: 1.02;
	letter-spacing: -0.84px;
	color: #262626;
	text-align: center;
	position: relative;
}
#menu08999 .ratePlanBottom .planInfo h6::before,
#menu08999 .ratePlanBottom .planInfo h6::after {
	clear: both;
	width: 520px;
	height: 1px;
	position: absolute;
	background: #939393;
	content: "";
	top: 50%;
	transform: translateY(-50%);
}
#menu08999 .ratePlanBottom .planInfo h6::before{
	left: 0;
}
#menu08999 .ratePlanBottom .planInfo h6::after {
	right: 0;
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