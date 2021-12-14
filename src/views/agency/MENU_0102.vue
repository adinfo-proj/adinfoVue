<template>
  <div>
		캠페인별 통계 12
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
			this.$store.state.headerMidTitle = "캠페인별 통계";
		}
	}
</script>