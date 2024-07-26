<script>
	import DiplomaList from '$lib/components/DiplomaList.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section bg="dark" style="flex flex-col sm:items-center">
	<h1 class="font-bold text-4xl text-center mb-16">Formations</h1>
	<div>
		<DiplomaList />
	</div>
</Section>
