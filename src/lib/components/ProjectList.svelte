<script lan="ts">
	import projects from '$lib/assets/data/projects.json';
	import ProjectListItem from './ProjectListItem.svelte';
</script>

<div class="flex flex-col space-y-4 max-w-[36rem] mx-auto">
	{#each projects as project}
		<ProjectListItem data={project} />
	{/each}
</div>
