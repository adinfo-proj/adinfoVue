<template>
	<div>
		일자별 통계
	</div>
</template>

<script>
  export default {
    created() {
      this.$store.state.headerTopTitle = "데이터 센터";
      this.$store.state.headerMidTitle = "일자별 통계";
    }
  }
</script>