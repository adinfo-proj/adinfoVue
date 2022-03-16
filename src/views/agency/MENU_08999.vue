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
								<span class="bottom"><span>랜딩(라이브) 갯 수</span> 3개</span>
							</label>
							<input type="radio" id="silver" value="silver" v-model="servicePlan" >
							<label for="silver" @click="Init()">
								<span class="top">SILVER</span>
								<span class="middle">66,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩(라이브) 갯 수</span> 7개</span>
							</label>
							<input type="radio" id="gold" value="gold" v-model="servicePlan">
							<label for="gold" @click="Init()">
								<span class="top">GOLD</span>
								<span class="middle">99,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩(라이브) 갯 수</span> 12개</span>
							</label>
							<input type="radio" id="vip" value="vip" v-model="servicePlan" >
							<label for="vip" @click="Init()">
								<span class="top">VIP</span>
								<span class="middle">220,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>랜딩(라이브) 갯 수</span> 30개</span>
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
							<input type="radio" v-model="subPlan" id="adminM" value="adminM">
							<label for="adminM">
								<span class="top">어드민 관리자 서비스</span>
								<span class="middle">110,000 <span>원/월(VAT 포함)</span></span>
								<span class="bottom"><span>관리 할 수 있는 어드민 페이지</span></span>
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
									<input type="checkbox" id="extraAdmin" value="02" v-model="extraService"><label for="extraAdmin">어드민 관리자 <span class="small">( + 110,000원 )</span></label>
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
								<button  @click="CreatePay();">바로 구매</button>
								<form id="SendPayForm_id" name="" method="POST" >
									<input type="hidden"  name="version"		 	value="1.0" >
									<input type="hidden"  name="gopaymethod" 	value="Card:VBank" >
									<input type="hidden"  name="mid" 					value="INIpayTest" ><!-- 에스크로테스트 : iniescrow0, 빌링(정기과금)테스트 : INIBillTst -->
									<!-- <input type="hidden"  name="mid" v-model="mid" > -->
									<input type="hidden"  name="oid"  				v-model="order" >
									<input type="hidden"  name="price" 				v-model="price">
									<input type="hidden"  name="timestamp" 		v-model="nowDate" >
									<input type="hidden"  name="signature" 		v-model="hashCode" >
									<input type="hidden"  name="mKey" value="3a9503069192f207491d4b19bd743fc249a761ed94246c8c42fed06c3cd15a33" >
									<!-- <input type="hidden"  name="mKey" v-model="mKey" > -->
									<input type="hidden"  name="goodname" 		v-model="ratePlanNm">
									<input type="hidden"  name="currency" 		value="WON" >

									<input type="hidden"  name="buyername" 		v-model="buyer" >
									<input type="hidden"  name="buyertel"			v-model="telNum" >
									<input type="hidden"  name="buyeremail"		v-model="eMail" > 

									<input type="hidden"  name="acceptmethod" value="below1000" >
									<!-- 에스크로옵션 : useescrow, 빌링(정기과금)옵션 : BILLAUTH(Card) -->

									<!-- <input type="hidden" name="logo_url" value="http://sw.dbmaster.co.kr/stdpay/img/logo01.jpg">
									<input type="hidden" name="logo_2nd" value="http://sw.dbmaster.co.kr/stdpay/img/logo02.jpg"> -->

									<!-- <input type="hidden"  name="returnUrl" value="http://sw.dbmaster.co.kr/#/MENU_08999" > -->

									<input type="hidden"  name="returnUrl" 		value="http://sw.dbmaster.co.kr/stdpay/INIStdPaySample/INIStdPayReturn.php" >
									
									<input type="hidden"  name="closeUrl" value="http://sw.dbmaster.co.kr/stdpay/INIStdPaySample/close.php" >
								</form>

							</div>
						</div>
					</div>
					<div	class="planInfo">
						<h6>디비마스터 상품정보</h6>
						<div class="planSub">
							<img v-if="servicePlan == 'basic'" src="../../assets/images/ratePlan/basicPlan.jpg" alt="basicPlan">
							<img v-if="servicePlan == 'silver'" src="../../assets/images/ratePlan/silverPlan.jpg" alt="silverPlan">
							<img v-if="servicePlan == 'gold'" src="../../assets/images/ratePlan/goldPlan.jpg" alt="goldPlan">
							<img v-if="servicePlan == 'vip'" src="../../assets/images/ratePlan/vipPlan.jpg" alt="vipPlan">
						</div>
						<img src="../../assets/images/ratePlan/common01.jpg" alt="common01"> 
						<img src="../../assets/images/ratePlan/common02.jpg" alt="common02"> 
						<img src="../../assets/images/ratePlan/common03.jpg" alt="common03"> 
					</div>
				</div>
				<div v-if="tapbtn == 2" @change="ExtraPrice()">
					<div class="detailPlan">
						<div class="left">
							<img v-if="subPlan == 'post'" src="../../assets/images/ratePlan/post.jpg" alt="post">
							<img v-if="subPlan == 'adminM'" src="../../assets/images/ratePlan/adminManager.jpg" alt="adminM">
						</div>
						<div class="right">
							<h6 v-if="subPlan == 'post'">[디비마스터] API 프리미엄 서비스 1개월 </h6>
							<h6 v-if="subPlan == 'adminM'"> [디비마스터] 어드민 관리자 서비스 1개월</h6>
							<p class="subtitle">
								디비마스터의 유료 서비스상품을 구매 후 이용할 수 있는 상품입니다. 
							</p>
							<p>
								<span class="planTitle">
									상품가
								</span>
								<span v-if="subPlan == 'post'" class="line">110,000원</span>
								<span v-if="subPlan == 'adminM'" class="line">220,000원</span>
							</p>
							<p>
								<span class="planTitle">
									판매가
								</span>
								<span v-if="subPlan == 'post'" class="org">55,000원 <span>(50% 할인)</span></span>
								<span v-if="subPlan == 'adminM'" class="org">110,000원 <span>(50% 할인)</span></span>
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
								<span>단일상품</span>
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
								<button  @click="CreatePay();">바로 구매</button>

								
								<form id="SendPayForm_id" name="" method="POST" >
									<input type="hidden"  name="version"		 	value="1.0" >
									<input type="hidden"  name="gopaymethod" 	value="Card:VBank" >
									<input type="hidden"  name="mid" 					value="INIpayTest" ><!-- 에스크로테스트 : iniescrow0, 빌링(정기과금)테스트 : INIBillTst -->
									<!-- <input type="hidden"  name="mid" v-model="mid" > -->
									<input type="hidden"  name="oid"  				v-model="order" >
									<input type="hidden"  name="price" 				v-model="price">
									<input type="hidden"  name="timestamp" 		v-model="nowDate" >
									<input type="hidden"  name="signature" 		v-model="hashCode" >
									<input type="hidden"  name="mKey" value="3a9503069192f207491d4b19bd743fc249a761ed94246c8c42fed06c3cd15a33" >
									<!-- <input type="hidden"  name="mKey" v-model="mKey" > -->
									<input type="hidden"  name="goodname" 		v-model="ratePlanNm">
									<input type="hidden"  name="currency" 		value="WON" >

									<input type="hidden"  name="buyername" 		v-model="buyer" >
									<input type="hidden"  name="buyertel"			v-model="telNum" >
									<input type="hidden"  name="buyeremail"		v-model="eMail" > 

									<input type="hidden"  name="acceptmethod" value="below1000" >
									<!-- 에스크로옵션 : useescrow, 빌링(정기과금)옵션 : BILLAUTH(Card) -->

									<!-- <input type="hidden" name="logo_url" value="http://sw.dbmaster.co.kr/stdpay/img/logo01.jpg">
									<input type="hidden" name="logo_2nd" value="http://sw.dbmaster.co.kr/stdpay/img/logo02.jpg"> -->

									<!-- <input type="hidden"  name="returnUrl" value="http://sw.dbmaster.co.kr/#/MENU_08999" > -->

									<input type="hidden"  name="returnUrl" 		value="http://sw.dbmaster.co.kr/stdpay/INIStdPaySample/INIStdPayReturn.php" >
									
									<input type="hidden"  name="closeUrl" value="http://sw.dbmaster.co.kr/stdpay/INIStdPaySample/close.php" >
								</form>
							</div>
						</div>
					</div>
					<div	class="planInfo">
						<h6>디비마스터 상품정보</h6>

						<img v-if="subPlan == 'post'" src="../../assets/images/ratePlan/postPlan.jpg" alt="postPlan">
						<img v-if="subPlan == 'adminM'" src="../../assets/images/ratePlan/adminManagerPlan.jpg" alt="adminManagerPlan">
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
// import Payment from '@/components/dialog/Payment.vue';
  // import Payment from '../../components/dialog/Payment.vue';

	import axios from "axios";
	// import qs from "qs";
	// import $ from 'jquery';

	import sha256 from "js-sha256";


	export default {
		components: { 
			// Payment
		},
		data() {
			return {
					servicePlan  : ''
				, tapbtn       : 1
				, subPlan      : 'post'
				, extraService : []
				, total        : 29700
				, extraTotal   : 0
				, preview      : ''
				, hashCode : ''
				, nowDate: new Date().getTime()
				, order : '' // 변수 바꿀 예정
				, mid : 'dbmaster00'
				, mKey : ''
				, ratePlanNm : ''
				, buyer : ''
				, eMail : ''
				, telNum : ''
				, paymentData : {}
				// , form: {
				// 		goodname     : '테스트'
				// 	, buyername    : '홍길동'
				// 	, buyertel     : '010-1234-5678'
				// 	, buyeremail   : 'test@inicis.com'
				// 	, price        : '1000'
				// 	, mid          : 'INIpayTest'
				// 	, gopaymethod  : 'Card'
				// 	, mKey         : '3a9503069192f207491d4b19bd743fc249a761ed94246c8c42fed06c3cd15a33'
				// 	, signature    : '9fc8b832d0ace7c1bc7827324f71d0ef742e87f991247cee52b319b8b00116ee'
				// 	, oid          : 'INIpayTest_1646357552574'
				// 	, timestamp    : '1646357552574'
				// 	, version      : '1.0'
				// 	, currency     : 'WON'
				// 	, acceptmethod : 'below1000'
				// 	, returnUrl    : '../../../public/stdpay/INIStdPaySample/INIStdPayReturn.php'
				// 	, closeUrl     : '../../../public/stdpay/INIStdPaySample/close.php'
				// }
				// , inicis : ''
			}
		},
		methods: {
			CreatePay() {

				if (this.tapbtn == 1 ) {
					
					this.price = this.total

					if (this.servicePlan == 'basic') {
						this.ratePlanNm = '베이직 1개월'
					}
					else if (this.servicePlan == 'silver') {
						this.ratePlanNm = '실버 1개월'
					}
					else if (this.servicePlan == 'gold') {
						this.ratePlanNm = '골드 1개월'
					}
					else if (this.servicePlan == 'vip') {
						this.ratePlanNm = '브이아이피 1개월'
					}

				}
				else if(this.tapbtn == 2 ) {

					this.price = this.extraTotal

					if ( this.subPlan == 'post') {
						this.ratePlanNm = 'API 프리미엄 서비스 1개월'
					}
					else if(this.subPlan == 'adminM'){
						this.ratePlanNm = '어드민 관리자 서비스 1개월'
					}


				}




				this.buyer 		= this.$store.state.clntNm
				this.eMail 		= this.$store.state.clntId

				
				this.order 		= 'dbMaster_' + this.nowDate
				this.HashData();
				this.getUeserinfo();

				// let send 			= document.getElementById('SendPayForm_id')
				// console.log(send)

				window.INIStdPay.pay('SendPayForm_id')
				

				// axios.post('http://sw.dbmaster.co.kr/stdpay/libs/HttpClient.php', qs.stringify({data:this.data}))
				// .then(response => {
				// 		console.log("3")
				// 		console.log(response)
				// 		this.paymentData=response;
				// 		// eslint-disable-next-line no-console
				// 		// console.log(typeof {name:this.name})

				// 		console.log(this.paymentData)
				// })
				// .catch(error => {
				// 	// eslint-disable-next-line no-console
				// 	console.log(error);
				// });


				// rsp => { // callback
				// 	console.log(rsp);
				// 	if (rsp.success) {
				// 		console.log("결제 성공");
				// 	} else {
				// 		console.log("결제 실패");
				// 	}
				// }

				// window.INIStdPay.pay({send}, send => { // callback
				// 		console.log(send);
				// 		if (send.success) {
				// 			console.log("결제 성공");
				// 		} else {
				// 			console.log("결제 실패");
				// 		}
				// 	});
				

			
				// .then(rsp => {
				// 	console.log(rsp)

				// 	window.INIStdPay.pay({rsp}, rsp => { // callback
				// 		console.log(rsp);
				// 		if (rsp.success) {
				// 			console.log("결제 성공");
				// 		} else {
				// 			console.log("결제 실패");
				// 		}
				// 	});
					
				// })

				// .then(
					
				// )
				// .catch(error => {
				// 	console.log(error);
				// })
				
			


				
      // IMP.request_pay({ // param
      //   pg: "html5_inicis",
      //   pay_method: "card",
      //   merchant_uid: "ORD20180131-0000011",
      //   name: "YOYOSTUDY",
      //   amount: this.price,
      //   buyer_email: "funidea_woo@naver.com",
      //   buyer_name: "테스터",
      //   buyer_tel: "010-8832-4280",
      //   buyer_addr: "서울특별시 영등포구 당산동",
      //   buyer_postcode: "07222"
      // }, rsp => { // callback
      //   console.log(rsp);
      //   if (rsp.success) {
      //     console.log("결제 성공");
      //   } else {
      //     console.log("결제 실패");
      //   }
      // });

			},
			HashData(){
				// this.price = 100
				this.hashCode = 'oid='+this.order+'&price='+this.price+'&timestamp='+this.nowDate;	

				this.hashCode = sha256(this.hashCode)
				this.mKey = sha256(this.mid)

			},
			getUeserinfo() {
				axios.get("http://api.adinfo.co.kr:30000/GetClntSubsNo", 

				{
					params: {
						clntId: this.$store.state.clntId
					}
				})
				.then(response => {
					this.telNum = response.data

				})
				.catch(error => {
					console.log(error);
				})
			},

			//******************************************************************************    
			// LogIn() {
			// 	axios.post("http://api.adinfo.co.kr:30000/login", {
			// 		clntId: this.clntId,
			// 		clntPw: this.clntPw,
			// 		siteCode: '01'
			// 	})
			// 	.then(response => {
			// 		if( response.data.status == "0" ) {
			// 			this.$store.state.clntId       = response.data.clntId
			// 			this.$store.state.clntNm       = response.data.clntNm
			// 			this.$store.state.nickNm       = response.data.nickNm

			// 			this.$store.state.jwtAuthToken = response.data.authToken
			// 			this.$store.state.adGradeCd    = response.data.gradeCd

			// 			this.$store.state.mbId = response.data.mbId
			// 			this.$store.state.adId = response.data.adId
			// 			this.$store.state.mkId = response.data.mkId
			// 			this.$store.state.mkCd = response.data.mkCd

			// 			// 토큰값을 LocalStorage에 저장한다.
						
			// 			sessionStorage.setItem("clntId", this.$store.state.clntId);
			// 			sessionStorage.setItem("clntNm", this.$store.state.clntNm);
			// 			sessionStorage.setItem("nickNm", this.$store.state.nickNm);
			// 			sessionStorage.setItem("token" , this.$store.state.jwtAuthToken);
			// 			sessionStorage.setItem("grade" , this.$store.state.adGradeCd);

			// 			sessionStorage.setItem("mbId"  , this.$store.state.mbId);
			// 			sessionStorage.setItem("adId"  , this.$store.state.adId);
			// 			sessionStorage.setItem("mkId"  , this.$store.state.mkId);
			// 			sessionStorage.setItem("mkCd"  , this.$store.state.mkCd);

			// 			if( this.$store.state.adGradeCd == '05' ){
			// 				this.$router.push({ path : "MENU_08201" })
			// 			} else {
			// 				this.$router.push({ path : "MENU_0000" })
			// 			}
			// 		} else {
			// 			alert(response.data.message)
			// 		}
			// 	})
			// 	.catch(error => {
			// 		console.log(error);
			// 	})
			// },

				//SearchUeser() {
        // //------------------------------------------------------------------------------
        // // 아이디 찾기
        // //------------------------------------------------------------------------------
        // if( this.searchSelect == 0) {
        //   if(this.userName == null || this.userName == '') {
        //     alert('이름 혹은 회사명을 입력해주세요');
        //     this.$refs.userName.focus();
        //     return;
        //   }

        //   if(this.clntSubsNo == null || this.clntSubsNo == '') {
        //     alert('연락처를 입력해주세요.');
        //     this.$refs.clntSubsNo.focus();
        //     return;
        //   }

        //   //------------------------------------------------------------------------------
        //   // 정보 보내기
        //   //------------------------------------------------------------------------------
        //   var data = {
        //       userName   : this.userName
        //     , clntSubsNo : this.clntSubsNo
        //   };

        //   const frm = new FormData();
        //   frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));		

        //   axios.post("http://api.adinfo.co.kr:30000/FindUserId", frm)
        //   .then(response => {
        //     if( response.data.status == true ) {
        //       console.log(response.data)
        //       $(".searchId .serachSubBox1").css({display: "none"})
        //       $(".searchId .serachSubBox2").css({display: "block"})
        //       $("#searchModar .searchBox .searchTapBox .searchCheckBtn").css({display: "none"})
        //       $("#searchModar .searchBox .searchTapBox .searchBtn").css({display: "inline"})

        //       this.retUeserId = response.data.message;
        //     //   $("#singPopUp").css({display: "none"})
        //     } else {
        //       this.message  = '';
        //       this.message1 = "요청하신 고객정보가 존재하지 않습니다.";
        //       this.message2 = "다시 입력바랍니다.";
        //       return;
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   })
        // }


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
					} else if(this.extraService[i] == '02') {
						extraPrice = extraPrice + 110000
					}
				}

				this.total = price +extraPrice
				this.preview = this.total.toLocaleString('ko-KR'); 
			},
			ExtraPrice(){
				let price = 0;
				if(this.subPlan == 'post') {
					price = 55000
				}
				else if(this.subPlan == 'adminM'){
					price = 110000
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
			},
			


		},
		// beforeCreate(){
		// 	console.log("0 : " + this.$route.params.resultCode)
		// 	console.log("1 : " + this.$route.resultData)
		// 	console.log("2 : " + this.resultData)
		// 	console.log("3 : " + this.HttpClient)
		// 	console.log("4 : " + this.$route.params.HttpClient)
		// 	console.log("5 : " + this.$route.HttpClient)
		// },

		
		created() {
			this.$store.state.headerTopTitle = "DBMASTER";
			this.$store.state.headerMidTitle = "요금제";

			this.TapClear();
			// this.beforeCreate

			// this.$http.post('')

			// this.$http.post('')
			// console.log("1 : " + this.$route.resultData)
			// console.log("2 : " + this.resultData)
			// console.log(this.$route.resultCode)
			// console.log(this.$route.authSignature)
			// console.log(this.$route.processHTTP)
			// console.log(this.$route.params)
			

			// console.log(navigator.language);
			

		},
		mounted() {
			// this.inicis = document.createElement('script');
			// this.inicis.setAttribute('src', 'https://stgstdpay.inicis.com/stdjs/INIStdPay.js');
			// document.head.appendChild(this.inicis);
			

		}
		,watch(){
			// hashCode = function(s){
			// 	return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
			// }

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
	width: 650px;
}

#menu08999 .ratePlanTop li .mid02 input[type="radio"]:checked + label::before {
	width: 650px;
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
	line-height: 39px;
	letter-spacing: -0.84px;
	color: #262626;
	text-align: center;
	position: relative;
	margin-bottom: 50px;
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

#menu08999 .ratePlanBottom .planInfo .planSub {
	padding-bottom: 50px;
}


#menu08999 .ratePlanBottom .planInfo img {
	display: block;
	width: 100%;
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