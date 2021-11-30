<template>
	<div>
		<h2 class="ml-6 pt-3 text-lg font-semibold">Colors</h2>
			<div class="flex flex-wrap p-4">
				<base-progress
					v-for="(color, index) in colors"
					:color="color"
					:percentage="progressStart + index * 10"
					:key="index"
					class="mx-2 mb-2"
				/>
			</div>

	</div>
</template>

<script>
import BaseProgress from "../../components/BaseProgress.vue";

export default {
  components: {
    BaseProgress
  },
  data() {
    return {
      colors: [
        "gray",
        "yellow",
        "orange",
        "red",
        "green",
        "teal",
        "blue",
        "indigo",
        "purple",
        "pink"
      ],
      progressStart: 10,
      contentProgress: 20
    };
  },
  methods: {
    increasePercentage() {
      if (this.contentProgress <= 80) {
        this.contentProgress += 20;
      }
    },
    decreasePercentage() {
      if (this.contentProgress >= 20) {
        this.contentProgress -= 20;
      }
    }
  }
}



</script>
<style>


</style>