<template>
	<div class="container">
		<div id="menu08702_3">
			<div class="tableBox techTop">
				<h1>기능 개선 요청</h1>
				<p>안내, 정책변경, 업데이트등 디비마스터의 다양한 소식을 확인하실 수 있습니다.</p>
			</div>
			<div class="tableBox">
				<h2>
					제목
					<input type="text" v-model="techData.title">
				</h2>
				<div class="textBox">
					<ckeditor class="textBoxToolbar" v-model="techData.contents" :config="editorConfig"></ckeditor>
				</div>
			</div>
			<div class="btnBox">
				<button @click="UpDateTech()">등록하기</button>
				<button class="canBtn" @click="CancleTechList()">취소하기</button>
			</div>
		</div>

	</div>
</template>

<script>
	import axios          from "axios";
	// import $ from 'jquery';

	export default {
		data() {
			return {
					title: ''
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
				, techData : ''
			}
		},
		methods: {
			//******************************************************************************
			// 선택된 데이터 불러오기
			//******************************************************************************
			getTechContents(seqNo) {
				console.log(seqNo)
				axios.get("http://api.adinfo.co.kr:30000/inprove/contents",
				{
					params: {
							seqNo: seqNo
					}
				})
        .then(response => {
          this.techData     = response.data[0][0];
        })
        .catch(error => {
          console.log(error);
        })
			},

			//******************************************************************************
			// 기능개선 요청 수정
			//******************************************************************************
			UpDateTech() {
        axios.get("http://api.adinfo.co.kr:30000/inprove/update",
        {
          params: {
              clntId: this.$store.state.clntId
            , useTp: '0'
						, seqNo: this.techData.seqNo
            , title: this.techData.title
            , contents: this.techData.contents
          }
        })
        .then(response => {
          if(response.data > 0) {
            alert("기능개선 요청이 정상적으로 수정되었습니다. \n\n일주일 내로 답변 드리겠습니다.");
            this.$router.push({ 
              name : 'MENU_08703', 
            })
            return;
          }
          else {
            alert("문의사항이 등록되지 않았습니다.\n\n관리자에게 문의 바랍니다.");
          }
        })
        .catch(error => {
          console.log(error);
        })
      },
			//******************************************************************************
			// 기능개선 리스트로 돌아가기
			//******************************************************************************
			CancleTechList() {
				this.$router.push({ name : 'MENU_08703' })
			},

		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "기능 개선 요청";

			this.getTechContents(this.$route.params.seqNo)
		}
	}
</script>

<style scoped>

	#menu08702_3 .tableBox {
		background: #fff;
	}

	#menu08702_3 .techTop {
		padding: 21px;
	}

	#menu08702_3 .techTop h1{
		font-size: 14px;
		margin-bottom: 7px;
		color: #222;
		padding-left: 12px;
		position: relative;
	}

	#menu08702_3 .techTop h1::before {
		clear: both;
		content: "";
		width: 2px;
		height: 13px;
		position: absolute;
		top: 1.5px;
		left: 0;
		background: #e25b45;
	}

		#menu08702_3 .tableBox h2 {
		padding: 8px 11px 9px 21px;
		border-bottom: 1px solid #e5e5e5;
	}

	#menu08702_3 .tableBox h2 input {
		margin-left: 30px;
		width: 1268px;
		border-radius: 0;
	}

	#menu08702_3 .tableBox .textBox {
		padding: 8px 11px;
	}

	#menu08702_3 .tableBox .textBox textarea {
		width: 100%;
		height: 487px;
		resize: none;
		border: 1px solid #e5e5e5;
		color: #666;
		padding: 10px;
	}

	#menu08702_3 .btnBox{
		padding: 20px 0;
		text-align: center;
	}

	#menu08702_3 .btnBox button {
		padding: 13px 31px;
		border: none;
		border-radius: 30px;
		background: #e25b45;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
	}

	#menu08702_3 .btnBox button.canBtn {
		margin-left: 20px;
		background: #868686;
	}




</style>