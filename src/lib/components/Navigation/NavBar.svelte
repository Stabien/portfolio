<script lang="ts">
	import type { Route } from '../../../types';
	import SideBar from './SideBar.svelte';

	export let routes: Route[];

	let isSideBarOpened = false;

	const toggleSideBar = () => (isSideBarOpened = !isSideBarOpened);
</script>

<nav class="sticky top-0 z-40 duration-300 lg:relative">
	<div class="mx-auto hidden w-1/2 max-w-[48rem] bg-transparent lg:block">
		<ul class="flex flex-row justify-between space-x-2 p-4 text-lg font-light">
			{#each routes as route}
				<li class="cursor-pointer"><a href="#{route.id}">{route.name}</a></li>
			{/each}
		</ul>
	</div>

	<div class="flex w-full flex-row justify-between bg-black p-4 lg:hidden">
		<h1 class="text-xl text-white">Bastien PIEDALLU</h1>
		<button class="my-auto flex w-8 cursor-pointer flex-col space-y-2" on:click={toggleSideBar}>
			<div
				class="w-full border-[0.0625rem] border-white duration-300 {isSideBarOpened
					? 'translate-y-2.5 rotate-45'
					: ''}"
			></div>
			<div
				class="w-full border-[0.0625rem] duration-300 {isSideBarOpened ? 'border-black' : ''}"
			></div>
			<div
				class="w-full border-[0.0625rem] border-white duration-300 {isSideBarOpened
					? '-translate-y-2.5 -rotate-45'
					: ''}"
			></div>
		</button>
	</div>
	<SideBar {routes} isOpened={isSideBarOpened} {toggleSideBar} />
</nav>
