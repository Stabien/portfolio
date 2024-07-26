<script>
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section bg="dark" style="flex flex-col items-center">
	<h1 class="font-bold text-4xl text-center mb-16">Expériences</h1>
	<div>
		<ExperienceList />
	</div>
</Section>
