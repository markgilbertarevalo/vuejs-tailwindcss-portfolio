<script>
import feather from 'feather-icons';
//import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		//ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Blk 15 Lot 8 Parkdale Classic I, AnabuI-A,  City of Imus, Cavite, Philippines',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'markgilbertarevalo@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '(+63)926-437-3620',
					icon: 'phone',
				},
			],
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
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<!-- Contact form -->
		<!-- <ContactForm /> -->

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>
