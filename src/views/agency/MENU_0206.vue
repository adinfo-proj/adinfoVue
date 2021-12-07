<template>
	<div>
		캠페인 홍보자료 관리
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
			this.$store.state.headerMidTitle = "캠페인 홍보자료 관리";
		}
	}
</script>