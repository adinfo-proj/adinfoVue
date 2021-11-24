<template>
	<div>
		메인화면
	</div>
</template>

<script>
  export default {
    created() {
      this.$store.state.headerTopTitle = "DASHBOARD";
      this.$store.state.headerMidTitle = "대쉬보드";
    }
  }
</script>