<script lang="ts">
	import Banner from '$lib/sections/Banner.svelte';
	import Contact from '$lib/sections/Contact.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Experiences from '$lib/sections/Experiences.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
</script>

<main class="w-full flex flex-col" on:scroll={(e) => console.log(e)}>
	<Banner />
	<Skills />
	<Experiences />
	<Education />
	<Projects />
	<Contact />
</main>
