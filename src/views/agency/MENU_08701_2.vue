<template>
	<div class="container">
		<div id="menu08701_2">
			<div class="tableBox noticeTop">
				<h1>공지사항</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox noticeView">
				<h3>
          <span class="titleHead" v-if="contentsData.head == '01'">[ 공지사항 ]</span>
          <span class="titleHead" v-if="contentsData.head == '02'">[ 업데이트 ]</span>
          <span class="titleHead" v-if="contentsData.head == '03'">[ 이벤트 ]</span>
          <span class="titleHead" v-if="contentsData.head == '04'">[ 기타 ]</span>
          {{contentsData.title}}
					<p>
						<!-- 나중에 != 를 == 로 바꿔야함 -->
						<span class="noticeCursor" v-if="$store.state.adGradeCd == '01'" @click="ModifyNotice(contentsData.bodySeqNo)">수정</span>
						<span class="noticeCursor" v-if="$store.state.adGradeCd == '01'" @click="DeleteNotice(contentsData.bodySeqNo)">삭제</span>
						<span>{{contentsData.clntNm}}</span>
						<span>{{contentsData.createDt}}</span>
					</p>
				</h3>
        <div class="textBox">
					<ckeditor v-model="contentsData.contents" :config="editorConfig"></ckeditor>
					<!-- <ckeditor v-bind:type="'inline'" v-bind:value="contentsData.contents" v-bind:config="editorConfig"></ckeditor> -->
          <!-- <span v-html="contentsData.contents"></span> -->
        </div>
			</div>
			<div class="tableBox prevBox">
				<p @click="getNotifyContents(contentsAfter.bodySeqNo)">
          <span class="prev">다음글</span>
          <span v-if="contentsAfter.head != null" >            
            <span class="titleHead" v-if="contentsAfter.head == '01'">[ 공지사항 ]</span>
            <span class="titleHead" v-if="contentsAfter.head == '02'">[ 업데이트 ]</span>
            <span class="titleHead" v-if="contentsAfter.head == '03'">[ 이벤트 ]</span>
            <span class="titleHead" v-if="contentsAfter.head == '04'">[ 기타 ]</span>
            {{contentsAfter.title}}</span>
          <span v-else>다음 글이 없습니다.</span>
					<span class="prevDate" v-if="contentsAfter.createDt != null">{{contentsAfter.createDt}}</span>
				</p>
				<p @click="getNotifyContents(contentsBefore.bodySeqNo)">
          <span class="prev">이전글</span>
          <span v-if="contentsBefore.head != null" >
            <span class="titleHead" v-if="contentsBefore.head == '01'">[ 공지사항 ]</span>
            <span class="titleHead" v-if="contentsBefore.head == '02'">[ 업데이트 ]</span>
            <span class="titleHead" v-if="contentsBefore.head == '03'">[ 이벤트 ]</span>
            <span class="titleHead" v-if="contentsBefore.head == '04'">[ 기타 ]</span>
            {{contentsBefore.title}}</span>
          <span v-else>이전 글이 없습니다.</span>
					<span class="prevDate" v-if="contentsBefore.createDt != null">{{contentsBefore.createDt}}</span>
				</p>
			</div>
			<div class="btnBox">
				<button @click="GoNoticeList()">목록으로</button>
			</div>
			<video src=""></video>

		</div>

	</div>
</template>

<script>
  import axios          from "axios";

	export default {
		data() {
			return {
          contentsData: ''
        , contentsBefore: ''
        , contentsAfter: ''
				, editorConfig: { 
							toolbarGroups: [] 
						, height: '331px' 
						, width: '1358px'
						, language: 'ko'
						, toolbarStartupExpanded: false
						, resize_enabled: false 
						, autoParagraph: false 
						, removeButtons: 'Source,Save,NewPage,ExportPdf,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,CopyFormatting,RemoveFormat,CreateDiv,Language,BidiRtl,BidiLtr,Anchor,Image,Smiley,SpecialChar,PageBreak,Iframe,Maximize,About,ShowBlocks,Styles,Format'
						, readOnly: true
						, removePlugins: 'toolbar'
						, allowedContent: true

						// , stylesSet: [ 
						// 	/* Inline Styles */ 
						// 	{ name: 'Marker', element: 'span', attributes: { 'class': 'marker' } }, 
						// 	{ name: 'Cited Work', element: 'cite' }, 
						// 	{ name: 'Inline Quotation', element: 'q' }, 
					
						// 	/* Object Styles */ 
						// 	{ 
						// 		name: 'Special Container', 
						// 		element: 'div', 
						// 		styles: { 
						// 			padding: '5px 10px', 
						// 			background: '#eee', 
						// 			border: '1px solid #ccc' 
						// 		} 
						// 	}, 
						// 	{ 
						// 		name: 'Compact table', 
						// 		element: 'table', 
						// 		attributes: { 
						// 			cellpadding: '5', 
						// 			cellspacing: '0', 
						// 			border: '1', 
						// 			bordercolor: '#ccc' 
						// 		}, 
						// 		styles: { 
						// 			'border-collapse': 'collapse' 
						// 		} 
						// 	}, 
						// 	{ name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } }, 
						// 	{ name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } } 
						// ] 
        } 
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
						, groupTp : '00'
						, useTp   : 'R'
						, dataOnly: 'N'
          }
        })
        .then(response => {
          this.contentsData     = response.data[0][0];

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
			// 공지사항 리스트로 돌아가기
			//******************************************************************************
			GoNoticeList() {
				this.$router.push({ name : 'MENU_08701' })
			},
			//******************************************************************************
			// 공지사항 현재글 수정
			//******************************************************************************
			ModifyNotice(bodySeqNo) {
				this.$router.push({ 
					name : 'MENU_08701_4', 
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
						, groupTp  : '00'
          }
        })
        .then(response => {
          if(response.data == true) {
            this.$router.push({ 
              name : 'MENU_08701'
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
			this.$store.state.headerMidTitle = "공지사항";
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
	#menu08701_2 .noticeView {
		overflow: hidden;
		height: 380px;
	}
	#menu08701_2 .noticeView h3 {
		padding: 16px 0 16px 20px;
		border-bottom: 1px solid #939393;
		color: #222;
	}
	#menu08701_2 .noticeView p {
		padding-top: 20px;;
		margin-top: -19px;
		margin-left: -20px;
	}
	#menu08701_2 .noticeView h3 p{
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
	#menu08701_2 .noticeView .textBox {
		margin-left: -1px ;
		line-height: 20px;
		color: #444;
		overflow: hidden;
	}
	#menu08701_2>.noticeView>.textBox>div {
		margin-top: -10px;
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