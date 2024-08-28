<script>
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import '../app.css';

	const routes = ['A propos', 'Compétences', 'Experiences', 'Projets', 'Contact'];
</script>

<div class="flex justify-center">
	<NavBar {routes} />
</div>

<slot />
