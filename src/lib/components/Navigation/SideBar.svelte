<script lang="ts">
	export let routes: string[] = [];
	export let isOpened: boolean = false;
</script>

<div
	class="absolute top-13 left-0 w-full bg-black duration-200 shadow-sm overflow-hidden lg:hidden {isOpened
		? 'h-[13rem] xs:h-[14rem]'
		: 'h-0'}"
>
	<ul class="flex flex-col p-2 pt-0 xs:text-lg space-y-2 font-light w-full h-full text-[1rem]">
		{#each routes as route}
			<li class="cursor-pointer rounded-lg duration-200 pl-2 py-1 w-64">
				<a href="#experiences" class="hover:text-primary duration-200">{route}</a>
			</li>
		{/each}
	</ul>
</div>
