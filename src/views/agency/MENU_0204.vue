<template>
	<div>
		자동 충전
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
			this.$store.state.headerMidTitle = "자동충전";
		}
	}
</script>