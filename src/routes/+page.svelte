<script lang="ts">
	import About from '$lib/sections/About.svelte';
	import Banner from '$lib/sections/Banner.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Experiences from '$lib/sections/Experiences.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Skills from '$lib/sections/Skills.svelte';
</script>

<main class="w-full flex flex-col">
	<Banner />
	<About />
	<Skills />
	<Experiences />
	<Education />
  <Projects />
</main>
