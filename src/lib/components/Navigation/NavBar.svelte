<script lang="ts">
	export let routes: string[];
</script>

<nav class="w-1/2 max-w-[48rem] bg-black pt-4 sticky top-0">
	<ul class="flex flex-row space-x-2 p-4 justify-between text-lg font-light">
		{#each routes as route}
			<li class="cursor-pointer">{route}</li>
		{/each}
	</ul>
</nav>
