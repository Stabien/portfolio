<script lang="ts">
	import Loader from '$lib/components/Base/Loader.svelte';
	import NavBar from '$lib/components/Navigation/NavBar.svelte';
	import { onMount } from 'svelte';
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

	let isLoading = true;

	onMount(() => setTimeout(() => (isLoading = false), 500));
</script>

{#if isLoading}
	<Loader />
{/if}

<NavBar {routes} />

<slot />
