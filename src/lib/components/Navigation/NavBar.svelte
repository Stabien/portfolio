<script lang="ts">
	import type { Route } from '../../../types';
	import SideBar from './SideBar.svelte';

	export let routes: Route[];

	let isSideBarOpened = false;

	const toggleSideBar = () => (isSideBarOpened = !isSideBarOpened);
</script>

<nav class="sticky top-0 lg:relative z-50 duration-300">
	<div class="hidden lg:block mx-auto w-1/2 max-w-[48rem] bg-transparent">
		<ul class="flex flex-row space-x-2 p-4 justify-between text-lg font-light">
			{#each routes as route}
				<li class="cursor-pointer"><a href="#{route.id}">{route.name}</a></li>
			{/each}
		</ul>
	</div>

	<div class="lg:hidden w-full p-4 bg-black flex flex-row justify-between">
		<h1 class="text-xl text-white">Bastien PIEDALLU</h1>
		<button class="w-8 flex flex-col space-y-2 cursor-pointer my-auto" on:click={toggleSideBar}>
			<div
				class="border-[0.0625rem] border-white w-full duration-300 {isSideBarOpened
					? 'rotate-45 translate-y-2.5'
					: ''}"
			></div>
			<div
				class="border-[0.0625rem] w-full duration-300 {isSideBarOpened ? 'border-black' : ''}"
			></div>
			<div
				class="border-[0.0625rem] border-white w-full duration-300 {isSideBarOpened
					? '-translate-y-2.5 -rotate-45'
					: ''}"
			></div>
		</button>
	</div>
	<SideBar {routes} isOpened={isSideBarOpened} {toggleSideBar} />
</nav>
