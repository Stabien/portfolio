<script>
	import Button from '$lib/components/Base/Button.svelte';
	import Section from '$lib/components/Base/Section.svelte';
</script>

<Section style="h-[52rem]">
	<div
		class="flex flex-col-reverse text-center lg:text-left lg:flex-row justify-between px-2 sm:w-4/5 sm:px-0 mx-auto h-[36rem] my-[10rem]"
	>
		<div class="flex-1 z-10">
			<div class="mb-0 w-fit mx-auto">
				<h1
					class="text-primary font-medium text-[1.75rem] xs:text-[2rem] sm:text-[2.25rem] leading-6 xs:leading-8 sm:leading-[3rem]"
				>
					Bastien PIEDALLU
				</h1>
				<h2 class="text-lg sm:text-2xl">Développeur Full Stack JS</h2>
				<p class="font-light max-w-[40rem] mt-4 text-sm xs:text-[1rem] sm:text-[1rem] sm:leading-7">
					Passionné par le développement web et l'écosystème JavaScript, je suis à la recherche d'un
					CDI en tant que développeur <span class="text-primary">Full Stack</span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua.
				</p>
				<div class="flex flex-row justify-center lg:justify-normal">
					<Button type="outlined" class="p-2 text-[1rem] mt-6">Me contacter</Button>
				</div>
			</div>
		</div>
		<div class="flex flex-1 relative">
			<img
				src="/src/lib/assets/images/profile-v3.png"
				alt="profile"
				class="size-[12rem] sm:size-[16rem] rounded-full mx-auto border-4 border-pink-600 z-10"
			/>
			<div
				class="size-[12rem] sm:size-[14rem] absolute left-1/2 -translate-x-1/2 bg-pink-600 blur-[4rem] rounded-full"
			></div>
		</div>
	</div>
</Section>
