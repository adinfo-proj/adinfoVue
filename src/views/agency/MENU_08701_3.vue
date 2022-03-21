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
					<select v-model="preface">
            <option value="01">공지사항</option>
						<option value="02">업데이트</option>
						<option value="03">이벤트  </option>
            <option value="04">기타    </option>
					</select>
					<input type="text" v-model="title">
				</h2>
				<div class="textBox">
					<!-- <ckeditor v-model="editorData" :config="editorConfig"></ckeditor> -->
					<textarea name="ir1" id="ir1" rows="10" cols="100" ref="ir1" v-bind="editorData"></textarea>
				</div>
			</div>
			<div class="btnBox">
        <button @click="CreateNotify();">등록하기</button>
        <button class="canBtn" @click="CancleNoticeList()">취소하기</button>
			</div>
		</div>
	</div>
</template>

<script>
	import $ 							from "jquery";
  import axios          from "axios";

	export default {
		data() {
			return {
          title: ''
				, preface: '01'
        , editorData : []

			}
		},
		methods: {
			//******************************************************************************
			// 공지사항 등록
			//******************************************************************************
			CreateNotify() {

				this.editorData.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);

				let text = $("#ir1").val();

        let data = {
						clntId		: this.$store.state.clntId
					, groupTp   : '00'
					, head      : this.preface
					, title     : this.title
					, contents  : text
        };

				const frm = new FormData();
				frm.append("dataObj", new Blob([JSON.stringify(data)] , {type: "application/json"}));

        axios.post("http://api.adinfo.co.kr:30000/notice/create", frm, {
          headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          if(response.data > 0) {
            alert("정상적으로 공지사항이 등록되었습니다.");
            this.$router.push({
              name : 'MENU_08701',
              params: { index: response.data }
            })
            return;
          }
          else {
            alert("공지사항이 등록되지 않았습니다.\n\n관리자에게 문의 바랍니다.");
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
		mounted() {
			window.nhn.husky.EZCreator.createInIFrame({
				oAppRef: this.editorData,
				elPlaceHolder: "ir1",
				sSkinURI: "/smarteditor2/SmartEditor2Skin.html",
				fCreator: "createSEditor2"
			});
		},
		created() {
			this.$store.state.headerTopTitle = "고객센터";
			this.$store.state.headerMidTitle = "공지사항  >  공지사항 작성";
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
		width: 99%;
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