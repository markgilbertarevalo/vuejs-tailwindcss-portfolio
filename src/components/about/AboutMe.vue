<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I\'m Mark Gilbert Arevalo a PHP Back-end Developer with 4years and 9months of experience in developing and maintaining web applications.',
				},
				{
					id: 2,
					bio:
						'Proficient in integrating back-end server with front-end by the use of RESTful APIs and testing it through POSTMAN.',
				},
				{
					id: 3,
					bio:
						'In addition to my love in programming technology, I am also interested in music. I was a drummer and sometimes a violinist in our church.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/Capture.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
