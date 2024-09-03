<script lang="ts">
	import Button from '$lib/components/Base/Button.svelte';
	import Section from '$lib/components/Base/Section.svelte';
	import profilePicture from '$lib/assets/images/profile-v3.png';
</script>

<Section style="h-[52rem]">
	<div
		class="flex flex-col-reverse text-center lg:text-left lg:flex-row justify-between px-2 xs:w-4/5 sm:px-0 mx-auto h-[36rem] lg:my-[10rem]"
	>
		<div class="flex-1 z-10 relative">
			<div class="relative mb-0 w-fit mx-auto z-10">
				<h1
					class="text-primary font-medium text-[1.75rem] xs:text-[2rem] sm:text-[2.25rem] leading-6 xs:leading-8 sm:leading-[3rem]"
				>
					Bastien PIEDALLU
				</h1>
				<h2 class="text-lg sm:text-2xl">Développeur Full Stack JS</h2>
				<p class="font-light max-w-[36rem] mt-4 text-sm xs:text-[1rem] sm:text-[1rem] sm:leading-7">
					Passionné par le développement web et l'écosystème JavaScript, j'occupe actuellement le
					poste de développeur <span class="text-primary font-medium">React.js</span> chez
					Particeep.
					<br />
					Avec plus de 3 ans d'expériences en entreprise en tant que développeur
					<span class="text-primary font-medium">front-end</span>
					et <span class="text-primary font-medium">full stack</span>, j'ai eu l'opportunité
					d'acquérir une expertise solide et diversifiée en développement web
				</p>
				<div class="flex flex-row justify-center lg:justify-between mt-6">
					<Button type="outlined" class="p-2 text-[1rem]"
						><a href="#contact">Me contacter</a></Button
					>
				</div>
			</div>
			<div
				class="w-[14rem] h-[10rem] sm:w-64 sm:h-48 bg-blue-600 blur-[8rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-1/4 lg:left-[20%] rounded-full"
			></div>
		</div>
		<div class="flex lg:flex-1 relative mb-8">
			<img
				src={profilePicture}
				alt="profile"
				class="size-[12rem] sm:size-[16rem] rounded-full mx-auto border-4 border-pink-600 z-10"
			/>
			<div
				class="size-[12rem] sm:size-[14rem] absolute left-1/2 -translate-x-1/2 bg-pink-600 blur-[4rem] rounded-full"
			></div>
		</div>
	</div>
</Section>
