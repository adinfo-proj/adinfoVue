<template>
	<div>
		POSTBACK 데이터 조회
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
			this.$store.state.headerTopTitle = "POSTBACK 관리";
			this.$store.state.headerMidTitle = " POSTBACK 데이터 조회";
		}
	}
</script>