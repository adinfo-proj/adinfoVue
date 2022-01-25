<template>
	<div class="container">
		<div id="menu08703_2">
			<div class="tableBox techTop">
				<h1>기능 개선 요청</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox techView">
				<h3>
          {{techData.title}}
					<p>
						<span class="noticeCursor" v-if="$store.state.clntId == techData.clntId " @click="ModifyTech()">수정</span>
						<span class="noticeCursor" v-if="$store.state.clntId == techData.clntId" @click="DeleteTech(techData.seqNo)" >삭제</span>
						<span>{{techData.clntNm}}</span>
						<span>{{techData.createDt}}</span>
					</p>
				</h3>
        <p v-html="techData.contents"></p>

			</div>
			<div class="btnBox">
				<button @click="GoTechList()">목록으로</button>
			</div>

		</div>
	</div>
</template>


<script>
	import axios          from "axios";


	export default {
		data() {
			return {
					techData: ''

			}
		},
		methods: {
			//******************************************************************************
			// 문의사항 내용조회하기.
			//******************************************************************************
      getTechContents(seqNo) {


        axios.get("http://api.adinfo.co.kr:30000/inprove/contents",
        {
          params: {
            seqNo: seqNo
          }
        })
        .then(response => {
          this.techData     = response.data[0][0];

          if(response.data[1].length > 0) {
            this.contentsBefore = response.data[1][0];
          }
          else {
            this.contentsBefore = '';
          }
          if(response.data[2].length > 0) {
            this.contentsAfter  = response.data[2][0];
          }
          else {
            this.contentsAfter = '';
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
			//******************************************************************************
			// 문의사항 리스트로 돌아가기
			//******************************************************************************
			GoTechList() {
				this.$router.push({ name : 'MENU_08703' })
			},
			//******************************************************************************
			// 문의사항 현재글 수정
			//******************************************************************************
			ModifyTech() {
				this.$router.push({ 
					name : 'MENU_08703_3', 
					// params: { index: index } 
				})
			},
			//******************************************************************************
			// 문의사항 현재글 삭제
			//******************************************************************************
			DeleteTech(seqNo) {
         if(confirm("정말로 해당 글을 삭제하시겠습니까?") == false) {
           return;
         }

        axios.get("http://api.adinfo.co.kr:30000/ask/delete",
        {
          params: {
            seqNo: seqNo
          }
        })
        .then(response => {
          if(response.data == true) {
            this.$router.push({ 
              name : 'MENU_08703'
            })
          }
        })
        .catch(error => {
          console.log(error);
        })
      }
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "기능 개선 요청";


			this.getTechContents(this.$route.params.index);

		}
	}
</script>


<style scoped>

	#menu08703_2 .tableBox {
		background: #fff;
	}

	#menu08703_2 .techTop {
		padding: 21px;
	}

	#menu08703_2 .techTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08703_2 .techTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08703_2 .techView h3 {
		padding: 16px 0 16px 20px;
		border-bottom: 1px solid #939393;
		color: #222;
	}

	#menu08703_2 .techView h3 p{
		/* display: inline-block; */
		float: right;
	}

	#menu08703_2 .techView h3 p span {
		display: inline-block;
		position: relative;
		padding: 0 20px;
	}

	#menu08703_2 .techView h3 p span:before {
		clear: both;
		content: "";
		position: absolute;
		width: 1px;
		height: 13px;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		background: #d2d2d2;
	}

	#menu08703_2 > .techView > p {
		padding: 17px 19px;
		line-height: 20px;
		color: #444;
	}

	#menu08703_2 .btnBox{
		padding: 20px 0;
		text-align: center;
	}

	#menu08703_2 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 30px;
		background: #e25b45;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
	}


</style>