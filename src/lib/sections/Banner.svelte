<script>
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<Section style="">
	<div
		class="flex flex-col-reverse text-center lg:text-left lg:flex-row justify-between w-4/5 mx-auto h-[36rem]"
	>
		<div class="flex-1 my-auto z-10">
			<div class="mb-6 w-fit mx-auto">
				<h1 class="text-primary font-bold text-[2.5rem]">Bastien PIEDALLU</h1>
				<h2 class="text-2xl">Développeur Full Stack JS</h2>
				<p class="font-light max-w-[36rem] mt-4">
					Passionné par le développement web et l'écosystème JavaScript, je suis à la recherche d'un
					CDI en tant que développeur <span class="text-primary">Full Stack</span>
				</p>
				<div class="flex flex-row space-x-4 justify-center lg:justify-normal">
					<Button type="outlined" class="p-2 text-[1rem] mt-4">Me contacter</Button>
				</div>
			</div>
		</div>
		<div class="flex flex-1 my-auto items-center relative">
			<img
				src="/src/lib/assets/images/profile-v2.png"
				alt="profile"
				class="w-[16rem] h-[16rem] rounded-full mx-auto lg:my-0 shadow-lg bg-gradient-to-r from-blue-600 to-violet-600 border-4 border-white z-10"
			/>
			<div
				class="w-[12rem] h-[12rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 blur-[6rem] rounded-full"
			></div>
		</div>
	</div>
	<div class="w-64 h-48 bg-blue-600 blur-[10rem] absolute top-1/4 left-[4rem] rounded-full"></div>
</Section>

<style>
</style>
