<script>
import feather from 'feather-icons';
//import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import ProjectSingleGit from './ProjectSingleGit.vue';
import projects from '../../data/projects';
import projectgit from '../../data/gitproject'

export default {
	components: { 
			ProjectSingle, ProjectSingleGit,//ProjectsFilter
		},
	data: () => {
		return {
			projects,
			projectgit,
			projectsHeading: 'Projects Portfolio',
			projectsHeading2: 'Mini Projects GIT Sample',
			selectedCategory: '',
			selectedCategoryGit: '',
			searchProject: '',
			searchProjectGit: '',
		};
	},
	computed: {
		// Get the filtered projects
		filteredProjects() {
			if (this.selectedCategory) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
		filteredProjectsGit() {
			if (this.selectedCategory) {
				return this.filterProjectsGitByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsGitBySearch();
			}
			return this.projectgit;
		},
	},
	methods: {
		// Filter projects by category
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategory);
			});
		},
		// Filter git projects by category
		filterProjectsGitByCategory() {
			return this.projectgit.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				console.log(category);
				return category.includes(this.selectedCategoryGit);
			});
		},
		// Filter projects by title search
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
		// Filter git projects by title search
		filterProjectsGitBySearch() {
			let projectgit= new RegExp(this.searchProjectGit, 'i');
			return this.projectgit.filter((el) => el.title.match(projectgit));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<!-- <div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div> -->

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
		
	</section>

	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading2 }}
			</p>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 sm:gap-10"
		>
				<ProjectSingleGit
					v-for="projectgit in filteredProjectsGit"
					:key="projectgit.id"
					:projectgit="projectgit"
				/>
		</div>
		
	</section>
</template>

<style scoped></style>
