<script lang="ts">
	import type { Experience } from '../../types';

	export let data: Experience;
	export let isLast: boolean = false;
</script>

<article class="flex flex-row">
	<div class="hidden w-36 sm:flex justify-end pr-4 text-sm">
		{#if data.end}
			<div class="-mt-1 mb-2">
				<span class="w-fit h-fit p-1.5 text-sm font-medium">
					{data.start} - {data.end}
				</span>
			</div>
		{:else}
			<div class="-mt-1 mb-2">
				<span class="w-fit h-fit p-1.5 text-sm font-medium">
					Depuis {data.start}
				</span>
			</div>
		{/if}
	</div>
	<div class="pl-0.5 bg-zinc-500 relative">
		<span class="bg-white rounded-lg w-3 h-3 absolute -translate-x-1/2"></span>
	</div>
	<div class="flex flex-col ml-1 px-4 {isLast ? 'pb-0' : 'pb-8'} sm:w-[34rem]">
		<span class="text-sm -mt-2 mb-2 sm:hidden bg-primary p-1.5 rounded-xl"
			>{data.start} - {data.end ?? "Aujourd'hui"}</span
		>
		<h1 class="sm:-mt-1.5 mb-2 font-medium flex flex-col">
			<span class="font-light sm:text-primary sm:font-regular sm:text-lg">{data.job}</span>
			<span class="text-primary sm:text-white sm:font-medium">{data.company}</span>
		</h1>
		<ul class="flex flex-col space-y-1.5 list-disc ml-4">
			{#each data.description as action}
				<li class="text-[0.8125rem] sm:text-[0.875rem] font-light">{action}</li>
			{/each}
		</ul>
	</div>
</article>
