<template>
	<div class="container">
		<div id="menu08701_2">
			<div class="tableBox noticeTop">
				<h1>이벤트 게시판</h1>
				<p>이벤트 인증을 위한 게시판 입니다. 디비팩토리/고고알바 아이디와 이름을 작성해 주시기 바랍니다.</p>
			</div>
			<div class="tableBox noticeView">
				<h3>
          {{eventsData.title}}
					<p>
						<!-- 나중에 != 를 == 로 바꿔야함 -->
						<span class="noticeCursor" v-if="$store.state.adGradeCd != '01'" @click="ModifyNotice(eventsData.bodySeqNo)">수정</span>
						<span class="noticeCursor" v-if="$store.state.adGradeCd != '01'" @click="DeleteNotice(eventsData.bodySeqNo)">삭제</span>
						<span>{{eventsData.clntNm}}</span>
						<span>{{eventsData.createDt}}</span>
					</p>
				</h3>
        <p>
          <span v-html="eventsData.contents"></span>
        </p>
			</div>
			<div class="tableBox prevBox">
				<p @click="getNotifyContents(eventsAfter.bodySeqNo)">
          <span class="prev">다음글</span>
          <span v-if="eventsAfter.title != null" >            
            {{eventsAfter.title}}</span>
          <span v-else>다음 글이 없습니다.</span>
					<span class="prevDate" v-if="eventsAfter.createDt != null">{{eventsAfter.createDt}}</span>
				</p>
				<p @click="getNotifyContents(eventsBefore.bodySeqNo)">
          <span class="prev">이전글</span>
          <span v-if="eventsBefore.title != null" >
            {{eventsBefore.title}}</span>
          <span v-else>이전 글이 없습니다.</span>
					<span class="prevDate" v-if="eventsBefore.createDt != null">{{eventsBefore.createDt}}</span>
				</p>
			</div>
			<div class="btnBox">
				<button @click="GoNoticeList()">목록으로</button>
			</div>

		</div>

	</div>
</template>

<script>
  import axios          from "axios";

	export default {
		data() {
			return {
          eventsData: ''
        , eventsBefore: ''
        , eventsAfter: ''
			}
		},
		methods: {
			//******************************************************************************
			// 공지사항 내용조회하기.
			//******************************************************************************
      getNotifyContents(bodySeqNo) {
        axios.get("http://api.adinfo.co.kr:30000/notice/contents",
        {
          params: {
              seqNo   : bodySeqNo
						, groupTp : '02'
						, useTp   : 'R'
						, dataOnly: 'N'
          }
        })
        .then(response => {
          this.eventsData     = response.data[0][0];

          if(response.data[1].length > 0) {
            this.eventsBefore = response.data[1][0];
          }
          else {
            this.eventsBefore = '';
          }
          if(response.data[2].length > 0) {
            this.eventsAfter  = response.data[2][0];
          }
          else {
            this.eventsAfter = '';
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
			//******************************************************************************
			// 공지사항 리스트로 돌아가기
			//******************************************************************************
			GoNoticeList() {
				this.$router.push({ name : 'MENU_08704' })
			},
			//******************************************************************************
			// 공지사항 현재글 수정
			//******************************************************************************
			ModifyNotice(bodySeqNo) {
				this.$router.push({ 
					name : 'MENU_08704_4', 
					params: { seqNo: bodySeqNo }
				})
			},
			//******************************************************************************
			// 공지사항 현재글 삭제
			//******************************************************************************
			DeleteNotice(bodySeqNo) {
         if(confirm("정말로 해당 글을 삭제하시겠습니까?") == false) {
           return;
         }

        axios.get("http://api.adinfo.co.kr:30000/notice/delete",
        {
          params: {
              seqNo    : bodySeqNo
						, groupTp  : '02'
          }
        })
        .then(response => {
          if(response.data == true) {
            this.$router.push({ 
              name : 'MENU_08704'
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
      this.getNotifyContents(this.$route.params.index);
		}
	}
</script>

<style scoped>
	#menu08701_2 .tableBox {
		background: #fff;
	}
	#menu08701_2 .noticeTop {
		padding: 21px;
	}
	#menu08701_2 .noticeTop p,
	#menu08701_2 .prevBox p {
		color: #444;
	}
	#menu08701_2 .titleHead {
		display: inline-block;
		width: 70px;
	}
	#menu08701_2 .noticeTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}
	#menu08701_2 .noticeTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}
	#menu08701_2 .noticeView h3 {
		padding: 16px 0 16px 20px;
		border-bottom: 1px solid #939393;
		color: #222;
	}
	#menu08701_2 .noticeView h3 p{
		/* display: inline-block; */
		float: right;
	}
	#menu08701_2 .noticeView h3 p span {
		display: inline-block;
		position: relative;
		padding: 0 20px;
	}
	#menu08701_2 .noticeView h3 p span:before {
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
	#menu08701_2 > .noticeView > p {
		padding: 17px 19px;
		line-height: 20px;
		color: #444;
	}
	#menu08701_2 .prevBox p {
		padding: 11px;
		
	}
	#menu08701_2 .prevBox p:first-child {
		border-bottom: 1px solid #e5e5e5;
	}
	#menu08701_2 .prevBox .prev {
		display: inline-block;
		padding: 6.13px 13px 7.3px 13px;
		background: #f0f0f0;
		border: 1px solid #e5e5e5;
		border-radius: 10px;
		margin-right: 18px;
	}
	#menu08701_2 .prevBox .prevDate {
		padding-left: 20px;
		float: right;
		padding: 6.13px 9px 7.3px 20px;
		position: relative;
	}
	#menu08701_2 .prevBox .prevDate:before {
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
	#menu08701_2 .noticeCursor,
	#menu08701_2 .prevBox p {
		cursor: pointer;
	}
	#menu08701_2 .btnBox {
		text-align: center;
		margin-bottom: 20px;
	}
	#menu08701_2 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 50px;
		background: #e25b45;
		font-size: 16px;
		color: #fff;
		font-weight: 700;
	}
</style>