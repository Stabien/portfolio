<script lang="ts">
	export let routes: string[];
</script>

<nav class="w-full bg-grey">
	<ul class="flex flex-row space-x-2 p-4 justify-center">
		{#each routes as route}
			<li>{route}</li>
		{/each}
	</ul>
</nav>
