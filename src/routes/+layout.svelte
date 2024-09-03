<script lang="ts">
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import '../app.css';
	import type { Route } from '../types';

	const routes: Route[] = [
		{
			name: 'Compétences',
			id: 'skills'
		},
		{
			name: 'Expériences',
			id: 'experiences'
		},
		{
			name: 'Formation',
			id: 'education'
		},
		{
			name: 'Projets',
			id: 'projects'
		},
		{
			name: 'Contact',
			id: 'contact'
		}
	];
</script>

<NavBar {routes} />
<slot />
