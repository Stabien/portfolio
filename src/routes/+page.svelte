<script lang="ts">
	import Banner from '$lib/sections/Banner.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Experiences from '$lib/sections/Experiences.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
</script>

<main class="w-full flex flex-col">
	<Banner />
	<Skills />
	<Experiences />
	<Education />
	<Projects />
	<div
		class="w-48 h-36 sm:w-64 sm:h-48 bg-blue-600 blur-[8rem] absolute top-[60%] left-1/3 lg:top-1/4 lg:left-[10%] rounded-full"
	></div>
</main>
