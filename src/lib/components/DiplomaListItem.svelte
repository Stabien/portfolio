<script lang="ts">
	import type { Diploma } from '../../types';

	export let data: Diploma;
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
	<div class="pl-0.5 bg-zinc-400 relative">
		<span class="bg-white rounded-lg w-4 h-4 absolute -translate-x-1/2"></span>
	</div>
	<div class="flex flex-col ml-1 px-4 {isLast ? 'pb-0' : 'pb-8'} w-full sm:w-[32rem]">
		<span class="text-sm -mt-2 mb-2 sm:hidden bg-primary text-grey font-medium p-1.5 rounded-xl"
			>{data.start} - {data.end ?? "Aujourd'hui"}</span
		>
		<div class="p-4 bg-grey rounded-lg">
			<h1 class="sm:-mt-1.5 sm:text-primary sm:font-regular sm:text-lg font-medium flex flex-col">
				{data.name}
			</h1>
			<h2 class="text-primary sm:text-white sm:font-regular">{data.school}</h2>
		</div>
	</div>
</article>
