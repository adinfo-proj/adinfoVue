<template>
	<div>
		문자 발송 서비스
	</div>
</template>

<script>
	export default {
		// 
		data() {
			return {
		
			}
		},
		methods: {

		},
		created() {
			this.$store.state.headerTopTitle = "캠페인 관리";
			this.$store.state.headerMidTitle = "문자 발송 서비스";
		}
	}
</script>