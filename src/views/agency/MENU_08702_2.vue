<template>
	<div class="container">
		<div id="menu08702_2">
			<div class="tableBox boardTop">
				<h1>문의사항</h1>
				<p>궁금하신 사항이 있으시다면 언제든지 문의해주시기 바랍니다. 신속하고 친절하게 답변드리겠습니다.</p>
			</div>
			<div class="tableBox boardView">
				<h3>
          {{boardData.title}}
					<p>
						<span class="noticeCursor" v-if="$store.state.clntId == boardData.clntId " @click="ModifyBoard()">수정</span>
						<span class="noticeCursor" v-if="$store.state.clntId == boardData.clntId" @click="DeleteNotice(boardData.seqNo)" >삭제</span>
						<span>{{boardData.clntNm}}</span>
						<span>{{boardData.createDt}}</span>
					</p>
				</h3>
        <p v-html="boardData.contents"></p>

			</div>
			<div class="btnBox">
				<button @click="GoBoardList()">목록으로</button>
			</div>

		</div>
	</div>
</template>

<script>
	import axios          from "axios";


	export default {
		data() {
			return {
					boardData: ''

			}
		},
		methods: {
			//******************************************************************************
			// 문의사항 내용조회하기.
			//******************************************************************************
      getBoardContents(seqNo) {
        axios.get("http://api.adinfo.co.kr:30000/ask/contents",
        {
          params: {
            seqNo: seqNo
          }
        })
        .then(response => {
          this.boardData     = response.data[0][0];

        })
        .catch(error => {
          console.log(error);
        })
      },
			//******************************************************************************
			// 문의사항 리스트로 돌아가기
			//******************************************************************************
			GoBoardList() {
				this.$router.push({ name : 'MENU_08702' })
			},
			//******************************************************************************
			// 문의사항 현재글 수정
			//******************************************************************************
			ModifyBoard() {
				this.$router.push({ 
					name : 'MENU_08702_4', 
					params: { seqNo: this.contentsData.seqNo  } 
				})
			},
			//******************************************************************************
			// 문의사항 현재글 삭제
			//******************************************************************************
			DeleteNotice(seqNo) {
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
              name : 'MENU_08702'
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
			this.$store.state.headerMidTitle = "문의하기";


			this.getBoardContents(this.$route.params.index);

		}
	}
</script>

<style scoped>

	#menu08702_2 .tableBox {
		background: #fff;
	}

	#menu08702_2 .boardTop {
		padding: 21px;
	}

	#menu08702_2 .boardTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08702_2 .boardTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

	#menu08702_2 .boardView h3 {
		padding: 16px 0 16px 20px;
		border-bottom: 1px solid #939393;
		color: #222;
	}

	#menu08702_2 .boardView h3 p{
		float: right;
	}

	#menu08702_2 .boardView h3 p span {
		display: inline-block;
		position: relative;
		padding: 0 20px;
	}

	#menu08702_2 .boardView .noticeCursor {
		cursor: pointer;
	}

	#menu08702_2 .boardView h3 p span:before {
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

	#menu08702_2 > .boardView > p {
		padding: 17px 19px;
		line-height: 20px;
		color: #444;
	}

	#menu08702_2 .btnBox{
		padding: 20px 0;
		text-align: center;
	}

	#menu08702_2 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 30px;
		background: #e25b45;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
	}


</style>