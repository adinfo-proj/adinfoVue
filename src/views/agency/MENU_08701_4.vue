<template>
	<div class="container">
		<div id="menu08701_3">
			<div class="tableBox noticeTop">
				<h1>공지사항</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<h2>
					제목
					<select v-model="contentsData.head">
            <option value="01">공지사항</option>
						<option value="02">업데이트</option>
						<option value="03">이벤트  </option>
            <option value="04">기타    </option>
					</select>
					<input type="text" v-model="contentsData.title">
				</h2>
				<div class="textBox">
					<ckeditor v-model="contentsData.contents" :config="editorConfig"></ckeditor>
				</div>
			</div>
			<div class="btnBox">
        <button @click="UpDateNotify(contentsData.bodySeqNo);">변경하기</button>
        <button class="canBtn" @click="CancleNoticeList()">취소하기</button>
			</div>
		</div>
	</div>
</template>

<script>
  import axios          from "axios";

	export default {
		data() {
			return {
          title: ''
				, preface: '01'
				, editorConfig: { 
           toolbarGroups: [ 
            { name: 'styles', groups: [ 'styles' ] }, 
            { name: 'colors', groups: [ 'colors' ] }, 
            { name: 'document', groups: [ 'mode', 'document', 'doctools' ] }, 
            { name: 'clipboard', groups: [ 'clipboard', 'undo' ] }, 
            { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] }, 
            { name: 'forms', groups: [ 'forms' ] }, 
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] }, 
            { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] }, 
            { name: 'links', groups: [ 'links' ] }, 
            { name: 'insert', groups: [ 'insert' ] }, 
            { name: 'others', groups: [ 'others' ] }, 
            { name: 'about', groups: [ 'about' ] }, 
            { name: 'tools', groups: [ 'tools' ] } 
            ] 
          , height: '590px' 
          , language: 'ko' 
          , resize_enabled: false 
          , autoParagraph: false 
          , allowedContent: true 
          , removeButtons: 'Source,Save,NewPage,ExportPdf,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Replace,Find,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Subscript,Superscript,CopyFormatting,RemoveFormat,CreateDiv,Language,BidiRtl,BidiLtr,Anchor,Image,Smiley,SpecialChar,PageBreak,Iframe,Maximize,About,ShowBlocks,Styles,Format' 
        } 
        , editorData : ''
				, contentsData : ''
			}
		},
		methods: {
			//******************************************************************************
			// 선택된 데이터 불러오기
			//******************************************************************************
			getModifyContents(seqNo) {
				axios.get("http://api.adinfo.co.kr:30000/notice/contents",
				{
					params: {
							seqNo: seqNo
						, groupTp : '00'
						, useTp   : 'R'
						, dataOnly: 'Y'
					}
				})
        .then(response => {
          this.contentsData = response.data[0][0];
        })
        .catch(error => {
          console.log(error);
        })
			},
			//******************************************************************************
			// 공지사항 변경
			//******************************************************************************
			UpDateNotify(seqNo) {
        axios.get("http://api.adinfo.co.kr:30000/notice/update",
        {
          params: {
              seqNo     : seqNo
            , clntId    : this.$store.state.clntId
            , useTp     : 'R'						
						, groupTp   : '00'
            , head      : this.contentsData.head
            , title     : this.contentsData.title
            , contents  : this.contentsData.contents
          }
        })
        .then(response => {
          if(response.data > 0) {
            alert("정상적으로 공지사항이 변경되었습니다.");
            this.$router.push({ 
              name : 'MENU_08701_2', 
              params: { index: response.data }
            })
            return;
          }
          else {
            alert("공지사항이 변경이 되지 않았습니다.\n\n관리자에게 문의 바랍니다.");
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
			//******************************************************************************
			// 공지사항 리스트로 돌아가기
			//******************************************************************************
			CancleNoticeList() {
				this.$router.push({ name : 'MENU_08701' })
			}
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "공지사항  >  공지사항 작성";

			this.getModifyContents(this.$route.params.seqNo)
		}
	}
</script>

<style scoped>
	#menu08701_3 .tableBox {
		background: #fff;
	}
	#menu08701_3 .noticeTop {
		padding: 21px;
	}
	#menu08701_3 .noticeTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}
	#menu08701_3 .noticeTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}
	#menu08701_3 .tableBox h2 {
		padding: 8px 11px 9px 21px;
		border-bottom: 1px solid #e5e5e5;
	}
	#menu08701_3 .tableBox h2 select {
		padding: 5px;
		border: 1px solid #e5e5e5;
		margin-left: 21px;
		width: 155px;
	}
	#menu08701_3 .tableBox h2 input {
		margin-left: 5px;
		width: 1117px;
		border-radius: 0;
	}
	#menu08701_3 .tableBox .textBox {
		padding: 8px 11px;
	}
	#menu08701_3 .tableBox .textBox textarea {
		width: 100%;
		height: 487px;
		resize: none;
		border: 1px solid #e5e5e5;
		color: #666;
		padding: 10px;
	}
	#menu08701_3 .btnBox{
		padding: 20px 0;
		text-align: center;
	}
	#menu08701_3 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 30px;
		background: #e25b45;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
	}
	#menu08701_3 .btnBox button.canBtn {
		margin-left: 20px;
		background: #868686;
	}
</style>