// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Hotel IPTV',
		category: 'Back-end API Server',
		img: require('@/assets/images/holidayinn2.jpg'),
		href: 'http://localhost:8080/projects/single-project',
	},
	{
		id: 2,
		title: 'Hotel IPTV',
		category: 'Back-end API Server',
		img: require('@/assets/images/santagrand.jpeg'),
		href: 'http://localhost:8080/projects/single-project',
	},
	{
		id: 3,
		title: 'Hotel IPTV (Proposal)',
		category: 'Back-end API Server',
		img: require('@/assets/images/solaire2.jpg'),
		href: 'http://localhost:8080/projects/single-project',
	},
	{
		id: 4,
		title: 'Hotel Digital Signage (Proposal)',
		category: 'Back-end API Server',
		img: require('@/assets/images/mella2.jpg'),
		href: 'http://localhost:8080/projects/single-project',
	},
	{
		id: 5,
		title: 'Music Social Media Network API',
		category: 'Back-end API GIT',
		img: require('@/assets/images/msn.jpg'),
		href: 'https://github.com/markgilbertarevalo/music-social-media-network-api.git',
	},
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },,
];

export default projects;
