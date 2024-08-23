<script lan="ts">
	import experiences from '$lib/assets/data/experiences.json';
	import ExperienceListItem from './ExperienceListItem.svelte';
</script>

<div>
	{#each experiences as experience, index}
		<ExperienceListItem data={experience} isLast={index === experiences.length - 1} />
	{/each}
</div>
