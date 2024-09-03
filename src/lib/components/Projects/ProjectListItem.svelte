<script lang="ts">
	import type { Project } from '$lib/../types';

	export let data: Project;
</script>

<a
	href={data.link}
	target="_blank"
	class="flex flex-col p-4 rounded-md bg-grey duration-200 border-2 border-grey box-border w-96 min-h-[12rem]"
>
	<div class="flex flex-col h-full">
		<h1 class="text-lg font-regular text-primary">
			{data.name}
		</h1>
		<p class="text-sm mt-2 pb-4">{data.description}</p>
		<ul class="flex flex-row flex-wrap gap-2 text-xs my-auto mb-0">
			{#each data.skills as skill}
				<li class="p-1 px-2 border-2 border-primary text-primary rounded-md">
					{skill}
				</li>
			{/each}
		</ul>
	</div>
</a>
