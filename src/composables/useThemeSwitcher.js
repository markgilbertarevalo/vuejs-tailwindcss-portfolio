import { ref } from '@vue/reactivity';

export default function useThemeSwitcher() {
	const currentTheme = ref('light');

	function toggleTheme() {
		if (currentTheme.value == 'light') {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	}

	// Light Theme Function
	function setLightTheme() {
		currentTheme.value = 'dark';

		process.isClient && localStorage.setItem('theme', 'dark');
	}

	// Dark Theme Function
	function setDarkTheme() {
		currentTheme.value = 'dark';

		process.isClient && localStorage.setItem('theme', 'dark');
	}

	return {
		toggleTheme,
	};
}
