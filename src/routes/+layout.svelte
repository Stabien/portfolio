<script>
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import '../app.css';

	const routes = ['A propos', 'Compétences', 'Experiences', 'Projets', 'Contact'];
</script>

<NavBar {routes} />
<slot />
