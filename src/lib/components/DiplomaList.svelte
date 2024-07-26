<script lan="ts">
	import diplomas from '$lib/assets/data/diplomas.json';
	import DiplomaListItem from './DiplomaListItem.svelte';
</script>

{#each diplomas as diploma, index}
	<DiplomaListItem data={diploma} isLast={index === diplomas.length - 1} />
{/each}
