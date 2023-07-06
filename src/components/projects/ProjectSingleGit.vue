<script>
export default {
	props: ['projectgit'],
};
</script>

<template>
	<a
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
		:href="projectgit.href"
	>
		<div>
			<img
				:src="projectgit.img"
				:alt="projectgit.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ projectgit.title }}
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ projectgit.category }}</span
			>
		</div>
	</a>
</template>

<style lang="scss" scoped></style>
