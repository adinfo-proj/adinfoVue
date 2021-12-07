<template>
	<div>
		캠페인 변경 내역
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
			this.$store.state.headerMidTitle = "캠페인 변경 내역";
		}
	}
</script>