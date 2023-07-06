<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Tools & Technologies:',
			clients: [
				{
					id: 1,
					title: 'Ubuntu',
					//img: require('@/assets/images/brands/amazon_gray.png'),
				},
				{
					id: 2,
					title: 'Nginx',
					//img: require('@/assets/images/brands/sony_gray.png'),
				},
				{
					id: 3,
					title: 'Apache',
					//img: require('@/assets/images/brands/adidas_gray.png'),
				},
				{
					id: 4,
					title: 'Crontab',
				},
				{
					id: 5,
					title: "Daemon/Service",
				},
				{
					id: 6,
					title: 'MariaDB',
					
				},{
					id: 7,
					title: 'Javascript',
				},
				{
					id: 8,
					title: "jQuery",
				},
				{
					id: 9,
					title: 'HTML',
					
				},
				{
					id: 10,
					title: 'CSS',
				},
				{
					id: 11,
					title: "Booststrap",
				},
				{
					id: 12,
					title: 'Composer',
					
				},
				{
					id: 13,
					title: 'PHP',
				},
				{
					id: 14,
					title: "Laravel 9",
				},
				{
					id: 15,
					title: 'Code Igniter 3',
					
				},
				{
					id: 16,
					title: 'AJAX',
				},
				{
					id: 17,
					title: "REST API",
				},
				{
					id: 18,
					title: 'Postman',
					
				},
				{
					id: 19,
					title: 'Trello',
				},
				{
					id: 20,
					title: "GIT",
				},
				{
					id: 21,
					title: 'NodeJS',
				},
				{
					id: 22,
					title: 'Express',
				},
				{
					id: 23,
					title: "Axios",
				},
				{
					id: 24,
					title: 'OAuth',
					
				},
				// {
				// 	id: 4,
				// 	title: 'FILA',
				// 	img: require('@/assets/images/brands/fila_gray.png'),
				// },
				// {
				// 	id: 5,
				// 	title: 'NB',
				// 	img: require('@/assets/images/brands/nb_gray.png'),
				// },
				// {
				// 	id: 6,
				// 	title: 'SAMSUNG',
				// 	img: require('@/assets/images/brands/samsung_gray.png'),
				// },
				// {
				// 	id: 7,
				// 	title: 'CANON',
				// 	img: require('@/assets/images/brands/canon_gray.png'),
				// },
				// {
				// 	id: 7,
				// 	title: 'PUMA',
				// 	img: require('@/assets/images/brands/puma_gray.png'),
				// },
			],
		};
	},
};
</script>

<template>
	<div class="mt-5 sm:mt-10">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-1 sm:grid-cols-4 mt-5 sm:mt-5 gap-1">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
