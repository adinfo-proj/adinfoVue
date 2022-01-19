<template>
	<div class="container">
		<div>
			<table>
				<tr>
					<th>캠페인 선택</th>
					<td>
						<select name="" id="">
							<option value="">1</option>
							<option value="">2</option>
							<option value="">3</option>
							<option value="">4</option>
							<option value="">5</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>랜딩페이지 선택</th>
					<td>
						<select name="" id="">
							<option value="">1</option>
							<option value="">2</option>
							<option value="">3</option>
							<option value="">4</option>
							<option value="">5</option>
						</select>
					</td>
				</tr>
				<tr>
					<th>발송주소(URL)</th>
					<td>
						<input type="text">
					</td>
				</tr>
				<tr>
					<th>발송 형식</th>
					<td>
						<input type="radio" name="postBack" id="goGet"><label for="goGet">GET</label>
						<input type="radio" name="postBack" id="goPost"><label for="goPost">POST</label>
					</td>
				</tr>
			</table>
		</div>
		<div>
			
		</div>

	</div>
</template>

<script>


	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		created() {
			this.$store.state.headerTopTitle = "포스트백";
			this.$store.state.headerMidTitle = "포스트백 등록";

		}
	}
</script>

<style scoped>

</style>