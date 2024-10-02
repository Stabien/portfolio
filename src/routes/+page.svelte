<script lang="ts">
	import Banner from '$lib/sections/Banner.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Experiences from '$lib/sections/Experiences.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('mounted');
	});
</script>

<main class="flex w-full flex-col">
	<Banner />
	<Skills />
	<Experiences />
	<Education />
	<Projects />
	<Contact />
</main>
