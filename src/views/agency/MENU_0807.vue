<template>
	<div>
		<div class="previewBox">
			<!-- <img class="popupImageItem"
			:src="uploadImageFile"> -->

			<img class="popupImageItem" :src="uploadImageFile">
		</div>

		<div class="plusPreviewBtn">
			<div>

				<input type="file" ref="imgFiles" class="prevImg" accept="image/*" value="test"
				@change="onFileSelected()">
			</div>
			<div class="formBox" v-html="test">

			</div>

		</div>
		<div class="testBox">
			<div class="tettetete" v-html="test0303">

			</div>
			<button @click="tetetetet321321">
				버어튼
			</button>
		</div>
	</div>
</template>

<script>
    export default {
        // 
			data() {
				return {
						files: [] //업로드용 파일
					, filesPreview: []
					, uploadImageFile: ''
					, test: '' // 인풋 테스트용
					, test0303: ['','','','','','','','','','']
					}
				},
			methods: {		
				onFileSelected(){
					this.uploadImageFile =  URL.createObjectURL(this.$refs.imgFiles.files[0]);
				},

				test01(){
					let eeee = '이름 : <input type="text" name="vlaue01"><br>';
					eeee += '나이 : <input type="text" name="vlaue02"><br> ';
					let i = 3
					let v = '';
					for( i = 3 ; i < 11 ; i ++ ) {
						if(i == 10){
							v = '10';
						} else {
							v = '0'+i
						}
						
						let textTag = `vlaue ${v} :  <input type="text" name="vlaue${v}"><br> ` 
						eeee += textTag
					}
				
					
					this.test = eeee;
				},
				tetetetet321321() {
					console.log(this.test0303)
					this.test0303[2] = {1: "눈누난나", 2: "ㄱㄱㄱ", 3: "43434", 4: false}
					console.log(this.test0303)
					console.log(this.test0303[2])
					console.log(typeof(this.test0303[2]))
				}
				
			},
			created() {
				this.test01();
				this.$store.state.headerTopTitle = "캠페인 그룹 관리";
				this.$store.state.headerMidTitle = " 캠페인 그룹 관리";
			}
    }
</script>


<style scoped>
	div{
		border: 1px solid #999;
	}
	.previewBox{
		width: 800px;
		height: auto;
		margin: 20px;
		float: left;
		padding: 5px;
	}

	.previewBox img {
		width: 100%;
	}

	.plusPreviewBtn {
		margin: 20px;
		width: 20%;
		float: left;
	}

	.formBox {
		margin: 20px;
	}

	.testBox{
		clear: both;
		width: 100%;
	}

</style>