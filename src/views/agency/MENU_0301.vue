<template>
	<div>
		POSTBACK 등록 현황
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
			this.$store.state.headerMidTitle = " POSTBACK 등록 현황";
		}
	}
</script>