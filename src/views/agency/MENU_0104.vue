<template>
	<div>
		마케터별 통계
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
			this.$store.state.headerTopTitle = "데이터 센터";
			this.$store.state.headerMidTitle = "마케터별 통계";
		}
	}
</script>