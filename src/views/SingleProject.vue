<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
//import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
//import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		//ProjectGallery,
		ProjectInfo,
		//ProjectRelatedProjects,
	},
	data: () => {
		return {
			singleProjectHeader: {
				singleProjectTitle: 'IPTV & Digital Signage',
				
				singleProjectTag: 'Back-end API Server',
			},
			// projectImages: [
			// 	{
			// 		id: 1,
			// 		title: '',
			// 		img: require('@/assets/images/Meshlabs2.jpg'),
			// 	},
			// 	{
			// 		id: 2,
			// 		title: '',
			// 		img: require('@/assets/images/iSigns2.jpg'),
			// 	},
				
			// ],
			projectInfo: {
				// clientHeading: 'Company',
				// companyInfos: [
				// 	{
				// 		id: 1,
				// 		title: 'Name',
				// 		details: 'Bittel Asia Inc.',
				// 	},
				// ],
				technologies: [
					{
						title: 'Tools & Technologies I used as a Back-end Developer',
						techs: [
							'Ubuntu',
							'Crontab',
							'Daemon/Service',
							'Mariadb',
							'Nginx',
							'Composer',
							'PHP Laravel 9',
							'PHP Codeigniter 3',
							'Sanctum',
							'Intervention',
							'Spatie',
							'REST API',
							'Postman',
							'NodeJS',
							'Express',
							'AXIOS',
							'GIT',
							'Trello',
						],
					},
				],
				projectDetailsHeading: '',
				projectDetails: [
					{
						id: 1,
						details:
							'IPTV is a TV solution that enhances the guest hotel experience.',
					},
					{
						id: 2,
						details:
							'This application gives Hotel, the interactive TV system it deserves '+
							'with a Hotel IPTV solution. Old and pricey cable or satellite solutions are '+
							'a thing of the past with the rise of SmartTVs, Set-Top-Boxes and fast IPTV Networks, '+
							'so this app bring innovation for a better and affordable Hotel TV solution.',
					},
					{
						id: 3,
						details:
							'It provides, customized live TV interface that can be tailored with the hotel workflow, '+
							'an AirMedia that let the guest stream music, videos, images, etc, '+
							'an E-Concierge that let guest request amenities and concierge services, '+
							'an In-room Dining that let guest navigate menu to order food and beverages on the tv, '+
							'a Tv Messaging that let the operators and service agents to notify guests, '+
							'a Video on demand that let guest buy hotel latest HD movies, '+
							'a dashboard that let Operators view the status of orders, sales, performance, revenue issues and other items via a real-time web dashboard.'+
							'and a customizable interface allows you to create highly customisable TV interfaces to suit client preferences.',
					},
					{
						id: 4,
						details:
							'Digital Signage same with IPTV, can also be deployed to provide Digital Signage features '+
							'to the property. By using the same equipment, the hotel enjoys significant cost savings and '+
							'efficiency.',
					},
				],
				// socialSharingsHeading: 'Site',
				// socialSharings: [
				// 	{
				// 		id: 1,
				// 		name: 'Website',
				// 		icon: 'globe',
				// 		url: 'http://www.bittelasia.com/index.php/site/iptv_solutions',
				// 	},
				// ],
			},
			relatedProject: {
				// relatedProjectsHeading: 'Related Projects',
				// relatedProjects: [
				// 	{
				// 		id: 1,
				// 		title: 'Mobile UI',
				// 		img: require('@/assets/images/mobile-project-1.jpg'),
				// 	},
				// 	{
				// 		id: 2,
				// 		title: 'Web Application',
				// 		img: require('@/assets/images/web-project-1.jpg'),
				// 	},
				// 	{
				// 		id: 3,
				// 		title: 'UI Design',
				// 		img: require('@/assets/images/ui-project-2.jpg'),
				// 	},
				// 	{
				// 		id: 4,
				// 		title: 'Kabul Mobile App UI',
				// 		img: require('@/assets/images/mobile-project-2.jpg'),
				// 	},
				// ],
			},
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<!-- <ProjectGallery :projectImages="projectImages" /> -->

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="relatedProject" /> -->
	</div>
</template>

<style scoped></style>
